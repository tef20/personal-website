---
title: "Encapsulation and Memoization"
description: "Encapsulating your way out of React re-renders"
pubDate: "Oct 3 2023"
image:
  src: "/encapsulation.webp"
  alt: "Cartoon of vending machine as metaphor for encapsulation"
tags: []
---

"Encapsulation" is a key concept in React that can help you minimize re-renders without relying on memoization!

### Use Case 1: Lowering State

Imagine you've identified a component in your React application that's running lots of heavy re-renders! Every time its state changes, it re-renders all of its children, and one of those children takes 500ms to render - <em>very greedy</em>!

```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <GreedyChild />
    </>
  );
}
```

In this example, `input` is the only element in the `Parent` component that relies on the text state, so it might make sense to memoize `GreedyChild` and prevent it from re-rendering unnecessarily...

```jsx
const MemoizedGreedyChild = memo(GreedyChild);
```

Problem solved? Kind of, but memoization is totally unnecessary if we can encapsulate `input` in its own component:

```jsx
<>
  {/* 👇 state changes in here do not effect siblings */}
  <EncapsulatedInput />
  {/* 👇 so no need to reach for memo here */}
  <GreedyChild />
</>
```

<br>

### Use Case 2: Raising Content

That was kind of kind of easy, but what if `GreedyChild` was nested under an element that <em>did</em> depend on this state?

```jsx
<>
  {/* text cannot be lowered here.. */}
  <input value={text} onChange={(e) => setText(e.target.value)} />
  {/* ...since className relies on it here */}
  <div className={text}>
    <GreedyChild />
  </div>
</>
```

Surely we need `memo`, now?

Again, encapsulation to the rescue! We can encapsulate the updating `className` logic inside its own container:

```jsx
function StatefulContainer({ children }) {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div className={text}>{children}</div>
    </>
  );
}
```

...and append `GreedyChild` via the `children` props:

```jsx
<>
  <StatefulContainer>
    <GreedyChild />
  </StatefulContainer>
</>
```

Now `GreedyChild` is isolated from re-renders that occur inside `StatefulContainer`!

<hr>

This is a riff on a classic short blog post by Dan Abramov - give it a read [here](https://overreacted.io/before-you-memo/)!

For an excellent deep dive into React re-rendering, checkout Nadia Makarevich's awesome blog [here](https://www.developerway.com/posts/react-re-renders-guide).

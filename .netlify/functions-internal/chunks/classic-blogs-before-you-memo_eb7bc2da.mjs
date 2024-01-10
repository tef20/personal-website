const id = "classic-blogs-before-you-memo.md";
						const collection = "blog";
						const slug = "classic-blogs-before-you-memo";
						const body = "\n\"Encapsulation\" is a key concept in React that can help you minimize re-renders without relying on memoization!\n\n### Use Case 1: Lowering State\n\nImagine you've identified a component in your React application that's running lots of heavy re-renders! Every time its state changes, it re-renders all of its children, and one of those children takes 500ms to render - <em>very greedy</em>!\n\n```jsx\nfunction Parent() {\n  const [text, setText] = useState(\"\");\n\n  return (\n    <>\n      <input value={text} onChange={(e) => setText(e.target.value)} />\n      <GreedyChild />\n    </>\n  );\n}\n```\n\nIn this example, `input` is the only element in the `Parent` component that relies on the text state, so it might make sense to memoize `GreedyChild` and prevent it from re-rendering unnecessarily...\n\n```jsx\nconst MemoizedGreedyChild = memo(GreedyChild);\n```\n\nProblem solved? Kind of, but memoization is totally unnecessary if we can encapsulate `input` in its own component:\n\n```jsx\n<>\n  {/* 👇 state changes in here do not effect siblings */}\n  <EncapsulatedInput />\n  {/* 👇 so no need to reach for memo here */}\n  <GreedyChild />\n</>\n```\n\n<br>\n\n### Use Case 2: Raising Content\n\nThat was kind of kind of easy, but what if `GreedyChild` was nested under an element that <em>did</em> depend on this state?\n\n```jsx\n<>\n  {/* text cannot be lowered here.. */}\n  <input value={text} onChange={(e) => setText(e.target.value)} />\n  {/* ...since className relies on it here */}\n  <div className={text}>\n    <GreedyChild />\n  </div>\n</>\n```\n\nSurely we need `memo`, now?\n\nAgain, encapsulation to the rescue! We can encapsulate the updating `className` logic inside its own container:\n\n```jsx\nfunction StatefulContainer({ children }) {\n  const [text, setText] = useState(\"\");\n\n  return (\n    <>\n      <input value={text} onChange={(e) => setText(e.target.value)} />\n      <div className={text}>{children}</div>\n    </>\n  );\n}\n```\n\n...and append `GreedyChild` via the `children` props:\n\n```jsx\n<>\n  <StatefulContainer>\n    <GreedyChild />\n  </StatefulContainer>\n</>\n```\n\nNow `GreedyChild` is isolated from re-renders that occur inside `StatefulContainer`!\n\n<hr>\n\nThis is a riff on a classic short blog post by Dan Abramov - give it a read [here](https://overreacted.io/before-you-memo/)!\n\nFor an excellent deep dive into React re-rendering, checkout Nadia Makarevich's awesome blog [here](https://www.developerway.com/posts/react-re-renders-guide).\n";
						const data = {title:"Encapsulation and Memoization",description:"Encapsulating your way out of React re-renders",pubDate:new Date(1696316400000),cover:{image:
						new Proxy({"src":"/_astro/encapsulation.bcc615b0.webp","width":700,"height":700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,alt:"Cartoon of vending machine as metaphor for encapsulation"},tags:[]};
						const _internal = {
							type: 'content',
							filePath: "/home/chris/Documents/projects/personal-website/src/content/blog/classic-blogs-before-you-memo.md",
							rawData: "\ntitle: \"Encapsulation and Memoization\"\ndescription: \"Encapsulating your way out of React re-renders\"\npubDate: \"Oct 3 2023\"\ncover:\n  image: \"../../assets/encapsulation.webp\"\n  alt: \"Cartoon of vending machine as metaphor for encapsulation\"\ntags: []",
						};

export { _internal, body, collection, data, id, slug };

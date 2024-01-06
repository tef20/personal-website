import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, p as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, n as renderSlot, q as renderTransition, l as renderComponent, o as renderHead } from '../astro_2c8dc02d.mjs';
import 'clsx';
import { $ as $$BaseHead } from './__94838d0a.mjs';
/* empty css                           */import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_3efd373f.mjs';
/* empty css                                 */
const $$Astro$5 = createAstro("https://example.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/chris/Documents/projects/personal-website/node_modules/astro/components/Image.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/home/chris/Documents/projects/personal-website/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///home/chris/Documents/projects/personal-website/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$3 = createAstro("https://example.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/chris/Documents/projects/personal-website/node_modules/astro/components/ViewTransitions.astro", void 0);

const dp = {"src":"/_astro/display-pic-med.a24e4b25.png","width":312,"height":468,"format":"png"};

const $$Astro$2 = createAstro("https://example.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-mbqdmgin>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/chris/Documents/projects/personal-website/src/components/Link.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$InfoCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfoCard;
  return renderTemplate`${maybeRenderHead()}<section class="info-card" data-astro-cid-jk4h5f6k${addAttribute(renderTransition($$result, "picrkqzl", "", "info-card"), "data-astro-transition-scope")}><div class="info flow text-centered" data-astro-cid-jk4h5f6k><h1 data-astro-cid-jk4h5f6k><span class="h1-before rock-animate" data-astro-cid-jk4h5f6k>Hi, I'm</span>Chris Telford
</h1><div class="h2-wrapper" data-astro-cid-jk4h5f6k><h2 data-astro-cid-jk4h5f6k>‹‹ React • Next • TypeScript • CSS • Python ››</h2></div><p data-astro-cid-jk4h5f6k>I'm a web developer based in Vancouver, Canada</p><nav class="links" data-astro-cid-jk4h5f6k>${renderComponent($$result, "Link", $$Link, { "href": "./projects", "data-astro-cid-jk4h5f6k": true }, { "default": ($$result2) => renderTemplate`Projects` })}${renderComponent($$result, "Link", $$Link, { "href": "./blog", "data-astro-cid-jk4h5f6k": true }, { "default": ($$result2) => renderTemplate`Blog` })}</nav></div>${renderComponent($$result, "Image", $$Image, { "id": "display-pic", "class": "display-pic", "src": dp, "alt": "Display Picture", "format": "webp", "data-astro-cid-jk4h5f6k": true })}</section>`;
}, "/home/chris/Documents/projects/personal-website/src/components/InfoCard.astro", "self");

const $$Astro = createAstro("https://example.com");
const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";
const $$ExampleBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExampleBlog;
  return renderTemplate`<html lang="en" data-astro-cid-g3eru2a4><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-g3eru2a4": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-g3eru2a4": true })}${renderHead()}</head><body data-astro-cid-g3eru2a4><!-- <Header title={SITE_TITLE} /> --><aside data-astro-cid-g3eru2a4>${renderComponent($$result, "InfoCard", $$InfoCard, { "data-astro-cid-g3eru2a4": true })}</aside><main data-astro-cid-g3eru2a4>${renderComponent($$result, "Link", $$Link, { "href": "/", "data-astro-cid-g3eru2a4": true }, { "default": ($$result2) => renderTemplate`<svg aria-hidden="true" focusable="false" width="17" height="17" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g3eru2a4><path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000" data-astro-cid-g3eru2a4></path></svg>` })}<h1 data-astro-cid-g3eru2a4>Blog Article</h1><article data-astro-cid-g3eru2a4><p data-astro-cid-g3eru2a4>
"Encapsulation" is a key concept in React that can help you minimize
          re-renders without relying on memoization! ### Use Case 1: Lowering
          State Imagine you've identified a component in your React application
          that's running lots of heavy re-renders! Every time its state changes,
          it re-renders all of its children, and one of those children takes
          500ms to render - <em data-astro-cid-g3eru2a4>very greedy</em>! In this example, \`input\` is
          the only element in the \`Parent\` component that relies on the text
          state, so it might make sense to memoize \`GreedyChild\` and prevent it
          from re-rendering unnecessarily... \`\`\`jsx const MemoizedGreedyChild =
          memo(GreedyChild); \`\`\` Problem solved? Kind of, but memoization is
          totally unnecessary if we can encapsulate \`input\` in its own
          component:
</p><p data-astro-cid-g3eru2a4>
"Encapsulation" is a key concept in React that can help you minimize
          re-renders without relying on memoization! ### Use Case 1: Lowering
          State Imagine you've identified a component in your React application
          that's running lots of heavy re-renders! Every time its state changes,
          it re-renders all of its children, and one of those children takes
          500ms to render - <em data-astro-cid-g3eru2a4>very greedy</em>! In this example, \`input\` is
          the only element in the \`Parent\` component that relies on the text
          state, so it might make sense to memoize \`GreedyChild\` and prevent it
          from re-rendering unnecessarily... \`\`\`jsx const MemoizedGreedyChild =
          memo(GreedyChild); \`\`\` Problem solved? Kind of, but memoization is
          totally unnecessary if we can encapsulate \`input\` in its own
          component:
</p><p data-astro-cid-g3eru2a4>
"Encapsulation" is a key concept in React that can help you minimize
          re-renders without relying on memoization! ### Use Case 1: Lowering
          State Imagine you've identified a component in your React application
          that's running lots of heavy re-renders! Every time its state changes,
          it re-renders all of its children, and one of those children takes
          500ms to render - <em data-astro-cid-g3eru2a4>very greedy</em>! In this example, \`input\` is
          the only element in the \`Parent\` component that relies on the text
          state, so it might make sense to memoize \`GreedyChild\` and prevent it
          from re-rendering unnecessarily... \`\`\`jsx const MemoizedGreedyChild =
          memo(GreedyChild); \`\`\` Problem solved? Kind of, but memoization is
          totally unnecessary if we can encapsulate \`input\` in its own
          component:
</p></article></main></body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/exampleBlog.astro", void 0);

const $$file = "/home/chris/Documents/projects/personal-website/src/pages/exampleBlog.astro";
const $$url = "/exampleBlog";

const exampleBlog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  SITE_DESCRIPTION,
  SITE_TITLE,
  default: $$ExampleBlog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, $$InfoCard as a, $$Image as b, exampleBlog as e, imageConfig as i };

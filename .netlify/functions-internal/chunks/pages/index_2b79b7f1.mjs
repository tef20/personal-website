import { e as createAstro, f as createComponent, r as renderTemplate, l as renderComponent, o as renderHead, g as addAttribute, q as renderTransition, m as maybeRenderHead } from '../astro_2c8dc02d.mjs';
import { $ as $$BaseHead, g as getCollection } from './__94838d0a.mjs';
import { $ as $$ViewTransitions, a as $$InfoCard, b as $$Image } from './exampleBlog_bac603ea.mjs';
/* empty css                           */import 'clsx';
/* empty css                           */
const $$Astro$3 = createAstro("https://example.com");
const SITE_TITLE$2 = "Astro Blog";
const SITE_DESCRIPTION$2 = "Welcome to my website!";
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$2, "description": SITE_DESCRIPTION$2 })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><main class="flow"${addAttribute(renderTransition($$result, "czv44z6q", "", "main"), "data-astro-transition-scope")}>${renderComponent($$result, "InfoCard", $$InfoCard, {})}</main></body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/index.astro", "self");

const $$file$2 = "/home/chris/Documents/projects/personal-website/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  SITE_DESCRIPTION: SITE_DESCRIPTION$2,
  SITE_TITLE: SITE_TITLE$2,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const placeholderImg = {"src":"/_astro/placeholder-img.54777603.png","width":259,"height":194,"format":"png"};

const $$Astro$2 = createAstro("https://example.com");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { href, title, text, projectImg, imgAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="smol-card-component" data-astro-cid-hitlpqrj><a${addAttribute(href, "href")} data-astro-cid-hitlpqrj>${projectImg ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "img", "src": projectImg, "alt": imgAlt, "data-astro-cid-hitlpqrj": true })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "img", "src": placeholderImg, "alt": imgAlt, "data-astro-cid-hitlpqrj": true })}`}<div class="text" data-astro-cid-hitlpqrj><h1 data-astro-cid-hitlpqrj>${title}</h1><p data-astro-cid-hitlpqrj>${text}</p></div></a></li>`;
}, "/home/chris/Documents/projects/personal-website/src/components/ListItem.astro", void 0);

const redEggLogo = {"src":"/_astro/red_egg_logo.7e75a872.webp","width":256,"height":256,"format":"png"};

const $$Astro$1 = createAstro("https://example.com");
const SITE_TITLE$1 = "Acrylic Web Designs";
const SITE_DESCRIPTION$1 = "Welcome to my website!";
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$1, "description": SITE_DESCRIPTION$1 })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><!-- <Header title={SITE_TITLE} /> --><aside>${renderComponent($$result, "InfoCard", $$InfoCard, {})}</aside><main><h1>Recent projects</h1><ul>${Array(4).fill(
    renderTemplate`${renderComponent($$result, "ListItem", $$ListItem, { "href": "https://red-egg-edu-reader.vercel.app/", "projectImg": redEggLogo, "title": "Interactive Reader Red Egg Edutainment", "imgAlt": "RedEgg Educatainment logo - a red, cartoon egg with a face", "text": "Interactive children's book using AI generated speach to text, syncronized text highlighting, and automated data pipeline" })}`
  )}</ul></main></body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/projects/index.astro", void 0);

const $$file$1 = "/home/chris/Documents/projects/personal-website/src/pages/projects/index.astro";
const $$url$1 = "/projects";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  SITE_DESCRIPTION: SITE_DESCRIPTION$1,
  SITE_TITLE: SITE_TITLE$1,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><!-- <Header title={SITE_TITLE} /> --><aside>${renderComponent($$result, "InfoCard", $$InfoCard, {})}</aside><main><h1>Recent projects</h1><ul>${posts.map((post) => renderTemplate`${renderComponent($$result, "ListItem", $$ListItem, { "href": `/blog/${post.slug}`, "projectImg": redEggLogo, "title": post.data.title, "imgAlt": "RedEgg Educatainment logo - a red, cartoon egg with a face", "text": post.data.description })}`)}</ul></main></body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/blog/index.astro", void 0);

const $$file = "/home/chris/Documents/projects/personal-website/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index$1 as b, index as c, index$2 as i };

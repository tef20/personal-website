import { e as createAstro, f as createComponent, r as renderTemplate, l as renderComponent, o as renderHead, g as addAttribute, q as renderTransition, m as maybeRenderHead } from '../astro_2c8dc02d.mjs';
import { $ as $$BaseHead, g as getCollection, a as $$FormattedDate, b as $$Header } from './__2b140b41.mjs';
import { $ as $$ViewTransitions, a as $$InfoCard, b as $$Image, c as $$Link } from './exampleBlog_55308149.mjs';
/* empty css                                 */import 'clsx';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro("https://example.com");
const SITE_TITLE$2 = "Astro Blog";
const SITE_DESCRIPTION$2 = "Welcome to my website!";
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$2, "description": SITE_DESCRIPTION$2 })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><!-- <Header title={SITE_TITLE} /> --><main class="flow"${addAttribute(renderTransition($$result, "ptz2u25w", "", "main"), "data-astro-transition-scope")}>${renderComponent($$result, "InfoCard", $$InfoCard, {})}</main></body></html>`;
}, "/home/chris/Documents/projects/personal-site/src/pages/index.astro", "self");

const $$file$2 = "/home/chris/Documents/projects/personal-site/src/pages/index.astro";
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
  const { href, title, text, imgSrc, imgAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-hitlpqrj><li class="smol-card-component" data-astro-cid-hitlpqrj>${imgSrc ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "img", "src": placeholderImg, "alt": imgAlt, "data-astro-cid-hitlpqrj": true })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "img", "src": placeholderImg, "alt": imgAlt, "data-astro-cid-hitlpqrj": true })}`}<div data-astro-cid-hitlpqrj><h1 data-astro-cid-hitlpqrj>${title}</h1><p data-astro-cid-hitlpqrj>${text}</p></div></li></a>`;
}, "/home/chris/Documents/projects/personal-site/src/components/ListItem.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const SITE_TITLE$1 = "Astro Blog";
const SITE_DESCRIPTION$1 = "Welcome to my website!";
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-2hwget37><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$1, "description": SITE_DESCRIPTION$1, "data-astro-cid-2hwget37": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-2hwget37": true })}${renderHead()}</head><body data-astro-cid-2hwget37><!-- <Header title={SITE_TITLE} /> --><aside data-astro-cid-2hwget37>${renderComponent($$result, "InfoCard", $$InfoCard, { "data-astro-cid-2hwget37": true })}</aside><main data-astro-cid-2hwget37>${renderComponent($$result, "Link", $$Link, { "href": "/", "data-astro-cid-2hwget37": true }, { "default": ($$result2) => renderTemplate`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2hwget37><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-astro-cid-2hwget37></path></svg>` })}<h1 data-astro-cid-2hwget37>Recent projects</h1><ul data-astro-cid-2hwget37>${renderComponent($$result, "ListItem", $$ListItem, { "href": "./exampleProject", "title": "Interactive Reader Red Egg Edutainment", "imgAlt": "RedEgg Educatainment logo - a red, cartoon egg with a face", "text": "Interactive children's book using AI generated speach to text, syncronized text highlighting, and automated data pipeline", "data-astro-cid-2hwget37": true })}</ul></main></body></html>`;
}, "/home/chris/Documents/projects/personal-site/src/pages/projects/index.astro", void 0);

const $$file$1 = "/home/chris/Documents/projects/personal-site/src/pages/projects/index.astro";
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
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head><body data-astro-cid-5tznm7mj>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })}<main data-astro-cid-5tznm7mj><section data-astro-cid-5tznm7mj><ul data-astro-cid-5tznm7mj>${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj><img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj><h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4><p class="date" data-astro-cid-5tznm7mj>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })}</p></a></li>`)}</ul></section></main></body></html>`;
}, "/home/chris/Documents/projects/personal-site/src/pages/blog/index.astro", void 0);

const $$file = "/home/chris/Documents/projects/personal-site/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index$1 as b, index as c, index$2 as i };

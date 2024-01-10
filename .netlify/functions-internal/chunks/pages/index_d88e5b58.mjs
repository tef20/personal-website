import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderSlot, j as renderTransition, k as renderComponent, l as renderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML } from '../astro_95479fd1.mjs';
/* empty css                           */import 'clsx';
/* empty css                           *//* empty css                            */import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './generic_880b5fe9.mjs';
/* empty css                           */
const $$Astro$7 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/chris/Documents/projects/personal-website/src/components/BaseHead.astro", void 0);

const $$Astro$6 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/home/chris/Documents/projects/personal-website/node_modules/astro/components/ViewTransitions.astro", void 0);

const dp = new Proxy({"src":"/_astro/display-pic.d44aae93.webp","width":400,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-mbqdmgin> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/chris/Documents/projects/personal-website/src/components/Link.astro", void 0);

const $$Astro$4 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$InfoCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$InfoCard;
  const disableDisplayPicLink = Astro2.url.pathname === "/";
  return renderTemplate`${maybeRenderHead()}<section class="info-card" data-astro-cid-jk4h5f6k${addAttribute(renderTransition($$result, "picrkqzl", "", "info-card"), "data-astro-transition-scope")}> <div class="info flow text-centered" data-astro-cid-jk4h5f6k> <h1 data-astro-cid-jk4h5f6k> <span class="h1-before rock-animate" data-astro-cid-jk4h5f6k>Hi, I'm</span>Chris Telford
</h1> <div class="h2-wrapper" data-astro-cid-jk4h5f6k> <h2 data-astro-cid-jk4h5f6k>‹‹ React • Next • TypeScript • CSS • Python ››</h2> </div> <p data-astro-cid-jk4h5f6k>I'm a web developer based in Vancouver, Canada</p> <nav class="links" data-astro-cid-jk4h5f6k> ${renderComponent($$result, "Link", $$Link, { "href": "./projects", "data-astro-cid-jk4h5f6k": true }, { "default": ($$result2) => renderTemplate`Projects` })} ${renderComponent($$result, "Link", $$Link, { "href": "./blog", "data-astro-cid-jk4h5f6k": true }, { "default": ($$result2) => renderTemplate`Blog` })} </nav> </div> <a href="/" aria-label="return to homepage"${addAttribute(disableDisplayPicLink ? "pointer-events: none" : "", "style")} data-astro-cid-jk4h5f6k> ${renderComponent($$result, "Image", $$Image, { "id": "display-pic", "class": "display-pic", "src": dp, "alt": "Display Picture", "format": "webp", "data-astro-cid-jk4h5f6k": true })} </a> </section>`;
}, "/home/chris/Documents/projects/personal-website/src/components/InfoCard.astro", "self");

const SITE_TITLE$1 = "Acrylic Web Designs";
const SITE_DESCRIPTION$1 = "Welcome to my website!";

const $$Astro$3 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$1, "description": SITE_DESCRIPTION$1 })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <main class="flow"${addAttribute(renderTransition($$result, "czv44z6q", "", "main"), "data-astro-transition-scope")}> ${renderComponent($$result, "InfoCard", $$InfoCard, {})} </main> </body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/index.astro", "self");

const $$file$2 = "/home/chris/Documents/projects/personal-website/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const placeholderImg = new Proxy({"src":"/_astro/placeholder-img.54777603.png","width":259,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://acrylicwebdesigns.netlify.app");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { href, title, text, projectImg, imgAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="smol-card-component" data-astro-cid-hitlpqrj> <a${addAttribute(href, "href")} data-astro-cid-hitlpqrj> ${renderComponent($$result, "Image", $$Image, { "src": projectImg ?? placeholderImg, "width": 250, "height": 250, "alt": imgAlt, "data-astro-cid-hitlpqrj": true })} <div class="text" data-astro-cid-hitlpqrj> <h1 data-astro-cid-hitlpqrj>${title}</h1> <p data-astro-cid-hitlpqrj>${text}</p> </div> </a> </li>`;
}, "/home/chris/Documents/projects/personal-website/src/components/ListItem.astro", void 0);

const redEggLogo = new Proxy({"src":"/_astro/red_egg_logo.7e75a872.webp","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://acrylicwebdesigns.netlify.app");
const SITE_TITLE = "Acrylic Web Designs";
const SITE_DESCRIPTION = "Welcome to my website!";
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-2hwget37> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-2hwget37": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-2hwget37": true })}${renderHead()}</head> <body data-astro-cid-2hwget37> <!-- <Header title={SITE_TITLE} /> --> <aside data-astro-cid-2hwget37> ${renderComponent($$result, "InfoCard", $$InfoCard, { "data-astro-cid-2hwget37": true })} </aside> <main data-astro-cid-2hwget37> <h1 data-astro-cid-2hwget37>Recent projects (work in prog...)</h1> <ul data-astro-cid-2hwget37> ${Array(4).fill(
    renderTemplate`${renderComponent($$result, "ListItem", $$ListItem, { "href": "https://reader-prototype-mu.vercel.app/books/1", "projectImg": redEggLogo, "title": "Interactive Reader Red Egg Edutainment", "imgAlt": "RedEgg Educatainment logo - a red, cartoon egg with a face", "text": "Interactive children's book using AI generated speech to text, syncronized text highlighting, and automated data pipeline", "data-astro-cid-2hwget37": true })}`
  )} </ul> </main> </body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/projects/index.astro", void 0);

const $$file$1 = "/home/chris/Documents/projects/personal-website/src/pages/projects/index.astro";
const $$url$1 = "/projects";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	SITE_DESCRIPTION,
	SITE_TITLE,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://acrylicwebdesigns.netlify.app","ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/classic-blogs-before-you-memo.md": () => import('../classic-blogs-before-you-memo_eb7bc2da.mjs'),"/src/content/blog/password-managers.md": () => import('../password-managers_fa22eeb2.mjs'),"/src/content/blog/utopia-fluid-typescales.md": () => import('../utopia-fluid-typescales_87d5e38d.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"classic-blogs-before-you-memo":"/src/content/blog/classic-blogs-before-you-memo.md","password-managers":"/src/content/blog/password-managers.md","utopia-fluid-typescales":"/src/content/blog/utopia-fluid-typescales.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/classic-blogs-before-you-memo.md": () => import('../classic-blogs-before-you-memo_7e37a8d9.mjs'),"/src/content/blog/password-managers.md": () => import('../password-managers_d190d3b7.mjs'),"/src/content/blog/utopia-fluid-typescales.md": () => import('../utopia-fluid-typescales_aa7de7e3.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://acrylicwebdesigns.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE$1, "description": SITE_DESCRIPTION$1 })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <aside> ${renderComponent($$result, "InfoCard", $$InfoCard, {})} </aside> <main> <h1>Blog posts</h1> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result, "ListItem", $$ListItem, { "href": `/blog/${post.slug}`, "projectImg": post.data.cover.image, "title": post.data.title, "imgAlt": post.data.cover.alt, "text": post.data.description })}`)} </ul> </main> </body></html>`;
}, "/home/chris/Documents/projects/personal-website/src/pages/blog/index.astro", void 0);

const $$file = "/home/chris/Documents/projects/personal-website/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE$1 as S, SITE_DESCRIPTION$1 as a, index$1 as b, index as c, getCollection as g, index$2 as i };

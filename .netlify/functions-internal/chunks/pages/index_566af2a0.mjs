import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, l as renderHead, h as addAttribute, j as renderTransition, m as maybeRenderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML } from '../astro_9d1b3975.mjs';
import { $ as $$BaseHead, a as $$ViewTransitions, b as $$InfoCard, c as $$Image } from './exampleBlog_ba46f66b.mjs';
/* empty css                           */import 'clsx';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
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
    if (cacheEntriesByCollection.has(collection)) {
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/classic-blogs-before-you-memo.md": () => import('../classic-blogs-before-you-memo_4c32ca09.mjs'),"/src/content/blog/password-managers.md": () => import('../password-managers_c2a808a8.mjs'),"/src/content/blog/utopia-fluid-typescales.md": () => import('../utopia-fluid-typescales_039b1f4d.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
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

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/classic-blogs-before-you-memo.md": () => import('../classic-blogs-before-you-memo_60312ec5.mjs'),"/src/content/blog/password-managers.md": () => import('../password-managers_532498c7.mjs'),"/src/content/blog/utopia-fluid-typescales.md": () => import('../utopia-fluid-typescales_8c341678.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index$1 as b, index as c, getCollection as g, index$2 as i };

import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_2c8dc02d.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{width:clamp(320px,50%,860px);margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}@media (max-width: 1490px){body{flex-direction:column-reverse}main{margin-block:auto}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{width:clamp(320px,50%,860px);margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}@media (max-width: 1490px){body{flex-direction:column-reverse}main{margin-block:auto}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\narticle[data-astro-cid-g3eru2a4]{max-height:75vh;overflow-y:auto}\n"}],"routeData":{"route":"/exampleblog","type":"page","pattern":"^\\/exampleBlog\\/?$","segments":[[{"content":"exampleBlog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/exampleBlog.astro","pathname":"/exampleBlog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{width:clamp(320px,50%,860px);margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}@media (max-width: 1490px){body{flex-direction:column-reverse}main{margin-block:auto}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\na[data-astro-cid-hitlpqrj]{text-decoration:none}li[data-astro-cid-hitlpqrj]{list-style:none;display:flex;gap:1.1ch;flex-wrap:wrap;color:#000;border:2px dashed black;border-radius:8px}.img[data-astro-cid-hitlpqrj]{width:23%;min-width:100px;aspect-ratio:3 / 2}h1[data-astro-cid-hitlpqrj]{font-size:var(--step-1);line-height:1.5;margin-bottom:0}p[data-astro-cid-hitlpqrj]{font-size:var(--step--0);margin-bottom:0;max-width:45ch}article[data-astro-cid-2hwget37]{max-height:75vh;overflow-y:auto}\n"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/redegg","type":"page","pattern":"^\\/projects\\/redegg\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"redegg","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/redegg.astro","pathname":"/projects/redegg","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{width:clamp(320px,50%,860px);margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}@media (max-width: 1490px){body{flex-direction:column-reverse}main{margin-block:auto}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\na[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none;text-align:center;min-width:4ch}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}a[data-astro-cid-eimmu3lg]:hover{opacity:.8}header[data-astro-cid-3ef6ksr2]{margin:0;padding:0 1em;background:white;box-shadow:0 2px 8px rgba(var(--black),5%)}nav[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;justify-content:end}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2].active{border-bottom-color:var(--accent)}\nmain[data-astro-cid-5tznm7mj]{width:960px}ul[data-astro-cid-5tznm7mj]{display:flex;flex-wrap:wrap;gap:2rem;list-style-type:none;margin:0;padding:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:calc(50% - 1rem)}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] [data-astro-cid-5tznm7mj]{text-decoration:none;transition:.2s ease}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{width:100%;margin-bottom:1rem;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child img[data-astro-cid-5tznm7mj]{width:100%}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:2.369rem}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] img[data-astro-cid-5tznm7mj]{margin-bottom:.5rem;border-radius:12px}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]{display:block}.title[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--black));line-height:1}.date[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--gray))}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover h4[data-astro-cid-5tznm7mj],ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover .date[data-astro-cid-5tznm7mj]{color:rgb(var(--accent))}ul[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover img[data-astro-cid-5tznm7mj]{box-shadow:var(--box-shadow)}@media (max-width: 720px){ul[data-astro-cid-5tznm7mj]{gap:.5em}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:100%;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{margin-bottom:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:1.563em}}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{width:clamp(320px,50%,860px);margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}@media (max-width: 1490px){body{flex-direction:column-reverse}main{margin-block:auto}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\na[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none;text-align:center;min-width:4ch}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}a[data-astro-cid-eimmu3lg]:hover{opacity:.8}header[data-astro-cid-3ef6ksr2]{margin:0;padding:0 1em;background:white;box-shadow:0 2px 8px rgba(var(--black),5%)}nav[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;justify-content:end}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2].active{border-bottom-color:var(--accent)}\nmain[data-astro-cid-bvzihdzo]{width:calc(100% - 2em);max-width:100%;margin:0}.hero-image[data-astro-cid-bvzihdzo]{width:100%}.hero-image[data-astro-cid-bvzihdzo] img[data-astro-cid-bvzihdzo]{display:block;margin:0 auto;border-radius:12px;box-shadow:var(--box-shadow)}.prose[data-astro-cid-bvzihdzo]{width:720px;max-width:calc(100% - 2em);margin:auto;padding:1em;color:rgb(var(--gray-dark))}.title[data-astro-cid-bvzihdzo]{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title[data-astro-cid-bvzihdzo] h1[data-astro-cid-bvzihdzo]{margin:0 0 .5em}.date[data-astro-cid-bvzihdzo]{margin-bottom:.5em;color:rgb(var(--gray))}.last-updated-on[data-astro-cid-bvzihdzo]{font-style:italic}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/components/InfoCard.astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/exampleBlog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/exampleBlog@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-site/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_d2511b9e.mjs","/src/pages/projects/redegg.astro":"chunks/pages/redegg_a2c655bb.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_05322517.mjs","\u0000@astrojs-manifest":"manifest_4c9ad5f8.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_acffebaa.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_0b828581.mjs","\u0000@astro-page:src/pages/exampleBlog@_@astro":"chunks/exampleBlog_70ec7af1.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_0686d9d9.mjs","\u0000@astro-page:src/pages/projects/redegg@_@astro":"chunks/redegg_31f686d4.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_cdedf763.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_da5a7ccb.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._c5250566.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/classic-blogs-before-you-memo.md?astroContentCollectionEntry=true":"chunks/classic-blogs-before-you-memo_5d54ac8d.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/password-managers.md?astroContentCollectionEntry=true":"chunks/password-managers_5c5fd795.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/utopia-fluid-typescales.md?astroContentCollectionEntry=true":"chunks/utopia-fluid-typescales_c2de2687.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/classic-blogs-before-you-memo.md?astroPropagatedAssets":"chunks/classic-blogs-before-you-memo_b36f5f80.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/password-managers.md?astroPropagatedAssets":"chunks/password-managers_276cf2c8.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/utopia-fluid-typescales.md?astroPropagatedAssets":"chunks/utopia-fluid-typescales_682f6926.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/classic-blogs-before-you-memo.md":"chunks/classic-blogs-before-you-memo_29807995.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/password-managers.md":"chunks/password-managers_af65ffe8.mjs","/home/chris/Documents/projects/personal-site/src/content/blog/utopia-fluid-typescales.md":"chunks/utopia-fluid-typescales_a3a6f3d1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.382ac49c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/placeholder-img.54777603.png","/_astro/display-pic.633b0a7d.png","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/display-pic.png","/favicon.svg","/_astro/hoisted.382ac49c.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"]});

export { manifest };
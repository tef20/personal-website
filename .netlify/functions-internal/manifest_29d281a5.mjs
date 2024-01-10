import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_95479fd1.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}ul{margin-top:var(--step-4);max-height:65vh;overflow-y:auto;padding:0 1em 0 0}@media (max-width: 1000px){body{flex-direction:column-reverse}aside{max-width:initial;margin-inline:auto}aside #display-pic{display:none}aside+main{border-inline-end:none;padding-block-start:1em;margin-inline:0}ul{max-height:none}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover,a:visited{color:var(--black)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;font-style:italic}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;gap:1.5em;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}ul{margin-top:var(--step-4);max-height:65vh;overflow-y:auto;padding:0 1em 0 0}@media (max-width: 1000px){body{flex-direction:column-reverse}aside{max-width:initial;margin-inline:auto}aside #display-pic{display:none}aside+main{border-inline-end:none;padding-block-start:1em;margin-inline:0}ul{max-height:none}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover,a:visited{color:var(--black)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;font-style:italic}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;gap:1.5em;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\nh1[data-astro-cid-2hwget37]{text-wrap:wrap;max-width:20ch}\nli[data-astro-cid-hitlpqrj]{list-style:none;margin-bottom:1em;overflow:hidden;border:2px dashed black;border-radius:8px}a[data-astro-cid-hitlpqrj]{text-decoration:none;display:flex;gap:1.1ch;color:#000}h1[data-astro-cid-hitlpqrj]{font-size:var(--step-1);line-height:1.5;margin-bottom:0}p[data-astro-cid-hitlpqrj]{font-size:var(--step--0);margin-bottom:0;padding-right:1ch;max-width:45ch}\n"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"inline","content":":root{--step--2: clamp(.7813rem, .7747rem + .0326vw, .8rem);--step--1: clamp(.9375rem, .9158rem + .1087vw, 1rem);--step-0: clamp(1.125rem, 1.0815rem + .2174vw, 1.25rem);--step-1: clamp(1.35rem, 1.2761rem + .3696vw, 1.5625rem);--step-2: clamp(1.62rem, 1.5041rem + .5793vw, 1.9531rem);--step-3: clamp(1.9438rem, 1.7707rem + .8652vw, 2.4413rem);--step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);--step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 4.7681rem);--step-6: clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem);--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);--size: 100vmin;--col1: #f6d5f7;--col2: #fbe9d7;--col3: #c9f8fe;.flow>*+*{margin-bottom:1.2em}.balance{text-wrap:balance}}body{font-family:Noto Sans,sans-serif;margin:0;padding:0;min-height:100vh;background-image:radial-gradient(var(--size) circle at top left,var(--col1),transparent),radial-gradient(var(--size) circle at top right,var(--col2),transparent),radial-gradient(var(--size) circle at bottom,var(--col3),transparent);word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7;display:flex;gap:1em}main{margin-block:auto;margin-inline:auto;padding:3em 1em}aside+main{border-inline-end:dashed lightgray 2px;margin-inline-end:0}aside{order:1;max-width:20vw;margin-block:auto;margin-inline:min(2em,10vw) 1em;padding:3em 2em}ul{margin-top:var(--step-4);max-height:65vh;overflow-y:auto;padding:0 1em 0 0}@media (max-width: 1000px){body{flex-direction:column-reverse}aside{max-width:initial;margin-inline:auto}aside #display-pic{display:none}aside+main{border-inline-end:none;padding-block-start:1em;margin-inline:0}ul{max-height:none}}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em;font-size:var(--step-5)}h2{font-size:2.441em;font-size:var(--step-4)}h3{font-size:1.953em;font-size:var(--step-3)}h4{font-size:1.563em;font-size:var(--step-2)}h5{font-size:1.25em;font-size:var(--step-1)}strong,b{font-weight:700}a,a:hover,a:visited{color:var(--black)}p{margin-bottom:1em;font-size:var(--step-0);max-width:65ch}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;font-style:italic}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}a[data-astro-cid-mbqdmgin]{font-size:var(--step-0);color:#000;background-color:transparent;border:black solid 2px;border-radius:8px;padding:.1em .6em;min-width:6ch;text-align:center;cursor:pointer;text-decoration:none;transition:scale .06s ease}a[data-astro-cid-mbqdmgin]:hover{border-color:#0006}a[data-astro-cid-mbqdmgin]:active{scale:.97}.text-centered[data-astro-cid-jk4h5f6k]{text-align:center}h2[data-astro-cid-jk4h5f6k]{font-size:var(--step-0);font-weight:light;text-wrap:balance}.h1-before[data-astro-cid-jk4h5f6k]{font-size:.28em;position:absolute;transform:translate(-4ch,-27%) rotate(-20deg);transform-origin:left;cursor:default}.info[data-astro-cid-jk4h5f6k]:hover .h1-before[data-astro-cid-jk4h5f6k]{animation-name:rock-animate;animation-delay:.1s;animation-duration:.7s}.info-card[data-astro-cid-jk4h5f6k]{padding-inline:1.1em;display:flex;gap:1.5em;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.display-pic[data-astro-cid-jk4h5f6k]{width:calc(11 * var(--step-0));min-width:130px;aspect-ratio:1 / 1;object-fit:cover;object-position:0 38%;border-radius:50%;transition:ease-in-out .1s}.links[data-astro-cid-jk4h5f6k]{display:flex;justify-content:center;gap:1ch}.display-pic[data-astro-cid-jk4h5f6k]:hover{scale:1.03}@keyframes rock-animate{0%{rotate:0deg}10%{rotate:6deg}20%{rotate:0deg}30%{rotate:-6deg}40%{rotate:0deg}50%{rotate:6deg}60%{rotate:0deg}70%{rotate:-6deg}80%{rotate:0deg}90%{rotate:6deg}to{rotate:0deg}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\nli[data-astro-cid-hitlpqrj]{list-style:none;margin-bottom:1em;overflow:hidden;border:2px dashed black;border-radius:8px}a[data-astro-cid-hitlpqrj]{text-decoration:none;display:flex;gap:1.1ch;color:#000}h1[data-astro-cid-hitlpqrj]{font-size:var(--step-1);line-height:1.5;margin-bottom:0}p[data-astro-cid-hitlpqrj]{font-size:var(--step--0);margin-bottom:0;padding-right:1ch;max-width:45ch}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/chris/Documents/projects/personal-website/src/components/InfoCard.astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-website/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-website/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-website/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/chris/Documents/projects/personal-website/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_11ac5803.mjs","/src/pages/blog/[...slug].astro":"chunks/prerender_ec3e4bc3.mjs","\u0000@astrojs-manifest":"manifest_29d281a5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3a004527.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a7a43061.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_d46c6904.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_95679fcd.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_76f3986b.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._a143604d.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/classic-blogs-before-you-memo.md?astroContentCollectionEntry=true":"chunks/classic-blogs-before-you-memo_eb7bc2da.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/password-managers.md?astroContentCollectionEntry=true":"chunks/password-managers_fa22eeb2.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/utopia-fluid-typescales.md?astroContentCollectionEntry=true":"chunks/utopia-fluid-typescales_87d5e38d.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/classic-blogs-before-you-memo.md?astroPropagatedAssets":"chunks/classic-blogs-before-you-memo_7e37a8d9.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/password-managers.md?astroPropagatedAssets":"chunks/password-managers_d190d3b7.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/utopia-fluid-typescales.md?astroPropagatedAssets":"chunks/utopia-fluid-typescales_aa7de7e3.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/classic-blogs-before-you-memo.md":"chunks/classic-blogs-before-you-memo_3a4db9cd.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/password-managers.md":"chunks/password-managers_096bddf8.mjs","/home/chris/Documents/projects/personal-website/src/content/blog/utopia-fluid-typescales.md":"chunks/utopia-fluid-typescales_c504f59d.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.77775e67.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/encapsulation.bcc615b0.webp","/_astro/password_manager.e81bc570.webp","/_astro/typescale.37cc8142.webp","/_astro/display-pic.d44aae93.webp","/_astro/placeholder-img.54777603.png","/_astro/red_egg_logo.7e75a872.webp","/favicon.svg","/_astro/hoisted.77775e67.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/placeholder_images/blog-placeholder-1.jpg","/placeholder_images/blog-placeholder-2.jpg","/placeholder_images/blog-placeholder-3.jpg","/placeholder_images/blog-placeholder-4.jpg","/placeholder_images/blog-placeholder-5.jpg","/placeholder_images/blog-placeholder-about.jpg"]});

export { manifest };
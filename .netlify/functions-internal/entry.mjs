import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_38d25273.mjs';

const _page0  = () => import('./chunks/generic_8749683e.mjs');
const _page1  = () => import('./chunks/index_5e055cc3.mjs');
const _page2  = () => import('./chunks/index_1933b504.mjs');
const _page3  = () => import('./chunks/rss_d8124ecb.mjs');
const _page4  = () => import('./chunks/index_676ed024.mjs');
const _page5  = () => import('./chunks/_.._47d83664.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects/index.astro", _page2],["src/pages/rss.xml.js", _page3],["src/pages/blog/index.astro", _page4],["src/pages/blog/[...slug].astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

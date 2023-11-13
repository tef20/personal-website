import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_90e1cab1.mjs';
import './chunks/astro_2c8dc02d.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_1b55978a.mjs');
const _page1  = () => import('./chunks/index_1410dd85.mjs');
const _page2  = () => import('./chunks/exampleBlog_5ce29d60.mjs');
const _page3  = () => import('./chunks/index_9a1d1f94.mjs');
const _page4  = () => import('./chunks/redegg_31f686d4.mjs');
const _page5  = () => import('./chunks/rss_1663aa50.mjs');
const _page6  = () => import('./chunks/index_3a979ec9.mjs');
const _page7  = () => import('./chunks/_.._60f8c062.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/exampleBlog.astro", _page2],["src/pages/projects/index.astro", _page3],["src/pages/projects/redegg.astro", _page4],["src/pages/rss.xml.js", _page5],["src/pages/blog/index.astro", _page6],["src/pages/blog/[...slug].astro", _page7]]);
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

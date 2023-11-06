import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_4c9ad5f8.mjs';
import './chunks/astro_2c8dc02d.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_acffebaa.mjs');
const _page1  = () => import('./chunks/index_0b828581.mjs');
const _page2  = () => import('./chunks/exampleBlog_70ec7af1.mjs');
const _page3  = () => import('./chunks/index_0686d9d9.mjs');
const _page4  = () => import('./chunks/redegg_31f686d4.mjs');
const _page5  = () => import('./chunks/rss_cdedf763.mjs');
const _page6  = () => import('./chunks/index_da5a7ccb.mjs');
const _page7  = () => import('./chunks/_.._c5250566.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/exampleBlog.astro", _page2],["src/pages/projects/index.astro", _page3],["src/pages/projects/redegg.astro", _page4],["src/pages/rss.xml.js", _page5],["src/pages/blog/index.astro", _page6],["src/pages/blog/[...slug].astro", _page7]]);
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

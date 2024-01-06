import { e as createAstro, f as createComponent, r as renderTemplate } from '../astro_2c8dc02d.mjs';
import 'clsx';
import 'html-escaper';

const $$Astro = createAstro("https://example.com");
const $$Redegg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Redegg;
  return renderTemplate``;
}, "/home/chris/Documents/projects/personal-website/src/pages/projects/redegg.astro", void 0);

const $$file = "/home/chris/Documents/projects/personal-website/src/pages/projects/redegg.astro";
const $$url = "/projects/redegg";

export { $$Redegg as default, $$file as file, $$url as url };

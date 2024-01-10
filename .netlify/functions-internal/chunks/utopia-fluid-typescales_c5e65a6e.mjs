import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_9d1b3975.mjs';
import 'clsx';
import 'html-escaper';

const html = "<h3 id=\"using-utopia-to-set-dynamic-type-scales\">Using Utopia to set dynamic type scales</h3>\n<p>Developer tip! 💡</p>\n<p>As a developer, I’ve recently started paying more attention to how words look on the web - typography!</p>\n<p>Good typography can make your website pop! Bad typography can be a barrier to your users… Even in a world of amazing audio and visual effects, we still consume a lot of text, but making all these tricky design decisions around text can be exhausting and confusing without a systematic approach!</p>\n<p>So here’s an awesome and underrated tool I’ve found helps me lay the foundations of a good, dynamic type system when starting a new project:</p>\n<p>⭐ Utopia! ⭐</p>\n<p>Utopia is both a powerful tool and a guiding philosophy for approaching sizing and spacing in web design.</p>\n<p>It’s a simple generator that lets you set:</p>\n<ul>\n<li>a consistent size ratio between types</li>\n<li>the range that each type can expand and contract</li>\n</ul>\n<p>…and gives you back some neat CSS variables that:</p>\n<ul>\n<li>slot seamlessly into your project</li>\n<li>create consistency across your typing scale</li>\n<li>handle responsive sizing gracefully, without jarring breakpoints!</li>\n</ul>\n<p>To learn more:</p>\n<ul>\n<li>Try it for yourself <a href=\"https://utopia.fyi/type/calculator/\">Utopia</a></li>\n<li>Read their intro article in <a href=\"https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/\">Smashing Magazine</a></li>\n</ul>\n<p>What are your favourite tools for designing websites?</p>";

				const frontmatter = {"title":"Utopia Fluid Typing","description":"Bring bring dynamic type scaling to your websites","pubDate":"Sep 8 2023","heroImage":"/typescale.png"};
				const file = "/home/chris/Documents/projects/personal-website/src/content/blog/utopia-fluid-typescales.md";
				const url = undefined;
				function rawContent() {
					return "\n### Using Utopia to set dynamic type scales\n\nDeveloper tip! 💡\n\nAs a developer, I've recently started paying more attention to how words look on the web - typography!\n\nGood typography can make your website pop! Bad typography can be a barrier to your users... Even in a world of amazing audio and visual effects, we still consume a lot of text, but making all these tricky design decisions around text can be exhausting and confusing without a systematic approach!\n\nSo here's an awesome and underrated tool I've found helps me lay the foundations of a good, dynamic type system when starting a new project:\n\n⭐ Utopia! ⭐\n\nUtopia is both a powerful tool and a guiding philosophy for approaching sizing and spacing in web design.\n\nIt's a simple generator that lets you set:\n\n- a consistent size ratio between types\n- the range that each type can expand and contract\n\n...and gives you back some neat CSS variables that:\n\n- slot seamlessly into your project\n- create consistency across your typing scale\n- handle responsive sizing gracefully, without jarring breakpoints!\n\nTo learn more:\n\n- Try it for yourself [Utopia](https://utopia.fyi/type/calculator/)\n- Read their intro article in [Smashing Magazine](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)\n\nWhat are your favourite tools for designing websites?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"using-utopia-to-set-dynamic-type-scales","text":"Using Utopia to set dynamic type scales"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

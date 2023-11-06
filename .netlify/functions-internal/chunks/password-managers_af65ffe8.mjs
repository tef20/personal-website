import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_2c8dc02d.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Dev tip! 💡</p>\n<p>As a developer, I’ve recently started paying more attention to how words look on the web - typography!</p>\n<p>Good typography can make your website pop! Bad typography can be a barrier to your users… Even in a world of amazing audio and visual effects, we still consume a lot of text, but making all these tricky design decisions around text can be exhausting and confusing without a systematic approach!</p>\n<p>So here’s an awesome and underrated tool that I’ve found helps me lay the foundations of a tidy, dynamic type system when starting new projects:</p>\n<p>⭐ Utopia! ⭐</p>\n<p>Utopia is both a powerful tool and a guiding philosophy for approaching sizing and spacing in web design.</p>\n<p>It’s a simple generator that lets you set:</p>\n<ul>\n<li>a consistent size ratio between types</li>\n<li>the range that each type can expand and contract to</li>\n</ul>\n<p>…and gives you back some neat CSS variables that:</p>\n<ul>\n<li>slot seamlessly into your project</li>\n<li>create consistency across your typing scale</li>\n<li>handle responsive sizing gracefully, without jarring breakpoints!</li>\n</ul>\n<p>Below is a simple example using heading tags 👇</p>\n<p>To learn more:<br>\n🔗 Try it for yourself - <a href=\"https://lnkd.in/gvYQySzU\">https://lnkd.in/gvYQySzU</a><br>\n🔗 Read their intro article in Smashing Magazine - <a href=\"https://lnkd.in/gZ33FNbh\">https://lnkd.in/gZ33FNbh</a></p>\n<p>What are your favorite tips and tools for designing websites?</p>\n<img src=\"https://imgs.xkcd.com/comics/password_strength.png\" alt=\"XKCD Comic on password advice that is hard for humans to follow\">";

				const frontmatter = {"title":"Password Managers are Great!","description":"Improve your online security, at your convenience","pubDate":"Sep 15 2023","heroImage":"/blog-placeholder-3.jpg"};
				const file = "/home/chris/Documents/projects/personal-site/src/content/blog/password-managers.md";
				const url = undefined;
				function rawContent() {
					return "\nDev tip! 💡\n\nAs a developer, I've recently started paying more attention to how words look on the web - typography!\n\nGood typography can make your website pop! Bad typography can be a barrier to your users... Even in a world of amazing audio and visual effects, we still consume a lot of text, but making all these tricky design decisions around text can be exhausting and confusing without a systematic approach!\n\nSo here's an awesome and underrated tool that I've found helps me lay the foundations of a tidy, dynamic type system when starting new projects:\n\n⭐ Utopia! ⭐\n\nUtopia is both a powerful tool and a guiding philosophy for approaching sizing and spacing in web design.\n\nIt's a simple generator that lets you set:\n\n- a consistent size ratio between types\n- the range that each type can expand and contract to\n\n...and gives you back some neat CSS variables that:\n\n- slot seamlessly into your project\n- create consistency across your typing scale\n- handle responsive sizing gracefully, without jarring breakpoints!\n\nBelow is a simple example using heading tags 👇\n\nTo learn more:  \n🔗 Try it for yourself - https://lnkd.in/gvYQySzU  \n🔗 Read their intro article in Smashing Magazine - https://lnkd.in/gZ33FNbh\n\nWhat are your favorite tips and tools for designing websites?\n\n<Image src=\"https://imgs.xkcd.com/comics/password_strength.png\" alt=\"XKCD Comic on password advice that is hard for humans to follow\" />\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

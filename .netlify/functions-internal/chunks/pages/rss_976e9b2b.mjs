import rss from '@astrojs/rss';
import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from './index_71c3d272.mjs';
import '../astro_9d1b3975.mjs';
import 'clsx';
import 'html-escaper';
import './exampleBlog_ba46f66b.mjs';
import '@astrojs/internal-helpers/path';
/* empty css                            *//* empty css                           */import '../astro-assets-services_80b1d799.mjs';
/* empty css                                 *//* empty css                           */
async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };

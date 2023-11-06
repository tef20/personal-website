import rss from '@astrojs/rss';
import { g as getCollection } from './__2b140b41.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './index_2e9cde18.mjs';
import '../astro_2c8dc02d.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                            *//* empty css                            *//* empty css                            */import './exampleBlog_55308149.mjs';
/* empty css                                 */import '../astro-assets-services_3efd373f.mjs';
/* empty css                                 *//* empty css                           *//* empty css                           */
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

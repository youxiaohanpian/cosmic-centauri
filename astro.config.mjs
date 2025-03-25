// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/youxiaohanpian',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }  // 改成自动生成 ✅ 需要使用小写的 'guides'
					// items: [
					// 	// 每个导航有一个入口 item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example' },
					// 	{ label: 'Git 操作图解', link: '/guides/git-guide' },  
					// ],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }, // 改成自动生成
				},
			],
			// tableOfContents: {
			// 	minHeadingLevel: 2,    // 从二级标题开始显示
			// 	maxHeadingLevel: 3     // 到三级标题结束
			// }
		}),
	],
});

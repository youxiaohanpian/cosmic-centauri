// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap'; //添加网站地图

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ai233.top/', // 必须要有，否则 sitemap 不会生成
	integrations: [
		sitemap(),
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/youxiaohanpian/cosmic-centauri'
			},
			sidebar: [
				{
					label: '文档',    // 添加一个顶层标签
					items: [
						{
							label: '入门教程',  // 第一个大类
							autogenerate: { 
								directory: 'guides/01-getting-started' 
							}
						},
						{
							label: '开发指南',  // 第二个大类
							autogenerate: { 
								directory: 'guides/02-development'
							}
						}
					]
				},
				{
					label: '参考',
					autogenerate: { directory: 'reference' }
				}
			],
		}),
	],
});

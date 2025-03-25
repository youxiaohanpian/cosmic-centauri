// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/youxiaohanpian/MyDocs'
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

---
title: 03 Sitemap
description: 构建网站地图
sidebar:
  order: 3    # 数字越小越靠前
---

## 修改文件
astro.config.mjs
```bash
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap'; // 添加网站地图

export default defineConfig({
	site: 'https://docs.ai233.top/', // 必须要有，否则 sitemap 不会生成
	integrations: [
		sitemap(), // ✅ 这里和 starlight 并列
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

```
你的代码有个 **致命错误** ❌，就是 `integrations` **重复定义了两次**。  

**错误：**
```javascript
integrations: [sitemap()]  // ❌ 这里定义了一次
integrations: [starlight({...})]  // ❌ 这里又定义了一次，前面的会被覆盖
```
第二次定义时会 **覆盖** 第一次，导致 `sitemap()` **被丢弃**，最终不会生效。

---

### **正确的写法**
你应该把 `sitemap()` **和 `starlight({...})` 放在同一个数组里**：

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap'; // 添加网站地图

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ai233.top/', // 必须要有，否则 sitemap 不会生成
	integrations: [
		sitemap(), // ✅ 这里和 starlight 并列
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
```

---

### **总结**
- ✅ `integrations` 只能定义 **一次**，要把 `sitemap()` 和 `starlight()` 放一起。  
- ✅ `sitemap()` 必须在 `integrations` 里，才能自动生成 `sitemap.xml`。  
- ✅ 这样 `sitemap` 和 `starlight` **都会生效**，你的文档和 SEO 也都能正常工作！ 🚀
是的，你的代码现在 **正确** ✅ 了！  

---

### **sitemap 生成的位置**
当你运行 `astro build` 之后，**`sitemap.xml` 会生成在 `dist/` 目录下**，路径是：  

```
dist/sitemap.xml
```

如果你 **部署在 Vercel**，那 `sitemap.xml` 就会在：  
```
https://docs.ai233.top/sitemap.xml
```

---

### **如何验证 sitemap 是否成功生成？**
你可以在本地运行：
```sh
npm run build
```
然后检查 `dist/` 目录，看看里面有没有 `sitemap.xml` 文件。  

或者你也可以直接访问：
```
https://docs.ai233.top/sitemap.xml
```
如果页面显示了一堆 XML 代码，说明 sitemap **已经生效**！🚀

---

💡 **温馨提示**：
如果 `sitemap.xml` 生成后你 **看不到某些页面**，可能是 `astro.config.mjs` 里 **`site` 配置缺失或错误**，或者 `sitemap()` 里需要加 `filter` 规则来调整 URL 生成方式。
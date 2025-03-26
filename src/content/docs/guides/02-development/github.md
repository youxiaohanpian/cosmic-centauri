---
title: 02 Github 部署
description: 构建github
sidebar:
  order: 2    # 数字越小越靠前
---

# 创建 GitHub Actions 配置文件
## 自动部署（推荐）
创建文件：\src\.github\workflows\deploy.yml
```
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]  # 当推送到 main 分支时触发

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
## 手动部署
```
# 1. 构建项目
npm run build

# 2. 进入 dist 文件夹
cd dist

# 3. 初始化 git
git init
git add .
git commit -m "部署文档"

# 4. 推送到 gh-pages 分支
git push -f git@github.com:用户名/仓库名.git main:gh-pages
```
使用自动部署的好处：
1. 推送代码后自动构建和部署
2. 不需要手动操作
3. 更不容易出错
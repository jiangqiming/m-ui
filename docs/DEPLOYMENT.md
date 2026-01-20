# 文档构建和发布指南

## 本地开发文档

启动文档开发服务器，支持热更新：

```bash
npm run dev:docs
```

访问 http://localhost:5173/m-ui/ 查看文档。

## 构建文档

构建生产版本的文档：

```bash
npm run build:docs
```

构建完成后，文档会生成在 `docs/.vitepress/dist` 目录。

## 预览构建后的文档

```bash
npm run preview:docs
```

## 发布文档到 GitHub Pages

### 方法 1：使用 GitHub Actions（推荐）

已经配置了自动部署工作流，当你推送代码到 `main` 分支时（特别是 `docs/` 目录的变化），会自动构建并部署文档。

**首次使用需要配置：**

1. 进入 GitHub 仓库：https://github.com/jqkgg/m-ui
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分，选择 **GitHub Actions**
4. 保存设置

之后，每次推送代码到 `main` 分支时，GitHub Actions 会自动：
- 安装依赖
- 构建文档
- 部署到 GitHub Pages

文档地址：https://jqkgg.github.io/m-ui/

### 方法 2：手动部署

如果你想手动部署文档：

1. 构建文档：
```bash
npm run build:docs
```

2. 进入构建输出目录：
```bash
cd docs/.vitepress/dist
```

3. 初始化 git 仓库（如果还没有）：
```bash
git init
git add -A
git commit -m 'deploy docs'
```

4. 推送到 GitHub Pages：
```bash
git push -f git@github.com:jqkgg/m-ui.git main:gh-pages
```

或者使用 GitHub CLI：
```bash
gh-pages -d docs/.vitepress/dist
```

## 注意事项

1. **Base 路径**：文档配置中的 `base: '/m-ui/'` 必须与仓库名称匹配
2. **更新文档后**：记得提交并推送代码，GitHub Actions 会自动部署
3. **文档路径**：访问文档时使用完整路径，如 `/m-ui/components/button`


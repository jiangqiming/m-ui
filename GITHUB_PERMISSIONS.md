# GitHub 仓库权限说明

## Public 仓库的权限

### ✅ 任何人都可以：
- 查看代码
- 克隆仓库
- Fork 仓库
- 提交 Issue
- 提交 Pull Request

### ❌ 默认情况下，其他人**不能**：
- 直接推送到仓库
- 修改仓库设置
- 删除仓库

## 如何允许他人提交代码

### 方式 1：添加协作者（Collaborators）
1. 进入仓库 Settings
2. 点击左侧 "Collaborators"
3. 点击 "Add people"
4. 输入用户名或邮箱
5. 选择权限级别：
   - **Write**: 可以推送代码
   - **Maintain**: 可以管理仓库（除了删除）
   - **Admin**: 完全权限

### 方式 2：通过 Pull Request（推荐用于开源项目）
1. 其他人 Fork 你的仓库
2. 在他们的 Fork 中修改代码
3. 提交 Pull Request
4. 你审查后合并

## 保护主分支（推荐设置）

### 设置分支保护规则：
1. 进入 Settings → Branches
2. 点击 "Add rule" 或编辑 main 分支规则
3. 可以设置：
   - ✅ Require pull request reviews before merging（合并前需要 PR 审查）
   - ✅ Require status checks to pass before merging（需要状态检查通过）
   - ✅ Require conversation resolution before merging（需要解决所有讨论）
   - ✅ Include administrators（包括管理员）

## 当前仓库状态

你的仓库：`https://github.com/jiangqiming/m-ui`

**当前权限：**
- 只有你（jiangqiming）可以直接推送
- 其他人需要通过 Fork + Pull Request 贡献代码

**建议设置：**
1. 将仓库改为 Public（如果还没改）
2. 设置分支保护规则保护 main 分支
3. 添加 CONTRIBUTING.md 说明如何贡献代码


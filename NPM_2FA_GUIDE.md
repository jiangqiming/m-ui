# npm 添加认证器应用（Authenticator App）指南

## 当前情况

你目前使用的是**安全密钥（Security Key）**作为 2FA 方式。npm 网站可能不直接显示添加认证器应用的选项。

## 解决方案

### 方案 1：使用命令行添加认证器应用（推荐）

npm 命令行工具可能支持添加认证器应用，即使网站不显示。尝试以下命令：

#### 步骤 1：重新启用 2FA（会提示添加认证器应用）

```bash
npm profile enable-2fa auth-and-writes
```

执行此命令后：
1. 系统会提示你输入 npm 密码
2. 可能会显示一个二维码或 `otpauth://` 链接
3. 将二维码/链接添加到认证器应用

**如果命令成功：**
- 打开认证器应用（Google Authenticator、Microsoft Authenticator 等）
- 扫描显示的二维码，或手动输入提供的密钥
- 验证完成后，你就可以使用认证器应用获取 6 位数字 OTP 了

### 方案 2：临时移除 Security Key，重新设置

**⚠️ 注意：此操作需要你有 Recovery Codes**

1. **在 npm 网站上**：
   - 点击 Security Key 旁边的 "Remove" 或 "X" 按钮
   - 使用 Recovery Code 或 Security Key 验证身份
   - 移除 Security Key

2. **然后重新启用 2FA**：
   - 点击 "Enable Two-Factor Authentication"
   - 这次选择 "Authenticator App" 选项
   - 按照提示扫描二维码

3. **（可选）重新添加 Security Key**：
   - 设置好认证器应用后，你可以再次添加 Security Key
   - npm 支持同时使用认证器应用和 Security Key

### 方案 3：直接使用 Security Key 发布（如果可能）

如果命令行发布支持 Security Key，你可以：
1. 尝试运行 `npm publish --access public`
2. 系统可能会提示你使用 Security Key 验证
3. 插入你的 Security Key 设备，按按钮确认

### 方案 4：创建 Access Token 用于发布

如果上述方法都不行，你可以创建一个 npm Access Token 用于发布：

1. **在 npm 网站上**：
   - 访问：https://www.npmjs.com/settings/jqkgg/tokens
   - 点击 "Generate New Token"
   - 选择类型：**"Automation"** 或 **"Publish"**
   - 命名：例如 "m-ui-publish"
   - 生成后复制令牌

2. **使用 Token 发布**：
   ```bash
   # 使用 Token 登录
   npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE
   
   # 然后发布（不需要 OTP）
   npm publish --access public
   ```

## 推荐操作步骤

1. **首先尝试方案 1**（命令行）：
   ```bash
   npm profile enable-2fa auth-and-writes
   ```

2. **如果方案 1 不行，使用方案 4**（Access Token）：
   - 这是最可靠的方法，不需要 OTP
   - Token 可以设置为长期有效

3. **如果需要认证器应用，使用方案 2**：
   - 先备份 Recovery Codes
   - 移除 Security Key
   - 重新设置时选择认证器应用

## 验证设置

设置完成后，可以验证：

```bash
npm profile get
```

应该看到：
```
two-factor auth: auth-and-writes
```

## 使用认证器应用发布

设置好认证器应用后：

1. 打开认证器应用
2. 找到 "npm" 条目
3. 查看当前显示的 6 位数字
4. 运行：
   ```bash
   npm publish --access public --otp=123456
   ```
   （将 123456 替换为实际数字）

## 注意事项

- Recovery Codes 要安全保存，以防设备丢失
- Access Token 一旦生成，立即保存，npm 不会再次显示
- 如果使用 Token，要妥善保管，不要泄露


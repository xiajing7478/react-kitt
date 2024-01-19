# react ts 项目中配置 eslint 和 prettier 代码规范

在 React TypeScript 项目中配置 ESLint 和 Prettier 代码规范可以通过以下步骤完成：

步骤 1: 初始化项目
首先，确保已经在项目中初始化了一个 React TypeScript 项目。可以使用以下命令创建一个新的 React TypeScript 项目：

dsconfig
Copy
npx create-react-app my-app --template typescript
步骤 2: 安装依赖
进入项目目录，并安装所需的依赖：

Copy
cd my-app
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
步骤 3: 创建配置文件
在项目根目录下创建一个名为.eslintrc.js 的文件，并添加以下内容：

javascript
Copy
module.exports = {
parser: '@typescript-eslint/parser',
extends: [
'plugin:@typescript-eslint/recommended',
'plugin:react/recommended',
'prettier/@typescript-eslint',
'plugin:prettier/recommended',
],
parserOptions: {
ecmaVersion: 2021,
sourceType: 'module',
ecmaFeatures: {
jsx: true,
},
},
rules: {
// 在这里可以添加自定义的规则
},
settings: {
react: {
version: 'detect',
},
},
};
步骤 4: 创建.prettierrc 文件
在项目根目录下创建一个名为.prettierrc 的文件，并添加以下内容：

json
Copy
{
"singleQuote": true,
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"printWidth": 80
}
步骤 5: 配置 VS Code
为了在编辑器中自动修复代码规范，需要配置 VS Code。打开 VS Code 并安装以下插件：

ESLint
Prettier - Code formatter
然后，在 VS Code 的设置中添加以下配置：

json
Copy
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false
},
"[javascriptreact]": {
"editor.formatOnSave": false
},
"[typescript]": {
"editor.formatOnSave": false
},
"[typescriptreact]": {
"editor.formatOnSave": false
}
步骤 6: 运行 ESLint 和 Prettier
现在，可以运行 ESLint 和 Prettier 来检查和格式化代码。在 package.json 文件中添加以下脚本：

json
Copy
"scripts": {
"lint": "eslint src --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
"format": "prettier --write \"src/\*_/_.{js,jsx,ts,tsx}\""
}
然后，可以使用以下命令来检查和修复代码规范：

Copy
npm run lint // 检查代码规范
npm run lint:fix // 自动修复代码规范
npm run format // 格式化代码
这样，你就成功地在 React TypeScript 项目中配置了 ESLint 和 Prettier 代码规范。

在.prettierrc.js 设置 singleQuote: true， 为什么保存时候变成双引号

ChatGPT
ChatGPT

Poe
如果在 Prettier 的配置文件 .prettierrc.js 中设置了 singleQuote: true，但保存时仍然将字符串用双引号包裹起来，可能是因为编辑器的格式化设置与 Prettier 的配置不一致。

VS Code 默认使用自己的格式化工具，可能会覆盖 Prettier 的设置。为了确保 VS Code 使用 Prettier 进行格式化，需要进行以下配置：

步骤 1: 安装插件
确保已经安装了以下 VS Code 插件：

Prettier - Code formatter
ESLint (如果使用 ESLint 进行代码检查)
步骤 2: 配置 VS Code
打开 VS Code，按下 Ctrl + , 打开设置。在右上角的搜索栏中输入 "Format"，找到 "Formatter" 部分。

选择 "Default Formatter"，确保选择了 "Prettier - Code formatter"。
确保 "Editor: Format On Save" 选项已启用。
步骤 3: 禁用 VS Code 自带的格式化工具
在 VS Code 的设置中添加以下配置，以禁用 VS Code 内置的格式化工具：

json
Copy
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
保存设置后，VS Code 应该会使用 Prettier 进行格式化，并按照 .prettierrc.js 文件中的配置进行单引号或双引号处理。

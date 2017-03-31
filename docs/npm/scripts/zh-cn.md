## NPM 脚本

本项目提供以下 NPM 脚本以供快捷使用。

#### 启动项目

`npm start` - 打包代码并启动服务器侦听3000端口，启动后可用 `http://localhost:3000` 访问。

#### 启动项目（开发模式）

同时执行 `npm run client-dev` `npm run server-dev`，这两条命令会开启 Webpack 观察模式进行打包，在代码文件存在改动时，Webpack 会自动刷新打包结果。

之后再执行 `npm run server-run`，启动服务器侦听3000端口，启动后可用 `http://localhost:3000` 访问。

#### 启动项目（PM2任务）

`npm run start:pm2` - 效果同 `npm start`，不过会以 PM2 任务模式执行。

#### 仅打包

`npm run build`

#### 重新部署项目

`npm run deploy` - 会执行以下流程

1. 以当前目录为 GIT 代码库执行 `git pull` 获取最新代码
2. 执行 `npm install` 安装依赖
3. 执行 `npm run build` 进行打包
4. 终止存在的当前项目的 PM2 进程
5. 启动当前项目的 PM2 进程
module.exports = {
  apps: [
    {
      name: 'app',
      script: 'app.js'
    }
  ],
  deploy: {
    // "production" 是环境名称
    production: {
      // SSH key 路径
      user: 'git', // SSH 端口
      host: ['39.96.24.186'], // SSH 配置
      port: 22,                // ssh端口
      ssh_options: 'StrictHostKeyChecking=no', // GIT 远程分支
      ref: 'origin/master', // GIT 仓库
      repo: 'git@github.com:YLQZ/devYuSheng.git', // 服务器部署路径
      path: '/home/project/repository', // 安装后置任务
      'post-setup': 'npm install', // 部署后置任务
      'post-deploy': 'npm run build'
    }
  }
}

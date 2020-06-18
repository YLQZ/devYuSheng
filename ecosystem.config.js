module.exports = {
  deploy: {
    // "production" 是环境名称
    production: {
      // SSH key 路径
      user: 'root', // SSH 端口
      host: '39.96.24.186', // SSH 配置
      ref: 'origin/master', // GIT 仓库
      repo: 'https://github.com/YLQZ/devYuSheng.git', // 服务器部署路径
      path: '/home/www/devyusheng', // 安装后置任务
      'post-setup': 'npm install', // 部署后置任务
      'post-deploy': 'npm run build'
    }
  }
}

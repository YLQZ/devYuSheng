module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '39.96.24.186',
      ref: 'origin/master',
      repo: 'https://github.com/YLQZ/devYuSheng.git',
      path: '/home/www/devyusheng',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-deploy-local': "npm install && npm run build",
      // 'post-deploy':
      //   'npm install && pm2 reload ecosystem.config.js --env production',
      // 'pre-setup': ''
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}

module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '39.96.24.186',
      ref: 'origin/master',
      repo: 'https://github.com/YLQZ/devYuSheng.git',
      path: '/home/www/devyusheng',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-setup': 'rm -rf /home/www/devyusheng',
      'pre-deploy-local': "echo 'deploy-local Done'",
      'post-deploy': 'npm install && npm run build',
      // pm2 reload ecosystem.config.js --env production
      // 'pre-setup': ''
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}

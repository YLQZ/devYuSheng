# ubuntu 18.04

## nginx 安装
  
* 安装apt版本

```

apt update
apt install nginx
```

* 检查nginx服务的状态和版本

检查状态：``` systemctl status nginx  ```
检查版本：``` nginx -v ```

* 配置防火墙
    如果您正在运行防火墙，则还需要打开端口80和443。
   ``` ufw allow 'Nginx Full'```

    防火墙状态 ```ufw status```

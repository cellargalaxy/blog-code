我没有苹果系的东西，app的密码基本我都是自己记的，对密码同步需求几乎都在汗牛充栋的web密码。
一直以来都有听闻各种密码管理器，1Password、keepass的，但由于感觉迁移有风险~~懒~~，所以一直在使用谷歌浏览器来同步密码。

直到在v2ex看了篇文章[chrome 密码泄漏了， 才知道用 chrome 保存密码等于裸奔](https://www.v2ex.com/t/872745)。
对于谷歌浏览器的明文存储还是太过震撼。还是铁定了心迁移吧。

选型直接选v2ex文章里介绍的bitwarden（vaultwarden）了。
bitwarden是一套服务端客户端都开源的密码管理套件。
但官方的服务端资源消耗太大，所以有人用rust重写过了服务端，原名bitwarden_rs，现改名叫vaultwarden。
vaultwarden直接提供docker镜像，存储默认使用sqlite。

+ https://github.com/dani-garcia/vaultwarden
+ https://hub.docker.com/r/vaultwarden/server

## 安装

先启动服务，进`ip:port:7808`就可以注册。这里得先注册一个账号。

```shell
sudo docker volume create vaultwarden_data
sudo docker run -d \
  --restart=always \
  --name vaultwarden \
  -v vaultwarden_data:/data \
  -p 7808:80 \
  vaultwarden/server:alpine


```

注册完之后，就能进入个人页面了。
但显然这样子阿猫阿狗都能来注册，是不行的。
我们把实例删掉，加两个环境变量，禁止新用户注册和不允许邀请用户，再创建一个新的实例。
新实例起来之后，就不能在注册了。

```shell
sudo docker run -d \
  --restart=always \
  --name vaultwarden \
  -e SIGNUPS_ALLOWED=false \
  -e INVITATIONS_ALLOWED=false \
  -v vaultwarden_data:/data/ \
  -p 7808:80 \
  vaultwarden/server:alpine
```

## 客户端使用

待体验

## 数据备份

待研究

参考文章

+ https://laosu.ml/2020/07/18/用bitwarden自建密码管理系统/
+ https://blog.ous50.moe/2021/03/12/vaultwarden搭建/

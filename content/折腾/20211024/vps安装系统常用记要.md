---
createdAt: '2021-10-24'
updatedAt: '2021-10-24'
---
对VPS安装新系统的常用配置的记要，延伸自[vps重装系统的习惯性操作.md](vps重装系统的习惯性操作.md)

<!--more-->

# DD系统

+ https://www.cxthhhhh.com/network-reinstall-system-modify

原系统推荐centos7，推荐优先级：C7 > U18 > D9 > U16 > D8 > 商家提供的其它系统。安装时间大约十几分钟到半个小时。如果时间太长就应该是出了什么bug。在控制面板重新安装系统后再重试DD。

+ 默认的用户名是：`root`
+ 默认的密码是：`cxthhhhh.com`

```shell
#下载脚本
wget --no-check-certificate -qO ~/Network-Reinstall-System-Modify.sh 'https://www.cxthhhhh.com/CXT-Library/Network-Reinstall-System-Modify/Network-Reinstall-System-Modify.sh' && chmod a+x ~/Network-Reinstall-System-Modify.sh

#安装centos7
bash ~/Network-Reinstall-System-Modify.sh -CentOS_7
```

# 允许使用root登录

```shell
echo root:你设置的密码 |sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo service sshd restart
```

# 更新软件

```shell
yum update -y
yum install vim -y
```

# centos关闭SELinux

+ https://www.jianshu.com/p/a7900dbf893c

```shell
#查看SELinux状态
/usr/sbin/sestatus -v      ##如果SELinux status参数为enabled即为开启状态
SELinux status:                 enabled

#临时关闭
setenforce 0

#永久关闭，需要重启
vim /etc/selinux/config
#将SELINUX=enforcing改为SELINUX=disabled
reboot
```

# 防火墙

```shell
#永久的开放需要的端口
sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --reload

#检查新的防火墙规则
firewall-cmd --list-all

#临时关闭防火墙,重启后会重新自动打开
systemctl restart firewalld
#检查防火墙状态
firewall-cmd --state
firewall-cmd --list-all
#Disable firewall
systemctl disable firewalld
systemctl stop firewalld
systemctl status firewalld
#Enable firewall
systemctl enable firewalld
systemctl start firewalld
systemctl status firewalld
```

# 修改ssh端口

一般这个配置文件里会注释掉`Port 22`，但是最好删掉注释，再加上新的ssh端口，避免万一新端口被占用而不能正常使用，但又注释掉22导致再也连不上的问题。当确认新端口能登录之后，注释22端口，启动防火墙关闭22端口。

```shell
vim /etc/ssh/sshd_config

Port 22
Port 123456

#重启ssh服务
systemctl restart sshd
```

## 修改SSH端口出错

+ https://laowangblog.com/fix-centos-modify-ssh-port-error-bind-to-port-1024-on-0-0-0-0-failed-permission-denied.html

`error: Bind to port 1024 on 0.0.0.0 failed: Permission denied.`

```shell
#安装修改工具
yum -y install policycoreutils-python
#查看 selinux 中的 SSH 端口
semanage port -l | grep ssh
#新增/删除目标端口
semanage port -add -t ssh_port_t -p tcp 1024
semanage port --delete -t ssh_port_t -p tcp 22
#重启 SSH 服务
systemctl restart sshd

```

# 安装zsh

+ https://ohmyz.sh/

```shell
yum install zsh -y
yum install git -y
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

vim ~/.zshrc
ZSH_THEME="gentoo"
source ~/.zshrc
```

# 修改

# 修改时区

+ https://majing.io/posts/10000021081212
+ https://www.cnblogs.com/comexchan/p/10781522.html
+ https://www.jianshu.com/p/6907aa71cb84

```shell
#同步时间
yum install -y ntpdate
ntpdate -u cn.pool.ntp.org

#查看时区
date -R

#修改为上海时区
timedatectl set-timezone Asia/Shanghai

#将系统时间写入硬件时间
hwclock --systohc

#重启
reboot
```

# 安装BBR

## 安装v2ray测试

+ https://github.com/v2fly/v2ray-core/releases
+ https://www.speedtest.net/
+ https://94ish.me/1635.html

```shell
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
chmod +x tcp.sh
./tcp.sh
```

```
bbr测速结果，百位数为K，小数位M
null：
BBR ：
魔改：
暴力：
```

# 创建swap

+ https://www.cnblogs.com/EasonJim/p/7487596.html

```shell
#创建文件
fallocate -l 4G /swapfile
#设置权限
chmod 600 /swapfile
#初始化交换文件
mkswap /swapfile
#启用交换文件
swapon /swapfile
#配置交换文件
vim /etc/fstab
/swapfile none swap sw 0 0
#查看
free -h
#卸载交换文件
swapoff /swapfile
```

# journal日志大小限制
```shell
#检查当前journal使用磁盘量
journalctl --disk-usage

vim /etc/systemd/journald.conf
SystemMaxUse=16M
ForwardToSyslog=no

#重启
systemctl restart systemd-journald.service

#检查journal是否运行正常以及日志文件是否完整无损坏
journalctl --verify
```

# 安装docker

+ https://yeasy.gitbook.io/docker_practice/install/centos

```shell
#卸载旧版本
sudo yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-selinux \
  docker-engine-selinux \
  docker-engine
#安装依赖包
sudo yum install -y yum-utils
#安装阿里云
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
$ sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
#安装官方源
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
#安装
sudo yum install docker-ce docker-ce-cli containerd.io
#启动 Docker
sudo systemctl enable docker
sudo systemctl start docker
#测试
docker run --rm hello-world
```

```shell
#docker日志大小限制
vim /etc/docker/daemon.json
{
  "log-driver":"json-file",
  "log-opts": {"max-size":"32m", "max-file":"3"}
}

#重启docker
systemctl daemon-reload
systemctl restart docker
```

## 常用docker镜像

```shell
sudo docker volume create portainer_data
sudo docker run -d \
--name portainer \
--restart=always \
-p 8000:8000 \
-p 9000:9000 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer

sudo docker volume create caddy_data
sudo docker volume create caddy_config
sudo docker run -d \
--name caddy \
--restart=always \
--net=host \
-v /Caddyfile:/etc/caddy/Caddyfile \
-v caddy_data:/data \
-v caddy_config:/config \
caddy

sudo docker run -d \
--name filebrowser \
--restart always \
-p 9900:80 \
-v /file:/srv \
filebrowser/filebrowser
sudo docker volume create filebrowser_data
sudo docker run -d \
--name filebrowser \
--restart always \
-e PUID=1000 \
-e PGID=1000 \
-e WEB_PORT=9900 \
-p 9900:9900 \
-v filebrowser_data:/config \
-v /file:/myfiles \
--mount type=tmpfs,destination=/tmp \
80x86/filebrowser

sudo docker run -d \
--name frps \
--restart=always \
--net=host \
-v /frps.ini:/etc/frp/frps.ini \
snowdreamtech/frps

sudo docker volume create mysql_data
sudo docker run -d \
--name mariadb \
--restart=always \
-p 3306:3306 \
-v mysql_data:/var/lib/mysql \
-v /conf.d:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=PASSWORD \
mariadb \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci


sudo docker run -d \
--name samba \
--restart=always \
--net=host \
-e PUID=1000 \
-e PGID=1000 \
-e TZ=Asia/Shanghai \
-p 139:139 \
-p 455:455 \
-p 137:137/udp \
-p 138:138/udp \
-v /path:/path \
dperson/samba -n -s "path;/path"


sudo docker run -d \
--name webdav_j \
-p 80:80 \
-v /path:/media/path \
-e USERNAME=admin \
-e PASSWORD=admin?admin \
-e TZ=Asia/Shanghai  \
-e UDI=1000 \
-e GID=1000 \
ugeek/webdav:arm


sudo docker run -d \
--name v2ray \
--restart=always \
--net macnet \
v2ray


sudo docker volume create syncthing_data
sudo docker run -d \
--name=syncthing \
--restart=always \
-e TZ=Asia/Shanghai \
-e PUID=0 \
-e PGID=0 \
-p 8384:8384 \
-p 22000:22000 \
-p 21027:21027/udp \
-v syncthing_data:/config \
-v /path:/data \
linuxserver/syncthing


sudo docker volume create qbittorrent_data
sudo docker run -d \
--name=qbittorrent \
--restart=always \
-e PUID=1000 \
-e PGID=1000 \
-e WEBUIPORT=9092 \
-p 6881:6881 \
-p 6881:6881/udp  \
-p 9092:9092  \
-v qbittorrent_data:/config \
-v /path:/Downloads \
johngong/qbittorrent:qee-latest


sudo docker volume create aria2_data
sudo docker run -d \
--name aria2 \
--restart=always \
-e RPC_SECRET=token \
-e RPC_PORT=6800 \
-p 6800:6800 \
-e LISTEN_PORT=6888 \
-p 6888:6888 \
-p 6888:6888/udp \
-v aria2_data:/config \
-v /path:/downloads \
p3terx/aria2-pro


sudo docker run -d \
--name openwrt \
--restart always \
--network macnet \
--privileged \
kanshudj/n1-openwrtgateway:r9.10.1 /sbin/init
```

## mariadb启用ssl

+ https://caibaoz.com/blog/2013/08/13/generate_ssl_certificates_and_keys_for_mysql/
+ https://mariadb.com/kb/en/securing-connections-for-client-and-server/
+ https://www.cyberciti.biz/faq/how-to-setup-mariadb-ssl-and-secure-connections-from-clients/

```shell
show global variables like '%ssl%';
```

## mysql主从配置

+ [mysql的主从数据库设置.md](mysql的主从数据库设置.md)

```shell
grant replication slave,replication client on *.* to 'user_name'@'%' identified by 'password' require ssl;
flush privileges;

stop slave;

CHANGE MASTER TO master_host = 'ip',
master_user = 'user_name',
master_password = 'password',
master_port = 3306,
master_log_file = 'log-bin.000001',
master_log_pos = 1234,
master_connect_retry = 30,
master_ssl = 1,
master_ssl_ca = '/etc/mysql/conf.d/ca-cert.pem',
master_ssl_cert = '/etc/mysql/conf.d/client-cert.pem',
master_ssl_key = '/etc/mysql/conf.d/client-key.pem';

start slave;
```

## mysql常用命令

```shell
#创建用户与授权
CREATE USER 'user_name'@'%' IDENTIFIED BY 'password';
GRANT ALL ON db_name.* TO 'user_name'@'%';
```

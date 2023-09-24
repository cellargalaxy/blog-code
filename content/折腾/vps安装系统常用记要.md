## 修改密码

```shell
passwd
```

## 创建用户

```shell
#创建用户test
sudo adduser test
#给test添加sudo权限
sudo usermod -aG sudo test
#检查test的sudo权限：(ALL : ALL) ALL
sudo -l -U test

#删除用户
sudo deluser --remove-home test
```

## 更新软件

```shell
sudo apt update -y
sudo apt upgrade -y
sudo apt install vim curl wget git htop -y
```

## 防火墙

```shell
# 安装ufw
sudo apt install ufw -y
# 启动服务
sudo systemctl enable ufw --now
# 检查状态
sudo systemctl status ufw
# 卸载ufw
sudo apt remove ufw --purge

# 启动防火墙
sudo ufw enable
# 启动状态
sudo ufw status verbose
# 暂时关闭防火墙
sudo ufw disable

# 查看规则
sudo ufw status numbered
# 删除规则，按照编号删除
sudo ufw delete 3
# 端口控制
sudo ufw allow 3541/tcp
sudo ufw deny 3541/tcp
# 重置规则
sudo ufw reset
```

## 修改ssh端口

一般这个配置文件里会注释掉`Port 22`，但是最好删掉注释，再加上新的ssh端口。
避免万一新端口被占用而不能正常使用，但又注释掉22导致再也连不上的问题。
当确认新端口能登录之后，注释22端口，启动防火墙关闭22端口。

```shell
sudo vim /etc/ssh/sshd_config

Port 22
Port 123456

#重启ssh服务
sudo systemctl restart sshd
```

## 修改主机名

```shell
sudo hostnamectl set-hostname example.com

#或者修改127.0.0.1 example.com
sudo vim /etc/hosts

#查询主机名
sudo hostnamectl

#如果zsh主机名没有更新可以exit再登录
```

## 安装zsh

```shell
sudo apt install zsh git curl -y
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

vim ~/.zshrc
ZSH_THEME="gentoo"
source ~/.zshrc
```

## 修改时区

```shell
#同步时间
sudo apt install -y ntpdate
sudo ntpdate -u cn.pool.ntp.org

#查看时区
date -R

#修改为上海时区
sudo timedatectl set-timezone Asia/Shanghai

#将系统时间写入硬件时间
sudo hwclock --systohc

#重启
reboot
```

## 安装BBR

## journal日志大小限制

```shell
#检查当前journal使用磁盘量
journalctl --disk-usage

sudo vim /etc/systemd/journald.conf
SystemMaxUse=16M
ForwardToSyslog=no

#重启
sudo systemctl restart systemd-journald.service

#检查journal是否运行正常以及日志文件是否完整无损坏
journalctl --verify
```

## 安装docker

+ https://yeasy.gitbook.io/docker_practice/install/centos

```shell
#卸载旧版本
sudo apt-get remove docker docker-engine docker.io

sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
sudo curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
sudo echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

```shell
sudo systemctl enable docker
sudo systemctl start docker

sudo groupadd docker
sudo usermod -aG docker $USER
docker run --rm hello-world
```

```shell
#docker日志大小限制
sudo vim /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://dockerproxy.com"
  ],
  "log-driver":"json-file",
  "log-opts": {"max-size":"32m", "max-file":"3"}
}

#重启docker
sudo systemctl daemon-reload
sudo systemctl restart docker
```

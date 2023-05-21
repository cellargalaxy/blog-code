https://arch.icekylin.online/


sudo apt update -y
sudo apt upgrade -y
sudo apt install vim -y

## 输入法

sudo apt-get install -y fcitx-bin
sudo apt-get install -y fcitx-table
im-config -n fcitx
reboot

# 谷歌
sudo apt-get install -y fcitx-googlepinyin fcitx-module-cloudpinyin

# 配置输入法
fcitx-config-gtk3

## 谷歌浏览器

https://www.google.com/intl/zh-CN/chrome/](https://arch.icekylin.online/)

## 其他软件

sudo apt-get install -y guake
sudo apt install -y mpv
sudo apt-get install -y htop

## gnome-tweak

sudo apt install -y gnome-tweaks
sudo apt-get install chrome-gnome-shell

天气：https://extensions.gnome.org/extension/750/openweather/
系统监控：https://extensions.gnome.org/extension/120/system-monitor/
系统监控依赖：sudo apt install gir1.2-gtop-2.0 gir1.2-nm-1.0 gir1.2-clutter-1.0 gnome-system-monitor

## docker

sudo pacman -S docker
sudo systemctl enable docker
sudo systemctl start docker

sudo vim /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://dockerproxy.com"
  ],
  "log-driver":"json-file",
  "log-opts": {"max-size":"5m", "max-file":"3"}
}

sudo systemctl enable docker
sudo systemctl start docker
docker info

sudo groupadd docker #添加docker用户组
sudo gpasswd -a $USER docker #将登陆用户加入到docker用户组中
newgrp docker #更新用户组
docker run --rm hello-world

## 主题

sudo apt install -y arc-theme

sudo add-apt-repository ppa:numix/ppa
sudo apt update
sudo apt install -y numix-icon-theme-circle

## shell

https://github.com/ohmyzsh/ohmyzsh

sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

## 截图

sudo apt install flameshot

# 快捷键启动截图
flameshot gui

docker run -d \
  --restart=always \
  --privileged \
  --network=host \
  --name v2raya \
  -v /lib/modules:/lib/modules:ro \
  -v /etc/resolv.conf:/etc/resolv.conf \
  -v /etc/v2raya:/etc/v2raya \
  mzz2017/v2raya

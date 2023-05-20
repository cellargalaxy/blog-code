## 更新源

https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/

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

https://www.google.com/intl/zh-CN/chrome/

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

curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
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

sudo groupadd docker
sudo usermod -aG docker $USER
注销/重启
docker run --rm hello-world

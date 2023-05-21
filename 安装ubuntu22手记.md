## 更新源与软件

https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/

```shell
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y vim wget curl git guake mpv htop flameshot
```

+ [ ] guake
+ [ ] flameshot gui

## 输入法

```shell
sudo apt-get install -y fcitx-bin fcitx-table
im-config -n fcitx
reboot
```

### 谷歌输入法

```shell
sudo apt-get install -y fcitx-googlepinyin fcitx-module-cloudpinyin
```

### 配置输入法

```shell
fcitx-config-gtk3
```

+ [ ] 选择输入法
+ [ ] `全局配置`-`切换激活/非激活输入法`：左右shift

## 谷歌浏览器

https://www.google.com/intl/zh-CN/chrome/

## gnome-tweak

```shell
sudo apt-get install -y gnome-tweaks chrome-gnome-shell
```

+ 天气：https://extensions.gnome.org/extension/750/openweather/
+ 系统监控：https://extensions.gnome.org/extension/120/system-monitor/
  + 系统监控依赖：`sudo apt install gir1.2-gtop-2.0 gir1.2-nm-1.0 gir1.2-clutter-1.0 gnome-system-monitor`

## docker

```shell
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
sudo systemctl restart docker
sudo docker info

sudo groupadd docker #添加docker用户组
sudo gpasswd -a $USER docker #将登陆用户加入到docker用户组中
newgrp docker #更新用户组
docker run --rm hello-world
```

```shell
docker run -d \
  --restart=always \
  --privileged \
  --network=host \
  --name v2raya \
  -v /lib/modules:/lib/modules:ro \
  -v /etc/resolv.conf:/etc/resolv.conf \
  -v /etc/v2raya:/etc/v2raya \
  mzz2017/v2raya
```

## 主题

```shell
sudo apt install -y arc-theme

sudo add-apt-repository ppa:numix/ppa
sudo apt update
sudo apt install -y numix-icon-theme-circle
```

## zsh

https://github.com/ohmyzsh/ohmyzsh

```shell
sudo apt install -y zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

vim ~/.zshrc
ZSH_THEME="gentoo"
source ~/.zshrc
```

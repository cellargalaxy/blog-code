# 更新源
```shell script
sudo cp /etc/apt/sources.list /etc/apt/sources.list.back
sudo vi /etc/apt/sources.list

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

sudo apt update -y
```

# 搜狗输入法
安装
```shell script
sudo apt-get install -y fcitx-bin
sudo apt-get install -y fcitx-table
im-config -n fcitx
reboot

sudo dpkg -i 软件包名.deb
sudo apt-get install -f
fcitx-config-gtk3
```
候选框乱码
```shell script
# 删除搜狗拼音的配置文件
rm -rf ~/.config/SogouPY ~/.config/sogou*

# 重启fcitx
pidof fcitx
kill pid
fcitx
```

# 谷歌浏览器
略

# N卡驱动
略

# 其他软件
```shell script
sudo apt-get install -y guake
sudo apt install -y mpv
sudo apt-get install -y htop
```

# gnome-tweak
```shell script
sudo apt install -y gnome-tweak-tool
sudo apt-get install chrome-gnome-shell
```

+ 天气：https://extensions.gnome.org/extension/750/openweather/
+ 系统监控：https://extensions.gnome.org/extension/120/system-monitor/
+ 系统监控依赖：`sudo apt install gir1.2-gtop-2.0 gir1.2-nm-1.0 gir1.2-clutter-1.0`
+ 截图：https://extensions.gnome.org/extension/1112/screenshot-tool/
+ N卡监控：https://extensions.gnome.org/extension/1320/nvidia-gpu-stats-tool/
+ 拓展更新https://extensions.gnome.org/extension/1166/extension-update-notifier/

# 字体
```shell script
sudo mkdir -p /usr/share/fonts/win
sudo cp /media/meltsprout/C6BC4A30BC4A1B77/Windows/Fonts/*.ttf /usr/share/fonts/win
sudo cp /media/meltsprout/C6BC4A30BC4A1B77/Windows/Fonts/*.ttc /usr/share/fonts/win

cd /usr/share/fonts/win
sudo chmod -R 644 /usr/share/fonts/win
sudo mkfontscale
sudo mkfontdir
sudo fc-cache -fv
reboot
```

# docker
```shell script
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
sudo systemctl enable docker
sudo systemctl start docker
sudo vim /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ],
  "log-driver":"json-file",
  "log-opts": {"max-size":"5m", "max-file":"3"}
}
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo docker volume create portainer_data
sudo docker run -d --name portainer --restart=always -p 8000:8000 -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:latest
```

# 主题
```shell script
sudo apt install -y arc-theme

sudo add-apt-repository ppa:numix/ppa
sudo apt update
sudo apt install -y numix-icon-theme-circle
```

# 设置硬件时间为本地时间
```shell script
sudo hwclock --localtime --systohc

sudo apt-get install ntpdate
sudo ntpdate 0.cn.pool.ntp.org
```
+ 0.cn.pool.ntp.org
+ 1.cn.pool.ntp.org
+ 2.cn.pool.ntp.org
+ 3.cn.pool.ntp.org

# shell
https://github.com/ohmyzsh/ohmyzsh

# grub启动
```shell
sudo vim /etc/default/grub

GRUB_DEFAULT=2
GRUB_TIMEOUT_STYLE=hidden
GRUB_TIMEOUT=3

update-grub
```

# 字体
```shell
# 新建一个目录，将字体文件复制到该文件夹下
sudo mkdir /usr/share/fonts/windows_font
cp xxx usr/share/fonts/windows_font
sudo chmod -R 777 /usr/share/fonts/windows_font

# 在该文件夹下执行
cd /usr/share/fonts/windows_font
sudo mkfontscale
sudo mkfontdir
sudo fc-cache -fv

# 重启
reboot
```

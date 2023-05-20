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

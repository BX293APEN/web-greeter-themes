# LightDMとWeb Greeterのインストール
1. lightdmをインストール
```bash
sudo apt install lightdm
```
<br>
<br>

2. lightdmを選択
```bash
sudo dpkg-reconfigure lightdm 
```
<br>
<br>

3. greeterパッケージのインストール
```bash
wget https://github.com/JezerM/web-greeter/releases/download/3.5.0/web-greeter-3.5.0-ubuntu.deb
sudo apt install ./web-greeter-3.5.0-ubuntu.deb
```
<br>
<br>

4. lightdm.confの編集
```bash
sudo nano /etc/lightdm/lightdm.conf
```
<br>

- エディタ
```bash
[Seat:*]
greeter-session=web-greeter
```
<br>
<br>

5. web-greeter.ymlの編集
```bash
sudo nano /etc/lightdm/web-greeter.yml
```
<br>
<br>

6. 詳細設定(HTML/CSS/JSの編集)
```bash
cd /usr/share/web-greeter/themes
```
- tsではなくjsを編集すること
<br>
<br>

## fork元
> [web-greeter](https://github.com/JezerM/web-greeter)  
> [web-greeter-themes](https://github.com/JezerM/web-greeter-themes)  
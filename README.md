# Akiの搜索
## 简介
"Akiの搜索"是一个能够综合百度搜索和谷歌搜索结果的chrome辅助应用。一般情况下，不需要任何的VPN代理，它就能够正常地在墙内访问Google和Baidu，并且在同一个页面中展示两者的搜索结果。
![Screen Shot!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic1.png)
## 基础功能
在你的Chrome浏览器上成功安装这个应用后，每当你有感兴趣的内容时，都可以第一时间通过点击地址栏附近的小图标来打开用于搜索的弹出窗口。
![Screen Shot2!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic2.png)
在提交搜索关键词后，应用程序会新建一个标签页来展示搜索结果,并且可以分解为两部分。

1. 右半部分显示的是Baidu的搜索结果，你可以依据相同的关键词使用Baidu来搜索某项特定内容（百科，地图，图片等等）。
2. 左半部分显示的是Google的搜索结果，你可以跳转到图片搜索，也能够选择搜索的语言（中文或英文）。

<img src="https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic3.png" style="width:500px;">

当然，如果你还是想看看百度和Google的原始搜索结果，你可以点击"To Google"和"To Baidu"来跳转到相关页面。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic4.png)
若你觉得这个插件的功能还不错，还可以将它设置为你的谷歌浏览器的默认搜索引擎，这样只需要在地址栏里输入关键词就能跳转到对应的搜索界面。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic5.png)
## 安装和设置

###1.使用本地文件夹来安装
Google为了加强对恶意chrome app的控制，在windows平台最新版本的chrome浏览器中已经停止了对第三方app的支持，据说Mac平台的chrome在2015年夏天也会有相同的举措。所以我还是推荐在开发者模式下通过加载本地文件夹安装。不然，如果采用传统的安装包安装方法，这个插件可能会被chrome默认禁用。

步骤如下:

1. 点击 <a href="http://github.com/AkiChen/AkiSearch/archive/master.zip">akiSearch</a> 来下载插件的压缩包，并解压。
2. 打开谷歌浏览器右上角的菜单，菜单->更多工具->扩展程序，勾选"开发者模式"。
3. 点击"加载正在开发的扩展程序"，选择压缩包中的"akiSearch"文件夹，一路确定和接受，完成安装。被选定的文件夹需要一直存储在你的电脑中。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic8.png)

###2.使用安装包来安装
这个安装方法很简单，适合windows以外的chrome浏览器用户。

步骤如下:

1. 点击 <a href="http://github.com/AkiChen/AkiSearch/archive/master.zip">akiSearch</a> 来下载插件的压缩包，并解压。
2. 打开谷歌浏览器右上角的菜单，菜单->更多工具->扩展程序，并且勾选"开发者模式"。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic6.png)
3. 将压缩包中的"akiSearch.crx"用鼠标拖动到扩展程序的页面中，一路确定和接受，完成安装。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic7.png)

###3.将"Akiの搜索"设为Chrome的默认搜索
chrome的地址栏是很方便的搜索入口，它默认使用Google搜索，也可以进行个性化的设置。

步骤如下:

1. 打开谷歌浏览器右上角的菜单，菜单->设置，点击管理搜索引擎。
<img src="https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic9.png" style="width:500px;">

2. 将滚动条拖动到底端，可以简单的用三个字段来自定义搜索引擎。

	① 搜索引擎名称（红色），填个你喜欢的名字吧。

	② 关键字（蓝色），我也不知道这个有什么用，随便填吧。

	③ 网址（黄色）:随意搜索一个关键词，将得到的页面地址填入，并且把关键词用"%s"代替。例如我搜索"tongji"，得到的页面地址是

	chrome-extension://`jiggceakakachkbfbpgimfakjpedlnkc`/main.html?q=tongji

	所以我需要在这个字段填入的网址是: chrome-extension://`jiggceakakachkbfbpgimfakjpedlnkc`/main.html?q=%s 

	灰色部分的字母是应用程序在本地的ID，各台机器不尽相同。

3. 编辑完成之后，在列表中找到新建的搜索，并且点击设置为默认搜索引擎。
![Screen Shot3!](https://raw.githubusercontent.com/AkiChen/AkiSearch/master/pics/pic10.png)

###4.通过Google IP访问谷歌
虽然被墙，但是还有一些Google的服务器地址可以被访问。"Akiの搜索"收集了很多暂时可以访问的谷歌IP地址，点击"Settings"按钮可以查看当前正在使用的谷歌IP地址。如果有一天你发现Google搜索的部分刷不出来，可能是这个IP已经被墙，点击"`Settings`"菜单中的"`更换Google IP`"。

## 程序员可能感兴趣的事情
1. 界面使用的是基于Bootstrap的<a href="http://designmodo.github.io/Flat-UI/#">Flat UI</a>，虽然是男人，但是我很喜欢它魔性的主题绿色。
2. 找到合适的Google IP很重要，这个插件中的谷歌IP列表是由<a href="https://github.com/PeerXu/google-ip-explorer">google-ip-explorer</a>获得的，它是一个Python的小程序，但是很有效。
3. 虽然官方一直不推崇使用开发网页的思维来制作Chrome APP，但是如果你很熟悉网站前端开发，创造一个有趣的Chrome APP绝不是什么难事，特别是配合<a href="http://www.ituring.com.cn/book/1421">《Chrome扩展及应用开发》</a>，其中包含了不少程序实例，很容易上手。
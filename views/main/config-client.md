---
title: 如何配置客户端
data: 2021.1.27
sidebar: true
---

-  首先就是我们要注册皮肤站 [点击这里去皮肤站](https:skin.evolvefield.cn/auth/register)

-  在你注册完之后会进入[用户中心](https:skin.evolvefield.cn/user)

**我们皮肤站的认证服务器地址(给不认真看的人看的)**

```
https://skin.evolvefield.cn/api/yggdrasil
```

## HMCL-原版配置方案
以下以 HMCL 3 为例，演示在 Minecraft 客户端中使用 Yggdrasil。

1.  打开 HMCL 3 的`新建游戏账户`界面，选择登陆方式为`外置登录（authlib-injector）`。 如果这是你第一次打开 HMCL，这个界面将会在启动时弹出。

![client1 _自定义_.png](https://i.loli.net/2021/01/27/8y6dlejsqT37Ahb.png)

1.  点击`认证服务器`旁的加号`+`，输入 EFSkin(演变的皮肤站) 的 Yggdrasil API 地址，点击`下一步`，等待识别出 EFSkin 的 Yggdrasil 后点击`完成`。 如果你曾经添加过 EFSkin 的 Yggdrasil，你也可以在`认证服务器`菜单中直接选择  EFSkin。

![client2 _自定义_.png](https://i.loli.net/2021/01/27/bvaQpqw8SWrkXts.png)  
![client3 _自定义_.png](https://i.loli.net/2021/01/27/1pmBLdJjlkXwifD.png)  
![client4 _自定义_.png](https://i.loli.net/2021/01/27/HJPfrjhaEMYx8gn.png)  

3.  在「认证服务器」菜单中选择 EFSkin(演变的皮肤站)，填写你的`邮箱`和`密码`。`用户名`即为你在 EFSkin(演变的皮肤站) 的账号的`邮箱`。 如果你只添加了一个认证服务器，那么 HMCL 3 会默认选中那个唯一的认证服务器。

![client5 _自定义_.png](https://i.loli.net/2021/01/27/H2eyvI9ZouX57qS.png)

4.  设置完成啦！你可以启动游戏了。
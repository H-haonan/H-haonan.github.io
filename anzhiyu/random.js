var posts=["2023/08/01/ipxe加tftp网络引导方案/","2023/06/29/结构测试/","2023/08/01/pxe服务器搭建/","2023/06/29/将镜像打包传入其他服务器/","2023/06/29/虚拟机部署/","2023/08/03/格式测试/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
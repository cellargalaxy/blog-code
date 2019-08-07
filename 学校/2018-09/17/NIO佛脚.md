内核是操作系统的核心，有别于其他程序，能访问全部硬件的全部权限。而对于内存(?)，操作系统都使用虚拟存储器（内存?）。对于32为系统，虚拟存储器为4G。为了安全，操作系统将虚拟存储器分为两部分。对于linux而言，第一部分最多1G分给内核用，叫内核空间，剩余的3G给其他进程用，叫用户空间。

因此：硬件->内核空间->用户空间

所以无论如何，进程发起一个IO请求，需要内核代为从硬件里获取，获取的数据暂时缓存在内核空间里，之后再从内核空间复制到用户空间。

以等待内核读取数据和数据从内核空间复制到用户空间，IO可以分为

|类型|硬件->内核|内核->用户|
|-|-|-|
|阻塞IO|recvfrom-block|block-用户数据|
|非阻塞IO|while(recvfrom()==ewouldblock)|recvfrom-block-用户数据|
|IO复用|select-block-内核监视select的socket|recvfrom-block-用户数据|
|信号驱动IO|sigaction(信号处理函数)-return-系统生成SIGIO信号通知|recvfrom-block-用户数据|
|异步IO|recvfrom-return-内核数据|用户数据-内核返回信号|

本文参考[NIO相关基础篇](https://mp.weixin.qq.com/s?__biz=MzAxODcyNjEzNQ==&mid=2247485843&idx=1&sn=9f1e5057101d3590fc87496f1c7ae5c0 "NIO相关基础篇")，其实这篇文章已经写的非常好，是我见过讲NIO最好的文章了，我只是压缩一下篇幅
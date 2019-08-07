|响应速度优先|||
|-|-|-|
|      |新生代|老年代|
|单线程|Serial/复制|Serial Old/整理|
|多线程|ParNew/复制|CMS/清除|

吞吐量=运行用户代码时间 / (运行用户代码时间 + 垃圾收集时间)。主要适合在后台运算而不需要太多交互的任务。

|吞吐量优先|||
|-|-|-|
|单线程|||
|多线程|Parallel Scavenge/复制|Parallel Old/整理|

![https://pic.yupoo.com/crowhawk/56a02e55/3b3c42d2.jpg](https://pic.yupoo.com/crowhawk/56a02e55/3b3c42d2.jpg)

当 JVM 无法为一个新的对象分配空间时会触发 Minor GC，比如当 Eden 区满了。

young GC中有部分存活对象会晋升到old gen

当准备要触发一次young GC时，如果发现统计数据说之前young GC的平均晋升大小比目前old gen剩余的空间大，则不会触发young GC而是转为触发full GC

老年代空间不足

Major GC 是清理老年代。
Full GC 是清理整个堆空间—包括年轻代和老年代。

许多 Major GC 是由 Minor GC 触发的

参考文献

[深入理解JVM(3)——7种垃圾收集器](https://crowhawk.github.io/2017/08/15/jvm_3/)

[JVM 垃圾回收算法及回收器详解](http://www.importnew.com/26383.html)
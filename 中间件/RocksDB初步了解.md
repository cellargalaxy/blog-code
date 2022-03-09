---
createdAt: '2022-03-04'
updatedAt: '2022-03-07'
---

RocksDB是一个嵌入式的KV数据库，由Facebook基于levelDB开发。
多数情况下，看一把RocksDB看做是一个在本地的，数据落盘的，大数据量的Redis，且访问性能高于远端的Redis。
RocksDB底层使用LSM树实现，但LSM树实际上并不是一棵具体的树，其实是一套存储处理算法。
LSM树对KV的持久化，保持较高性能的读的基础上，实现了追加写，提供了写入的性能。

<!--more-->

# RocksDB的LSM树的实现

RocksDB的LSM树的存储结构有三种：WAL+mentable+SSTable

## WAL

WAL(write-ahead log)(预写式日志)，WAL本质是一个追加写入的硬盘文件，是数据库技术中实现事务的一种标准方法，可以实现单机事务的原子性和持久性，同时提高写入的性能。
在修改数据时为了实现事务的原子性和持久性，并不会直接修改数据文件，因为一个事务中可能会随机修改多个字段，导致需要修改数据文件的位置也是随机的。
一是随机IO会影响性能，二是多次的随机IO写入显然无法保证原子性。
而使用WAL的话，并不会直接去修改数据文件，而是把数据修改的情况都写入WAL里。往WAL里写入的类型有两种，redo执行写操作，undo回滚写操作。
接下来可能会有五种情况：

+ 往WAL写入redo前崩溃了，重启后WAL并没有相关日志：事务无执行，数据文件无影响
+ 往WAL写入redo时崩溃了，重启后WAL的日志并不完整：事务取消执行，数据文件无影响
+ 往WAL写入redo后崩溃了，重启后WAL的日志写入完整：从WAL中读出所需修改的数据，修改数据文件
+ 修改数据文件时崩溃了：从WAL中读出所需修改的数据，继续修改数据文件
+ 修改数据文件无法进行：往WAL里写入undo，回滚写操作，事务执行失败

使用WAL支持并发读读和读写，由于都是追加写入，不支持并发写写。
如果需要读最新的数据，则需要往WAL里查询。如果WAL没查到，那数据文件里的就是最新的数据。
需要注意，写入WAL与修改数据文件并不一定是同步的。往往会合并WAL多个写操作，批量刷入硬盘里。

## mentable

mentable是RocksDB的内存数据结构，使用跳表实现，分为active memtable和immutable memtable两种。
RocksDB在写入WAL之后，会把数据写到active mentable里。
如果active mentable被写满，会新建一个active mentable，旧的会变成immutable memtable，等待被异步刷入硬盘里。

## SSTable

SSTable，SST文件，全称Sorted String Table，是持久化的，不可改的，有序的数据文件。
SSTable的文件分为多个区域，内部有索引信息能加快数据查询速度。
mentable被刷到硬盘里的数据去向就是生成SSTable。
SST文件都属于某一个层，从L0到Ln，层级越小，数据越新。新生成的SST文件首先会在L0层，但每一层的SST文件数量会有限制。
当数据达到上限时，后对该层SST文件进行合并，生成新的SST文件，放到下一层里。

### Compaction

## 读操作

## 写操作

## Column Family
kv存储时需要指定列族(Column Family)，且允许创建多个列族。列族直接使用不同的mentable和SST文件，但是公用一个WAL。
好处是可以对不同列族的mentable和SST进行不同的配置，提高读写性能。




参考文章

[从 RocksDB 看 LSM-Tree 算法设计](https://segmentfault.com/a/1190000041198407)

[一个项目的诞生(三)：RocksDB的价值](https://flynx.dev/rocksdb/)

[WAL(预写式日志)简介](https://lessisbetter.site/2020/01/02/wal-introduction/)

[你常听说的WAL到底是什么](https://cloud.tencent.com/developer/article/1623123)
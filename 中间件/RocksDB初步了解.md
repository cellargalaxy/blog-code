---
createdAt: '2022-03-04'
updatedAt: '2022-03-07'
---

RocksDB是一个嵌入式的KV数据库，由Facebook基于levelDB开发。
多数情况下，看一把RocksDB看做是一个在本地的，数据落盘的，大数据量的Redis，且访问性能高于远端的Redis。
RocksDB底层使用LSM树实现，但LSM树实际上并不是一棵具体的树，其实是一套存储处理算法。
LSM树对KV的持久化，保持较高性能的读的基础上，实现了追加写，提供了写入的性能。

<!--more-->

[从 RocksDB 看 LSM-Tree 算法设计](https://segmentfault.com/a/1190000041198407)

[一个项目的诞生(三)：RocksDB的价值](https://flynx.dev/rocksdb/)

<%--
  Created by IntelliJ IDEA.
  User: linyuh
  Date: 2019/7/16
  Time: 10:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <title>块存储性能</title>
</head>
<body>
<div id="block_store_page" title="块存储功能" style="display: none">
    <p><a href="" onclick="event.preventDefault();">首页</a>/帮助手册</p>
    <h1>块存储性能</h1>
    <p>块存储主要是将裸磁盘空间整个映射给主机使用的，就是说例如磁盘阵列里面有5块硬盘（为方便说明，假设每个硬盘1G），然后可以通过划逻辑盘、做Raid、或者LVM（逻辑卷）等种种方式逻辑划分出N个逻辑的硬盘。（假设划分完的逻辑盘也是5个，每个也是1G，但是这5个1G的逻辑盘已经于原来的5个物理硬盘意义完全不同了。例如第一个逻辑硬盘A里面，可能第一个200M是来自物理硬盘1，第二个200M是来自物理硬盘2，所以逻辑硬盘A是由多个物理硬盘逻辑虚构出来的硬盘。）</p>
</div>
</body>
</html>

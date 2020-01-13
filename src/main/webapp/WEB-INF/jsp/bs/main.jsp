<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <meta charset="utf-8">
    <title>帮助手册</title>
    <link rel="stylesheet" href="assets/css/my-dialog-ui.css">
</head>
<body>
<div style="display: none" id="main" title="帮助手册">
    <p><a href="" onclick="event.preventDefault()">首页</a>/帮助手册</p>
    <h1>帮助手册</h1>
    <p>热门文档</p>
    <a title="云服务介绍" href="" class="tooltip" id="cloud_services">云服务</a>
    <hr />
    <a title="创建快照" href="" class="tooltip" id="snapshot_create">创建快照</a>
    <hr />
    <a title="块存储性能" href="" class="tooltip" id="block_store">块存储性能</a>
</div>
<%@ include file="/WEB-INF/jsp/bs/dialog/cloudservicepage.jsp"%>
<%@ include file="/WEB-INF/jsp/bs/dialog/snapshotcreatepage.jsp"%>
<%@ include file="/WEB-INF/jsp/bs/dialog/blockstorepage.jsp"%>
</body>
<script src="jquery.js" type="text/javascript"></script>
</html>
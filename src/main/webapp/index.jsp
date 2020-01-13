<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>浮动模态框测试</title>
    <link rel="stylesheet" href="assets/css/my-dialog-ui.css">

    <style>
        .btn-list-group {
            position: relative;
        }

        .btn-list-area {
            display: none;
            position: absolute;
            left: 0;
            right: 0;
        }

        .btn-list-group:hover .btn-list-area {
            display: block;
        }

        .btn {
            display: inline-block;
            padding: .4em .7em;
            font-size: 14px;
            font-weight: 400;
            color: #6c757d;
            text-align: center;
            line-height: 1.5;
            background-color: #fff;
            border: 1px solid #e9ecef;
            cursor: pointer;
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    </style>
</head>
<body>
<div>
    <span class="btn-list-group">
  <a class="btn">操作指南</a>
  <span class="btn-list-area">
    <a id="help1" class="btn">帮助手册</a>
    <a id="help2" class="btn">操作指南</a>
  </span>
</span>
</div>

<div id="page">
    <%@ include file="WEB-INF/jsp/bs/main.jsp"%>
    <%@ include file="WEB-INF/jsp/bs/dialog/operationguidepage.jsp"%>
</div>
</body>

<script src="assets/js/dialog.js"></script>

<script src="jquery.js"></script>
<script src="assets/js/my-dialog-ui.js"></script>
</html>
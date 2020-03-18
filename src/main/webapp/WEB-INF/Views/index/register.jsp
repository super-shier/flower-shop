<%@ page language="java" pageEncoding="utf-8" contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>会员注册 - 花礼网</title>
    <meta name="description"
          content="鲜花网,选中国鲜花礼品网(花礼网)-中国鲜花网领先品牌,Hua.com专注鲜花速递服务10年,销量稳居鲜花礼品类网站首位！鲜花网提供24小时订鲜花，同城送花、异地送花服务,网上订花后最快3小时即可将鲜花快递上门,送花网站覆盖中国900多城市！"/>
    <meta name="keywords" content="中国鲜花礼品网,鲜花,鲜花网,鲜花快递,网上订花送花,中国鲜花网,鲜花礼品,网上订花,送花网站"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit|ie-comp">
    <link rel="icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">

    <link type="text/css" rel="stylesheet" href="../assets/Css/common.css">
    <link type="text/css" rel="stylesheet" href="../assets/Css/public.css">

    <style type="text/css">
        .email_autocomplete1 {
            position: relative;
            display: inline-block;
        }

        .email_autocomplete1 input {
            width: 304px;
            height: 40px;
            padding: 10px;
            border: 1px solid #d2d2d2;
        }

        .email_autocomplete1 ul {
            margin: 0;
            padding: 0;
            position: absolute;
            left: 0px;
            border: #ddd0d0 1px solid;
            background-color: #fefefe;
            overflow: hidden;
            z-index: 999;
        }

        .email_autocomplete1 ul .curr {
            background-color: #e7f4fd;
        }

        .email_autocomplete1 ul .note {
            color: #777777;
            cursor: auto;
        }

        .email_autocomplete1 ul li {
            margin: 0;
            padding: 0;
            height: 20px;
            line-height: 20px;
            list-style: none;
            padding-left: 5px;
            cursor: pointer;
        }

        .logMethod {
            float: right;
            margin-right: 38px;
            color: #ff6a00;
            font-size: 12px;
            margin-bottom: 10px;
        }

        a.logMethod {
            text-decoration: none;
        }

        a.logMethod:hover {
            text-decoration: underline;
        }

        .SMScodes {
            position: relative;
            display: inline-block;
            float: left;
        }

        .SMScodes input {
            width: 182px;
            height: 40px;
            padding: 10px;
            border: 1px solid #d2d2d2;
        }

        .btnSend {
            height: 40px;
            margin-left: 7px;
            width: 115px;
            border: 0;
            background: #FFAD0D;
            border-radius: 5px;
            color: #fff;
            margin-left: 3px \9;
            vertical-align: middle;
        }

        .btnSend:hover {
            background: #faa500;
        }

        .login-box .login-panel .login-notice {
            margin-top: 0;
        }
    </style>

    <!--[if lt IE 9]>
    <script src="../assets/Scripts/html5shiv.min.js"></script>
    <![endif]-->
    <!-- Google Tag Manager -->
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-KS4PTHC');</script>
    <!-- End Google Tag Manager -->
</head>
<body class="home">
<div class="login-wrapper">
    <input type="hidden" id="errorMsg"/>
    <div class="container">
        <div class="login-box">
            <ul class="login-tabs">
                <li><a href="login">登录</a></li>
                <li class="active"><a href="javascript:void(0)">注册</a></li>
            </ul>
            <div style="clear:both;"></div>
            <form id="regForm2">
                <input type="hidden" name="identity" value="${identity}">
                <div class="tab-content">
                    <div id="phoneRegisterPane" class="tab-pane login-panel fade in active">
                        <div class="login-notice" id="phoneErr" style="display:none;"></div>
                        <div class="form-group">
                            <div class="email_autocomplete1">
                                <input name="phone" autocomplete="off" placeholder="请填写您手机号码" nodetype="phone" value=""
                                       type="phone" id="phone" config="{width:304,height:40}"/></div>
                        </div>
                        <div class="form-group">
                            <input name="phonePassWord" id="phonePassWord" type="password" class="form-control"
                                   placeholder="请输入密码" value="">
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="">短信验证码</label>
                            <div class="input-group">
                                <div class="SMScodes"><input name="phoneCode" id="phoneCode" maxlength="6"
                                                             autocomplete="off" placeholder="短信验证码" type="text"
                                                             disabled="disabled"></div>
                                <button type="button" class="btnSend" id="getcode" onclick="sendPhoneCode()">获取验证码
                                </button>
                                <button type="button" class="btnSend" id="prompt_info" style="display:none;"><span
                                        id="regetcode"></span>秒后重新发送
                                </button>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="button" id="btnPhoneRegister"
                                onclick="phoneRegister()">立即注册
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!--底部-->
<!-- 弹出窗口-->

<!-- 弹出窗口end-->

<script type="text/javascript" src="../assets/Scripts/common.js"></script>
<script src="../assets/Scripts/mailautocomplete.js"></script>
<script src="../assets/Scripts/jquery.js"></script>
<script src="../assets/Scripts/layer.js"></script>
<script type="text/javascript" src="../assets/Scripts/statesandright.js"></script>
<script type="text/javascript">
    function sendPhoneCode() {
        var phone = $('#phone').val();
        if (!phone) {
            alert("请先输入你的手机号!");
            return;
        }
        $.post("/index/getPhoneCodeOnRegister", {phone: phone}, function (msg) {
            if (msg.status == 1) {
                $("#phone").attr("readonly", "readonly");
                $("#phoneCode").removeAttr("disabled");
            }
            layer.msg(msg.data);
        }, 'json')
    }

    function phoneRegister() {
        var phone = $('#phone').val();
        var phonePassWord = $('#phonePassWord').val();
        var phoneCode = $('#phoneCode').val();
        if (!phone) {
            alert("请输入手机号");
            return;
        }
        if (!phonePassWord) {
            alert("请输入密码啊！");
            return;
        }
        if (!phoneCode) {
            alert("请输入验证码！");
            return;
        }
        $.ajax({
            url: "registerByTel",
            type: 'post',
            dataType: 'json',
            data: $('#regForm2').serialize(),
            success: function (msg) {
                if (msg.status == 1) {
                    layer.msg(msg.data);
                    window.setTimeout("window.location.href='login'", 1000);
                } else {
                    layer.msg(msg.data);
                }
            }
        })
    }

</script>

<script type="text/javascript">
    var userId = 0;

    function reqUrlParam(paras) {
        var url = location.href;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {}
        for (i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[paras.toLowerCase()];
        if (typeof (returnValue) == "undefined") {
            return "";
        } else {
            return returnValue;
        }
    }

    function setCurUrlClass() {
        // css : class = "color_tj"
        var pathname1 = window.location.pathname;
        $("a[href='" + pathname1 + "'").addClass("color_tj");
    }

    if ($("#pjCount").length > 0) {
        $.get("/productpj/GetPJCount", function (data) {
            $("#pjCount").text(data);
        });
    }
    $(function () {
        $.get("/Home/GetLoginUserId", null, function (data) {
            userId = data;
        }, "json");
    });

    $("#kefu").click(function () {
        $.post("/Home/ZhiChiCustomerLog", null, function (data) {
            window.open('https://www.sobot.com/chat/pc/index.html?sysNum=d22b0bfa87fd42258397365c95bc5e08&partnerId=' + data + '', '在线客服', 'height=800,width=650,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
        });

    });
    $("#kefu1").click(function () {
        $.post("/Home/ZhiChiCustomerLog", null, function (data) {
            window.open('https://www.sobot.com/chat/pc/index.html?sysNum=d22b0bfa87fd42258397365c95bc5e08&partnerId=' + data + '', '在线客服', 'height=800,width=650,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
        });

    });
</script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-1701714-3');
</script>
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS4PTHC"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
</body>
</html>
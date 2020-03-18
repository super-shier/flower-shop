<%@ page language="java" pageEncoding="utf-8" contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>会员登录-花礼网</title>
    <meta name="description"
          content="鲜花网,选中国鲜花礼品网(花礼网)-中国鲜花网领先品牌,Hua.com专注鲜花速递服务10年,销量稳居鲜花礼品类网站首位！鲜花网提供24小时订鲜花，同城送花、异地送花服务,网上订花后最快3小时即可将鲜花快递上门,送花网站覆盖中国900多城市！"/>
    <meta name="keywords" content="中国鲜花礼品网,鲜花,鲜花网,鲜花快递,网上订花送花,中国鲜花网,鲜花礼品,网上订花,送花网站"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit|ie-comp">

    <script type="text/javascript" src="../assets/Scripts/749f72a08ee9437d8ccfd302db0539d3.js"></script>
    <link rel="icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">

    <link type="text/css" rel="stylesheet" href="../assets/Css/common.css">
    <link type="text/css" rel="stylesheet" href="../assets/Css/public.css">

    <style type="text/css">
        .login-box .login-panel .login-notice {
            min-height: 1px;
        }

        .email_autocomplete1, .phoneNum, .SMScodes {
            position: relative;
            display: inline-block;
        }

        .email_autocomplete1 input, .phoneNum input, .SMScodes input {
            width: 267px;
            height: 40px;
            padding: 10px;
            border: 1px solid #d2d2d2;
        }

        .SMScodes input {
            width: 145px;
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

        .login-box .login-panel .btn {
            margin-top: 31px;
        }

        .other-login-ways ul {
            list-style: none;
            font-size: 12px;
            overflow: hidden;
            padding: 0;
        }

        .other-login-ways li {
            float: left;
        }

        .other-login-ways .line {
            padding: 0 10px;
        }

        .login_q span {
            display: inline-block;
            border: 1px solid #fe6600;
            border-radius: 2px;
            font-size: 12px;
            color: #fe6600;
            display: none;
            position: relative;
            padding: 0 2px;
        }

        .login_q span:before {
            content: '';
            display: inline-block;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 9px solid #fe6600;
            position: absolute;
            top: -9px;
            left: 5px;
        }

        .login_q span:after {
            content: '';
            display: inline-block;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 9px solid #fff;
            position: absolute;
            top: -8px;
            left: 5px;
        }

        .login_q .qq_kuaijie:before {
            left: 52px;
        }

        .login_q .qq_kuaijie:after {
            left: 52px;
        }

        .login_q .zfb_kuaijie:before {
            left: 101px;
        }

        .login_q .zfb_kuaijie:after {
            left: 101px;
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
    <div class="container">
        <div class="login-box">
            <!-- 登录/注册tab -->
            <ul class="login-tabs">
                <li class="active"><a href="javascript:void(0)">登录</a></li>
                <li><a href="/index/register">注册</a></li>
            </ul>
            <!-- 登录/注册tab End -->
            <div style="clear:both;"></div>
            <form name="myForm" id="myForm">
                <div class="tab-content">
                    <!-- 普通登录 -->
                    <div id="loginPane" class="tab-pane login-panel fade in active">
                        <!--登录信息提示区begin-->
                        <div class="login-notice" id="Enr">
                        </div>
                        <!--登录信息提示区 end-->
                        <div class="form-group">
                            <label class="sr-only">用户名</label>
                            <div class="input-group">
                                <div class="input-group-addon"><span class="ico ico-user"></span></div>
                                <div class="email_autocomplete1">
                                    <input name="mobile" autocomplete="off" placeholder="手机号" type="tel" id="mobile"
                                           config="{width:267,height:40}"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="sr-only">密码</label>
                            <div class="input-group">
                                <div class="input-group-addon"><span class="ico ico-lock"></span></div>
                                <div class="email_autocomplete1">
                                    <input name="passWord" autocomplete="off" placeholder="用户密码" type="password"
                                           id="passWord"/>
                                </div>
                            </div>
                        </div>

                        <div class="checkbox">
                            <input type="hidden" name="DoIt" value="ok"/>
                            <input type="hidden" id="backUrl" name="backUrl" value="/"/>
                            <a class="pull-right" href="" target="_blank">忘记密码？</a>
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="button" onclick="login()"
                                id="dosubmit">登　录
                        </button>
                    </div>
                    <!-- 普通登录 End -->
                </div>
            </form>
        </div>
    </div>
</div>

<div class="modal fade com-modal" id="passwordModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">你第一次使用该手机号登录，请先验证。</h4>
            </div>
            <div class="modal-body">
                <iframe src="" width="100%" height="210" frameborder="0" id="attPage"></iframe>
            </div>
        </div>
    </div>
</div>
<!--底部-->
<script type="text/javascript" src="../assets/Scripts/common.js"></script>

<script src="../assets/Scripts/mailautocomplete.js"></script>
<script type="text/javascript">
    function login() {
        if (!$('#mobile').val() || !$('#passWord').val()) {
            alert("手机号或验证码不能为空");
            return;
        }
        $.ajax({
            url: 'checkLogin',
            type: 'post',
            dataType: 'json',
            data: $('#myForm').serialize(),
            success: function (msg) {
                if (msg.status == 1) {
                    layer.msg(msg.data);
                    if ($('#identity').val() == "admin")
                        window.setTimeout("window.location.href='../admin/home'", 1000);
                    else
                        window.setTimeout("window.location.href='index'", 1000);
                } else {
                    layer.msg(msg.data);
                }
            }
        })
    }


</script>
<script src="../assets/Scripts/jquery.js"></script>
<script type="text/javascript" src="../assets/Scripts/statesandright.js"></script>
<script src="../assets/Scripts/layer.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="../assets/Scripts/dcc02026fb994a3b8f91704cff5a6a0e.js"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-1701714-3');
</script>
</body>
</html>
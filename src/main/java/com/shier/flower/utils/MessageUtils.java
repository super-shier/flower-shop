package com.shier.flower.utils;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 * 腾讯云短信SMS服务
 */
public class MessageUtils {
    private static final Logger logger = LoggerFactory.getLogger(MessageUtils.class);
    /**
     * 短信应用SDK AppKey
     */
    private static final String APP_KEY = "ad66a6f02fca498412949c82d1353615";
    /**
     * 短信应用SDK AppID
     */
    private static final int APP_ID = 1400088247;
    /**
     * 短信模板ID，需要在短信应用中申请(这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请)
     */
    private static final int TEMPLATE_ID = 115190;
    /**
     * 短信签名(这里的签名"腾讯云"只是一个示例，真实的签名需要在短信控制台中申请，另外签名参数使用的是`签名内容`，而不是`签名ID`)
     */
    private static final String SMS_SIGN = "有什么理由不努力";


    public static void sendMessage(String tel, String checkCode) {
        try {
            String[] params = new String[1];
            params[0] = checkCode;
            SmsSingleSender ssender = new SmsSingleSender(APP_ID, APP_KEY);
            // 签名参数未提供或者为空时，会使用默认签名发送短信
            SmsSingleSenderResult result = ssender.sendWithParam("86", tel, TEMPLATE_ID, params, SMS_SIGN, "", "");
            logger.info("********短息发送结果result:{}", result.toString());
        } catch (HTTPException e) {
            // HTTP响应码错误
            e.printStackTrace();
        } catch (JSONException e) {
            // json解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络IO错误
            e.printStackTrace();
        }
    }
}

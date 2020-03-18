package com.shier.flower.utils;


import java.util.Random;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */
public class RandomCode {
    public static String getRandomCode() {
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder(4);
        for (int i = 0; i < 4; i++) {
            char ch = str.charAt(new Random().nextInt(str.length()));
            sb.append(ch);
        }
        return sb.toString();
    }
}

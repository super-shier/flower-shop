package com.shier.flower.entity;

import lombok.Data;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
public class Address {
    private int id;
    private String receiver;
    private String addr;
    private String tel;
    private String customer_id;
}

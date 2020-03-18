package com.shier.flower.entity;

import lombok.Data;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
public class OrderDetail {
    private int id;
    private int flower_id;
    private int address_id;
    private int order_id;
    private String delivery_time;
    private String message;
}

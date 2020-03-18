package com.shier.flower.entity;

import lombok.Data;

import java.util.Date;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
public class Order {
    private int id;
    private int customer_id;
    private int status;
    private Date order_time;
}

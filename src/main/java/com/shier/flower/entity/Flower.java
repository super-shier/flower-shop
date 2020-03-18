package com.shier.flower.entity;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
@ToString
public class Flower implements Serializable {
    private int id;
    private String name;
    private String description;
    private String detail;
    private int usage_id;
    private int material_id;
    private int type_id;
    private int sller_id;
    private String imgurl;
    private double price;
}

package com.shier.flower.entity;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
@ToString
public class User implements Serializable {
    private int id;
    private String name;
    private int gender;
    private String email;
    private String tel;
    private String password;
    private String imgurl;
    private double money;
    private int status;
    private String deal_pwd;
    private Date create_time;
    private Date modify_time;
    private int level;
}

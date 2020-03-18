package com.shier.flower.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
public class Admin implements Serializable {
    private int id;
    private String name;
    private int gender;
    private String email;
    private String tel;
    private String password;
    private String imgurl;
}

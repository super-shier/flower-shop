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
public class Usage implements Serializable {
    private int id;
    private String usage;
}

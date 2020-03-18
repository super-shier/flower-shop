package com.shier.flower.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.ToString;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@Data
@ToString
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class Type {
    private int id;
    private String type;
}

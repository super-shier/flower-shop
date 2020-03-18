package com.shier.flower.mapper;

import com.shier.flower.entity.User;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

public interface SellerMapper {
    User getSeller(String username) throws Exception;

    void insertByEmail(User user) throws Exception;

    void insertByTel(User user) throws Exception;
}

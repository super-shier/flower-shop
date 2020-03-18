package com.shier.flower.mapper;

import com.shier.flower.entity.Customer;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

public interface CustomerMapper {
    Customer getCustomer(String username) throws Exception;

    void insertByEmail(Customer customer) throws Exception;

    void insertByTel(Customer customer) throws Exception;

}

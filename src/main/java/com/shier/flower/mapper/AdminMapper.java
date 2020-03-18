package com.shier.flower.mapper;


import com.shier.flower.entity.Admin;
import org.apache.ibatis.annotations.Param;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

public interface AdminMapper {
    Admin getAdmin(@Param("username") String username) throws Exception;
}

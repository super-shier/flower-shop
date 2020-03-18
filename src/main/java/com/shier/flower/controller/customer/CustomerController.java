package com.shier.flower.controller.customer;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@RequestMapping("/customer")
@Controller
public class CustomerController {
    @RequestMapping("home")
    public String customerHome() {
        return "customer/index";
    }
}

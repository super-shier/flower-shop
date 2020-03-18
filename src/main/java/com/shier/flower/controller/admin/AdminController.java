package com.shier.flower.controller.admin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */
@RequestMapping("/admin")
@Controller
public class AdminController {
    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @RequestMapping("home")
    public String adminHome() {
        logger.info("**********path:/admin/home");
        return "admin/index";
    }
}

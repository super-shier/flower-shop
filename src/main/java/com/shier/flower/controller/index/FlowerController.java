package com.shier.flower.controller.index;

import com.shier.flower.entity.Material;
import com.shier.flower.entity.Type;
import com.shier.flower.entity.Usage;
import com.shier.flower.mapper.FlowerMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@RequestMapping("/flower")
@Controller
public class FlowerController {
    private ApplicationContext applicationContext;

    FlowerController() {
        applicationContext = new ClassPathXmlApplicationContext("spring/applicationContext.xml");
    }

    @ResponseBody
    @RequestMapping("/getTypes")
    public List<Type> getTypes() throws Exception {
        FlowerMapper flowerMapper = (FlowerMapper) applicationContext.getBean("flowerMapper");
        List<Type> types = flowerMapper.getTypes();
        System.out.println(types);
        return types;
    }

    @ResponseBody
    @RequestMapping("/getMaterials")
    public List<Material> getMaterials() throws Exception {
        FlowerMapper flowerMapper = (FlowerMapper) applicationContext.getBean("flowerMapper");
        List<Material> materials = flowerMapper.getMaterials();
        System.out.println(materials);
        return materials;
    }

    @ResponseBody
    @RequestMapping("/getUsages")
    public List<Usage> getUsages() throws Exception {
        FlowerMapper flowerMapper = (FlowerMapper) applicationContext.getBean("flowerMapper");
        List<Usage> usages = flowerMapper.getUsages();
        System.out.println(usages);
        return usages;
    }

}

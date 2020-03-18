package com.shier.flower.mapper;


import com.shier.flower.entity.Flower;
import com.shier.flower.entity.Material;
import com.shier.flower.entity.Type;
import com.shier.flower.entity.Usage;

import java.util.List;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

public interface FlowerMapper {
    List<Type> getTypes() throws Exception;

    List<Material> getMaterials() throws Exception;

    List<Usage> getUsages() throws Exception;

    void insertFlower(Flower flower) throws Exception;
}

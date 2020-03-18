package com.shier.flower.controller.index;

import com.shier.flower.entity.Admin;
import com.shier.flower.entity.Customer;
import com.shier.flower.entity.User;
import com.shier.flower.mapper.AdminMapper;
import com.shier.flower.mapper.CustomerMapper;
import com.shier.flower.mapper.SellerMapper;
import com.shier.flower.utils.RandomCode;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Objects;

import static com.shier.flower.utils.Md5.md5Password;

/**
 * @Author: liyunbiao
 * @Date: 2019/6/5 15:43
 */

@RequestMapping("/index")
@Controller
public class IndexController {
    private static final Logger logger = LoggerFactory.getLogger(IndexController.class);

    /**
     * 状态字段
     */
    private static final String STATUS = "status";
    private static final String CUSTOMER = "customer";
    private static final String SELLER = "seller";
    private static final String CUSTOMER_MAPPER = "customerMapper";
    private static final String SELLER_MAPPER = "sellerMapper";
    private static final String PHONE_CHECK_CODE = "phoneCheckCode";
    private ApplicationContext applicationContext;

    IndexController() {
        applicationContext = new ClassPathXmlApplicationContext("spring/applicationContext.xml");
    }

    @RequestMapping("/index")
    public String index() {
        logger.info("********转到主页！");
        return "index/index";
    }

    @RequestMapping("/login")
    public String login() {
        logger.info("********转到登陆！");
        return "index/login";
    }


    //普通账号密码登录
    @ResponseBody
    @RequestMapping("/checkLogin")
    public String checkLogin(String passWord, String mobile, HttpSession session) throws Exception {
        logger.info("********passWord:{},mobile:{}", passWord, mobile);
        JSONObject result = new JSONObject();
        result.put(STATUS, "0");
        result.put("data", "账号或密码错误!");

        CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
        Customer customer = customerMapper.getCustomer(mobile);
        if (Objects.nonNull(customer) && Objects.equals(customer.getPassword(), md5Password(passWord))) {
            result.put(STATUS, "1");
            result.put("data", "用户登录成功！");
            session.setAttribute(CUSTOMER, customer);
        }

        SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
        User user = sellerMapper.getSeller(mobile);
        if (Objects.nonNull(user) && Objects.equals(user.getPassword(), md5Password(passWord))) {
            result.put(STATUS, "1");
            result.put("data", "商家登录成功！");
            session.setAttribute(SELLER, user);
        }


        AdminMapper adminMapper = (AdminMapper) applicationContext.getBean("adminMapper");
        Admin admin = adminMapper.getAdmin(mobile);
        if (Objects.nonNull(admin) && Objects.equals(admin.getPassword(), md5Password(passWord))) {
            result.put(STATUS, "1");
            result.put("data", "管理员登录成功！");
            session.setAttribute("admin", admin);
        }

        return result.toString();
    }

    //通过手机号登录，获取手机验证码,这里只做customer与seller的判断，admin有问题就直接修改数据库啦
    @ResponseBody
    @RequestMapping("/getPhoneCodeOnLogin")
    public String getPhoneCodeOnLogin(String phone, String identity, HttpSession session) throws Exception {
        JSONObject result = new JSONObject();
        result.put(STATUS, "0");
        if (identity.equals(CUSTOMER)) {
            CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
            if (Objects.nonNull(customerMapper.getCustomer(phone))) {
                result.put("data", "该手机号尚未被注册，请先注册！");
                return result.toString();
            }
        } else {
            SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
            if (Objects.isNull(sellerMapper.getSeller(phone))) {
                result.put("data", "该手机号尚未被注册，请先注册！");
                return result.toString();
            }
        }
        return sendPhoneCode(phone, session);
    }


    @RequestMapping("/logout")
    public String logout(String identity, HttpSession session) {
        session.removeAttribute(identity);
        return "redirect:/index/index";
    }

    //只提供customer和seller的注册入口
    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register(String identity, Map<String, Object> map) {
        logger.info("********identity:{}", identity);
        map.put("identity", identity);
        logger.info("********转到注册页！");
        return "index/register";
    }

    //邮箱注册
    @ResponseBody
    @RequestMapping(value = "/registerByEmail", method = RequestMethod.POST)
    public String register(String identity, String Email, String PassWord, String emailCode, HttpSession session) throws Exception {
        JSONObject result = new JSONObject();
        result.put(STATUS, "1");
        result.put("data", "注册成功！");
        String emailCheckCode = (String) session.getAttribute("emailCheckCode");
        logger.info("********emailCheckCode:{}", emailCheckCode);
        if (!emailCheckCode.equals(emailCode)) {
            result.put(STATUS, "0");
            result.put("data", "验证码输入不正确！");
            return result.toString();
        }

        if (identity.equals(CUSTOMER)) {
            CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
            Customer customer = new Customer();
            customer.setEmail(Email);
            customer.setPassword(md5Password(PassWord));
            customerMapper.insertByEmail(customer);
            return result.toString();
        } else {
            SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
            User user = new User();
            user.setEmail(Email);
            user.setPassword(PassWord);
            sellerMapper.insertByEmail(user);
            return result.toString();
        }
    }


    @ResponseBody
    @RequestMapping(value = "/getEmailCode")
    public String getEmailCode(String email, HttpSession session) throws Exception {
        JSONObject result = new JSONObject();
        result.put(STATUS, "1");
        result.put("data", "邮件发送成功！");

        CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
        Customer customer = customerMapper.getCustomer(email);
        SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
        User user = sellerMapper.getSeller(email);
        if (customer != null || user != null) {
            result.put(STATUS, "0");
            result.put("data", "该邮箱已被注册！");
            return result.toString();
        }
        //随机生成4位验证码
        String code = RandomCode.getRandomCode();
        logger.info("********code:{}", code);
        //把验证码写入session，方法注册验证
        session.setAttribute("emailCheckCode", code);
        return result.toString();
//        if (MailUtils.sendMail(email, code)) {
//            //把验证码写入session，方法注册验证
//            session.setAttribute("emailCheckCode", code);
//            return result.toString();
//        } else {
//            result.put(STATUS, "0");
//            result.put("data", "邮件发送失败！");
//            return result.toString();
//        }

    }

    private JSONObject checkPhoneCode(String phoneCode, HttpSession session) {
        JSONObject result = new JSONObject();
        result.put(STATUS, "1");
        result.put("data", "注册成功！");
        String phoneCheckCode = (String) session.getAttribute(PHONE_CHECK_CODE);
        logger.info("*********短信验证码phoneCheckCode:{}", phoneCheckCode);
        if (!Objects.equals(phoneCheckCode, phoneCode)) {
            result.put(STATUS, "0");
            result.put("data", "验证码输入不正确！");
        }
        return result;
    }

    @ResponseBody
    @RequestMapping("/registerByTel")
    public String registerByTel(String identity, String phone, String phonePassWord, String phoneCode, HttpSession session) throws Exception {
        JSONObject result = checkPhoneCode(phoneCode, session);
        if (Objects.equals(result.getString(STATUS), "0")) {
            return result.toString();
        }
        if (!Objects.equals(identity, CUSTOMER)) {
            CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
            Customer customer = new Customer();
            customer.setTel(phone);
            customer.setPassword(md5Password(phonePassWord));
            customerMapper.insertByTel(customer);
            return result.toString();
        } else {
            SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
            User user = new User();
            user.setTel(phone);
            user.setPassword(phonePassWord);
            sellerMapper.insertByEmail(user);
            return result.toString();
        }
    }


    @ResponseBody
    @RequestMapping("/getPhoneCodeOnRegister")
    public String getPhoneCodeOnRegister(String phone, HttpSession session) throws Exception {
        JSONObject result = new JSONObject();
        CustomerMapper customerMapper = (CustomerMapper) applicationContext.getBean(CUSTOMER_MAPPER);
        Customer customer = customerMapper.getCustomer(phone);
        SellerMapper sellerMapper = (SellerMapper) applicationContext.getBean(SELLER_MAPPER);
        User user = sellerMapper.getSeller(phone);
        if (Objects.nonNull(customer) || Objects.nonNull(user)) {
            result.put(STATUS, "0");
            result.put("data", "该手机号已被注册！");
            return result.toString();
        }
        return sendPhoneCode(phone, session);
    }


    @RequestMapping("/orderDetail")
    public String orderDetail() {
        logger.info("********转到订单详情页！");
        return "customer/orderDetail";
    }

    /**
     * 发送短信验证码
     *
     * @param phone   手机号
     * @param session session
     * @return 发送结果
     */
    private String sendPhoneCode(String phone, HttpSession session) {
        JSONObject result = new JSONObject();
        //随机生成4位验证码
        String code = RandomCode.getRandomCode();
        logger.info("********code:{}", code);
        //TODO 发送短信 MessageUtils.sendMessage(phone, code);
        //把验证码写入session，方法注册验证
        session.setAttribute(PHONE_CHECK_CODE, code);
        result.put(STATUS, "1");
        result.put("data", "短信发送成功！");
        return result.toString();
    }

}

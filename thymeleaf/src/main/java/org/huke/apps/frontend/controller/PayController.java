package org.huke.apps.frontend.controller;

import com.alibaba.fastjson.JSON;
import org.huke.apps.frontend.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author huke10591
 * @create 2015/7/28
 */
@Controller
@RequestMapping("/pay")
public class PayController {

    @RequestMapping("/user.do")
    public void testUser(User user) {

        System.out.println("用户信息: ");
        System.out.println(JSON.toJSONString(user));
    }

}

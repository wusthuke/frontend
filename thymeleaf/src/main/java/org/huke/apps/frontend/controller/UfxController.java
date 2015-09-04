package org.huke.apps.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * @author huke10591
 * @create 2015/8/6
 */
@Controller
@RequestMapping("/ufx")
public class UfxController {

    @RequestMapping("/pay_identity_auth")
    @ResponseBody
    public Map auth(@RequestParam Map params) {

        System.out.println("params: " + params);
        
        return params;
    }
}

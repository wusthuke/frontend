package org.huke.apps.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @author huke10591
 * @create 2015/7/30
 */
@Controller
public class IndexController {
    
    @RequestMapping("/index/{channel}")
    public String index(@PathVariable("channel") String channelName, 
                        ModelMap modelMap) {
        
        modelMap.put("view", String.format("views/%s/%s", channelName, "index"));
        return modelMap.get("view").toString();
    }
    
    @RequestMapping("/index/{channel}/{type}/{path}")
    public String index(@PathVariable("channel") String channelName, 
                        @PathVariable("type") String type,
                        @PathVariable("path") String path,
                        ModelMap modelMap) {
        
        modelMap.put("view", String.format("views/%s/%s/%s", channelName, type, path));
        return modelMap.get("view").toString();
    }
    
    @RequestMapping("/index/**")
    public String index(HttpServletRequest request) {

        System.out.println("hello:  " + request.getRequestURI().substring("/index".length()));
        
        return request.getRequestURI().substring("/index".length());
    }
    
    @RequestMapping("/")
    public String index() {
        return "index";
    }
}

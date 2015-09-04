package org.huke.apps.frontend.controller;

/**
 * @author huke10591
 * @create 2015/8/7
 */
public class Test {

    public static void main(String[] args) throws  Exception {
        
        String msg = "\\u65e0\\u8def\\u7531\\u6216\\u6e20\\u9053\\u5173\\u95ed";

        System.out.println(new String(msg.getBytes(), "UTF-8"));

        System.out.println(tozhCN(msg));
    }
    // 将Unicode码转换为中文
    public static String tozhCN(String unicode) {
        StringBuffer gbk = new StringBuffer();
        String hex[] = unicode.split("\\\\u");
        for (int i = 1; i < hex.length; i++) { // 注意要从 1 开始，而不是从0开始。第一个是空。
            int data = Integer.parseInt(hex[i], 16); // 将16进制数转换为 10进制的数据。
            gbk.append((char) data); // 强制转换为char类型就是我们的中文字符了。
        }
        return gbk.toString();
    }
    
}

/**
 * Created by LaoTao on 2017/3/29.
 */
function createNavigationBar() {
    //document.write("<ul id=\"nav\" class=\"sf-menu\">");
    //document.write("<li class=\"current-menu-item\"><a href=\"index.html\">护肤品<i><b></b></i></a></li>");
    //document.write("<li><a href=\"healthindex.html\">保健品<i><b></b></i></a></li>");
    //document.write("<li><a href=\"babyindex.html\">婴儿用品<i><b></b></i></a></li>");
    //document.write("<li><a href=\"otherindex.html\">其他商品<i><b></b></i></a></li>");
    //document.write("<li><a href=\"portfolio.html\">采购+邮寄<i><b></b></i></a></li>");
    //document.write("<li><a href=\"contact.html\">联系我<i><b></b></i></a></li>");
    //document.write("</ul>");
    alert("aaa");
}

function getArea() {
    var r = 10;
    var sqrR = r * r;
    var s = Math.PI * sqrR;
    if (s > 300) {
        alert(">300,半径为" + r + "cm的圆的面积是" + s + "平方米");
    }else {
        alert("<300,半径为" + r + "cm的圆的面积是" + s + "平方米");
    }
}

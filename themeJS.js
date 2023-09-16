function cur_date() {
    var d = new Date(), str = '';
    var month = d.getMonth() + 1;
    month = (month < 10 ? month : month);
    str += month + "月"; //获取当前月份（0——11）
    var date = d.getDate();
    date = (date < 10 ? date : date);
    str += date + "日";
    return str;
}
var date = cur_date();

var html = document.getElementById("html");

if (date == '12月13日') {
    html.setAttribute("style", "filter:grayscale(1);")
    document.getElementById("info").innerHTML = "今天 - 12月13日 - 国家公祭日.<br><a href=https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E5%85%AC%E7%A5%AD%E6%97%A5/13131941 target='_blank'>了解-国家公祭日.</a> <a href=https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80/26188 target='_blank'>了解-南京大屠杀.</a> <a href=https://baike.baidu.com/item/%E6%8A%97%E6%97%A5%E6%88%98%E4%BA%89/128498 target='_blank'>了解-抗日战争.</a>";
}

if (date == '9月18日') {
    html.setAttribute("style", "filter:grayscale(1);")
    document.getElementById("info").innerHTML = "今天 - 9月18日 - 九·一八事变.<br><a href=https://baike.baidu.com/item/%E4%B9%9D%C2%B7%E4%B8%80%E5%85%AB%E4%BA%8B%E5%8F%98/2573930 target='_blank'>了解-九·一八事变.</a> <a href=https://baike.baidu.com/item/%E6%8A%97%E6%97%A5%E6%88%98%E4%BA%89/128498 target='_blank'>了解-抗日战争.</a>";
}

console.log(date);
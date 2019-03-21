// 获取所有有关的对象
var box = document.getElementById("box");
var screen = box.children[0];//获得相框
var imgWidth = screen.offsetWidth;//图片显示宽度
var ulObj = screen.children[0];
var list = ulObj.children; //图片的li的集合
var olObj = screen.children[1];
var arr = document.getElementById("arr");//获得左右焦点

// 创建小按钮
var pic = 0;
for(var i=0;i<list.length;i++){
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    liObj.innerHTML;
    //liObj.innerHTML=i+1;在小按钮中添加数字
    // 给每一个小按钮添加自定义属性，记录下标
    liObj.index = i;
    // 给每一个小按钮绑定事件
    liObj.onmouseover=function () {
        for(var j=0;j<olObj.children.length;j++){
            olObj.children[j].removeAttribute("class");//清除所有小按钮的样式
        }
        this.className="current";
        pic =  this.index;
        animate(ulObj,-pic*imgWidth)
    }
}
// 给第一个小按钮添加样式
olObj.children[0].className="current";

// 将第一个li克隆一份追加到ul中
ulObj.appendChild(ulObj.children[0].cloneNode(true))
// 设置自动播放
setInterval(clickHandle,3000)
// 显示和隐藏左右焦点按钮
// box.onmouseover = function () {
//     arr.style.display = "block";
// }
// box.onmouseout = function () {
//     arr.style.display = "none";
// }
// 右边焦点
document.getElementById("right").onclick=clickHandle;
function clickHandle() {
    if(pic>=list.length-1){
        pic=0;
        ulObj.style.left="0px";
    }
    pic++;
    animate(ulObj,-pic*imgWidth);
    // 如果图片为第4张，清除所有小按钮的样式，第一个小按钮有颜色
    if(pic == list.length-1){
        olObj.children[olObj.children.length-1].className="";
        olObj.children[0].className="current";
    }else{
        for(var i=0;i<olObj.children.length;i++){
            olObj.children[i].className="";
        }
        olObj.children[pic].className="current";
    }
}
// 左边焦点
document.getElementById("left").onclick=function () {
    if(pic==0){
        pic=list.length-1;
        ulObj.style.left=-pic*imgWidth+"px";
    }
    pic--;
    animate(ulObj,-pic*imgWidth);

    // 设置小按钮的样式
    for(var i=0;i<olObj.children.length;i++){
        olObj.children[i].className="";
    }
    olObj.children[pic].className="current";

}
// 设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        var step = 1592;//每次移动的距离
        step = current < target ? step : -step;
        current += step;//当前移动到位置
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);//清理定时器
            element.style.left = target + "px";//直接到达目标
        }
    }, 10);
}

// 小轮播图1开始
// 获取所有有关的对象
var box1 = document.getElementById("box1");
var screen1 = box1.children[0];//获得相框
var imgWidth1 = screen1.offsetWidth;//图片显示宽度
var ulObj1 = screen1.children[0];
var list1 = ulObj1.children; //图片的li的集合
var olObj1 = screen1.children[1];
var arr1 = document.getElementById("arr1");//获得左右焦点

// 创建小按钮
var pic1 = 0;
for(var i=0;i<list1.length;i++){
    var liObj = document.createElement("li");
    olObj1.appendChild(liObj);
    liObj.innerHTML=i+1;
    // 给每一个小按钮添加自定义属性，记录下标
    liObj.index = i;
    // 给每一个小按钮绑定事件
    liObj.onmouseover=function () {
        for(var j=0;j<olObj1.children.length;j++){
            olObj1.children[j].removeAttribute("class");//清除所有小按钮的样式
        }
        this.className="current1";
        pic1 =  this.index;
        animate1(ulObj1,-pic1*imgWidth1)
    }
}
// 给第一个小按钮添加样式
olObj1.children[0].className="current1";

// 将第一个li克隆一份追加到ul中
ulObj1.appendChild(ulObj1.children[0].cloneNode(true))
// 设置自动播放
 setInterval(clickHandle1,3000)
// 显示和隐藏左右焦点按钮
// box1.onmouseover = function () {
//     arr1.style.display = "block";
// }
// box1.onmouseout = function () {
//     arr1.style.display = "none";
// }
// 右边焦点
document.getElementById("right1").onclick=clickHandle1;
function clickHandle1() {
    if(pic1>=list1.length-1){
        pic1=0;
        ulObj1.style.left="0px";
    }
    pic1++;
    animate1(ulObj1,-pic1*imgWidth1);
    // 如果图片为第6张，清除所有小按钮的样式，第一个小按钮有颜色
    if(pic1 == list1.length-1){
        olObj1.children[olObj1.children.length-1].className="";
        olObj1.children[0].className="current1";
    }else{
        for(var i=0;i<olObj1.children.length;i++){
            olObj1.children[i].className="";
        }
        olObj1.children[pic1].className="current1";
    }
}
// 左边焦点
document.getElementById("left1").onclick=function () {
    if(pic1==0){
        pic1=list1.length-1;
        ulObj1.style.left=-pic1*imgWidth1+"px";
    }
    pic1--;
    animate1(ulObj1,-pic1*imgWidth1);

    // 设置小按钮的样式
    for(var i=0;i<olObj1.children.length;i++){
        olObj1.children[i].className="";
    }
    olObj1.children[pic1].className="current1";

}
// 设置任意的一个元素,移动到指定的目标位置
function animate1(e, t) {
    clearInterval(e.timeId);
    //定时器的id值存储到对象的一个属性中
    e.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current1 = e.offsetLeft;
        var step1 = 10;//每次移动的距离
        step1 = current1 < t ? step1 : -step1;
        current1 += step1;//当前移动到位置
        if (Math.abs(current1 - t) > Math.abs(step1)) {
            e.style.left = current1 + "px";
        } else {
            clearInterval(e.timeId);//清理定时器
            e.style.left = t + "px";//直接到达目标
        }
    }, 10);
}
// 小轮播图1结束



// 小轮播图2开始
// 获取所有有关的对象
var box2 = document.getElementById("box2");
var screen2 = box2.children[0];//获得相框
var imgWidth2 = screen2.offsetWidth;//图片显示宽度
var ulObj2 = screen2.children[0];
var list2 = ulObj2.children; //图片的li的集合
var olObj2 = screen2.children[1];
var arr2 = document.getElementById("arr2");//获得左右焦点

// 创建小按钮
var pic2 = 0;
for(var i=0;i<list2.length;i++){
    var liObj = document.createElement("li");
    olObj2.appendChild(liObj);
    liObj.innerHTML=i+1;
    // 给每一个小按钮添加自定义属性，记录下标
    liObj.index = i;
    // 给每一个小按钮绑定事件
    liObj.onmouseover=function () {
        for(var j=0;j<olObj2.children.length;j++){
            olObj2.children[j].removeAttribute("class");//清除所有小按钮的样式
        }
        this.className="current2";
        pic2 =  this.index;
        animate2(ulObj2,-pic2*imgWidth2)
    }
}
// 给第一个小按钮添加样式
olObj2.children[0].className="current2";

// 将第一个li克隆一份追加到ul中
ulObj2.appendChild(ulObj2.children[0].cloneNode(true))
// 设置自动播放
setInterval(clickHandle2,3000)
// 显示和隐藏左右焦点按钮
// box2.onmouseover = function () {
//     arr2.style.display = "block";
// }
// box2.onmouseout = function () {
//     arr2.style.display = "none";
// }
// 右边焦点
document.getElementById("right2").onclick=clickHandle2;
function clickHandle2() {
    if(pic2>=list2.length-1){
        pic2=0;
        ulObj2.style.left="0px";
    }
    pic2++;
    animate2(ulObj2,-pic2*imgWidth2);
    // 如果图片为第6张，清除所有小按钮的样式，第一个小按钮有颜色
    if(pic2 == list2.length-1){
        olObj2.children[olObj2.children.length-1].className="";
        olObj2.children[0].className="current2";
    }else{
        for(var i=0;i<olObj2.children.length;i++){
            olObj2.children[i].className="";
        }
        olObj2.children[pic2].className="current2";
    }
}
// 左边焦点
document.getElementById("left2").onclick=function () {
    if(pic2==0){
        pic2=list2.length-1;
        ulObj2.style.left=-pic2*imgWidth2+"px";
    }
    pic2--;
    animate2(ulObj2,-pic2*imgWidth2);

    // 设置小按钮的样式
    for(var i=0;i<olObj2.children.length;i++){
        olObj2.children[i].className="";
    }
    olObj2.children[pic2].className="current2";

}
// 设置任意的一个元素,移动到指定的目标位置
function animate2(en, tan) {
    clearInterval(en.timeId);
    //定时器的id值存储到对象的一个属性中
    en.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = en.offsetLeft;
        var step = 10;//每次移动的距离
        step = current < tan ? step : -step;
        current += step;//当前移动到位置
        if (Math.abs(current - tan) > Math.abs(step)) {
            en.style.left = current + "px";
        } else {
            clearInterval(en.timeId);//清理定时器
            en.style.left = tan + "px";//直接到达目标
        }
    }, 10);
}
// 小轮播图2结束
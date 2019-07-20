
var curr = 1;
var box = document.querySelector(".advs")
var img = document.querySelectorAll(".advs img")

var bodyWidth = document.body.clientWidth;
box.style.width = img.length * bodyWidth + "px";
console.log(box, img.length, bodyWidth)
for (var img of img) { //设置每张图片的宽度与屏幕一样
    img.style.width = bodyWidth + "px"
}
//上一页
upPage = function () {
    // console.log(curr)
    if (curr == 1) {
        box.style.left = 3 * -bodyWidth + 'px';
    }
    if (curr == 2) {
        box.style.left = 2 * -bodyWidth + 'px';

    }
    if (curr == 3) {
        box.style.left = -bodyWidth + 'px';

    }
    if (curr == 4) {
        box.style.left = 0 * -bodyWidth + 'px';
        curr = 0;
    }
    curr++
    // console.log(curr)
}
//下一页
nextPage = function () {
    if (curr < 4) {
        box.style.left = curr++ * -bodyWidth + 'px';
        // console.log(curr)
    } else {
        curr = 0;
        box.style.left = curr * -bodyWidth + 'px';
    }
}


var floor_5 = document.querySelectorAll('.floor_5Box>div>.color')
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
    // console.log("距离文档顶部的距离",document.documentElement.scrollTop,document.body.scrollTop)
    var floor_5 = document.querySelectorAll('.floor_5Box>div>.color')
    if (t >= 3355) {
        floor_5[0].style.position = "relative";
        floor_5[0].style.top = "0px";
    }
    floor_5[0].addEventListener("transitionend", function (e) {
        if (e.returnValue == true) {
            floor_5[1].style.position = "relative";
            floor_5[1].style.top = "0px";
        }
    })
    floor_5[1].addEventListener("transitionend", function (e) {
        if (e.returnValue == true) {
            floor_5[2].style.position = "relative";
            floor_5[2].style.top = "0px";
        }
    })
    floor_5[2].addEventListener("transitionend", function (e) {
        if (e.returnValue == true) {
            floor_5[3].style.position = "relative";
            floor_5[3].style.top = "0px";
        }
    })
}
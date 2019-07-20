
        var advs = document.querySelector('.advs');
        var items = document.querySelectorAll('.advs>li');
        var box = document.querySelector('.picture');
        var icons = document.querySelectorAll('.icons>li'); //获得icon节点列表nodelist
        icons = Array.prototype.slice.call(icons);  //将nodelist转成array

        var timer = null;
        var curr = 0; //代表当前第几张图片
//        移动的方法
        var move = function(){
            console.log(arguments[0]);
//            arguments 变量里存了传 进来的参数
            if(arguments[0] =='left'){
                curr--;
                //边界判断
                if(curr < 0){
                    curr = advs.childElementCount - 1;
                }
                //根据当前的位置curr，计算出advs离左边的距离
                var distance = -curr * box.clientWidth;
//                利用计算出来的距离修改advs的样式
                advs.style.left = distance + "px"
            }else if(arguments[0] =='right' || arguments.length ==0){
                curr++;
                //边界判断
                if(curr > advs.childElementCount - 1){
                    curr = 0;
                }
                //根据当前的位置curr，计算出advs离左边的距离
                var distance = -curr * box.clientWidth;
//                利用计算出来的距离修改advs的样式
                advs.style.left = distance + "px"
            }else{
                //当进的是数字时，把当前位置设成该数字
                curr = arguments[0];
                var distance = -curr * box.clientWidth;
//                利用计算出来的距离修改advs的样式
                advs.style.left = distance + "px";
            }

            //                给当前iocns加active类
            for(icon of icons){
                icon.className = ""; //将所有的icons去掉样式
            }
            icons[curr].className = "active" //单独给当前的icons加上active类
        };

        //给每个icon绑定onmouseover事件。
        for(var icon of icons){
            icon.onmouseover = function(){
                console.log(this);
                var num = icons.indexOf(this); //得到当前经过是第几个图片
                console.log(num);
                move(num);//把当前位置传进move函数，实现将.advs移动到当前位置
            }
        };

        //设置定时器，每1S钟设用一次move函数，实现自动轮播
        var start = function(){
            timer = setInterval(move,1000);
        }
        start();
        for(var x of items){
            //鼠标经过时，将清时器清除
            x.onmouseover = function(){
                clearInterval(timer);
            }
//            鼠标离开时，启动定时器，恢复自动轮播
            x.onmouseout = function(){
                start();
            }
        }
 
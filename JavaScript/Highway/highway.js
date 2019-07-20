    // banner背景轮播图

          var icons = document.querySelectorAll(".icons>li");
        icons = Array.prototype.slice.call(icons);
        var curr = 0;
        var box = document.querySelector('.banner');
        var advs = document.querySelector('.advs');
        var box_width = box.offsetWidth;
        var imgWidth = document.querySelectorAll('.advs img')
        imgWidth = Array.prototype.slice.call(imgWidth);
        var sp_adv_show = function () {
            curr = arguments[0];
            // console.log(curr);
            var distance = -curr * box_width;//往左移动的距离
            advs.style.left = distance + "px";
        }
        for (var i of imgWidth) {
            i.style.width = box_width + "px";
        }

        function leftShow() {
            if (curr <= 2) {
                curr++;
                // console.log("dada",curr)
            } else if (curr >= 3) {
                curr = 0;
                // console.log("dada",curr)
            }
            var distance = -curr * box_width;//往左移动的距离
            advs.style.left = distance + "px";
        }
        var li = []
        for (var x of icons) {
            x.onmouseover = function () {
                var num = icons.indexOf(this);
                sp_adv_show(num);
            }

        }
        // banner背景轮播图 -end
        window.onscroll = function () {
            var scroll = document.documentElement.scrollTop;
            console.log(scroll)
            if (scroll >= 1300) {
                $(".j4").css({ "position": "relative", "left": "0" })
            }
            if (scroll >= 1700) {
                $(".j7").fadeIn(2000)
            }
            if (scroll >= 3000) {
                $(".j12-2>img").animate({ "position": "relative", "left": "0" }, 1500, function () {
                    $(".j12-2 span").animate({ "position": "relative", "left": "0" }, 500, function () {
                        $(".j14 span").animate({ "position": "relative", "left": "0" }, 1000, function () {
                            $(".j14>img").animate({ "position": "relative", "left": "0" }, 500, function () {
                                $(".j12-1>img").animate({ "position": "relative", "left": "0" }, 500, function () {
                                    $(".j12-1 span").animate({ "position": "relative", "left": "0" }, 500, function () {

                                    })
                                })
                            })
                        })
                    })
                })
            }
        }
        onscroll()
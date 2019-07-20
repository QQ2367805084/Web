      window.onscroll = function () {
            var scroll = document.documentElement.scrollTop;
            // console.log(scroll)
            if (scroll >= 300) {
                $(".floor_3>div").fadeIn(1500)
            }
            if(scroll>2200){
                $(".foolr_6Text").fadeIn(1500)
            }
            if(scroll>4450){
                $(".floor_10>div").fadeIn(1500)
            }
        }

        $(".floor_4Box_1").hover(function () {
            $(".floor_4Box_1>img").css({
                "width": "480",
                "height": "333px",
                "z-index": "5",
                "color": "#333333",
            })
            $(".floor_4Box_1>div").css({
                "color": "#333333",
            })
        }, function () {
            $(".floor_4Box_1>img").css({
                "width": "400",
                "height": "278px",
                "z-index": "5",
                " position": "relative",
            })
            $(".floor_4Box_1>div").css({
                "color": "rgba(178,178,178,1)",
            })
        })
        $(".floor_4Box_2").hover(function () {
            $(".floor_4Box_2>img").css({
                "width": "480",
                "height": "333px",
                "z-index": "5",
            })
            $(".floor_4Box_2>div").css({
                "color": "#333333",
            })
        }, function () {
            $(".floor_4Box_2>img").css({
                "width": "400",
                "height": "278px",
                "z-index": "5",
            })
            $(".floor_4Box_2>div").css({
                "color": "rgba(178,178,178,1)",
            })
        })
        $(".floor_4Box_3").hover(function () {
            $(".floor_4Box_3>img").css({
                "width": "480",
                "height": "333px",
                "z-index": "5",
            })
            $(".floor_4Box_3>div").css({
                "color": "#333333",
            })
        }, function () {
            $(".floor_4Box_3>img").css({
                "width": "400",
                "height": "278px",
                "z-index": "5",
                " position": "relative",
            })
            $(".floor_4Box_3>div").css({
                "color": "rgba(178,178,178,1)",
            })
        })
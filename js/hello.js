    var typed = new Typed(".hello", {
        strings: ["Welcome to <span>Sleep_jok</span>.<i>.</i><time>.</time>",
                  "大抵是病了,横竖睡不着.<i>.</i><time>.</time>",
                  "ending for you",
                  "print'🍺'..",],
        typeSpeed: 100,//打字的速度
        smartBackspace: true, // 开启智能退格 默认false
        cursorChar: '_',
        backSpeed: 10,//后退速度
        backDelay: 500,//后退延迟
        // loop:true,//是否循环
        startDelay:1000,//起始时间
        // fadeOut:true,//淡出效果
        contentType: 'html'
  });
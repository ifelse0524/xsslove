    window.onload = function(){
    var dv = document.getElementById("dv1");
    document.getElementById("in1").onclick = function () {
        animate(dv, "width", 0)
    }
    document.getElementById("in2").onclick = function () {
        animate(dv, "width", 220)
    }
    }
    //兼容代码：获取当前元素样式的值
    function getStyle(element, attr) {
        return getComputedStyle ? getComputedStyle(element, null)[attr] : element.currentStyle[attr];
    }

    function animate(element, attr, target) {
        clearInterval(element.timeId);
        //不清理的话，每一次调用animate这个函数，就会产生一个定时器
        element.timeId = setInterval(function () {
            var current = parseInt(getStyle(element, attr));//返回值是元素样式的值，转换成整数进行下面的计算
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          current += step;
          element.style[attr] = current + "px";
          if (current == target) {
              clearInterval(element.timeId);
          }
      }, 20)
        var jk = window.document.getElementById("c")
        var d = new Date()
        var sj = d.getHours()

        // //获取当前日期
        // var yun = window.document.getElementById("info_s")
        // var month = d.getMonth() + 1
        // var day = d.getDate()
        // //创建日期
        // var Y_month = 5
        // var Y_day = 6
        // //运行时间
        // var A_month = month - Y_month
        // var A_day = day - Y_day
        // var lsp = (A_day + `天`)
        // yun.innerHTML = lsp

        time = Number(sj)
        if(time < 12)
        {
            if(time >5 && time <9 )
            {
                var cf = "早上好,"
            }
            else
            {
                var cf = "上午好,"
            }
        }
        else if(time >= 12 && time < 18)
        {
            if(time < 14)
            {
                var cf = "中午好,"
            }
            else
            {
                var cf = "下午好,"
            }
        }
        else
        {
            var cf = "晚上好,"
        }
        jk.innerHTML = cf
        
        
     }

     

    
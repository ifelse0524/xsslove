        //获取当前日期
        var yun = window.document.getElementById("info_s")
        var d = new Date()
        var month = d.getMonth() + 1
        var day = d.getDate()
        //创建日期
        var Y_month = 5
        var Y_day = 6
        //运行时间
        var A_month = month - Y_month
        var A_day = day - Y_day
        var lsp = (A_day + `天`)
        yun.innerHTML = lsp


        //过渡
        var Ocontent_root = document.getElementsByClassName("content_root")
        var Oguodu = document.getElementsByClassName("guodu")
        Ocontent_root.onmouseover = function (){
                animate(Ocontent_root, "width", 110)
        }
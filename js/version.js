window.onload = function(){

function getBroswerAndVersion(){//该函数可以判断各种浏览器和版本，最厉害的版本
    var os = navigator.platform; 
    var userAgent = navigator.userAgent; 
    var info = ""; 
    var tempArray = ""; 
    //判断浏览器版本
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1); 
   
    if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) { 
      tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent); 
      info += tempArray[1] + tempArray[2]; 
    } else if (isIE) { 
   
      var version = ""; 
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
      reIE.test(userAgent); 
      var fIEVersion = parseFloat(RegExp["$1"]); 
      if (fIEVersion == 7) 
      { version = "IE7"; } 
      else if (fIEVersion == 8) 
      { version = "IE8"; } 
      else if (fIEVersion == 9) 
      { version = "IE9"; } 
      else if (fIEVersion == 10) 
      { version = "IE10"; } 
      else
      { version = "0" } 
   
      info += version; 
   
    } else if (isEdge) { 
      info += "Edge"; 
    } else if (isIE11) { 
      info += "IE11"; 
    } else if (/[Cc]hrome\/\d+/.test(userAgent)) { 
      tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent); 
      info += tempArray[1] + tempArray[2]; 
    } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) { 
      tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent); 
      info += tempArray[3] + tempArray[1]; 
    } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) { 
      tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent); 
      info += tempArray[1] + tempArray[2]; 
    } else { 
      info += "unknown"; 
    } 
    return info;
  }

  var bro = getBroswerAndVersion();//上面第一步封装的函数，调用会得到一个返回值
    // console.log(bro);
    // chrome = bro.indexOf("Chrome")
    // console.log(chrome);
    // if(chrome = -1){
    //     alert("建议使用google浏览器...")
    // }
    if(bro=="IE5" || bro=="IE6" || bro=="IE7" || bro=="IE8" ){
        alert("浏览器版本过低!请升级至IE9以上");//此处应该显示一个漂亮的图片，让用户觉得再不升级就是out了
}


        if (isMobile()) {
            // console.log("mobile");
            alert("建议使用PC端浏览...")
        } else {
            // console.log("pc");
        }

        function isMobile() {
            let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            return flag;
        }
}
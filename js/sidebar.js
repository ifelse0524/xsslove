$( function () {
    var speed = 1000;//自定义滚动速度
    //回到顶部
    $( "#toTop").click( function () {
        $( "html,body").animate({ "scrollTop" : 0 }, speed);
        });
    // //回到底部
    // var windowHeight = parseInt($("body").css("height" ));//整个页面的高度
    // $( "#toBottom").click(function () {
    //     $( "html,body").animate({ "scrollTop" : windowHeight }, speed);
    // });
    // // $('#ID').offset().top   滑动到指定ID的元素  
});
window.onload = function(){
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".toTop")
    const scrollContainer = () => {
    return document.documentElement || document.body;
    };
    const pageProgressBar = document.querySelector(".progress-bar")
    document.addEventListener("scroll", () => {
        const scrolledPercentage =
            (scrollContainer().scrollTop /
                (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
            100;
        
        pageProgressBar.style.width = `${scrolledPercentage}%`
        });
}
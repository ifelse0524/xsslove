window.document.documentElement.setAttribute("data-theme", "light");
function changeMode() {
  const darkMode =
    window.document.documentElement.getAttribute("data-theme") || "light";
//   console.log(darkMode);
  if (darkMode == "light") {
    window.document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme', 'dark'); // 存储关闭前主题
  } else {
    window.document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme', 'light'); 
  }
  
}

const savedTheme = localStorage.getItem('theme') ?  localStorage.getItem('theme') : null;
// console.log(savedTheme);  输出存储的主题 if判断之后进行设置
if (savedTheme == 'dark') {
    window.document.documentElement.setAttribute("data-theme", "dark");
}
else{
    window.document.documentElement.setAttribute("data-theme", "light");
}
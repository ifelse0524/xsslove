window.document.documentElement.setAttribute("data-theme", "light");
                function changeMode() {
                  const darkMode =
                    window.document.documentElement.getAttribute("data-theme") || "light";
                //   console.log(darkMode);
                  if (darkMode == "light") {
                    window.document.documentElement.setAttribute("data-theme", "dark");
                  } else {
                    window.document.documentElement.setAttribute("data-theme", "light");
                  }
                }
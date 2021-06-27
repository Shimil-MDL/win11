let windows = document.querySelector(".windows");
let taskbarApps = document.querySelectorAll(".taskbar .apps .apps-c");

let win = taskbarApps[0];
let win_open = 0;
win.addEventListener("click", () => {
  if (win_open == 0) {
    windows.style.display = "flex";
    windows.style.animation = "open 0.5s ease-in-out both";
    win_open = 1;
  } else {
    windows.style.animation = "close 0.5s ease-in-out both";
    win_open = 0;
    setTimeout(function () {
      windows.style.display = "none";
    }, 600);
  }
});

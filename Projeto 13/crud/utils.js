const urlServer = "https://66302734c92f351c03d923c2.mockapi.io/animak/";

let btns = document.querySelectorAll('a','.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {
    if (currentUrl.startsWith(btn.href)) {
        btn.classList.add('active');
        break;
    }
}
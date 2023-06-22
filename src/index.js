textItems = [
    "Gak Punya Privilege.",
    "Baru Lulus Kuliah.",
    "Kurang Pengalaman.", 
    "Budget Pas - Pasan.",
    "Beda Jurusan.",
]

var element = document.getElementById("change_text");
var index = 0;

function updateText() {
    element.innerText = textItems[index];
    // console.log(document.getElementById("change_text").innerText);
    // console.log("---");
    index = (index + 1) % textItems.length;
}

setInterval(updateText, 5000); // 5000 milliseconds = 5 seconds


// JavaScript code to toggle the mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const toggleNav = document.getElementById('toggleNav');
    const mobileNav = document.getElementById('mobileNav');

    toggleNav.addEventListener('change', function () {
        mobileNav.classList.toggle('hidden');
    });
});
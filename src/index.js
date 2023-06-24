
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


const headerElement = document.getElementById('header');
const logoImageElement = document.getElementById('logoImage');

function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        headerElement.classList.add('bg-white', "text-black");
        logoImageElement.src = 'https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_harisenin.svg&w=128&q=75';

    } else {
        headerElement.classList.remove('bg-white', "text-black");
        logoImageElement.src = 'https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_harisenin-white-new.png&w=128&q=75';

    }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);
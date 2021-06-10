// menu
const menuHome = document.querySelector('.navHome');
const menuPlanning = document.querySelector('.navPlanning');
const menuInfo = document.querySelector('.navInfo');
const menuProfile = document.querySelector('.navProfile');

const home = document.querySelector('.home_menu');
const planning = document.querySelector('.planning_menu');
const info = document.querySelector('.info_menu');
const profile = document.querySelector('.profile_menu');

if (home) {
    menuHome.classList.add('nav_active');
    menuPlanning.classList.remove('nav_active');
    menuInfo.classList.remove('nav_active');
    menuProfile.classList.remove('nav_active');
}

if (planning) {
    menuHome.classList.remove('nav_active');
    menuPlanning.classList.add('nav_active');
    menuInfo.classList.remove('nav_active');
    menuProfile.classList.remove('nav_active');
}

if (info) {
    menuHome.classList.remove('nav_active');
    menuPlanning.classList.remove('nav_active');
    menuInfo.classList.add('nav_active');
    menuProfile.classList.remove('nav_active');
}

if (profile) {
    menuHome.classList.remove('nav_active');
    menuPlanning.classList.remove('nav_active');
    menuInfo.classList.remove('nav_active');
    menuProfile.classList.add('nav_active');
}
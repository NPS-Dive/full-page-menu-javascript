'use strict';

function menuClick() {
    let fullPageMenu = document.querySelector('#fullPageMenu');
    let iconMenu = document.querySelector('#icon-menu');
    fullPageMenu.classList.toggle('active');
    iconMenu.classList.toggle('active');
}


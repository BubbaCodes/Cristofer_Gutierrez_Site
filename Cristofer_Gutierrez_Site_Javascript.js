//Navigation slide menu. When open the width of the menu is 250px and when open the margin of the main page will be moved over 250px. 
function openSlideMenu() {
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
//Navigagion slide menu. When closing the width of the menu is 0px and when close the margin of the main page will be 0px. 
function closeSlideMenu() {
    document.getElementById('side-menu').style.width='0px';
    document.getElementById('main').style.marginLeft='0px';
}
/*----------------------------------------*/
//The bottom popup menu.
function openSlideMenuBottom() {
    document.getElementById('side-menu-bottom').style.height='250px';
    document.getElementById('side-menu-bottom').style.width='100%';
    document.getElementById('main').style.marginBottom='250px';
}
function closeSlideMenuBottom() {
    document.getElementById('side-menu-bottom').style.height='0px';
    document.getElementById('side-menu-bottom').style.width='0%';
    document.getElementById('main').style.marginBottom='0px';
}
/*-----------------*/
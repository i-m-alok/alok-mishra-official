// Select DOM Items
// document.querySelector() used to access the html tags by attributes or id
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuBranding=document.querySelector('.menu-branding');
const menuNav=document.querySelector('.menu-nav');
//as we know querySelector() returns only the 1st Items
// and we have multiple items as class=nav-item so, we can't use querySelector()
//here we use the querySelectorAll()
const navItems=document.querySelectorAll('.nav-item');

//Set initial State of menu
let showMenu=false;

//if someone click on the menu then it needs as toggel the screen to show "menuBranding" and "navItems"
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));
    //set the menu state
    showMenu= true;
  }

  else{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));

    showMenu=false;
  }

}

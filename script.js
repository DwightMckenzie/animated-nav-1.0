const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItms = [nav1,nav2,nav3,nav4,nav5];

// nav animation 
function navAnimate(dir1,dir2) {
  let i = 0;
  navItms.forEach((nav, i) => {
    i++;
    nav.classList.replace(`slide-${dir1}-${i}`, `slide-${dir2}-${i}`);
  });
}

function toggleNav() {
  // toggle menu bars open close
  menuBars.classList.toggle('change');
  // toggle 
  overlay.classList.toggle('overlay-active');
  if(overlay.classList.contains('overlay-active')){
    // animate in overlay
    // overlay.classList.add('overlay-slide-right');
    // overlay.classList.remove('overlay-slide-left');

    // animate in reduced version
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    
    // animate in menu bar
    // nav1.classList.remove('slide-out-1');
    // nav1.classList.add('slide-in-1');
    // nav2.classList.remove('slide-out-2');
    // nav2.classList.add('slide-in-2');
    // nav3.classList.remove('slide-out-3');
    // nav3.classList.add('slide-in-3');
    // nav4.classList.remove('slide-out-4');
    // nav4.classList.add('slide-in-4');
    // nav5.classList.remove('slide-out-5');
    // nav5.classList.add('slide-in-5');

    // Pass paramters to function
    navAnimate('out','in');
    
  } else {
    // animate out
    // overlay.classList.add('overlay-slide-left');
    // overlay.classList.remove('overlay-slide-right');
    
    // animate out reduced version
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    
    // animate in menu bar
    // nav1.classList.remove('slide-in-1');
    // nav1.classList.add('slide-out-1');
    // nav2.classList.remove('slide-in-2');
    // nav2.classList.add('slide-out-2');
    // nav3.classList.remove('slide-in-3');
    // nav3.classList.add('slide-out-3');
    // nav4.classList.remove('slide-in-4');
    // nav4.classList.add('slide-out-4');
    // nav5.classList.remove('slide-in-5');
    // nav5.classList.add('slide-out-5');
    
    // Pass paramters to function
    navAnimate('in','out');

  }
}

// event listeners
menuBars.addEventListener('click', toggleNav);

// Add event liteners to nav items
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);

// Add event liteners to nav items Reduced version
navItms.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
let header = document.querySelector('header'),
    heading = document.querySelector('.heading'),
    navContainer = document.querySelector('.nav_container'),
    aside = document.querySelector('aside'),
    home = document.querySelector('#Home'),
    about = document.querySelector('#About'),
    services = document.querySelector('#Services'),
    contact = document.querySelector('#Contact'),
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    navItem = document.querySelectorAll('.navItem'),
    asideOffBtn = document.querySelector('.asideOff'),
    asideMenuItem = document.querySelectorAll('.asideMenuItem'),
    nav_icon = document.querySelector('.navIcon'),
    main = document.querySelector('main'),
    scrollBtn = document.querySelector('.scrollBtn'),
    nav_list = document.querySelectorAll('.navList');

nav_icon.addEventListener('click',()=>{
    aside.classList.add('asideShow');
    main.classList.add('blur');
    html.classList.add('overflow-hidden');
    body.classList.add('overflow-hidden');
})

function closeAsideMenu(){
    aside.classList.remove('asideShow');
    main.classList.remove('blur');
    html.classList.remove('overflow-hidden');
    body.classList.remove('overflow-hidden');
}


if(asideOffBtn){
    asideOffBtn.addEventListener('click',closeAsideMenu)
}
asideMenuItem.forEach(x=>{
    x.addEventListener('click',()=>{
        closeAsideMenu();
    })
});

// ==================================================================

function scrollTop(){
    if(this.scrollY>800){
        scrollBtn.style.bottom = '5rem'
    }else{
        scrollBtn.style.bottom = '-100%'
    }
}
window.addEventListener('scroll',scrollTop);


// ==================================================================

function headerBg(){
    if(scrollY>home.offsetHeight-10){
        header.classList.add('headerColor');
        
    }else{
        header.classList.remove('headerColor');
    }
}

scrollBtn.addEventListener('click',()=>window.scrollTo(0,0));
window.addEventListener('scroll',headerBg);

// ==================================================================

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: false,
})

sr.reveal(`.home_content`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.aa`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.bb`,{
    origin: 'right',
    interval: 100,
})

// ==================================================================

const sections = document.querySelectorAll('section[id]');

function navChange(){
    let mouse = window.scrollY;

    sections.forEach(current=>{    
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 80;
    let sectionId= current.getAttribute('id');        

        if(mouse> sectionTop && mouse <= sectionTop + sectionHeight){
            document.querySelector('.navSub li.'+ sectionId).classList.add('activate');
            document.querySelector(`.m${sectionId}`).classList.add('mActivate');          
        }else{
            document.querySelector('.navSub li.'+ sectionId).classList.remove('activate');
            document.querySelector(`.m${sectionId}`).classList.remove('mActivate');
        }
    });
}

window.addEventListener('scroll',navChange);
window.addEventListener('load',navChange);




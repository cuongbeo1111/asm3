let tl = new TimelineLite();
window.addEventListener('load', () => {
    tl.to('.lineaLoader', 1.2, { y: -100, opacity: 0, delay: 0.1 });
    tl.fromTo('.loader', 1.2, { height: '100vh' }, { height: 0, top: '100vh' });
    tl.fromTo('.aboutImg', 1.2, { x: 80, opacity: 0 }, { x: 0, opacity: 1, delay: -1 });
    tl.fromTo('.hideImg ', 1.2, { x: 80 }, { x: 0, delay: -1.2 });
    tl.fromTo('.charDivInit', 1.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: -0.8 });
});


let buttons = document.querySelectorAll('.buttons');
document.getElementById('home').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1200);
});
// document.getElementById('works').addEventListener('click', () => {
//     setTimeout(() => {
//         window.location.href = 'works.html';
//     }, 1200);
// });
document.getElementById('about').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'about.html';
    }, 1200);
});
document.getElementById('contact').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'contact.html';
    }, 1200);
});
document.getElementById('instagram').addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'https://www.instagram.com/web_vsign/?hl=it';
    }, 1200);
});
// document.getElementById('menu').addEventListener('click', () => {
//     let tlMenu = new TimelineLite();
//     tlMenu.to('.menuWrapper', 0.8, { height: '100vh' });
//     tlMenu.fromTo('.menuLeftVoice', 0.8, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 });
//     tlMenu.fromTo('.introMenu', 0.8, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: -0.75 });
//     tlMenu.fromTo('.nMenu', 0.8, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: -0.75 });
//     tlMenu.fromTo('.close', 0.8, { x: 20, opacity: 0 }, { x: 0, opacity: 1, delay: -0.75 });
// });
document.getElementById('close').addEventListener('click', () => {
    let tlMenu = new TimelineLite();
    tlMenu.fromTo('.close', 0.8, { x: 0, opacity: 1 }, { x: -20, opacity: 0 });
    tlMenu.fromTo('.nMenu', 0.8, { y: 0, opacity: 1 }, { y: -100, opacity: 0, stagger: 0.1, delay: -0.75 });
    tlMenu.fromTo('.introMenu', 0.8, { y: 0, opacity: 1 }, { y: -100, opacity: 0, stagger: 0.1, delay: -0.75 });
    tlMenu.fromTo('.menuLeftVoice', 0.8, { y: 0, opacity: 1 }, { y: -100, opacity: 0, stagger: 0.1, delay: -0.75 });
    tlMenu.to('.menuWrapper', 0.8, { height: '0vh' });
});

let navMenu = document.querySelectorAll('.navB');
let links = document.querySelectorAll('a');

navMenu.forEach(n => {
    n.addEventListener('mouseenter', () => {
        gsap.to('.cursor', 0.5, { scale: 4 });
    })
})
navMenu.forEach(n => {
    n.addEventListener('mouseout', () => {
        gsap.to('.cursor', 0.5, { scale: 1 });
    })
})
links.forEach(n => {
    n.addEventListener('mouseenter', () => {
        gsap.to('.cursor', 0.5, { scale: 4 });
    })
})
links.forEach(n => {
    n.addEventListener('mouseout', () => {
        gsap.to('.cursor', 0.5, { scale: 1 });
    })
})

// document.querySelector('.menu').addEventListener('mouseenter', () => {
//     gsap.to('.cursor', 0.5, { scale: 4 });
// })
// document.querySelector('.menu').addEventListener('mouseenter', () => {
//     gsap.to('.cursor', 0.5, { scale: 4 });
// })
buttons.forEach(b => {
    b.addEventListener('click', () => {
        gsap.fromTo('.loader', 1.2, { height: '0vh', top: 0 }, { height: '100vh' });
    })
});

document.addEventListener('mousemove', e => {
    let top = e.clientY + 'px';
    let left = e.clientX + 'px';
    gsap.to('.cursor', .75, { x: left, y: top, ease: 'Sine.Out' });
});

buttons.forEach(b => {
    b.addEventListener('mouseenter', () => {
        gsap.to('.cursor', 0.5, { scale: 4 });
    });
    b.addEventListener('mouseleave', () => {
        gsap.to('.cursor', 0.5, { scale: 1 });
    });
});
// let scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     multiplyer: 0.2,
//     lerp: 0.1
// });
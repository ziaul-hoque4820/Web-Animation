function loadingAnimation() {
    let tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });

    tl.from('#line1-part1, .line h2', {
        opacity: 0,
        onStart: function () {
            let h5timer = document.querySelector('#line1-part1 h5');
            let grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 35);
        }
    });

    tl.to('#loader', {
        opacity: 0,
        duration: 0.2,
        delay: 4
    })

    tl.from('#page1', {
        y: 1600,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
        ease: Power4
    })
    tl.to('#loader', {
        display: 'none'
    })
    tl.from('#nav', {
        opacity: 0
    })
    tl.from('#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1', {
        y: 140,
        stagger: 0.2
    })
};
function cursorAnimation() {
    document.addEventListener('mousemove', function (dets) {
        gsap.to('#crsr', {
            left: dets.x,
            top: dets.y
        })
        
    });
    
    Shery.makeMagnet("#nav-part2 h4");
};

loadingAnimation();
cursorAnimation();

function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 6,
        debug: true,
        gooey: true,
    });
};
sheryAnimation();
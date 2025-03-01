var click = document.querySelector("#menu")
var click2 = document.querySelector("#menu-close")


click.addEventListener("click", function(){
    gsap.to(".right-side",{
        delay: 0.5,
        right:"0%",
        duration: 1
        // opacity:0,
    })
})


click2.addEventListener("click", function(){
    gsap.to(".right-side",{
        delay: 0.5,
        right:"-60%",
        duration: 1,
        // opacity:0,
        scrub: true,
        stagger: 0.5
    })
})
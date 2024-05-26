(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

let h1 = document.querySelector(".page-1 h1")
let h1Text = h1.textContent
let spiltedText = h1Text.split("")
let clutter = ""
spiltedText.forEach((dets) => {
    clutter += `<span>${dets}</span>`
})
h1.innerHTML = clutter
gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".page-2",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    },
    xPercent: -300
})

let elem = document.querySelectorAll(".elem")
let left = document.querySelector('.left')

elem.forEach(function (e) {
    e.addEventListener("mouseenter", function (dets) {
        gsap.to(this.querySelector('.picture'), {
            opacity: 1,
            scale: 1
        })
        let data = e.getAttribute('data-image')
        left.style.backgroundImage = `url(${data})`

    })
    e.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector('.picture'), {
            opacity: 0,
            scale: 0
        })
        // left.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0997/6284/files/1200x1200_9fe27a77-0d41-41f9-85e5-6ae786fa26f5_480x480.jpg?v=1713203190)`
    })
    e.addEventListener("mousemove", function (dets) {
        gsap.to(this.querySelector('.picture'), {
            x: gsap.utils.mapRange(0, window.innerWidth, -500, 300, dets.clientX),
            y: gsap.utils.mapRange(0, window.innerHeight, -50, 100, dets.clientY),
            opacity: 1,
            scale: 1
        })
        left.style.backgroundImage = `url(${data})`

    })
})
let tl = gsap.timeline({
    delay: .3
})

tl.from(".navbar", {
    y: -400
})

tl.from(".lists h4:nth-child(odd)", {
    y: 400,
    stagger: .3,
    duration: .7
}, 'a')
tl.from(".lists h4:nth-child(even)", {
    y: -400,
    stagger: .3,
    duration: .7
}, 'a')

tl.from(".page-1 h1 span", {
    y: -400,
    opacity: 0,
    stagger: .2,
    duration: .5,
})
tl.from(".page-1 h3:nth-child(odd)", {
    y: 400,
    stagger: .3,
    duration: .5
}, 'b')
tl.from(".page-1 h3:nth-child(even)", {
    y: -400,
    stagger: .3,
    duration: .5
}, 'b')
tl.from(".page-1 button", {
    y: -200,
    duration: .5
})


gsap.from(".back h1", {
    scrollTrigger: {
        trigger: ".page-4",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 1,
    },
    y: 200,
    stagger: .3,
    duration: .3
})
gsap.to(".front", {
    scrollTrigger: {
        trigger: ".page-4",
        start: "50% top",
        end: "bottom top",
        scrub: 1,
    },
    left: 0,
    duration: .3,
    ease: Power4
})
gsap.to(".page-4", {
    scrollTrigger: {
        trigger: ".page-4",
        start: "top top",
        end: "bottom top",
        pin: true
    }
})

let crsr = document.querySelector(".cursor")



document.querySelector('.main').addEventListener('mousemove', (dets) => {
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y
    })
})

document.querySelector('.mix').addEventListener('mousemove', () => {
    gsap.to(crsr, {
        scale: 6
    })
})
document.querySelector('.mix').addEventListener('mouseleave', () => {
    gsap.to(crsr, {
        scale: 1
    })
})
// document.querySelector('.back-6 h1').addEventListener('mousemove',()=>{
//     gsap.to(crsr,{
//         scale: 6
//     })
// })
// document.querySelector('.back-6 h1').addEventListener('mouseleave',()=>{
//     gsap.to(crsr,{
//         scale: 1
//     })
// })

let arr = [
    {
        cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9MNcNoRaGsoWFquoR5dyOpKVHhbMJ1C3ViaUMdHTkTVTHLXbUd9AOarpZYg1bliW83I&usqp=CAU",
        title: "ColorFit Pulse 4",
        subTitle: "1.92 Amoled BT Calling",
        price: "2,499",
        strike: "5,999",
        rating: "4.5"
    },
    {
        cardImg: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/23241662/2024/2/1/5a0c17bf-8f52-49e1-a29a-39e9e979be7a1706781353663-NOISE-Buds-Aero-Truly-Wireless-Earbuds-with-45hrs-Playtime-a-14.jpg",
        title: "Buds Xero",
        subTitle: "Adaptive ANC",
        price: "4,499",
        strike: "6,999",
        rating: "4.9"
    },
    {
        cardImg: "https://www.gonoise.com/cdn/shop/files/Artboard1copy_0a18624b-da50-4110-9c37-d0af8eacdaca.png?v=1714461815",
        title: "ColorFit Pro 5 Max AMOLED",
        subTitle: "1.96 Amoled ColorFit VO Max",
        price: "4,499",
        strike: "9,999",
        rating: "4.9"
    },
    {
        cardImg: "https://www.addmecart.com/wp-content/uploads/2023/08/123-260.png",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://www.addmecart.com/wp-content/uploads/2023/08/123-260.png",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://www.addmecart.com/wp-content/uploads/2023/08/123-260.png",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://www.addmecart.com/wp-content/uploads/2023/08/123-260.png",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://www.addmecart.com/wp-content/uploads/2023/08/123-260.png",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
]
let clutetr2 = ""

arr.forEach((dets) => {
    clutetr2 += ` <div class="card">
    <div class="card-img">
        <img src=${dets.cardImg} alt="">
    </div>
    <div class="card-details">
        <h1>${dets.title}</h1>
        <h3>${dets.subTitle}</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="part-1" style="display: flex; align-items: center; gap: 1rem;">
                <h1>₹ ${dets.price}</h1>
            <strike>${dets.strike}</strike>
            </div>
            <div class="part-2">
                <i class="ri-star-s-fill"></i>
                <h3>${dets.rating}</h3>
            </div>
        </div>
    </div>
</div>`
})
document.querySelector(".card-container").innerHTML = clutetr2


gsap.to(".front-6", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    '--clip': '100%',
    duration: .3
})

gsap.from(".form", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    x: -200,
    duration: .1,
    opacity: 0
})


gsap.to(".page-6", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        // scrub: 1,
    },
})

document.querySelector(".front-6").addEventListener('mousemove', () => {
    gsap.to(crsr, {
        backgroundColor: 'white'
    })
})
document.querySelector(".page-7").addEventListener('mousemove', () => {
    gsap.to(crsr, {
        backgroundColor: 'white'
    })
})

document.querySelector(".page-8").addEventListener('mouseenter', () => {
    gsap.to(crsr, {
        backgroundColor: 'white',
        scale: 0
    })
})


document.querySelector(".front-6").addEventListener('mouseleave', () => {
    gsap.to(crsr, {
        backgroundColor: 'black'
    })
})
document.querySelector(".form").addEventListener('mouseenter', () => {
    gsap.to(crsr, {
        scale: 0
    })
})
document.querySelector(".form").addEventListener('mouseleave', () => {
    gsap.to(crsr, {
        scale: 1
    })
})
document.querySelector('.form button').addEventListener('click', (e) => {
    e.preventDefault()
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let input = document.querySelector('.input input')
let chatBox = document.querySelector('.chat-box')
let send = document.querySelector('.send')

send.addEventListener('click', () => {
    // let inputvalue = input.value
    // message.innerHTML = `${inputvalue}`

    if (input.value === "") {
        alert("write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        chatBox.appendChild(li)
        input.value = ""
    }
})

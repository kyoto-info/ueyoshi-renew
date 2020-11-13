gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none resume reset",
})

// -------------- 共通

//----------------- カルーセル

// hero-logo

/*const logoAnime = gsap.to(".hero-logo", {
  duration: 2,
  ease: "power2 out",
  width: "11%",
  opacity: 1,
});

document.on('load', logoAnime.play());*/

// -------------- about

gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top 70%",
    end: "bottom center",
    id: "u-200th",
    markers: false,
  }
})
  .to(".sec-title-1", {
    y: -20,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
    stagger: {
      amount: 0.6,
    },
  })


//sc-box-1
gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-box-1",
    start: "top 70%",
    end: "bottom center",
    id: "sc-box-1",
    markers: false,
  }
})
  .to(".inner-box", {
    y: -30,
    opacity: 1,
    duration: 1,
    ease: "power2 out",
    stagger: {
      amount: 0.8,
    }
  })



//-------------- concept
//title
gsap.timeline({
  scrollTrigger: {
    trigger: "#concept",
    start: "top 70%",
    end: "bottom center",
    id: "concept",
    markers: false,
  }
})
  .to(".concept-h1", {
    y: -20,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
  })

//white back
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-one",
    start: "top bottom",
    end: "bottom botom",
    id: "sec-one",
    markers: false,
  }
})
  .fromTo(".bg-white-r",
    { width: "0%", height: "100%" },
    { width: "100%", duration: 4, ease: "power2 out", });


gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-two",
    start: "top bottom",
    end: "bottom botom",
    id: "sec-two",
    markers: false,
  }
})
  .fromTo(".bg-white-l",
    { width: "0%", height: "100%", },
    { width: "100%", duration: 4, ease: "power2 out", });


gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-three",
    start: "top 80%",
    end: "bottom botom",
    id: "sec-three",
    markers: false,
  }
})
  .fromTo(".bg-white-r-2",
    { width: "0%", height: "100%" },
    { width: "100%", duration: 4, ease: "power2 out", });

//テキスト部分
gsap.timeline({
  scrollTrigger: {
    trigger: ".concept-disc",
    start: "top 80%",
    end: "bottom botom",
    id: "con-disc",
    markers: false,
  }
})
  .to(".f-in-right-1", {
    x: 30,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
    stagger: {
      amount: 0.8,
    }
  })

gsap.timeline({
  scrollTrigger: {
    trigger: ".concept-disc-r",
    start: "top 80%",
    end: "bottom botom",
    id: "con-disc",
    markers: false,
  }
})
  .to(".f-in-left-1", {
    x: -50,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
    stagger: {
      amount: 0.8,
    }
  })


gsap.timeline({
  scrollTrigger: {
    trigger: ".concept-disc-2",
    start: "top 80%",
    end: "bottom botom",
    id: "con-disc",
    markers: false,
  }
})
  .to(".f-in-right-2", {
    x: 50,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
    stagger: {
      amount: 0.8,
    }
  })

//-------------- gallery

gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 70%",
    end: "bottom center",
    id: "gallery",
    markers: false,
  }
})
  .to(".gallery-h1", {
    y: -20,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
  })

gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery-cont",
    start: "top 80%",
    end: "bottom botom",
    id: "gallery-cont",
    markers: false,
  }
})
  .to(".f-in-gallery", {
    y: -30,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
    stagger: {
      amount: 0.8,
    }
  })


//-------------- profile

gsap.timeline({
  scrollTrigger: {
    trigger: "#profile",
    start: "top 70%",
    end: "bottom center",
    id: "gallery",
    markers: false,
  }
})
  .to(".profile-h1", {
    y: -20,
    opacity: 1,
    duration: 1.2,
    ease: "power2 out",
  })

//sc-box-2

gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-box-2",
    start: "top 70%",
    end: "bottom center",
    id: "sc-box-1",
    markers: false,
  }
})
  .to(".inner-box-2", {
    y: -30,
    opacity: 1,
    duration: 1,
    ease: "power2 out",
    stagger: {
      amount: 1,
    }
  })

//----------------- rec

gsap.timeline({
  scrollTrigger: {
    trigger: "#rec",
    start: "top 70%",
    end: "bottom center",
    id: "rec",
    markers: false,
  }
})
  .to(".rec-inner", {
    //y: -30,
    opacity: 1,
    duration: 1,
    ease: "power2 out",
    stagger: {
      amount: 1,
    }
  })

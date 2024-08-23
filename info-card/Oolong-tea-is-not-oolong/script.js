let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let words = heading.querySelectorAll(".word");
let hash = heading.querySelector(".hash");
let reducedMotion = window.matchMedia("(prefers-reduced-motion)").matches;

if (!reducedMotion) {
  let tl = gsap.timeline();

  btn.addEventListener("click", () => {
    tl.restart();
  });

  tl.set(heading, {
    scale: 0.25,
    opacity: 0
  })
    .to(heading, {
      scale: 0.4,
      opacity: 1,
      duration: 0.7,
      ease: "power4.out"
    })

    // Byebye hash
    .to(
      hash,
      {
        scale: 0,
        duration: 0.4,
        ease: "back.in(1.6)"
      },
      "-=0.2"
    )

    // Part words
    .to(words[0], {
      xPercent: -20,
      duration: 0.8,
      ease: "elastic.out(0.7, 0.2)"
    })
    .to(
      words[1],
      {
        xPercent: -20,
        duration: 0.8,
        ease: "elastic.out(0.7, 0.2)"
      },
      "<"
    )
    .to(
      words[2],
      {
        xPercent: 5,
        duration: 0.8,
        ease: "elastic.out(0.7, 0.2)"
      },
      "<"
    )

    // Scale up heading
    .to(
      heading,
      {
        scale: 1.001,
        y: 0,
        duration: 0.5,
        ease: "back.in(1.5)"
      },
      "-=0.3"
    )

    // Stack words
    .to(
      words[1],
      {
        scaleX: 1.8,
        scaleY: 2.2,
        duration: 0.4,
        ease: "expo.inOut"
      },
      "<+=0.1"
    )
    .to(
      words[0],
      {
        yPercent: -150,
        xPercent: 40,
        duration: 0.3,
        ease: "power4.out"
      },
      "<"
    )
    .to(
      words[1],
      {
        xPercent: -70,
        duration: 0.3,
        ease: "power4.out"
      },
      "<"
    )
    .to(
      words[2],
      {
        yPercent: 150,
        xPercent: -110,
        duration: 0.3,
        ease: "power4.out"
      },
      "<"
    )

    .to(
      heading,
      {
        scale: 1.1,
        duration: 0.3,
        ease: "power4.out"
      },
      "-=0.2"
    )

    // Elastic finish
    .to(heading, {
      scale: 1,
      duration: 0.3,
      ease: "power4.out"
    })
    .to(
      words[0],
      {
        yPercent: -100,
        xPercent: 40,
        duration: 0.6,
        ease: "elastic.out(0.6,0.2)"
      },
      "<"
    )

    .to(
      words[1],
      {
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(0.6,0.2)"
      },
      "<"
    )
    .to(
      words[2],
      {
        yPercent: 100,
        duration: 0.6,
        ease: "elastic.out(0.6,0.2)"
      },
      "<"
    )

    // Pattern reveal
    .to(
      document.body,
      {
        "--pattern-opacity": 1,
        duration: 0.1
      },
      "<"
    )
    .set(btn, { display: "block" })
    .fromTo(
      btn,
      { scale: 0.8 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power4.out"
      }
    );
}
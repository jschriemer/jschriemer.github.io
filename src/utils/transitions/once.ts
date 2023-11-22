import anime from "animejs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (el: { querySelectorAll: (arg0: string) => any; }) => {
  const targets = el.querySelectorAll('h1, h2, a');
  const duration = 950;
  const anim = anime({
    autoplay: false,
    targets,
    translateY: {
      value: [-100, 0],
      duration,
    },
    opacity: {
      value: [0, 1],
      duration: duration * 0.75,
    },
    easing: 'easeOutQuart',
    delay: anime.stagger(100),
  });
  
  setTimeout(anim.play, 1000);

  return anim.finished;
}
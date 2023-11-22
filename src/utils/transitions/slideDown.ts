import anime from "animejs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (targets: { style: { transform: string; }; }, duration: any, from: any, to: any) => {
    targets.style.transform = `translateY(${from}%)`;
  
    const translateY = `${to}%`;
    const anim = anime.timeline({
      easing: 'easeInOutSine',
      duration,
    });
    
    anim.add({
      targets,
      translateY,
    });
  
    return anim.finished;
}

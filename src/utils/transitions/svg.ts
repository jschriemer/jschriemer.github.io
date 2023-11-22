import anime from "animejs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (container: { querySelector: (arg0: string) => any; }, duration: number) => {
  const shape = container.querySelector('.shape');
  const path = shape.querySelector('path');  		
  const animShape = anime({
    targets: shape,
    scaleY: [
      {
        value: [1.8, 1],
        duration: duration * 0.5,
        easing: 'easeInQuad',
      },
      {
        value: 1,
        duration: duration * 0.5,
        easing: 'easeOutQuad',
      }
    ]
  });
  
  const animPath = anime({
    targets: path,
    duration,
    easing: 'easeOutQuad',
    d: path.getAttribute('pathdata:id')
  });
    
  return Promise.all([
    animShape.finished,
    animPath.finished,
  ]);
}
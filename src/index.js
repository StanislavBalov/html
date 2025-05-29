import './style.css';
import createPopover from './popover';

const button = document.querySelector('.popover-btn');

button.addEventListener('mouseenter', () => {
  createPopover(button, 'Заголовок', 'Это текст поповера');
});

button.addEventListener('mouseleave', () => {
  const popover = document.querySelector('.popover');
  if (popover) popover.remove();
});
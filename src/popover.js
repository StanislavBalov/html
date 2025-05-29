export function showPopover(target) {
  const popover = document.createElement('div');
  popover.className = 'popover';
  popover.innerHTML = `
    <div class="popover-title">Popover title</div>
    <div class="popover-content">And here’s some amazing content. It’s very engaging. Right?</div>
  `;

  document.body.appendChild(popover);

  const { top, left, width } = target.getBoundingClientRect();
  popover.style.top = `${top - popover.offsetHeight}px`;
  popover.style.left = `${left + width / 2 - popover.offsetWidth / 2}px`;
}

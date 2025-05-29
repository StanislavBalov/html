export default function createPopover(target, title, message) {
  let existing = document.querySelector('.popover');
  if (existing) existing.remove();

  const popover = document.createElement('div');
  popover.className = 'popover';
  popover.innerHTML = `
    <div class="popover-title">${title}</div>
    <div class="popover-body">${message}</div>
  `;

  document.body.appendChild(popover);

  const { top, left, width } = target.getBoundingClientRect();
  popover.style.top = `${top - popover.offsetHeight}px`;
  popover.style.left = `${left + width / 2 - popover.offsetWidth / 2}px`;

}
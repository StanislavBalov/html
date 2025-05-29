/**
 * @jest-environment jsdom
 */

import { showPopover } from './popover';

describe('Popover', () => {
  let button;

  beforeEach(() => {
    // Устанавливаем начальное состояние DOM
    document.body.innerHTML = `
      <button class="popover-btn">Click me</button>
    `;
    button = document.querySelector('.popover-btn');
  });

  test('should create and append popover to the document', () => {
    showPopover(button);

    const popover = document.querySelector('.popover');
    expect(popover).not.toBeNull(); // элемент создан
    expect(popover.textContent).toContain('Popover title'); // заголовок содержится
  });

  test('should position popover relative to the button', () => {
    // задаём фиксированные координаты для кнопки
    button.getBoundingClientRect = jest.fn(() => ({
      top: 200,
      left: 100,
      width: 150,
      height: 40,
    }));

    showPopover(button);

    const popover = document.querySelector('.popover');
    expect(popover.style.top).toMatch(/px$/);
    expect(popover.style.left).toMatch(/px$/);
  });
});

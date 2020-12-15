import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import Header from './index.js';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it ("renders with header text", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe("EASYALLIES Menu");
});
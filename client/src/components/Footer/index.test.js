import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import Footer from './index.js';

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

it ("renders with footer text", () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.textContent).toBe("Easy Allies | Hall of Greats Compendium | Made by Joey Bruno");
});
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import About from './About.js';

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

it ("renders with About text", () => {
  act(() => {
    render(<About />, container);
  });

});
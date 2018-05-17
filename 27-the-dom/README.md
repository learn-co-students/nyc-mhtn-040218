# The Document Object Mode

Code associated to the Document Object Model lecture

## Objectives

* Abstraction layer between HTML and JS
  * DOM
  * DOM as a tree
  * DOM elements
* DOM Manipulation
  * Finding DOM Elements
  * Creating DOM elements
  * Altering DOM elements
* What is jQuery
* **Build something**

## Selectors

| Selector name                   | Return shape   | Return type    | Live? | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

Resources:

* [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
* [CSS Selectors Cheatsheet](https://gist.github.com/smutnyleszek/809a69dd05e1d5f12d01)

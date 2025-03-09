import { removeIndent } from './helpers.js';

// Convert containing, and editable style tags into
// a textarea with and sync changes back to the style tag.
class CSSEditorElement extends HTMLElement {
  constructor() {
    super();
    this.styleElement = null;
    this.textarea = null;
    this.handleInput = this.handleInput.bind(this);
  }

  connectedCallback() {
    // Find the first style element
    this.styleElement = this.querySelector('style');
    
    if (!this.styleElement) {
      console.warn('No style element found in css-editor');
      return;
    }

    this.textarea = document.createElement('textarea');
    this.textarea.value = removeIndent(this.styleElement.innerText);
    this.textarea.spellcheck = false;
    this.textarea.addEventListener('input', this.handleInput.bind(this));
    this.textarea.addEventListener('keydown', this.handleFocus.bind(this))
    this.textarea.addEventListener('blur', () => this.mode = "normal")
    this.textarea.addEventListener('click', () => this.mode = "insert")

    this.styleElement.after(this.textarea);
    this.styleElement.removeAttribute("contenteditable");
    this.mode = "normal"
  }

  #mode;
  get mode() {
      return this.#mode
  }

  set mode(mode) {
    if (mode === "normal") {
      // this.textarea.blur()
      this.textarea.setAttribute('readonly', 'readonly')
    }
    
    if (mode === "insert") {
      this.textarea.removeAttribute('readonly')
      this.textarea.focus()
    }

    this.#mode = mode
  }

  handleFocus(event) {
    if (this.mode === "normal") {
        if (event.key === 'i' || event.key === 'Enter') {
          this.mode = "insert";
          event.preventDefault();
        }
        return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      event.target.value = event.target.value.slice(0, start) + '\t' + event.target.value.slice(end);
      event.target.selectionStart = event.target.selectionEnd = start + 1;
    }

    if (event.key === 'Escape') {
        this.mode = "normal"
    }
  }

  handleInput(event) {
    this.styleElement.textContent = event.target.value;
  }

  disconnectedCallback() {
    if (this.textarea) {
      this.textarea.removeEventListener('input', this.handleInput);
      this.textarea.remove()
    }
  }
}

customElements.define('css-editor', CSSEditorElement);

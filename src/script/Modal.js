export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content) {
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'button', 'modal__close-btn');

    this.setContent(content);

    this.appendModalElements();

    this.bindCloseEvents();

    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modal.innerHTML = content;
    } else {
      this.modal.innerHTML = '';
      this.modal.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.prepend(this.modalCloseBtn);
    this.overlay.append(this.modal);
  }

  bindCloseEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    const classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-btn')) {
      document.querySelector('.overlay').remove();
    }
  }
}

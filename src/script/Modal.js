export class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }

    buildModal(content) {
        // Overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

        // Modal 
        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
        
        // Close Button
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close-btn');

        this.setContent(content);

        this.appendModalElements();

        // Open Modal
        this.openModal();

        // Close Modal
        this.bindEvents();

    }
    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes)
        return node;
    };

    setContent(content) {
        if(typeof content === 'string') {
            this.modal.innerHTML = content;
        } else {
            this.modal.innerHTML = '';
            this.modal.append(content);
        }
    }

    appendModalElements() {
        this.modal.prepend(this.modalCloseBtn);
        this.overlay.append(this.modal);
    }
    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    }
    openModal() {
        document.body.append(this.overlay);
    }

    closeModal(e) {
        let classesForClose = e.target.classList;
        let overlay = document.querySelector('.overlay');
        if(overlay && (classesForClose.contains('overlay') || classesForClose.contains('modal__close-btn'))) {
            overlay.remove();
        }
    }
}
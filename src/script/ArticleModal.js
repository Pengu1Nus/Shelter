import { Modal } from "./Modal";

export class ArticleModal extends Modal {
    constructor (classes, { id, name, img, animal, breed, description, age, inoculations, diseases, parasites }) {
        super(classes);
        this.id = id;
        this.name = name;
        this.img = img;
        this.animal = animal;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }
    // Article Modal generator
    generateContent() {
        let template = '';
        let article = document.createElement('div');
        article.className = 'modal__content';

        this.img && 
        (template += `<img class="modal__img" src=${this.img} alt="${this.name}">`)

        if (this.name || this.animal || this.breed || this.description || this.age || this.inoculations || this.diseases || this.parasites) {
            template += `<div class="modal__info">`
            
            this.name && 
            (template += `<h4 class="modal__title">${this.name}</h4>`)

            this.animal && this.breed &&
            (template += `<h5 class="modal__subtitle">${this.animal} - ${this.breed}</h5>`)

            this.description && 
            (template += `<p class="modal__text">${this.description}</p>`)
                template += `<ul class="modal__list">`
                    template += `<li class="modal__item"><span class="modal__item-bold">Age:</span> ${this.age}</li>`
                    template += `<li class="modal__item"><span class="modal__item-bold">Inoculations:</span> ${this.inoculations}</li>`
                    template += `<li class="modal__item"><span class="modal__item-bold">Diseases:</span> ${this.diseases}</li>`
                    template += `<li class="modal__item"><span class="modal__item-bold">Parasites:</span> ${this.parasites}</li>`
                template += `</ul>`
            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }
    renderModal() {
        let content = this.generateContent();
        console.log(this.name);
        super.buildModal(content);
    }
}
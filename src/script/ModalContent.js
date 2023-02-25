import { Modal } from './Modal';

export class ModalContent extends Modal {
  constructor(
    classes,
    {
      id,
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites,
    },
  ) {
    super(classes);
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateContent() {
    let template = '';
    const article = document.createElement('div');
    article.className = 'modal__content';

    this.img
      && (template += `<img class="modal__img" src=${this.img} alt="${this.name}">`);

    if (this.name || this.type || this.breed || this.description || this.age || this.inoculations || this.diseases || this.parasites) {
      template += '<div class="modal__info">';

      this.name && (template += `<h4 class="modal__title">${this.name}</h4>`);
      this.type && this.breed && (template += `<h5 class="modal__subtitle">${this.type} - ${this.breed}</h5>`);

      this.description
        && (template += `<p class="modal__text">${this.description}</p>`);

      this.age && this.inoculations && this.diseases && this.parasites
        && (template += '<ul class="modal__list">');

      (template += '<li class="modal__item">');
      (template += '<span class="modal__item-bold">Age: </span>');
      (template += `${this.age}</li>`);

      (template += '<li class="modal__item">');
      (template += '<span class="modal__item-bold">Inoculations: </span>');
      (template += `${this.inoculations}</li>`);

      (template += '<li class="modal__item">');
      (template += '<span class="modal__item-bold">Diseases: </span>');
      (template += `${this.diseases}</li>`);

      (template += '<li class="modal__item">');
      (template += '<span class="modal__item-bold">Parasites: </span>');
      (template += `${this.parasites}</li>`);

      (template += '</ul>');
      template += '</div>';
    }

    article.innerHTML = template;
    return article;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}

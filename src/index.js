import { Modal } from './script/Modal';

const data = [
    {
        id: 1,
        name: 'Jennifer',
        title: 'Dog - Labrador',
        urlToImg: 'images/img/jennifer.png',
        content: `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '2 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },

    {
        id: 2,
        name: 'Katrine',
        title: 'Cat - British',
        urlToImg: 'images/img/katrine.png',
        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '5 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 3,
        name: 'Woody',
        title: 'Dog - Retriever',
        urlToImg: 'images/img/woody.png',
        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 4,
        name: 'Sophia',
        title: 'Dog - Retriever',
        urlToImg: 'images/img/sophia.png',
        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 5,
        name: 'Timmy',
        title: 'Cat - Retriever',
        urlToImg: 'images/img/timmy.png',
        content: `Timmy is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 6,
        name: 'Charly',
        title: 'Dog - Retriever',
        urlToImg: 'images/img/charly.png',
        content: `Charly is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 7,
        name: 'Scarlett',
        title: 'Dog - Retriever',
        urlToImg: 'images/img/scarlet.png',
        content: `Scarlett is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
    {
        id: 8,
        name: 'Freddie',
        title: 'Cat - Retriever',
        urlToImg: 'images/img/freddie.png',
        content: `Freddie is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '10 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none',
    },
]

window.onload = function() {
    // Generate modal from Modal Class
    addToolsClickHandler();
}

const addToolsClickHandler = () => {
    let buttons = document.querySelectorAll('.pets__card-btn');
    buttons.forEach(button => {
        button.addEventListener('click', generateToolsModal);
    });
};

const generateToolsModal = () => {
    renderModalWindow('Test content');
}

const renderModalWindow = (content) => {
    let modal = new Modal('pets__modal');
    modal.buildModal(content);
}
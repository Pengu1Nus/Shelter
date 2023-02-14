import { ArticleModal } from './script/ArticleModal';

const petsData = [
    {
        id: 1,
        name: "Jennifer",
        img: "./images/img/jennifer.png",
        animal: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"]
    }
]

window.onload = function() {
    // Generate modal from Modal Class
    addToolsClickHandler();
}

const addToolsClickHandler = () => {
    let buttons = document.querySelectorAll('.pets__card-btn');
    buttons.forEach(button => {
        button.addEventListener('click', renderContentToModal);
    });
};

const renderContentToModal = () => {
    let modalContent = new ArticleModal('pets__modal', petsData[0]);
    return modalContent.renderModal();
}
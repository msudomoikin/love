export const initPopup = () => {
    const popup = document.querySelector('.popup');
    const openPopupButton = document.querySelector('.open-popup');
    const closePopupButton = document.querySelector('.close-popup');

    openPopupButton.addEventListener('click', () => {
        popup.showModal();
    });

    closePopupButton.addEventListener('click', () => {
        popup.close();
    });

}
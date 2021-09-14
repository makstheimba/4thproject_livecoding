const profileName = document.querySelector('.profile__value_type_name');
const profileFood = document.querySelector('.profile__value_type_food');
const profileButton = document.querySelector('.profile__button');

const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSubmitButton = popup.querySelector('.popup__submit');
const popupInputName = popup.querySelector('.popup__input_type_name');
const popupInputFood = popup.querySelector('.popup__input_type_food');

profileButton.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputFood.value = profileFood.textContent;
  openPopup();
});

popupSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileFood.textContent = popupInputFood.value;
  closePopup();
});

popupCloseButton.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('popup__is-opened')
}

function closePopup() {
  popup.classList.remove('popup__is-opened')
}
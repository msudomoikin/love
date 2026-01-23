import './popup.js';
import { initPopup } from './popup.js';

let word = 'ЛЮБОВЬ';
const MAX_FONT_CLASS_NUMBER = 9;

const textElement = document.querySelector('#text');

const createWord = () => {
    let newHTML = '';
    for (let i = 0; i < word.length; i++) {
        const randomClassNumber = Math.floor(Math.random() * 10);

        if (randomClassNumber > 0) {
            const randomClass = `new-font-regular-ss0${randomClassNumber}`;
            newHTML += `<span class="${randomClass} letter">${word[i]}</span>`;
        } else {
            newHTML += `<span class="letter new-font-regular-ss00">${word[i]}</span>`;
        }
    }

    textElement.innerHTML = newHTML;
}

const changeLetterClass = (event) => {
    const letter = event.target;
    const oldClass = letter.classList.value.split(' ').find(c => c.startsWith('new-font-regular-ss'));

    if (oldClass) {
        const match = oldClass.match(/ss(\d+)/);

        if (match) {
            let currentNum = parseInt(match[1], 10);

            if (currentNum < MAX_FONT_CLASS_NUMBER) {
                currentNum++;

                const newNum = currentNum.toString().padStart(2, '0');
                const newClass = `new-font-regular-ss${newNum}`;
                letter.classList.replace(oldClass, newClass);
            } else {
                letter.classList.replace(oldClass, 'new-font-regular-ss01');
            }
        }
    }
}

document.addEventListener('scroll', () => {
    createWord();
});

text.addEventListener('click', changeLetterClass);

createWord();
initPopup();

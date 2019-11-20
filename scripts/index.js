import { HamburgerButton } from '../libraries/scripts/HamburgerButton';

const hamburgerButton = new HamburgerButton('hamburger-button');
const result = document.getElementById('result');

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth >= 768) {
        hamburgerButton.hide();
    } else {
        hamburgerButton.show();
    }

    result.innerHTML = 'hamburger-button.pushed: false';
    hamburgerButton.element.addEventListener('click', () => {
        if (hamburgerButton.pushed) {
            result.innerHTML = 'hamburger-button.pushed: true';
        } else {
            result.innerHTML = 'hamburger-button.pushed: false';
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        console.log('window.innerWidth >= 768.');
        hamburgerButton.hide();
    } else {
        console.log('window.innerWidth < 768.');
        hamburgerButton.show();
    }
});

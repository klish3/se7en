import 'jquery';
import '../scss/styles.scss';
import 'font-awesome/scss/font-awesome.scss';

import {secretButton, secretParagraph } from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}
//jQuery
$(document).ready(function () {
    $('#secret-paragraph').css('color', 'red');
    $('p').click(function () {
        alert('Jquery Works');
    });

    //menu
    $('#menu-open-button').click(function () {
        $("#mySidenav").css('width','250px');
    });

    $('#menu-close-button').click(function () {
        $("#mySidenav").css('width','0px');
    });

});
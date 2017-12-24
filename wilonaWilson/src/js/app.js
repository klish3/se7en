import 'jquery';
import '../scss/styles.scss';
import 'font-awesome/scss/font-awesome.scss';



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
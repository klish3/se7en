import 'jquery';
import '../scss/styles.scss';
import 'font-awesome/scss/font-awesome.scss';



//jQuery
$(document).ready(function () {

    //menu
    $('#menu-open-button').click(function () {
        $("#mySidenav").css('width','250px');
    });

    $('#menu-close-button').click(function () {
        $("#mySidenav").css('width','0px');
    });

});
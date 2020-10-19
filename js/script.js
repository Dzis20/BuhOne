$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.header-content').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });


$('.tab-buttons a').click(function(){
    $(".tab-buttons a").removeClass("active");
    $(this).addClass("active");
    $('.tab').hide();
    $('#tab-'+$(this).attr('data-index')).fadeIn();
});
$('.tile').click(function () {
    $(this).toggleClass('flipped');
});

$('.tile').mouseleave(function () {
    $(this).removeClass('flipped');
});

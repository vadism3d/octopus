// Десктопная версия

// desktop-reg-close (закрытие для регистации десктоп)

$('.registration-btn').click(function(){
	$('.desktop-reg').addClass('desktop-reg-open');
})
$('.desktop-reg-close').click(function(){
	$('.desktop-reg').removeClass('desktop-reg-open');
})










// Мобильная версия
// Окно регистации
$('.mobile-nav-reg').click(function(){
	$('.mobile-reg').addClass('open');
    $('.mobile-nav').removeClass('open-open');
})
$('#close_popup').click(function(){
	$('.mobile-reg').removeClass('open');
})

// 
$('.log-reg-btn').click(function(){
	$('.mobile-reg').addClass('open');
    $('.mobile-nav').removeClass('open-open');
    $('.mobile-log').removeClass('open');
})
$('#close_popup').click(function(){
	$('.mobile-reg').removeClass('open');
})

// Окно входа
$('.mobile-nav-log').click(function(){
	$('.mobile-log').addClass('open');
    $('.mobile-nav').removeClass('open-open');
    $('.mobile-reg').removeClass('open');
})
$('.mobile-nav-reg-log').click(function(){
	$('.mobile-log').addClass('open');
    $('.mobile-nav').removeClass('open-open');
    $('.mobile-reg').removeClass('open');
})
$('#close-mobile-log').click(function(){
	$('.mobile-log').removeClass('open');
})

// Окно навигации
$('#open_popup').click(function(){
	$('.mobile-nav').addClass('open-open');
})
$('#mobile-nav-close').click(function(){
	$('.mobile-nav').removeClass('open-open');
})
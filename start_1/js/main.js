worker_1 = document.querySelector('.photo_worker.worker_1');
worker_2 = document.querySelector('.photo_worker.worker_2');
worker_3 = document.querySelector('.photo_worker.worker_3');
worker_4 = document.querySelector('.photo_worker.worker_4');

main_photo_worker = document.getElementById('main_photo_worker')

name_worker = document.querySelector('.title_block_6');
name_worker_2 = document.querySelector('.title_block_6_2');

next_arrow = document.querySelector('.arrow.next.worker')
prev_arrow = document.querySelector('.arrow.prev.worker')
index = 0

menu_home = document.querySelector('.menu_box.home');
menu_portfolio = document.querySelector('.menu_box.portfolio');
menu_about_us = document.querySelector('.menu_box.about_us');
menu_contacts = document.querySelector('.menu_box.contacts');

home = document.querySelector('.title_block_2');
portfolio = document.querySelector('.title_block_3');
about_us = document.querySelector('.title_block_5');
contacts = document.querySelector('.title_block_9');
arrow_up = document.querySelector('.upper');

menu_home.onclick = function(){
	home.scrollIntoView({ behavior: 'smooth' });
}
menu_portfolio.onclick = function(){
	portfolio.scrollIntoView({ behavior: 'smooth' });
}
menu_about_us.onclick = function(){
	about_us.scrollIntoView({ behavior: 'smooth' });
}
menu_contacts.onclick = function(){
	contacts.scrollIntoView({ behavior: 'smooth' });
}


window.onscroll = function myFunction() {
	var winScroll = document.documentElement.scrollTop;
	if (winScroll > 300){
		arrow_up.style.display = "block";
	}
	else{
		arrow_up.style.display = "none";
	}
}

arrow_up.onclick = function(){
	menu_home.scrollIntoView({ behavior: 'smooth' });
}

var name_arr = ['Alex Muza', 'Martin King', 'Max Ground', 'Will Mori']
worker_1.onclick = function(){
	main_photo_worker.src = ("src", "img/workers/worker_1.jpg")
	name_worker.innerHTML = "Alex Muza"
}

worker_2.onclick = function(){
	main_photo_worker.src = ("src", "img/workers/worker_2.jpg")
	name_worker.innerHTML = "Martin King"
}
worker_3.onclick = function(){
	main_photo_worker.src = ("src", "img/workers/worker_3.jpg")
	name_worker.innerHTML = "Max Ground"
}
worker_4.onclick = function(){
	main_photo_worker.src = ("src", "img/workers/worker_4.jpg")
	name_worker.innerHTML = "Will Mori"
}


$('.slider_foto').slick({
    infinite:true,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button class = "arrow prev"></button>',
 	nextArrow: '<button class = "arrow next"></button>',
 });

$('.worker_slider').slick({
    infinite:true,
    slidesToShow: 1,
    dots: false,
    speed: 500,
 	prevArrow: '<button class = "arrow prev worker"></button>',
 	nextArrow: '<button class = "arrow next worker"></button>',
 });
	$('.worker_slider').on('afterChange', function(event, slick, currentSlide){
     name_worker_2.innerHTML = name_arr[currentSlide];
});
const gnb_swiper = new Swiper("#gnb",{
	wrapperClass:"menu",
	slideClass:"btn",
	slidesPerView:"auto", //버튼의 갯수만큼 설정
});

const main_swiper = new Swiper("main",{
	wrapperClass:"container",
	slideClass:"area",
	direction:"vertical",
	speed:800,
	mousewheel:{
		enabled:true,
	},
	thumbs:{
		swiper:gnb_swiper,
		slideThumbActiveClass:"active",
	},
	pagination:{
		el:".pager",
		bulletActiveClass:'active',
		clickable:true,
	},
	navigation: {
    nextEl: '.next',
    prevEl: '.prev',
		disabledClass:'hidden',
  },
});
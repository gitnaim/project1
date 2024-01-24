$(function(){
	let winw, isMobile;

	$(window).resize(function(){
		winw=$(window).width();

		if(winw < 1400){
			isMobile=true;

			// 데스크탑 메뉴가 열리면 닫혀야 합니다.
			if($("#sitemap").is(":visible")){
				$("#exit_1").trigger("click");
			}
		}
		else{
			isMobile=false;

			// 모바일 메뉴가 열리면 닫혀야 합니다.
			if($("#tab_menu").hasClass("active")){
				$("#tab_menu .close").trigger("click");
			}
		}
	});

	$(window).trigger("resize");

	//sitemap
	$("#tab").click(function(e){
		e.preventDefault();

		if(isMobile){ // mobile
			$("body").addClass("fixed");
			$("#tab_menu").addClass("active");
			$(".dim").addClass("active");
		}
		else{ // pc
			$("body").addClass("fixed");
			$("#sitemap").show();
			$(".dim").addClass("active");
		}
	});

	$("#exit_1").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");
		$("#sitemap").hide();
		$(".dim").removeClass("active");
	});

	$("#tab_menu .close").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");
		$("#tab_menu").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#tab_menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") === false){
			$("#tab_menu > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#tab_menu ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});

	//gnb
	$("#gnb ul li").mouseenter(function(e){
		e.preventDefault();
		$("header").addClass("active");
	});
	$("#gnb ul li").mouseleave(function(e){
		e.preventDefault();
		$("header").removeClass("active");
	});

	// family_site
	$("#family_site > a").click(function(e){
		e.preventDefault();

		if($("#open_close").hasClass("open")){ // 나타나는 기능
			$("#family_site ul").slideDown(300);
			$("#open_close").removeAttr("class").addClass("close");
		}
		else{ // 사라지는 기능
			$("#family_site ul").slideUp(300);
			$("#open_close").removeAttr("class").addClass("open");
		}
	});

	//main_slider
	let mainCurrent, mainTotal;

	let mainSwiper=new Swiper(".mainSwiper", {
		fadeEffect:{crossFade:true},
		autoplay:{delay:3000},
		pagination:{el:".mainSwiper  .swiper-pagination", clickable:true},
		on:{                        
			init:function(){        
				mainCurrent=this.realIndex+1;
				mainTotal=this.slides.length;
				$(".main_slider .current_num .current").text(mainCurrent);
				$(".main_slider .current_num .total").text(mainTotal);
			},
			slideChangeTransitionEnd:function(){
				mainCurrent=this.realIndex+1;
				$(".main_slider .current_num .current").text(mainCurrent);
			}
		},
	});

	$(".main_slider .prev").click(function(e){ 
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext(); 
	});

	$(".controller #pause_play").click(function(e){
		e.preventDefault();

		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else { 
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	//sub_slider
	let subSwiper=new Swiper(".subSwiper", {
		slidesPerView: 2,
		spaceBetween: 30,
		autoplay: {
			delay: 1500,
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 25,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
		pagination: {
			el: ".subSwiper .swiper-pagination",
			type: "progressbar",
			clickable: true,
		},
		scrollbar: {
			el:'.subSwiper .swiper-scrollbar',
			draggable: true,
			hide: false
		},
		navigation: {
			nextEl: ".swiper .controller ul li a.next",
			prevEl: ".swiper .controller ul li a.prev",
			clickable: true
		},
		on:{
			init:function(){
				mainCurrent=this.realIndex+1;
				mainTotal=this.slides.length;
				$(".sub_slider .current_num .current").text(mainCurrent);
				$(".sub_slider .current_num .total").text(mainTotal);
			},
			slideChangeTransitionEnd: function(){
				mainCurrent=this.realIndex+1;
				$(".sub_slider .current").text(mainCurrent);
			}
		},
	});

	$(".sub_slider .prev").click(function(e){
		e.preventDefault();
		subSwiper.slidePrev();
	});

	$(".sub_slider .next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext();
	});
});
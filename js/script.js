var animationEnded;

var animatedSectionIds = [];

$(document).ready(function() {
	animationEnded = false;

	document.body.style.fontSize = window.innerWidth + "px";
	onresize = function() {
		document.body.style.fontSize = window.innerWidth + "px";
	}
	var height = ($(window).height() + 17) + 'px';

	var mobile_height = ($(window).height()) + 'px';
	var width = $(window).width() + 'px';
	var bool_input = true;
	$('.section_container').attr('style', 'height:' + height);
	$('.body_container').attr('style', 'width:' + width + '; height:' + height);
	if (height < "400") {
		$('.section_container').attr('style', 'height:' + mobile_height);

	}

	document.querySelector("#nav-toggle").addEventListener("click", function() {
		this.classList.toggle("activeM");
		var check_active = this.classList;
		if (check_active == "activeM") {
			/*$('.menubar_content').animate({
			 left : '0%'
			 }, 1000);*/
			$('.menubar_content').removeClass('MenuDeActivefadeIn');
			$('.menubar_content').addClass('MenuActivefadeIn');
			$('.menu_container').attr('style', 'z-index:9999;');
			if ($(window).width() < "1024") {
				$('#nav-toggle').animate({
					left : '5%'
				}, 100);
			}
		} else {
			setTimeout(function() {
				$('.menu_container').attr('style', 'z-index:0;');
			}, 10);

			if ($(window).width() < "1024") {

				$('#nav-toggle').animate({
					left : '2%'
				}, 100);

			}
			$('.menubar_content').removeClass('MenuActivefadeIn');
			$('.menubar_content').addClass('MenuDeActivefadeIn');
			/*$('.menubar_content').animate({
			 left : '-85%'
			 }, 1000);*/
		}
	});

	/*Management Doctor Hover*/
	$('.management_lady_Lastleft').hover(function() {
		$('.management_lady_Lastleft').removeClass('bounceInLeft');
	}, function() {
	});

	$('.management_lady_secondleft').hover(function() {
		$('.management_lady_secondleft').removeClass('bounceInLeft');
	}, function() {
	});
	if ($(window).innerHeight() <= "380") {
		var Doctor = $('.management_lady_secondleft').find('div');

		$(Doctor).removeClass('tooltip-turnright').addClass('tooltip-turnleft');
	}

	$('.management_doctor_center').hover(function() {
		$('.management_doctor_center').removeClass('bounceInRight');
	}, function() {
	});

	$('.management_lady_secondright').hover(function() {
		$('.management_lady_secondright').removeClass('bounceInRight');
	}, function() {
	});

	$('.management_lady_Lastright').hover(function() {
		$('.management_lady_Lastright').removeClass('bounceInRight');
	}, function() {
	});
	/* end Management Doctor Hover*/

	/***Home Page Start Animation******/

	if (animatedSectionIds.length <= 0 || (animatedSectionIds.length > 0 && animatedSectionIds.indexOf("0") < 0)) {
		/*Start Home Page Aniamtion */
		var input_value = parseInt($('#hidden_input').val());
		$('.menu').removeClass('menu_active');
		$('#' + input_value).addClass('menu_active');
		$('.home_navigation').addClass('fadeIn');
		$('.home_sofa').addClass('bounceInLeft');
		$('.logo_img').addClass('bounceInLeft');
		$('.logo_tagline').addClass('bounceInLeft');

		$('.home_light').addClass('fadeIn');
		$('.home_tree').addClass('fadeIn');
		$('.home_bird').addClass('fadeIn');

		$('.home_drawer').addClass('bounceInRight');
		$('.home_dustbin').addClass('fadeInRight');
		$('.home_table').addClass('bounceInRight');
		$('.home_phone').addClass('bounceInRight');
		$('.home_laptop').addClass('bounceInDownpen');
		$('.home_pen_stand').addClass('bounceInRight');
		$('.home_lady').addClass('bounceInRight');
		/*End Home Page Aniamtion */
		$(".home_lady").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			animationEnded = true;
			animatedSectionIds.push('0');
			$("#homesection").attr("isAnimated", "true");
			$('.doctor_big').attr('style', 'visibility:hidden');
			$(".popup").fancybox({
				openEffect : 'fade',
				openSpeed : 100,
				closeEffect : 'fade',
				closeSpeed : 200,
				arrows : true,
				autoSize : true,
				tpl : {
					wrap : '<div class="fancybox-wrap fancybox_background" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					image : '<img class="fancybox-image popup-image" src="{href}" alt="" />',
					closeBtn : '<a title="Close" onClick="fancybox_close();" id="close_btn" class="fancybox-item fancybox-close close-popup" href="javascript:;"></a>',
				}
			});
			$(".popup").eq(0).trigger('click');

		});
	}

	//Tab Key Down Enable In Form
	var inputs = $('input, textarea, select, button'),
	    inputTo;
	inputs.on('touchmove', function(e) {
		e.preventDefault();
	});

	$('.gallery_screen').on('touchmove', function(e) {
		e.preventDefault();
	});

	// bind on keydown
	inputs.on('keydown', function(e) {

		// if we pressed the tab
		if (e.keyCode == 9 || e.which == 9) {
			// prevent default tab action
			e.preventDefault();

			if (e.shiftKey) {
				// get previous input based on the current input
				inputTo = inputs.get(inputs.index(this) - 1);
			} else {
				// get next input based on the current input
				inputTo = inputs.get(inputs.index(this) + 1);
			}
			// move focus to inputTo, otherwise focus first input
			if (inputTo) {
				inputTo.focus();
			} else {
				inputs[0].focus();
			}
		}
	});

	/*****Navigation on Key Aerrow *******/
	$("body").on('keydown', function(e) {
		var key = e.keyCode;
		var boolean_input = $('#hidden_overlay').val();

		var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
		if (boolean_input == "true" && animationEnded) {
			var activeClass = $("#nav-toggle").hasClass('activeM');
			if (activeClass) {
				$("#nav-toggle").removeClass('activeM');
				$('.menubar_content').removeClass('MenuActivefadeIn');
				$('.menubar_content').addClass('MenuDeActivefadeIn');
				/*	$('.menubar_content').animate({
				 left : '-85%'
				 }, 1000);*/
				setTimeout(function() {
					$('.menu_container').attr('style', 'z-index:0;');
				}, 10);

			}
			var input_value = parseInt($('#hidden_input').val());


			if (key == 39 && input_value < MyArray.length - 1) {
				e.preventDefault();
				var section_name = MyArray[input_value + 1];
				$(section_name).attr('style', 'visibility:visible');
				moveToNextScreen(input_value);
			} else if (key == 37 && input_value > 0) {
				e.preventDefault();





				var section_name = MyArray[input_value - 1];
				$(section_name).attr('style', 'visibility:visible');
				moveToPreviousScreen(input_value);
			}

			if (key == 9) {
				e.preventDefault();
			}
		} else {
			if (!animationEnded || (key == 39 && input_value < MyArray.length - 1) || (key == 37 && input_value > 0) || (!bool_input && key == 39) || (!bool_input && key == 37) || (!bool_input && key == 9)) {
				e.preventDefault();
			}
		}

	});

	/*****Navigation on Mouse Wheel  *******/
	$(".body_container").on('mousewheel', function(event, delta) {

		var boolean_input = $('#hidden_overlay').val();

		var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];

		if (boolean_input == "true" && animationEnded) {
			var activeClass = $("#nav-toggle").hasClass('activeM');
			if (activeClass) {
				$("#nav-toggle").removeClass('activeM');
				/*$('.menubar_content').animate({
				 left : '-85%'
				 }, 1000);*/
				$('.menubar_content').removeClass('MenuActivefadeIn');
				$('.menubar_content').addClass('MenuDeActivefadeIn');

				setTimeout(function() {
					$('.menu_container').attr('style', 'z-index:0;');
				}, 10);
				if ($(window).width() < "1024") {

					$('#nav-toggle').animate({
						left : '2%'
					}, 1000);
				}

			}
			event.preventDefault();
			var input_value = parseInt($('#hidden_input').val());



			if (delta < 0 && input_value < MyArray.length - 1) {
				var section_name = MyArray[input_value + 1];

				$(section_name).attr('style', 'visibility:visible');

				moveToNextScreen(input_value);
			} else if (delta > 0 && input_value > 0) {




				var section_name = MyArray[input_value - 1];
				$(section_name).attr('style', 'visibility:visible');

				moveToPreviousScreen(input_value);
			}
		}
	});

	if (window.innerHeight > window.innerWidth) {
		$('.potrait_loader').attr('style', 'display:block');
	}

	$(window).on("orientationchange", function() {
		if (window.orientation == 0)// Portrait
		{
			location.reload();
			$('.potrait_loader').attr('style', 'display:block');
		} else// Landscape
		{
			location.reload();
			$('.potrait_loader').attr('style', 'display:none');
		}
	});
	/*****Navigation on Menu Click *******/
	$('.menu').click(function() {

		var id = $(this).attr('id');
		var next_id = parseInt(id) + 1;
		var prev_id = parseInt(id) - 1;

		var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
		var section_name = MyArray[id];
		var prev_section = MyArray[next_id];
		var next_section = MyArray[prev_id];
		var section_name = MyArray[id];
		/*****Company Logo ANimation****/
 		/*****End Company Logo ANimation****/
		if (animationEnded) {

			var AfterIanimated = $(section_name).attr('isanimated');
			var InnerSectionId = parseInt($('#hidden_input').val());
			if (id == 7) {
				$(".form_submit").attr("style", "display:block");
			} else if (id == 8) {
				setTimeout(function() {
					$(".form_submit").attr("style", "display:none");
				}, 1000);
			}

			// if(id == 1 && $("#aboutsection").attr('isanimated')){
			// $(".doctor_big").attr("style", "visibility:hidden");
			// }
			if (InnerSectionId < id) {
				for ( i = InnerSectionId + 1; i < id; i++) {
					var disablesection = MyArray[i];

					setTimeout(function() {
						$(MyArray[InnerSectionId]).animate({
							opacity : 0
						}, 50);
					}, 1000);

					setTimeout(function() {
						$(disablesection).attr('style', 'visibility:hidden;');
					}, 0);

					if (MyArray[i] == "#aboutsection") {
						var about_section = MyArray[i];
						var About_animate = $(about_section).attr('isAnimated');
						if (About_animate) {
							$('.doctor_big').attr('style', 'visibility:hidden;');
						}
					}

					/*Submit Button Hide*/
					if (MyArray[i] == "#contactsection") {
						$('.form_submit').attr('style', 'visibility:hidden;');
					}


					if (MyArray[i] == "#newsection") {
						$('.form_submit').attr('style', 'visibility:hidden;');
					}
					if (next_id == "-1" || prev_id == "-1") {
						$('.doctor_big').attr('style', 'visibility:hidden;');
					}

				}

			} else {
				for ( i = InnerSectionId - 1; i > id; i--) {
					var disablesection = MyArray[i];
					setTimeout(function() {
						$(MyArray[InnerSectionId]).animate({
							opacity : 0
						}, 50);

					}, 1000);
					setTimeout(function() {
						$(disablesection).attr('style', 'visibility:hidden;');
					}, 0);
					if (MyArray[i] == "#aboutsection") {
						var about_section = MyArray[i];
						var About_animate = $(about_section).attr('isAnimated');
						if (About_animate) {
							$('.doctor_big').attr('style', 'visibility:hidden;');
						}
					}
					if (next_id == "-1" || prev_id == "-1") {
						$('.doctor_big').attr('style', 'visibility:hidden;');
					}
				}

			}

			if (AfterIanimated) {
				setTimeout(function() {
					$(next_section).animate({
						opacity : 0
					}, 50);
					$(prev_section).animate({
						opacity : 0
					}, 50);
				}, 1000);

				$(section_name).animate({
					opacity : 0
				}, 50);
				if ($(section_name).attr("isAnimated") == "true") {
					if (section_name == "#aboutsection") {
						$('.doctor_big').attr('style', 'visibility:visible;');
					}
				}
				setTimeout(function() {
					$(section_name).animate({
						opacity : 1
					}, 1000);
				}, 1000);
			}

			$(section_name).attr('style', 'visibility:visible');
			var current_input = parseInt($('#hidden_input').val());
			if ($(window).width() < "1024")
				$('#nav-toggle').animate({
					left : '2%'
				}, 1000);
			if (id == 0 && current_input > (id + 1)) {
				current_input = (id + 1);
			} else if (id > 0 && current_input != (id - 1)) {
				current_input = (id - 1);
			}

			$('#hidden_input').val(current_input);

			if (current_input < id && current_input < MyArray.length - 1) {
				$("#nav-toggle").toggleClass('activeM');
				$('.menubar_content').removeClass('MenuActivefadeIn');
				$('.menubar_content').addClass('MenuDeActivefadeIn');
				/*$('.menubar_content').animate({
				 left : '-85%'
				 }, 1000);*/
				setTimeout(function() {
					$('.menu_container').attr('style', 'z-index:0;');
				}, 10);
				if ($(window).width() < "1024") {
					$('#nav-toggle').animate({
						left : '2%'
					}, 1000);
				}
				moveToNextScreen(current_input);
			} else {
				$("#nav-toggle").toggleClass('activeM');
				/*$('.menubar_content').animate({
				 left : '-85%'
				 }, 1000);*/
				$('.menubar_content').removeClass('MenuActivefadeIn');
				$('.menubar_content').addClass('MenuDeActivefadeIn');
				setTimeout(function() {
					$('.menu_container').attr('style', 'z-index:0;');
				}, 10);
				if ($(window).width() < "1024") {
					$('#nav-toggle').animate({
						left : '2%'
					}, 1000);
				}
				moveToPreviousScreen(current_input);
			}
		}
	});
	//Close Menu Body Click
	$('.body_container').click(function() {
		var activeClass = $("#nav-toggle").hasClass('activeM');
		if (activeClass) {
			$("#nav-toggle").removeClass('activeM');
			$('.menubar_content').removeClass('MenuActivefadeIn');
			$('.menubar_content').addClass('MenuDeActivefadeIn');
			/*$('.menubar_content').animate({
			 left : '-85%'
			 }, 1000);*/
			setTimeout(function() {
				$('.menu_container').attr('style', 'z-index:0;');
			}, 10);
			if ($(window).width() < "1024") {
				$('#nav-toggle').animate({
					left : '2%'
				}, 1000);
			}
		}

	});

	/*****Navigation on Touch Event In Mobile *******/
	if ($(window).width() <= 1024) {

		$(document).swipe({

			swipe : function(event, direction, distance, duration, fingerCount, fingerData) {

				var activeClass = $("#nav-toggle").hasClass('activeM');
				if (activeClass) {
					$("#nav-toggle").removeClass('activeM');
					/*$('.menubar_content').animate({
					 left : '-85%'
					 }, 1000);*/
					$('.menubar_content').removeClass('MenuActivefadeIn');
					$('.menubar_content').addClass('MenuDeActivefadeIn');
					setTimeout(function() {
						$('.menu_container').attr('style', 'z-index:0;');
					}, 10);
					if ($(window).innerHeight() < "480") {
						$('#nav-toggle').animate({
							left : '2%'
						}, 1000);
					}
				}
				if (animationEnded) {
					if (direction == "left") {
						var boolean_input = $('#hidden_overlay').val();
						var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
						if (boolean_input == "true" && animationEnded) {
							var input_value = parseInt($('#hidden_input').val());

							if (input_value < MyArray.length - 1) {
								var section_name = MyArray[input_value + 1];
								$(section_name).attr('style', 'visibility:visible');
								moveToNextScreen(input_value);
							}
						}
					} else if (direction == "right") {
						var boolean_input = $('#hidden_overlay').val();
						var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
						if (boolean_input == "true" && animationEnded) {
							event.preventDefault();
							var input_value = parseInt($('#hidden_input').val());
							if (input_value <= MyArray.length - 1) {







								var section_name = MyArray[input_value - 1];
								$(section_name).attr('style', 'visibility:visible');
								moveToPreviousScreen(input_value);
							}
						}
					}

				}
			},
			swipeUp : function(event, direction, distance, duration, fingerCount, fingerData) {
			},
			doubleTap : function(event, target) {
				event.preventDefault();
			},
			fingers : "all",
		});

	}

	/* Model Popup Script */
	$('body').click(function() {
		bool_input = true;
		$('#hidden_overlay').val(bool_input);
		$('.about_svg_container').attr('style', 'visibility:hidden');
		$('.about_svg_container').removeClass("fadeIn");
		$('.about_svg_container').addClass("fadeOut");
		$('.about_overlay').attr('style', 'display:none');
		$('.about_dentisty_container').attr('style', 'visibility:hidden;');
		$('.about_dentisty_container').removeClass("fadeIn");
		$('.about_dentisty_container').addClass("fadeOut");

		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 9;');
	});

	$('.about_dentisty_content,.about_dentisty_content1, .about_destisty_text,.about_destisty_text1, .about_destisty_text2, .about_me_text , .about_popup_container').click(function(event) {
		event.stopPropagation();
	});
	/*****About Section Popup Click *******/
	$('.about_me_text').click(function() {
		bool_input = false;

		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:block');
		$('.about_svg_container').attr('style', 'visibility:visible');
		$('.about_svg_container').removeClass("fadeOut");
		$('.about_svg_container').addClass("fadeIn");
		$('.doctor_big').css('z-index', '99999999');
		$('.about_dentistry').attr('style', 'z-index: 9;');
		$('.home_family_denatl_menu').addClass('family_index');

	});

	$('.about_destisty_text').click(function() {
		bool_input = false;

		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:block');
		$('.about_dentisty_container').attr('style', 'visibility:visible;');
		$('.about_dentisty_container').removeClass("fadeOut");
		$('.about_dentisty_container').addClass("fadeIn");
		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 9999999;');
		$('.home_family_denatl_menu').addClass('family_index');

	});
	$('.about_destisty_text1').click(function() {
		bool_input = false;

		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:block');
		$('.about_dentisty_container1').attr('style', 'visibility:visible;');
		$('.about_dentisty_container1').removeClass("fadeOut");
		$('.about_dentisty_container1').addClass("fadeIn");
		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 9999999;');
		$('.home_family_denatl_menu').addClass('family_index');

	});




	$('.about_destisty_text2').click(function() {
		bool_input = false;

		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:block');
		$('.about_dentisty_container2').attr('style', 'visibility:visible;');
		$('.about_dentisty_container2').removeClass("fadeOut");
		$('.about_dentisty_container2').addClass("fadeIn");
		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 1;');
		$('.home_family_denatl_menu').addClass('family_index');

	});

	/*Close Click Popup*/
	$('.about_me').click(function() {

		bool_input = true;
		$('#hidden_overlay').val(bool_input);
		$('.about_svg_container').attr('style', 'visibility:hidden;');
		$('.about_svg_container').removeClass("fadeIn");
		$('.about_svg_container').addClass("fadeOut");
		$('.about_overlay').attr('style', 'display:none');

		$('.doctor_big').css('z-index', '99999999');
		$('.about_dentistry').attr('style', 'z-index: 9;');
		$('.home_family_denatl_menu').removeClass('family_index');
	});

	$('.denstisty').click(function() {
		bool_input = true;
		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:none');
		$('.about_dentisty_container').attr('style', 'visibility:hidden;');
		$('.about_dentisty_container').removeClass("fadeIn");
		$('.about_dentisty_container').addClass("fadeOut");
		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 9;');
		$('.home_family_denatl_menu').removeClass('family_index');
	});



	$('.denstisty1').click(function() {
		bool_input = true;
		$('#hidden_overlay').val(bool_input);
		$('.about_overlay').attr('style', 'display:none');
		$('.about_dentisty_container1').attr('style', 'visibility:hidden;');
		$('.about_dentisty_container1').removeClass("fadeIn");
		$('.about_dentisty_container1').addClass("fadeOut");
		$('.doctor_big').css('z-index', '9');
		$('.about_dentistry').attr('style', 'z-index: 9;');
		$('.home_family_denatl_menu').removeClass('family_index');
	});





		$('.denstisty2').click(function() {
			bool_input = true;
			$('#hidden_overlay').val(bool_input);
			$('.about_overlay').attr('style', 'display:none');
			$('.about_dentisty_container2').attr('style', 'visibility:hidden;');
			$('.about_dentisty_container2').removeClass("fadeIn");
			$('.about_dentisty_container2').addClass("fadeOut");
			$('.doctor_big').css('z-index', '9');
			$('.about_dentistry').attr('style', 'z-index: 9;');
			$('.home_family_denatl_menu').removeClass('family_index');
		});

	/* end  Model Popup Script */
	// $('.overlay_svg').animate({ width:'0px' , height:'100px'},50000);
	/**Validation Form***/
	$(function() {
		$('#txtcontact').keydown(function(e) {
			var key = e.keyCode;
			if ((key >= 65 && key <= 90) || e.shiftKey || (key >= 186 && key <= 222) || (key >= 106 && key <= 111) || key == 32) {
				e.preventDefault();
			}
		});
		$('#txtname').keydown(function(e) {
			var key = e.keyCode;
			if ((key >= 48 && key <= 57) || (key >= 96 && key <= 111) || (key >= 186 && key <= 222)) {
				e.preventDefault();
			}
		});
	});

	/***Browser Script***/
	/*Internet Explorer*/
	if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
		$('.about_door').attr('style', 'bottom:12%;');
		$('.about_birdcage').attr('style', 'bottom:13%;');
		$('.about_close_door_shadow').attr('style', 'bottom:8.3%;');
		$('.about_open_door_shadow').attr('style', 'bottom:2.3%;');
		$('.about_dentistry').attr('style', 'bottom:8%');

		$('.emergency_Door').attr('style', 'bottom:11.3%;');
		$('.emergency_door_shadow').attr('style', 'right: 5%;  width: 38.5%;');
		$('.management_board').attr('style', 'bottom:12%;');
		$('.feedback_computer').attr('style', ' bottom:10%');
		$('.feedback_computer_book').attr('style', ' bottom:13%;');
		$('.feedback_apple').attr('style', 'bottom:13%; left:8%');
		$('.feedback_board').attr('style', 'bottom:11.8%');
	}
	/*****Browser Detect For safari  *******/
	var IsSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	if (IsSafari) {
		if (screen.width >= "1024") {
			$('.home_family_denatl').attr('style', ' top:45%;');

			$('.home_lady').attr('style', 'bottom:23%;');
			$('.home_tree').attr('style', 'bottom:10%;');
			$('.home_cupboard').attr('style', 'top: 18%; left: 47%;');

			$('.about_door').attr('style', 'bottom:12%;');
			$('.about_birdcage').attr('style', 'bottom:13%;');
			$('.about_close_door_shadow').attr('style', 'bottom:8.3%;');
			$('.about_open_door_shadow').attr('style', 'bottom:2.3%;');
			$('.about_dentistry').attr('style', 'right: 4.5%; width: 19.5%; bottom:9%');

			$('.management_board').attr('style', 'bottom:12%;');
			$('.gallery_projector_light').attr('style', 'top: 13.5%;');

			$('.emergency_text_door').attr('style', 'top: 12%;');
			$('.emergency_teeth').attr('style', 'bottom: 32%;');
			$('.emergency_Door').attr('style', 'bottom:11.3%;');
			$('.emergency_teeth_shadow').attr('style', 'bottom: 32%;');
			$('.emergency_door_shadow').attr('style', 'right: 5%;  width: 38.5%;');
			$('.emergency_light').attr('style', 'top: 15%;');

			$('.feedback_line_book4').attr('style', 'top: 19.7%;');
			$('.feedback_line_book5').attr('style', 'top: 19.3%;');
			$('.feedback_computer').attr('style', ' bottom:10%');
			$('.feedback_computer_book').attr('style', ' bottom:13%;');
			$('.feedback_apple').attr('style', 'bottom:13%; left:8%');
			$('.feedback_board').attr('style', 'bottom:11.8%');

			$('.answer_text').attr('style', 'line-height:100%;');

			var about_path = $('.about_svg').find('path').attr('d');
			var new_path = "M350 385 400 0,400 0 710 650";
			var dentisty_path = $('.about_svg_dentisty').find('path').attr('d');
			var new_dentistypath = "M250 385 400 0,400 0 685 605";

			$('.about_svg').find('path').attr('d', new_path);
			$('.about_svg_dentisty').find('path').attr('d', new_dentistypath);

			$('.textarea_font').attr('style', 'border-radius:0px;')
		} else {
			$('.home_family_denatl_menu').attr('style', 'width:12%;');
			$('.family_text').attr('style', 'font-size:145%;');
			if ($(window).innerHeight() < "400" && $(window).innerHeight() > "350") {
				$('.about_body_text').attr('style', 'font-size:150% !important;');
				$('.about_body_text1').attr('style', 'font-size:150% !important;');

				$('.feedback_board').attr('style', 'width:30%;');
				$('.feedback_form_header').attr('style', 'font-size: 200%; !important');
				$('.feedback_form_text').attr('style', 'font-size: 180% !important;');
				$('.door_text').attr('style', 'font-size: 225% !important;');
				$('.form_submit').attr('style', 'font-size: 190% !important;     padding: 2.5% 0 1% 0 !important;');
				$('.textarea_font').attr('style', 'border-radius:0px !important;');
				$('.contact_text_body, .contact_text_subtitle').attr('style', 'font-size:81% !important;');
				$('.emergency_text_door').attr('style', 'top: 20% !important;');
				$('.facility_text').attr('style', 'font-size: 230% !important;');

			}
			if ($(window).innerHeight() < "350") {
				$('.feedback_board').attr('style', 'width:30%;');
				$('.feedback_form_header').attr('style', 'font-size: 190%; !important');
				$('.feedback_form_text').attr('style', 'font-size: 160% !important;');
				$('.form_submit').attr('style', 'font-size: 180% !important;     padding: 2.5% 0 1% 0 !important;');
				$('.textarea_font').attr('style', 'border-radius:0px !important;');
				$('.emergency_teeth, .emergency_teeth_shadow').attr('style', 'bottom: 33% !important;');
				$('.feedback_apple, .feedback_computer_book').attr('style', 'bottom: 9%;');
			}
		}

	}
	if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
		$('.answer_text').attr('style', 'line-height:110%');
		$('.feedback_form_container').attr('style', 'top:9%');
		$('.form_submit').attr('style', ' margin:1% 33% 0 33%;');

	}
	/*****SVG Path Responsive  *******/
	var about_svgpath = $('.about_svg').find('path').attr('d');
	if (screen.width <= "1440") {
		var new_path = "M200 365 400 0,400 0 550 600";
		$('.about_svg').find('path').attr('d', new_path);
	}
	if (screen.width <= "1400") {
		var new_path = "M200 365 400 0,400 0 550 600";
		$('.about_svg').find('path').attr('d', new_path);
	}
	if (screen.width <= "1366") {
		var new_path = "M200 365 400 0,400 0 505 500";
		$('.about_svg').find('path').attr('d', new_path);
	}
	if (screen.width <= "1280") {
		var new_path = "M100 365 400 0,400 0 465 610";
		$('.about_svg').find('path').attr('d', new_path);
	}
	if (screen.width <= "1155") {
		var new_path = "M100 350 350 0,350 0 455 610";
		$('.about_svg').find('path').attr('d', new_path);
	}
	if (screen.width <= "1024") {
		var new_path = "M100 350 350 0,350 0 399 555";
		$('.about_svg').find('path').attr('d', new_path);

		var Family_grand_path = "M111 580 200 100,200 100 600 180";
		$('.family_svg').find('path').attr('d', Family_grand_path);

	}
	if (screen.width <= "1000") {
		var new_path = "M100 350 300 0,300 0 362 415";
		$('.about_svg').find('path').attr('d', new_path);

		var Family_grand_path = "M00 120 250 200,250 200 80 370";
		$('.parent_svg').find('path').attr('d', Family_grand_path);
	}
	if (screen.width <= "800" && screen.height <= "600") {
		var new_path = "M100 350 250 0,250 0 302 415";
		$('.about_svg').find('path').attr('d', new_path);
	}

	/*Responsive Script*/
	if (screen.width == "1280" && screen.height == "1024") {

		var new_path = "M200 365 400 0,400 0 500 610";
		$('.about_svg').find('path').attr('d', new_path);

		$('.menu').attr('style', 'height: 10.4%;');
		$('.menu:first-child').attr('style', 'height: 5%;');
		$('.menu_text').attr('style', 'bottom:10%;');

		$('.home_tree').attr('style', 'width:60%; height:48%; bottom:6%;');
		$('.home_light').attr('style', 'width:41%; top:9%; left:3%;');
		$('.logo_img').attr('style', 'top:32%; left:24%; width:16%;');
		$('.logo_tagline').attr('style', 'top:37%; left:42%; width:20.5%;');
		$('.home_cupboard').attr('style', 'top:18%; left:42%; width:43%;');
		$('.home_combine_obj').attr('style', 'right:1.3%; width:100%;');
		$('.home_lady').attr('style', 'bottom:17.5%; right:23.5%; width:27%;');
		$('.home_drawer').attr('style', 'width:21%;');
		$('.home_bird').attr('style', 'width:23%; top:7%; left:48.8%;');
		/*About*/
		$('.about_bird').attr('style', 'top:10%; width:30%;');
		$('.about_door').attr('style', 'width:17%;');
		$('.about_light').attr('style', 'width:10%;');
		$('.about_close_door_shadow').attr('style', 'bottom:11%; left:2%; width:27.6%;');
		$('.about_open_door_shadow').attr('style', 'bottom:5.3%; width:26.6%; left:2.6%;');
		$('.about_bulb_shadow').attr('style', 'right:4.3%; width:23%; top:17%;');
		$('.about_dentisty_container').css('right', '24%');
		$('.about_dentisty').attr('style', 'bottom:23%; right:23%; width:38%;');
		$('.about_svg_dentisty').attr('style', 'width:75%;');
		/*management*/
		$('.management_lady_Lastleft').attr('style', 'width:9.3%;');
		$('.management_lady_secondleft').attr('style', 'width:16.8%; left:12.5%');
		$('.management_doctor_center').attr('style', 'width: 16%; left:28.5%');
		$('.management_lady_secondright').attr('style', 'width:10.8%; left:44.5%');
		$('.management_lady_Lastright').attr('style', 'width: 10.3%; left:56.5%');
		$('.management_board').attr('style', 'width:25%');
		$('.management_text_body').attr('style', 'line-height:95%;');

		$('.svgpopup_image').attr('style', ' width:17%');
		$('.svgpopup_position').attr('style', ' font-size: 170%;');
		$('.vidhi_svg ').attr('style', ' width: 23%;');
		$('.meet_svg ').attr('style', 'width:21%;');
		$('.samta_svg ').attr('style', 'width:18.5%;');
		/*Gallery*/
		$('.gallery_projector').attr('style', 'width:13%; right:38%;');
		$('.gallery_projector_light').attr('style', 'right:16.5%; width:56%; top:11%;');
		$('.gallery_screen').attr('style', 'top:16.7%; width:60.7%;');
		$('.gallery_table').attr('style', 'width:60%; right: 15%; bottom:2%;');
		$('.gallery_doctors').attr('style', 'width: 51%; bottom: -2%; right: 20%;');

		$('.facilities_board').attr('style', 'width:36%;');
		$('.facility_text_container').attr('style', 'line-height: 160%;');
		$('.bootle_text_header').attr('style', 'font-size: 200%;');
		$('.bottle_text_body').attr('style', 'font-size: 160%;');
		$('.facility_table').attr('style', 'width:37%;');
		$('.facility_stand').attr('style', 'right:5%;  width:34%;');
		$('.facility_doctor').attr('style', 'right:6.6%; width:50%;');
		$('.facility_table_big').attr('style', 'right:29%; width:14%;');

		$('.faq_family').attr('style', 'width:31%; left:3%');
		$('.faq_cloud').attr('style', 'top:41%; left:28%;');
		$('.faq_board').attr('style', 'width:46%;');
		$('.emergency_Door').attr('style', 'right:9%; width:33%;');
		$('.emergency_text_door').attr('style', 'top:19%;');
		$('.emergency_light').attr('style', 'top:29%; width:16%; right:17.5%;');
		$('.emergency_text_operation').attr('style', 'bottom:5%;');
		$('.emergency_nurse').attr('style', 'width:54%; left:3%;');
		$('.emergency_door_shadow').attr('style', 'width:43.2%; right:4%; bottom:9.2%;');

		$('.feedback_line_book1').attr('style', 'top:32%;');
		$('.feedback_line_book3').attr('style', 'top:27%;');
		$('.feedback_line_book4').attr('style', 'top:21.3%;');
		$('.feedback_line_book5').attr('style', 'top:20.8%;');
		$('.svgpopup_header').attr('style', 'padding: 17% 0 0 0 !important;');

		$('.feedback_computer').attr('style', 'width:29%;');
		$('.feedback_apple').attr('style', 'left:8%;');
		$('.feedback_computer_book').attr('style', 'bottom:14.5%; left:24.5%; width:10.5%;');
		$('.feedback_board').attr('style', 'width:32%;');
		$('.feedback_form_container').attr('style', 'top:12%;');
		$('.contact_board').attr('style', 'left:3%; width:57%;');
		$('.contact_text_body, .contact_text_subtitle ').attr('style', 'font-size:80%;');
		$('.contact_text_header').attr('style', 'font-size:270%;');

		$('.about_doctor').addClass("about_doctor_1024");
		$('.about_dentistry').addClass("about_dentistry_1024");
		$('.about_dentisty_container').addClass("about_dentisty_container_1024");

		var family_grand = $('.family_grandparent_svg').attr('style');
		var family_parent = $('.family_parent_svg').attr('style');
		var family_child = $('.family_children_svg').attr('style');

		$('.family_grandparent_svg').attr('style', 'top:10%;' + family_grand);
		$('.family_parent_svg').attr('style', 'top:10%;' + family_parent);
		$('.family_children_svg').attr('style', 'top:10%;' + family_child);

		$('.parent_svg').attr('style', 'width: 68%;  height: 76%;');
		$('.children_svg').attr('style', 'width: 78%;  height: 79%;');

	}

	if (screen.width == "1280" && screen.height == " 960") {
		$('.home_tree').attr('style', 'width:60%; height:48%; bottom:9%;');
		$('.home_light').attr('style', 'width:41%; top:9%; left:3%;');
		$('.logo_img').attr('style', 'top:32%; left:24%; width:16%;');
		$('.logo_tagline').attr('style', 'top:37%; left:42%;  width:20.5%;');
		$('.home_cupboard').attr('style', 'top:18%; left:42%; width:43%;');
		$('.home_combine_obj').attr('style', 'right:1.3%; width:100%;');
		$('.home_lady').attr('style', 'bottom:19%; right:23.5%; width:27%;');
		$('.home_drawer').attr('style', 'width:21%;');
		$('.home_bird').attr('style', 'width:23%; top:7%; left:48.8%;');
		/*About*/
		$('.about_bird').attr('style', 'top:10%; width:30%;');
		$('.about_door').attr('style', 'width:17%;');
		$('.about_light').attr('style', 'width:10%;');
		$('.about_close_door_shadow').attr('style', 'bottom:11%; left:2%; width:27.6%;');
		$('.about_open_door_shadow').attr('style', 'bottom:5.3%; width:26.6%; left:2.6%;');
		$('.about_bulb_shadow').attr('style', 'right:5%;  width:21%; top:16%;');
		$('.about_dentisty_container').css('right', '24%');
		$('.about_dentisty').attr('style', 'bottom:23%; right:23%; width:42%;');
		$('.about_svg_dentisty').attr('style', 'width:75%;');
		$('.about_light').attr('style', 'width:9%; right:11%;');

		/*management*/
		$('.management_lady_Lastleft').attr('style', 'width:9.3%;');
		$('.management_lady_secondleft').attr('style', 'width:16.8%; left:12.5%');
		$('.management_doctor_center').attr('style', 'width:16%; left:28.5%');
		$('.management_lady_secondright').attr('style', 'width:10.8%; left:44.5%');
		$('.management_lady_Lastright').attr('style', 'width:10.3%; left:56.5%');
		$('.management_board').attr('style', 'width:25%');
		$('.management_text_body').attr('style', 'line-height:95%;');
		$('.svgpopup_image').attr('style', ' width:17%');
		$('.svgpopup_position').attr('style', ' font-size: 170%;');
		$('.vidhi_svg ').attr('style', ' width: 23%;');
		$('.meet_svg ').attr('style', 'width:21%;');
		$('.samta_svg ').attr('style', 'width:18.5%;');
		$('.svgpopup_header').attr('style', 'padding: 14% 0 0 0 !important;');
		/*Gallery*/
		$('.gallery_projector').attr('style', 'width:13%; right:38.5%;');
		$('.gallery_projector_light').attr('style', 'right:16.5%; width:56%; top:12%;');
		$('.gallery_screen').attr('style', 'top:18%; width:60.7%;');
		$('.gallery_table').attr('style', 'width:60%; right: 15%; bottom:2%;');
		$('.gallery_doctors').attr('style', 'width: 51%; bottom: -2%; right: 20%;');

		$('.facilities_board').attr('style', 'width:36%;');
		$('.facility_table').attr('style', 'width:34%;');
		$('.facility_stand').attr('style', 'right:5%; width:34%;');
		$('.facility_doctor').attr('style', 'right:6.6%; width:50%;');
		$('.facility_table_big').attr('style', 'right:29%; width:14%;');

		$('.faq_family').attr('style', 'width:31%; left:3%');
		$('.faq_cloud').attr('style', 'top:36%; left:29%;');
		$('.faq_board').attr('style', 'width:46%;');

		$('.emergency_Door').attr('style', 'right:9%; width:33%;');

		$('.emergency_text_door').attr('style', 'top:19%;');
		$('.emergency_light').attr('style', 'top:25%; width:16%; right:17.5%;');
		$('.emergency_text_operation').attr('style', 'bottom:5%;');
		$('.emergency_nurse').attr('style', 'width:54%; left:3%;');
		$('.feedback_line_book1').attr('style', 'top:32.3%;');
		$('.feedback_line_book3').attr('style', 'top:27%;');
		$('.feedback_line_book4').attr('style', 'top:21.3%;');
		$('.feedback_line_book5').attr('style', 'top:20.8%;');

		$('.feedback_computer').attr('style', 'width:29%;');
		$('.feedback_apple').attr('style', 'left:8%;');
		$('.feedback_computer_book').attr('style', 'bottom:14.5%; left:24.5%; width:10.5%;');
		$('.feedback_board').attr('style', 'width:32%;');
		$('.feedback_form_container').attr('style', 'top:12%;');
		$('.contact_board').attr('style', 'left:3%; width:57%;');
		$('.contact_text_body, .contact_text_subtitle ').attr('style', 'font-size:80%;');
		$('.contact_text_header').attr('style', 'font-size:270%;');

		$('.emergency_door_shadow').attr('style', 'width:43.2%; right:4%; bottom:9.2%;');

		$('.about_dentistry').addClass("about_dentistry_960");
		$('.about_svg_container').addClass("about_svg_container_960");
		$('.about_dentisty_container').addClass("about_dentisty_container_960");

		var family_grand = $('.family_grandparent_svg').attr('style');
		var family_parent = $('.family_parent_svg').attr('style');
		var family_child = $('.family_children_svg').attr('style');

		$('.family_grandparent_svg').attr('style', 'top:10%;' + family_grand);
		$('.family_parent_svg').attr('style', 'top:10%;' + family_parent);
		$('.family_children_svg').attr('style', 'top:10%;' + family_child);

		$('.family_svg').attr('style', '  height: 82%;');
		$('.parent_svg').attr('style', 'width: 68%;  height: 79%;');
		$('.children_svg').attr('style', 'width: 78%;  height: 79%;');
	}
	if (screen.width == "1280" && screen.height == "768") {
		var new_path = "M100 365 400 0,400 0 450 410";
		$('.about_svg').find('path').attr('d', new_path);
		$('#nav-toggle').attr('style', 'left:1.5% !important');

		$('.menu_text').attr('style', 'bottom:2%;');
		$('.home_tree').attr('style', 'bottom:13%;');
		$('.home_lady').attr('style', 'bottom: 23.5%; ');
		$('.about_svg_dentisty').attr('style', 'width:54%;');
		$('.management_lady_Lastleft').attr('style', ' width:8.3%;');
		$('.management_lady_secondleft').attr('style', 'width:15.8%; left:12.5%');
		$('.management_doctor_center').attr('style', 'width: 15%; left:28.5%');
		$('.management_lady_secondright').attr('style', 'width9.8%; left:44.5%');
		$('.management_lady_Lastright').attr('style', 'width: 9.3%; left:56.5%');

		$('.faq_board').attr('style', 'right:8%;');
		$('.Third_doctor ').attr('style', 'width: 71%;');
		$('.First_doctor ').attr('style', 'width: 127%;');
		$('.svgpopup_header ').attr('style', 'padding: 12% 0 0 0 !important;');

		$('.gallery_projector_light').attr('style', 'top:13%;');
		$('.gallery_screen').attr('style', 'top:20%;');

		$('.facilities_board').attr('style', 'width:30%;');
		$('.facility_table').attr('style', 'width:31%;');
		$('.emergency_light').attr('style', 'top:13%;');
		$('.emergency_door_shadow').attr('style', 'right: 4.3%; width: 40%;');
		$('.feedback_line_book1').attr('style', 'top:34.4%;');
		//$('.family_popup_container').attr('style', 'width:53%;');
		$('.parent_svg').attr('style', '  height: 88%;');
	}
	if ($(window).width() < "700" && $(window).width() > "660" && $(window).innerHeight() < "300") {
		$('.emergency_teeth , .emergency_teeth_shadow').attr('style', 'bottom:9% !important');
		$('.feedback_board').attr('style', 'width: 26%;');
		//$('.feedback_apple, .feedback_computer_book').attr('style', 'bottom:15% ');
	}

	/********Start Family Dental Care Animation********/
	var Familyanimated = false;
	//Family Dental Care Animation flag.
	$('.home_family_denatl_menu').click(function() {
		var open = $(this).attr('data-open');

		var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
		var Current_Sectionid = parseInt($('#hidden_input').val());
		var Current_Section = MyArray[Current_Sectionid];
		var Section_Div = Current_Section + ' section_container div';

		if (open == "true") {
			if (animationEnded && !Familyanimated) {

				$(Current_Section).stop().animate({
					opacity : '0'
				}, 500);
				$('.menu_content').fadeOut();
				$('.family_dental_container').attr('style', 'display:block;');

				setTimeout(function() {
					$('.family_background').stop().animate({
						opacity : '1'
					}, 500);
					$('.body_container').stop().animate({
						opacity : '1'
					}, 500);

					$('.familydental_container').stop().animate({
						opacity : '1'
					}, 500);

				}, 700);
				$('.home_family_denatl_menu').attr('style', 'z-index:9999999999999991;display:block');
				$('.home_family_denatl_menu').attr('data-open', 'false');
				setTimeout(function() {

					$('.family_clock').addClass('familyfadeInDown');
					$('.family_grandparent_image').addClass('familybounceInRight');
					$('.family_parent_image').addClass('familybounceInRight');
					$('.family_children_image').addClass('familybounceInRight');

					$('.family_grandparent_svg').addClass('familyfadeIn');
					$('.family_dental_overlay').addClass('familyfadeIn');
					$(".family_children_image").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
						Familyanimated = true;
					});
				}, 900);
				setTimeout(function() {
					$('.family_logo').attr('style', 'background-image: url(images/familypopup_close.png);');
				}, 700);
			}

		} else {

			if (Familyanimated) {
				Familyanimated = false;
				$('.familydental_container').stop().animate({
					opacity : '0'
				}, 500);
				$('.family_background').stop().animate({
					opacity : '0'
				}, 500);
				$('.body_container').stop().animate({
					opacity : '1'
				}, 500);

				setTimeout(function() {
					$(Current_Section).animate({
						opacity : '1'
					}, 500);
					$('.menu_content').fadeIn(500);
					$('.family_dental_container').attr('style', 'display:none;');

				}, 600);

				setTimeout(function() {
					$('.family_clock').removeClass('familyfadeInDown');
					$('.family_grandparent_image').removeClass('familybounceInRight');
					$('.family_parent_image').removeClass('familybounceInRight');
					$('.family_children_image').removeClass('familybounceInRight');

					$('.family_grandparent_svg').removeClass('familyfadeIn');
					$('.family_dental_overlay').removeClass('familyfadeIn');

					$('body').removeClass('Family_Background');
				}, 900);
				setTimeout(function() {
					$('.family_logo').attr('style', 'background-image: url(images/family_dental_logo.png);');
				}, 900);

				$('.family_dental_overlay').attr('style', 'display:block');
				$('.family_image').attr('style', 'z-index:0;');
				$('.family_dental_care').hide();
				$('#grand_family').attr('style', 'z-index:9');
				$('#grandparent').attr('style', 'z-index:9');

				$('.home_family_denatl_menu').attr('style', 'z-index:999; display:block');
				$('.home_family_denatl_menu').attr('data-open', 'true');
				//	open= "true";

			}
		}

	});

	/********End Family Dental Care Animation********/

});

/*****Navigation on Move To Next  *******/
function moveToNextScreen(input_value) {
	animationEnded = false;
	/**Start FadeIn Family Dental Care**/


	/**End FadeIn Family Dental Care**/
	var nextValue = input_value + 1;
	$('.menu').removeClass('menu_active');
	$('#' + nextValue).addClass('menu_active');
	if(nextValue == 0)
	{
		$('.company_logo_container').show();
		$('.company_logo_container_right').hide();
	}
	else{
		$('.company_logo_container').hide();
		$('.company_logo_container_right').show();
	}
	if (nextValue == "3") {
		setTimeout(function() {
			$('.gallery_overlay').fadeIn();
		}, 1000);
	} else {
		$('.gallery_overlay').fadeOut();
	}
	if (nextValue == "7") {
		$('.form_submit').attr('style', 'display:block');
	}
	var animationStartCalled = false;

	if (animatedSectionIds.length <= 0 || (animatedSectionIds.length > 0 && animatedSectionIds.indexOf(nextValue) < 0)) {
		animationStartCalled = true;
		StartAnimation(nextValue);
	}

	$('.body_container').animate({
		scrollLeft : (nextValue * $(document).width()) + 'px'
	}, 1000, 'linear', function() {
		if (!animationStartCalled) {
			animationEnded = true;
		}
		$('input').blur();
		$('textarea').blur();

	});
	/*****Company Logo ANimation****/

	/*****End Company Logo ANimation****/
	$('#hidden_input').val(nextValue);
	var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
	var New_id = parseInt($('#hidden_input').val());
	var Current = MyArray[New_id];
	var next_id = New_id + 1;
	var prev_id = New_id - 1;

	var next_section = MyArray[next_id];
	var prev_section = MyArray[prev_id];

	setTimeout(function() {
		$(next_section).animate({
			opacity : 0
		}, 50);
		$(prev_section).animate({
			opacity : 0
		}, 50);
	}, 1000);
	if (next_section == "#feedbacksection") {
		setTimeout(function() {
			$(".form_submit").attr("style", "display:block");
		}, 1000);
	}

	//if (animationEnded == "true") {
	//    if (Current == "#aboutsection" && $("#aboutsection").attr("isAnimated") == "true") {
	//        $('.doctor_big').attr('style', 'visibility:visible;');
	//    }
	//}

	$(Current).animate({
		opacity : 0
	}, 50);

	setTimeout(function() {
		$(Current).animate({
			opacity : 1
		}, 1000);
		if (Current == "#aboutsection" && $("#aboutsection").attr("isAnimated") == "true") {
			$('.doctor_big').attr('style', 'visibility:visible;');
		}
	}, 1000);

}

/*****Navigation on Move To Prev. *******/
function moveToPreviousScreen(input_value) {

console.log("jane")
	animationEnded = false;

	var prevValue = input_value - 1;
	$('.menu').removeClass('menu_active');
	$('#' + prevValue).addClass('menu_active');
	if(prevValue == 0)
	{
		$('.company_logo_container').show();
		$('.company_logo_container_right').hide();
	}
	else{
		$('.company_logo_container').hide();
		$('.company_logo_container_right').show();
	}
	if (prevValue == 3) {
		setTimeout(function() {
			$('.gallery_overlay').fadeIn();
		}, 1500);
	} else {
		$('.gallery_overlay').fadeOut();
	}
	if (prevValue == "7") {
		$('.form_submit').attr('style', 'display:block');
	}

	$('.body_container').animate({
		scrollLeft : (prevValue * $(document).width()) + 'px'
	}, 1000, 'linear', function() {
		animationEnded = true;
		$('input').blur();
		$('textarea').blur();
	});
	/*****Company Logo ANimation****/

	/*****end Company Logo ANimation****/
	var MyArray = ["#homesection", "#aboutsection", "#managementsection", "#gallerysection", "#facilitysection", "#faqsection", "#emergencysection", "#feedbacksection", "#contactsection","#newsection"];
	var currentDivId = MyArray[prevValue];

	if ($(currentDivId).attr("isAnimated") == "false") {
		StartAnimation(prevValue);
	}

	$('#hidden_input').val(prevValue);

	var New_id = parseInt($('#hidden_input').val());

	var Current = MyArray[New_id];
	var next_id = New_id + 1;
	var prev_id = New_id - 1;

	var next_section = MyArray[next_id];
	var prev_section = MyArray[prev_id];

	setTimeout(function() {
		$(next_section).animate({
			opacity : 0
		}, 50);
		$(prev_section).animate({
			opacity : 0
		}, 50);
	}, 1000);
	if (next_section == "#feedbacksection") {
		setTimeout(function() {
			$(".form_submit").attr("style", "display:block");
		}, 1000);
	}

	$(Current).animate({
		opacity : 0
	}, 50);
	setTimeout(function() {
		$(Current).animate({
			opacity : 1
		}, 1000);
		if (Current == "#aboutsection" && $("#aboutsection").attr("isAnimated") == "true") {
			$('.doctor_big').attr('style', 'visibility:visible;');
		}
	}, 1000);

}

/*****Start Animation when section show on sceen *******/
function StartAnimation(value) {
	animationEnded = false;
	if (value == "0") {
		startHomeAnimation(value);
	} else if (value == "1") {
		startAboutAnimation(value);
		if (screen.width < "1000") {
			$('.about_doctor').removeClass('zoomIndoctor');
			$('.about_doctor').addClass('zoomIndoctor_tablet');
		}
		if ($(window).innerHeight() < "380") {
			$('.about_doctor').removeClass('zoomIndoctor_tablet');
			$('.about_doctor').addClass('zoomIndoctor');
		}

	} else if (value == "2") {
		startManagementAnimation(value);
	} else if (value == "3") {
		startGalleryAnimation(value);
	} else if (value == "4") {
		startFacilityAnimation(value);
	} else if (value == "5") {
		startFaqAnimation(value);
	} else if (value == "6") {
		startEmergencyAnimation(value);
	} else if (value == "7") {
		startFeedbackAnimation(value);
	} else if (value == "8") {
		startContactAnimation(value);
	}
	else if (value==9){
		startNewAnimation(value);
	}
}

/****Start Aniamtion**/
function startHomeAnimation(value) {
	$('.home_tree, .home_bird').attr('style', 'animation-delay: 1.5s;');
	$('.home_sofa , .logo_img, .logo_tagline').attr('style', 'animation-delay: 2s;');
	$('.home_light').attr('style', 'animation-delay: 2.3s;');
	//$('.home_cupboard').attr('style','animation-delay: 2.3s;');
	$('.home_drawer').attr('style', 'animation-delay: 2.7s;');
	$('.home_dustbin').attr('style', 'animation-delay: 3.7s;');
	$('.home_phone , .home_table , .home_pen_stand').attr('style', 'animation-delay: 4.2s;');
	$('.home_laptop').attr('style', 'animation-delay: 4.7s;');
	$('.home_lady').attr('style', 'animation-delay: 5.5s;');
	$('.home_sofa').addClass('bounceInLeft');
	$('.logo_img').addClass('bounceInLeft');
	$('.logo_tagline').addClass('bounceInLeft');
	$('.home_light').addClass('fadeIn');
	$('.home_tree').addClass('fadeIn');
	$('.home_bird').addClass('fadeIn');

	//$('.home_cupboard').addClass('fadeIn');
	$('.home_drawer').addClass('bounceInRight');
	$('.home_dustbin').addClass('fadeInRight');
	$('.home_table').addClass('bounceInRight');

	$('.home_phone').addClass('bounceInRight');
	$('.home_laptop').addClass('bounceInDownpen');
	$('.home_pen_stand').addClass('bounceInRight');
	$('.home_lady').addClass('bounceInRight');
	$(".home_lady").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$('.doctor_big').attr('style', 'visibility:visible;');
		$("#homesection").attr("isAnimated", "true");
	});
}

function startAboutAnimation(value) {
	$('#yehai').hide();
	$('.about_light').addClass('bounceInDown');
	$('.about_bulb_shadow').addClass('fadeIn');
	$('.about_bird').addClass('fadeInLeft');

	$('#yehai').addClass("animated  bounceIn  aboutdelay25");
	$('#yehai').show();
	//$('.about_door').addClass('fadeIn');
	$('.about_close_door_shadow').addClass('fadeOutdoor');
	$('.left_door').addClass('door_left_anim');
	$('.right_door').addClass('door_right_anim');
	$('.about_open_door_shadow').addClass('fadeIndoor');
	$('.about_birdcage').addClass('bounceInUp');
	//$('.about_doctor').addClass('bounceInLeft');
	$('.about_doctor').addClass('zoomIndoctor');
	$('.about_doctor').addClass('animated bounceInRight')
	$('.about_dentistry').addClass('bounceInRight');

	$(".about_doctor").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {


		$('.about_destisty_text').attr('style', 'visibility:visible');
		$('.about_destisty_text1').attr('style', 'visibility:visible');
		$('.about_destisty_text2').attr('style', 'visibility:visible');
		$('.about_me_text').attr('style', 'visibility:visible');
		animationEnded = true;
		animatedSectionIds.push(value);

		$("#aboutsection").attr("isAnimated", "true");
	});
}

function startContactAnimation(value) {
	$('.contact_baby_top').addClass('bounceInRightBaby');
	$('.contact_baby_middle').addClass('bounceInRightBaby');
	$('.contact_baby_bottom').addClass('bounceInRightBaby');
	$('.doctor_board').addClass('bounceInLeft');
	$('.contact_doctor').addClass('bounceInRight');
	$('.contact_text_container').addClass('fadeIn');
	$(".contact_text_container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);





		$("#contactsection").attr("isAnimated", "true");
		$(".form_submit").attr("style", "display:none");
	});
}




function startNewAnimation(value) {
	$('.contact_baby_top').addClass('bounceInRightBaby');
	$('.contact_baby_middle').addClass('bounceInRightBaby');
	$('.contact_baby_bottom').addClass('bounceInRightBaby');
	$('.doctor_board').addClass('bounceInLeft');
	$('.contact_doctor').addClass('bounceInRight');
	$('.new_contact_text_container').addClass('fadeIn');
	$(".new_contact_text_container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$("#newsection").attr("isAnimated", "true");
		$(".form_submit").attr("style", "display:none");
	});
}

function startManagementAnimation(value) {
	$('.management_doctor_center').addClass('bounceInRight');
	$('.management_doctor_center').addClass('management_centerdoctor');

	$('.management_lady_secondleft').addClass('bounceInLeft');
	$('.management_lady_secondleft').addClass('management_Secondfirstlady');

	$('.management_lady_secondright').addClass('bounceInRight');
	$('.management_lady_secondright').addClass('management_Secondlastlady');

	$('.management_lady_Lastleft').addClass('bounceInLeft');
	$('.management_lady_Lastleft').addClass('management_firstlady');

	$('.management_lady_Lastright').addClass('bounceInRight');
	$('.management_lady_Lastright').addClass('management_lastlady');
	$('.facility_board').addClass('fadeInDown');
	$('.management_text_container').addClass('fadeIn');
	$(".management_text_container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$("#managementsection").attr("isAnimated", "true");
	});
}

function startGalleryAnimation(value) {
	$('.gallery_lamp').addClass('bounceInRight');
	$('.gallery_projector').addClass('fadeInDown');
	$('.screen').addClass('fadeIn');
	$('.gallery_desk').addClass('bounceInLeft');
	$('.gallery_table').addClass('bounceInRight');
	$('.gallery_doctor').addClass('bounceInLeft');
	$('.gallery_doctors').addClass('zoomIndoctors');
	$('.gallery_projector_light').addClass('fadeIn');
	$('.gallery_overlay').addClass('fadeIn');
	$('.Gallery_Image_container').addClass('fadeIn');
	$('.gallery_doctors').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		$('.gallery_doctors').css('z-index', '0');
	});
	$(".gallery_projector_light").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$('.gallery_overlay').removeClass('fadeIn');
		$('.gallery_overlay').attr("style", "display: block;");
		$("#gallerysection").attr("isAnimated", "true");
	});
}

function startFacilityAnimation(value) {
	$('.facilities_board').addClass('bounceInDown');
	$('.facility_table').addClass('fadeInLeft');
	$('.facility_table_big').addClass('fadeInRightBig');
	$('.facility_stand').addClass('fadeInRightBig');
	$('.facility_doctor').addClass('fadeInRight');
	$(".facility_doctor").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$("#facilitysection").attr("isAnimated", "true");
	});
}

function startFaqAnimation(value) {
	$('.faq_family').addClass('bounceInLeft');
	$('.faq_cloud').addClass('zoomInCloud');
	$('.faq_text_container').addClass('fadeIn');
	$('.F_board').addClass('fadeInDown');
	$('.faq_slider_text_container').addClass('fadeIn');
	$(".faq_slider_text_container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);

		$('.F_board').removeClass('fadeInDown');
		$('.faq_slider_text_container').removeClass('fadeIn');
		$("#faqsection").attr("isAnimated", "true");
	});
}

function startEmergencyAnimation(value) {
	$('.emerg_door').addClass('fadeIn');
	$('.emergency_door_shadow').addClass('fadeIn');

	$('.emergency_text_door').addClass('fadeIn');
	$('.emergency_nurse').addClass('bounceInLeft');
	$('.emergency_light').addClass('fadeInDown');
	$(".emergency_nurse").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$("#emergencysection").attr("isAnimated", "true");
		$(".form_submit").attr("style", "display:none");
	});
}

function startFeedbackAnimation(value) {
	$('.feedback_computer').addClass('bounceInLeft');
	$('.feedback_apple').addClass('bounceInDownbookComputer');
	$('.feedback_computer_book').addClass('bounceInDownbookComputer');
	$('.feedback_shelf').addClass('bounceInLeft');
	$('.feedback_line_book1').addClass('bounceInDownbook');
	$('.feedback_line_book2').addClass('bounceInDownbook');
	$('.feedback_line_book3').addClass('bounceInDownbook');
	$('.feedback_line_book4').addClass('bounceInDownbook');
	$('.feedback_line_book5').addClass('bounceInDownbook');

	$('.F_board').addClass('fadeInDown');
	$('.faq_slider_text_container').addClass('fadeIn');
	$(".faq_slider_text_container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		animationEnded = true;
		animatedSectionIds.push(value);
		$("#feedbacksection").attr("isAnimated", "true");
	});
}

/*****Validation in Form *******/
function ValidateFeedback() {
	var strname = document.getElementById('txtname').value;
	var strmail = document.getElementById('txtemail').value;
	var strcontact = document.getElementById('txtcontact').value;
	var straddress = document.getElementById('txtaddress').value;
	var strinquiry = document.getElementById('txtinquiry').value;
	var strfeedback = document.getElementById('txtfeedback').value;

	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var phoneno = /^\d{10}$/;

	if (strname.trim() == "") {
		alert("Please Enter Name !!!")
		$("#txtname").focus();
		return false;
	} else if (strmail.trim() == "") {
		alert("Please Enter  Email !!!");
		$("#txtemail").focus();
		return false;
	} else if (!filter.test(strmail)) {
		alert('Please enter valid email');
		$("#txtemail").focus();
		return false;
	} else if (strcontact.trim() == "") {
		alert("Please Enter Contact Number !!!");
		$("#txtcontact").focus();
		return false;
	} else if (!phoneno.test(strcontact)) {
		alert('Please enter valid Contact Number (Only 10 Digit Number)');
		$("#txtcontact").focus();
		return false;
	} else if (straddress.trim() == "") {
		alert("Please Enter Address !!!");
		$("#txtaddress").focus();
		return false;
	} else if (strinquiry.trim() == "") {
		alert("Please Enter Inquiry !!!");
		$("#txtinquiry").focus();
		return false;
	} else if (strfeedback.trim() == "") {
		alert("Please Enter Feedback !!!");
		$("#txtfeedback").focus();
		return false;
	}
}

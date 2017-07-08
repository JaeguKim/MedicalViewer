window.addEventListener("load", bone_draw, false);

/* bone var */
var cranium = new Image();
cranium.src = "/img/bone/cranium_yellow.png";

var pelvis = new Image();
pelvis.src = "/img/bone/pelvis_yellow.png";
	
var rib = new Image();
rib.src = "/img/bone/rib_white.png";

var Spine = new Image();
Spine.src = "/img/bone/Spine_yellow.png";

var left_hand = new Image();
left_hand.src = "/img/bone/left_hand_yellow.png";

var left_scapula = new Image();
left_scapula.src = "/img/bone/left_scapula_white.png";

var left_wing = new Image();
left_wing.src = "/img/bone/left_wing_white.png";

var leftarm_down = new Image();
leftarm_down.src = "/img/bone/leftarm_down_white.png";

var leftarm_up = new Image();
leftarm_up.src = "/img/bone/leftarm_up_white.png";

var leftcartilage = new Image();
leftcartilage.src = "/img/bone/leftcartilage_white.png";

var leftfoot = new Image();
leftfoot.src = "/img/bone/leftfoot_yellow.png";

var leftleg_down = new Image();
leftleg_down.src = "/img/bone/leftleg_down_white.png";

var leftleg_up = new Image();
leftleg_up.src = "/img/bone/leftleg_up_white.png";

var right_hand = new Image();
right_hand.src = "/img/bone/right_hand_yellow.png";

var right_scapula = new Image();
right_scapula.src = "/img/bone/right_scapula_white.png";

var right_wing = new Image();
right_wing.src = "/img/bone/right_wing_white.png";

var rightarm_down = new Image();
rightarm_down.src = "/img/bone/rightarm_down_white.png";

var rightarm_up = new Image();
rightarm_up.src = "/img/bone/rightarm_up_white.png";

var rightcartilage = new Image();
rightcartilage.src = "/img/bone/rightcartilage_white.png";

var rightfoot = new Image();
rightfoot.src = "/img/bone/rightfoot_white.png";

var rightleg_down = new Image();
rightleg_down.src = "/img/bone/rightleg_down_white.png";

var rightleg_up = new Image();
rightleg_up.src = "/img/bone/rightleg_up_white.png";

function bone_draw() {
	var bone_canvas = document.getElementById("bone_canvas");
	var content = bone_canvas.getContext("2d");

	/*
	content.beginPath();
	content.arc(170, 150, 50, 0, 2*Math.PI,true);
	content.fillStyle = "rgba(255, 0, 0, 0.3)"
	content.fill();
	*/
	
	content.drawImage(cranium, 383, 10, 80, 110);
	content.globalCompositeOperation = "source-over";
	content.drawImage(Spine, 392, 98, 58, 243);
	content.drawImage(pelvis , 366, 270, 110, 90);
	
	content.drawImage(left_wing, 400, 110, 104, 104);
	content.drawImage(right_wing, 340, 110, 104, 104);
	content.drawImage(rib, 360, 120, 122, 140);
	
	content.drawImage(left_scapula, 430, 110, 70, 35);
	content.drawImage(right_scapula, 340, 111, 70, 35);
	
	content.drawImage(leftarm_up, 440, 110, 140, 160);
	content.drawImage(rightarm_up, 265, 110, 140, 160);
	content.drawImage(leftarm_down, 495, 205, 135, 135);
	content.drawImage(rightarm_down, 218, 205, 135, 135);
	content.drawImage(left_hand, 555, 266, 120, 120);
	content.drawImage(right_hand, 165, 250, 130, 130);
	
	content.drawImage(leftleg_down, 428, 460, 67, 170);
	content.drawImage(rightleg_down, 344, 455, 67, 170);
	content.drawImage(leftleg_up, 432, 310, 55, 180);
	content.drawImage(rightleg_up, 353, 308, 55, 177);
	content.drawImage(leftfoot, 435, 595);
	content.drawImage(rightfoot, 350, 590);
	content.drawImage(leftcartilage, 348, 447);
	content.drawImage(rightcartilage, 437, 447);
}

function bone_canvas_init(){
	var bone_canvas = document.getElementById("bone_canvas");
	bone_canvas.onclick = function(event) {
		var willLeft = document.documentElement.clientWidth / 2 - 250;
		var willTop = document.documentElement.clientHeight / 2 - 200;
		
		var x = event.clientX - bone_canvas.getBoundingClientRect().left;
		var y = event.clientY - bone_canvas.getBoundingClientRect().top;
		
		console.log(x + '\n');
		console.log(y);
		
		var popup_image = document.getElementById("popup_img");
		if (x > 408 && x < 478 && y > 10 && y < 110) {
			popup_image.src = "/img/xray/normal_head.jpg";
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 396 && x < 486 && y > 280 && y < 350) {
			popup_image.src = "/img/xray/normal_pevis.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 227 && x < 262 && y > 303 && y < 331) {
			popup_image.src = "/img/xray/right_hand.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 603 && x < 667 && y > 310 && y < 345) {
			popup_image.src = "/img/xray/left_hand.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 354 && x < 401 && y > 615 && y < 656) {
			popup_image.src = "/img/xray/right_foot.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 449 && x < 481 && y > 619 && y < 648) {
			popup_image.src = "/img/xray/left_foot.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 367 && x < 507 && y > 327 && y < 606) {
			popup_image.src = "/img/xray/leg.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 603 && x < 667 && y > 310 && y < 345) {
			popup_image.src = "/img/xray/left_hand.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 406 && x < 434 && y > 112 && y < 127) {
			popup_image.src = "/img/xray/neck.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
		else if (x > 404 && x < 444 && y > 222 && y < 271) {
			popup_image.src = "/img/xray/spine.jpg";
			popup_image.width = 450;
			bone_canvasClick(willLeft, willTop);
		}
	};
}

function bone_canvasClick(willLeft, willTop) {
	$("#overlay").fadeIn('slow');
	$("#popup").css({"left":willLeft, "top":willTop});
	$("#popup").fadeIn("slow");
}

function showBoneCanvas() {
	document.getElementById("urine_or_blood_check").style.visibility = "hidden";
	$('canvas').hide();
	$('#bone_canvas').show();
	
}

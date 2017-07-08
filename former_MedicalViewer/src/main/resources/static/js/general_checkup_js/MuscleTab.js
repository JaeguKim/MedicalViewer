window.addEventListener("load", muscle_draw, false);

/*muscle var */
var muscle_background = new Image();
muscle_background.src = "/img/muscle/muscle-Male.PNG";

function muscle_draw() {
	var muscle_canvas = document.getElementById("muscle_canvas");
	var content = muscle_canvas.getContext("2d");

	content.drawImage(muscle_background, 250,0);
	content.globalCompositeOperation = "source-over";
	
	/*wrist*/
	content.beginPath();
	content.arc(342, 400, 25, 0, 2 * Math.PI);
	content.stroke();
	
	content.beginPath();
	content.moveTo(342,400);
	content.lineTo(200,420);
	content.stroke();
	
	content.font = '20px Malgun New Gulim';
	content.strokeText('손목 터널증후군', 60, 441);
	
	/*neck*/
	content.beginPath();
	content.arc(403, 121, 25, 0, 2 * Math.PI);
	content.stroke();
	
	content.beginPath();
	content.moveTo(403,121);
	content.lineTo(649,109);
	content.stroke();
	
	content.font = '20px Malgun New Gulim';
	content.strokeText('목디스크', 649, 109);
	
	/*spine*/
	content.beginPath();
	content.arc(400, 333, 25, 0, 2 * Math.PI);
	content.stroke();
	
	content.beginPath();
	content.moveTo(400,333);
	content.lineTo(679,302);
	content.stroke();
	
	content.font = '20px Malgun New Gulim';
	content.strokeText('허리 디스크', 679, 302);
	
	
}

function muscle_canvas_init(){
	var muscle_canvas = document.getElementById("muscle_canvas");
	muscle_canvas.onclick = function(event) {
		var willLeft = document.documentElement.clientWidth / 2 - 250;
		var willTop = document.documentElement.clientHeight / 2 - 200;
		
		var x = event.clientX - muscle_canvas.getBoundingClientRect().left;
		var y = event.clientY - muscle_canvas.getBoundingClientRect().top;
		console.log(x + '\n');
		console.log(y);
		
		var popup_image = document.getElementById("popup_img");
		if (x > 458 && x < 528 && y > 10 && y < 110) {
			popup_image.src = "/img/xray/normal_head.jpg";
			muscle_canvasClick(willLeft, willTop);
		}
		else if (x > 446 && x < 536 && y > 280 && y < 350) {
			popup_image.src = "/img/xray/normal_pevis.jpg";
			popup_image.width = 450;
			muscle_canvasClick(willLeft, willTop);
		}
		
	};
}

function muscle_canvasClick(willLeft, willTop) {
	$("#overlay").fadeIn('slow');
	$("#popup").css({"left":willLeft, "top":willTop});
	$("#popup").fadeIn("slow");
}

function showMuscleCanvas() {
	document.getElementById("urine_or_blood_check").style.visibility = "hidden";
	$('canvas').hide();
	$('#muscle_canvas').show();
}

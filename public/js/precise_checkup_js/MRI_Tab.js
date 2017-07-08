function MRI_draw() {
			var MRI_canvas = document.getElementById("MRI_canvas");
			var content = MRI_canvas.getContext("2d");
		
			/*
			content.beginPath();
			content.arc(170, 150, 50, 0, 2*Math.PI,true);
			content.fillStyle = "rgba(255, 0, 0, 0.3)"
			content.fill();
			*/
			
			content.drawImage(cranium2, 453, 10, 80, 110);
			content.globalCompositeOperation = "source-over";
			content.drawImage(Spine2, 462, 98, 58, 243);
			content.drawImage(pelvis2 , 436, 270, 110, 90);
			
			content.drawImage(left_wing2, 470, 110, 104, 104);
			content.drawImage(right_wing2, 410, 110, 104, 104);
			content.drawImage(rib2, 430, 120, 122, 140);
			
			content.drawImage(left_scapula2, 500, 110, 70, 35);
			content.drawImage(right_scapula2, 410, 111, 70, 35);
			
			content.drawImage(leftarm_up2, 510, 110, 140, 160);
			content.drawImage(rightarm_up2, 335, 110, 140, 160);
			content.drawImage(leftarm_down2, 565, 205, 135, 135);
			content.drawImage(rightarm_down2, 288, 205, 135, 135);
			content.drawImage(left_hand2, 625, 266, 120, 120);
			content.drawImage(right_hand2, 235, 250, 130, 130);
			
			content.drawImage(leftleg_down2, 498, 460, 67, 170);
			content.drawImage(rightleg_down2, 414, 455, 67, 170);
			content.drawImage(leftleg_up2, 502, 310, 55, 180);
			content.drawImage(rightleg_up2, 423, 308, 55, 177);
			content.drawImage(leftfoot2, 505, 595);
			content.drawImage(rightfoot2, 420, 590);
			content.drawImage(leftcartilage2, 418, 447);
			content.drawImage(rightcartilage2, 507, 447);
		}

function MRI_canvas_init(){
	var MRI_canvas = document.getElementById("MRI_canvas");
	MRI_canvas.onclick = function(event) {
		var willLeft = document.documentElement.clientWidth / 2 - 250;
		var willTop = document.documentElement.clientHeight / 2 - 200;
		
		var x = event.clientX - MRI_canvas.getBoundingClientRect().left;
		var y = event.clientY - MRI_canvas.getBoundingClientRect().top;
		
		var popup_image = document.getElementById("popup_img");
		if (x > 419 && x < 550 && y > 216 && y < 285) {
			popup_image.src = "http://localhost:8080/img/MRI/spine.png";
			MRI_canvasClick(willLeft, willTop);
		}
		console.log(x+' '+y);
		/*
		else if (x > 446 && x < 536 && y > 280 && y < 350) {
			popup_image.src = "img/xray/normal_pevis.jpg";
			popup_image.width = 450;
			MRI_canvasClick(willLeft, willTop);
		}
		*/
		
	};
}


function MRI_canvasClick(willLeft, willTop) {
	$("#overlay").fadeIn('slow');
	$("#popup").css({"left":willLeft, "top":willTop});
	$("#popup").fadeIn("slow");
}


function showMRICanvas() {
	$('canvas').hide();
	$('#MRI_canvas').show();
}
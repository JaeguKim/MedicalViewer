var ECG_image = new Image();
ECG_image.src = "/img/ECG/ECG.png";
		
function ECG_draw() {
			var ECG_canvas = document.getElementById("ECG_canvas");
			var content = ECG_canvas.getContext("2d");
			content.globalCompositeOperation = "source-over";
			content.drawImage(ECG_image, 0, 0, 1000, 800);
		}
function showECGCanvas() {
	$('canvas').hide();
	document.getElementById('MRI_CT').innerHTML = "";
	$('#ECG_canvas').show();
}
window.addEventListener("load", organ_draw, false);

		function drawbackground(canvas, content, onload){
			
			var human_body = new Image();

		        human_body.onload = function(){
		            content.drawImage(human_body, 50, 0);
		            onload(canvas, content);
		        };

		        human_body.src = "/img/organs/human_body.png";
		}
		
		function draw_organ(canvas, content){
			/* Organ var */
			var organ_array = [];
				
			var Image2 = new Image();
			if (wbc > 12)
				Image2.src = "/img/organs/lung_yellow.png";
			else
				Image2.src = "/img/organs/lung_green.png";
			
			organ_array.push(Image2);

			var Image3 = new Image();
			if (CA >37)
				Image3.src = "/img/organs/intestine_red.png";
			else
				Image3.src = "/img/organs/intestine_green.png";
			organ_array.push(Image3);
			
			var Image4 = new Image();
			if (pressure > 138)
				Image4.src = "/img/organs/heart_red.png";
			else
				Image4.src = "/img/organs/heart_green.png";
			organ_array.push(Image4);
			
			var Image5 = new Image();
			Image5.src = "/img/organs/liver_yellow.png";
			organ_array.push(Image5);
			
			var Image6 = new Image();
			Image6.src = "/img/organs/stomach_yellow.png";
			organ_array.push(Image6);
			
			/*
			var Image7 = new Image();
			Image7.src = "img/organs/blood vessel_red.png";
			organ_array.push(Image7);
			*/
			
			var Image8 = new Image();
			if (creatinine > 1.3)
				Image8.src = "/img/organs/bladder_red.png";
			else
				Image8.src = "/img/organs/bladder_green.png";
			organ_array.push(Image8);
			
			var Image9 = new Image();
			Image9.src = "/img/organs/brain_yellow.png";
			organ_array.push(Image9);
			
			var Image10 = new Image();
			Image10.src = "/img/organs/pancreas_green.png";
			organ_array.push(Image10);
			
			var Image11 = new Image();
			Image11.src = "/img/organs/thyroid gland_red.png";
			organ_array.push(Image11);
			
			var imageCount = organ_array.length;
			var imagesLoaded = 0;

			for(var i=0; i<imageCount; i++){
			    organ_array[i].onload = function(){
			        imagesLoaded++;
			        if(imagesLoaded == imageCount){
			        	content.drawImage(Image2, 379, 180, 60, 60);
						content.drawImage(Image3, 373, 275, 70, 70);
						content.drawImage(Image4, 405, 135, 70, 70);
						content.drawImage(Image5, 375, 225, 60, 60);
						content.drawImage(Image6, 390, 225, 60, 60);
						//content.drawImage(Image7, 265, 160, 80, 80);
						content.drawImage(Image8, 373, 320, 70, 70);
						content.drawImage(Image8, 373, 320, 70, 70);//bladder
						content.drawImage(Image9, 385, 35, 50, 50);//brain
						content.drawImage(Image10, 370, 240, 50, 50);//pancreas
						content.drawImage(Image11, 370, 70, 80, 80);//thyroid gland
			            allLoaded();
			        }
			    }
			}

			function allLoaded(){
				/*organ explantion*/
				var organ_canvas = document.getElementById("organ_canvas");
				var content = organ_canvas.getContext("2d");
				/*brain*/
				content.beginPath();
				content.moveTo(410,60);
				content.lineTo(638,50);
				content.stroke();
				
				content.font = '20px Malgun New Gulim';
				content.strokeText('뇌줄중', 640, 50);
				
				/*thyroid*/
				content.beginPath();
				content.moveTo(410,115);
				content.lineTo(638,90);
				content.stroke();
			
				content.font = '20px Malgun New Gulim';
				content.strokeText('갑상선 비대증', 640, 90);
				
				/*heart*/

				if (pressure > 138)
				{
					content.beginPath();
					content.moveTo(440,170);
					content.lineTo(640,130);
					content.stroke();

					content.font = '20px Malgun New Gulim';
					content.strokeText('고혈압', 640, 130);
				}
				
				/*lung*/
				if (wbc > 12)
				{
					content.beginPath();
					content.moveTo(410,200);
					content.lineTo(640,170);
					content.stroke();

					content.font = '20px Malgun New Gulim';
					content.strokeText('폐렴', 640, 170);
				}
			
				
				
				/*river*/
				content.beginPath();
				content.moveTo(400,250);
				content.lineTo(640,200);
				content.stroke();

				content.font = '20px Malgun New Gulim';
				content.strokeText('간경화', 640, 200);
				
				/*stomach*/
				content.beginPath();
				content.moveTo(425,260);
				content.lineTo(660,230);
				content.stroke();

				content.font = '20px Malgun New Gulim';
				content.strokeText('위염', 660, 230);
				
				/*bladder*/
				content.beginPath();
				content.moveTo(400,265);
				content.lineTo(230,230);
				content.stroke();

				content.font = '20px Malgun New Gulim';
				content.strokeText('쓸개 담석', 180, 225);
				
				/*intestine*/
	
				if (CA >37){
					content.beginPath();
					content.moveTo(410,300);
					content.lineTo(230,290);
					content.stroke();

					content.font = '20px Malgun New Gulim';
					content.strokeText('소장암', 170, 290);
				}
					
				/*kidney*/
				 if (creatinine > 1.3)
		            {
						content.beginPath();
						content.moveTo(410,365);
						content.lineTo(230,340);
						content.stroke();

						content.font = '20px Malgun New Gulim';
						content.strokeText('전립선 비대증', 160, 335);
		            }
			
			}
			
		
		}
		function organ_draw() {
			console.log(location.href);
			var organ_canvas = document.getElementById("organ_canvas");
			var content = organ_canvas.getContext("2d");
			
			drawbackground(organ_canvas,content, draw_organ);	
		}
		
		function organ_canvas_init(){
			var organ_canvas = document.getElementById("organ_canvas");
			organ_canvas.onclick = function(event) {
				var willLeft = document.documentElement.clientWidth / 2 - 250;
				var willTop = document.documentElement.clientHeight / 2 - 200;
				
				var x = event.clientX - organ_canvas.getBoundingClientRect().left;
				var y = event.clientY - organ_canvas.getBoundingClientRect().top;
				console.log(x + '\n');
				console.log(y);
				
				if (x > 412 && x < 462 && y > 146 && y < 187)
			    {
			       show_heart_chart();
			    }
			    else if (x >382 && x < 417 && y > 238 && y < 254)
			    {
			       show_river_chart();
			    }
			    else if (x >399 && x < 423 && y > 98 && y < 118)
			    {
			       show_thyroid_chart();
			    }
			    else if (x >381 && x < 436 && y > 188 && y < 230)
			    {
			       show_lung_chart();
			    }
			    else if (x >405 && x < 445 && y > 240 && y < 280)
			    {
			       //show_stomach_chart();
			    }
			    else if (x >380 && x < 420 && y > 245 && y < 285)
			    {
			       //show_bladder_chart();
			    }
			    else if (x >390 && x < 430 && y > 280 && y < 320)
			    {
			       show_intestine_chart();
			    }
			    else if (x >390 && x < 430 && y > 345 && y < 385)
			    {
			       show_kidney_chart();
			    }
			};
		}
		
		function show_heart_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/blood_pressure.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
		
	    function show_river_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/glucose.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_thyroid_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/thyroid.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_lung_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/wbc_check.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_stomach_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/stomach.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_bladder_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/bladder.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_intestine_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/intestine.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
	    function show_kidney_chart(){
			$('#overlay').fadeIn('slow');
			$('#popupBox').fadeIn('slow');
			$('#graph').load("/figures/kidney.html");
			$('#popupContent').fadeIn('slow');    
			
			$('#overlay, .deleteMeetingCancel').click(function () {
			$('#overlay').fadeOut('slow');
			$('#popupBox').fadeOut('slow');
			    $('#popupContent').fadeOut('slow');    
			});
    }
	    
		function showOrganCanvas() {
			$('canvas').hide();
			document.getElementById("urine_or_blood_check").style.visibility = "hidden";
			console.log($("#organ_canvas"));
			$("#organ_canvas").show();
		}
		
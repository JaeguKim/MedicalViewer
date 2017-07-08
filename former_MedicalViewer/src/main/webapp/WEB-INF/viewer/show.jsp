<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE HTML>
<!--
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Striped by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<style type="text/css">
	.controls {
	height:1%;
	overflow:hidden;
	padding:150px 13px 0 14.5em;
	background:#364050 url("images/bg01.png");
	}
	.links {
		float:left;
		margin:0px
	}
	.links ul {
		list-style:none;
		margin:0;
		padding:0;
		float:left;
	}
	.links li {
		float:left;
		margin:0 3px 0 0;
		position:relative;
	}
	.links a {
	float:left;
	border:1px solid #dde2e8;
	background:#fff;
	-webkit-border-radius: 1px 1px 0 0;
	-moz-border-radius: 1px 1px 0 0;
	border-radius: 1px 1px 0 0;
	color:#1f252a;
	font-size:25px;
	line-height:15px;
	height:35px;
	text-decoration:none;
	padding:8px 20px 0 20px;
	}
	canvas {
	border: 1px solid black;
	display:none;
	}
	#overlay {
    display:none;
    opacity:0.5;
    background-color:black;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index: 10;
	}
	#popup {
	position:absolute;
	width:500px;
	height:400px;
	background-color:white;
	border:2px solid Black;
	text-align:center;
	display:none;
	border-radius:10px;
	z-index: 11;
	}
	
	#nav > ul > li > ul {
	display: none;
	}

	#tab_nav ul {
		float:left;
		margin: 0;
	}

	#tab_nav li {
		float:left;
		padding: 0.5em 1em 1em 0;

	}
		#tab_nav li a {
			display: block;
			padding: 0.4em 1em 0.4em 1em;
			text-decoration: none;
			border-radius: 0.3em;
			background-color:black;
			outline: 0;
			margin:0px 0px 0 8px;
			font-size:25px;
		}

		#tab_nav li.current a {
			background-color: #272E39 !important;
			background-color: rgba(0, 0, 0, 0.15) !important;
			box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
			font-weight: 700;
			color: #fff;
		}

		#tab_nav li:hover a {
			background-color: rgba(255, 255, 255, 0.1);
			color: #fff;
		}
	</style>
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript">
		window.addEventListener("load", bone_draw, false);
		window.addEventListener("load", organ_draw, false);
		var cranium = new Image();
		cranium.src = "img/bone/cranium_white.png";

		var pelvis = new Image();
		pelvis.src = "img/bone/pelvis_white.png";
			
		var rib = new Image();
		rib.src = "img/bone/rib_white.png";
		
		var Spine = new Image();
		Spine.src = "img/bone/Spine_white.png";
		
		var left_hand = new Image();
		left_hand.src = "img/bone/left_hand_white.png";
		
		var left_scapula = new Image();
		left_scapula.src = "img/bone/left_scapula_white.png";
		
		var left_wing = new Image();
		left_wing.src = "img/bone/left_wing_white.png";
		
		var leftarm_down = new Image();
		leftarm_down.src = "img/bone/leftarm_down_white.png";
		
		var leftarm_up = new Image();
		leftarm_up.src = "img/bone/leftarm_up_white.png";
		
		var leftcartilage = new Image();
		leftcartilage.src = "img/bone/leftcartilage_white.png";
		
		var leftfoot = new Image();
		leftfoot.src = "img/bone/leftfoot_white.png";
		
		var leftleg_down = new Image();
		leftleg_down.src = "img/bone/leftleg_down_white.png";
		
		var leftleg_up = new Image();
		leftleg_up.src = "img/bone/leftleg_up_white.png";
		
		var right_hand = new Image();
		right_hand.src = "img/bone/right_hand_white.png";
		
		var right_scapula = new Image();
		right_scapula.src = "img/bone/right_scapula_white.png";
		
		var right_wing = new Image();
		right_wing.src = "img/bone/right_wing_white.png";
		
		var rightarm_down = new Image();
		rightarm_down.src = "img/bone/rightarm_down_white.png";
		
		var rightarm_up = new Image();
		rightarm_up.src = "img/bone/rightarm_up_white.png";
		
		var rightcartilage = new Image();
		rightcartilage.src = "img/bone/rightcartilage_white.png";
		
		var rightfoot = new Image();
		rightfoot.src = "img/bone/rightfoot_white.png";
		
		var rightleg_down = new Image();
		rightleg_down.src = "img/bone/rightleg_down_white.png";
		
		var rightleg_up = new Image();
		rightleg_up.src = "img/bone/rightleg_up_white.png";
		
		var Image1 = new Image();
		Image1.src = "img/organs/human_body.png";
		var Image2 = new Image();
		Image2.src = "img/organs/lung_green.png";
		var Image3 = new Image();
		Image3.src = "img/organs/intestine_green.png";
		var Image4 = new Image();
		Image4.src = "img/organs/heart_red.png";
		var Image5 = new Image();
		Image5.src = "img/organs/liver_yellow.png";
		var Image6 = new Image();
		Image6.src = "img/organs/stomach_yellow.png";
		var Image7 = new Image();
		Image7.src = "img/organs/blood vessel_red.png";
		var Image8 = new Image();
		Image8.src = "img/organs/bladder_green.png";
		function organ_draw() {
			var canvas = document.getElementById("organ_canvas");
			var content = canvas.getContext("2d");
			content.drawImage(Image1, 0, 0);
			content.globalCompositeOperation = "source-over";
			content.drawImage(Image2, 329, 180, 60, 60);
			content.drawImage(Image3, 323, 275, 70, 70);
			content.drawImage(Image4, 345, 135, 70, 70);
			content.drawImage(Image5, 325, 225, 60, 60);
			content.drawImage(Image6, 340, 225, 60, 60);
			content.drawImage(Image7, 265, 160, 80, 80);
			content.drawImage(Image8, 323, 320, 70, 70);
		}
		
		function bone_draw() {
			var canvas = document.getElementById("bone_canvas");
			var content = canvas.getContext("2d");
		
			/*
			content.beginPath();
			content.arc(170, 150, 50, 0, 2*Math.PI,true);
			content.fillStyle = "rgba(255, 0, 0, 0.3)"
			content.fill();
			*/
			
			content.drawImage(cranium, 453, 10, 80, 110);
			content.globalCompositeOperation = "source-over";
			content.drawImage(Spine, 462, 98, 58, 243);
			content.drawImage(pelvis , 436, 270, 110, 90);
			
			content.drawImage(left_wing, 470, 110, 104, 104);
			content.drawImage(right_wing, 410, 110, 104, 104);
			content.drawImage(rib, 430, 120, 122, 140);
			
			content.drawImage(left_scapula, 500, 110, 70, 35);
			content.drawImage(right_scapula, 410, 111, 70, 35);
			
			content.drawImage(leftarm_up, 510, 110, 140, 160);
			content.drawImage(rightarm_up, 335, 110, 140, 160);
			content.drawImage(leftarm_down, 565, 205, 135, 135);
			content.drawImage(rightarm_down, 288, 205, 135, 135);
			content.drawImage(left_hand, 625, 266, 120, 120);
			content.drawImage(right_hand, 235, 250, 130, 130);
			
			content.drawImage(leftleg_down, 498, 460, 67, 170);
			content.drawImage(rightleg_down, 414, 455, 67, 170);
			content.drawImage(leftleg_up, 502, 310, 55, 180);
			content.drawImage(rightleg_up, 423, 308, 55, 177);
			content.drawImage(leftfoot, 505, 595);
			content.drawImage(rightfoot, 420, 590);
			content.drawImage(leftcartilage, 418, 447);
			content.drawImage(rightcartilage, 507, 447);
		}
		
		$(document).ready(function() {
			var canvas = document.getElementById("bone_canvas");
			canvas.onclick = function(event) {
				var willLeft = document.documentElement.clientWidth / 2 - 250;
				var willTop = document.documentElement.clientHeight / 2 - 200;
				
				var x = event.clientX - canvas.getBoundingClientRect().left;
				var y = event.clientY - canvas.getBoundingClientRect().top;
				
				var popup_image = document.getElementById("popup_img");
				if (x > 458 && x < 528 && y > 10 && y < 110) {
					popup_image.src = "img/xray/normal_head.jpg";
					canvasClick(willLeft, willTop);
				}
				else if (x > 446 && x < 536 && y > 280 && y < 350) {
					popup_image.src = "img/xray/normal_pevis.jpg";
					popup_image.width = 450;
					canvasClick(willLeft, willTop);
				}
			};
			$("#overlay").click(overlayClick);
		});
		
		function canvasClick(willLeft, willTop) {
			$("#overlay").fadeIn('slow');
			$("#popup").css({"left":willLeft, "top":willTop});
			$("#popup").fadeIn("slow");
		}
		
		function overlayClick() {
			$('#overlay').fadeOut('slow');
			$("#popup").fadeOut("slow");
		}
		
		function showBoneCanvas() {
			$('canvas').hide();
			$('#bone_canvas').show();
		}
		
		function showOrganCanvas() {
			$('canvas').hide();
			$('#organ_canvas').show();
		}
		
		
	</script>
	</head>
	<body>
	<div id = "overlay"></div>
	<div id = "popup"><h1><img id="popup_img"></h1></div>
		<!-- Up menu -->
			<div id = "menu">
				<div class="controls">
				</div>
			</div>
		<!-- Content -->
			<div id="content">
				<div class="inner">
					<!-- Post -->
					<article class="box post post-excerpt">
						<button type="button" id="organ_button" onclick="showOrganCanvas()">Organs</button>
						<button type="button" id="bone_button" onclick="showBoneCanvas()">Bones</button>
						<canvas id = "organ_canvas" width = '1000' height='700px' align='center'></canvas>
						<canvas id = "bone_canvas" width = '1000' height='700px' align='center'></canvas>
					</article>
				</div>
			</div>

		<!-- Sidebar -->
			<div id="sidebar">

				<!-- Logo -->
					<h1 id="logo"><a href="#">Medical Viewer</a></h1>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#">Latest Post</a></li>
							<li class="current"><a href="#">Archives</a></li>
							<li><a href="#">About Me</a></li>
							<li><a href="#">Contact Me</a></li>
						</ul>
					</nav>

				<!-- Search -->
					<section class="box search">
						<form method="post" action="#">
							<input type="text" class="text" name="search" placeholder="Search" />
						</form>
					</section>

				<!-- Text -->
					<section class="box text-style1">
						<div class="inner">
							<p>
								<strong>Striped:</strong> A free and fully responsive HTML5 site
								template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a>
							</p>
						</div>
					</section>

				<!-- Recent Posts -->
					<section class="box recent-posts">
						<header>
							<h2>Recent Posts</h2>
						</header>
						<ul>
							<li><a href="#">Lorem ipsum dolor</a></li>
							<li><a href="#">Feugiat nisl aliquam</a></li>
							<li><a href="#">Sed dolore magna</a></li>
							<li><a href="#">Malesuada commodo</a></li>
							<li><a href="#">Ipsum metus nullam</a></li>
						</ul>
					</section>

				<!-- Recent Comments -->
					<section class="box recent-comments">
						<header>
							<h2>Recent Comments</h2>
						</header>
						<ul>
							<li>case on <a href="#">Lorem ipsum dolor</a></li>
							<li>molly on <a href="#">Sed dolore magna</a></li>
							<li>case on <a href="#">Sed dolore magna</a></li>
						</ul>
					</section>


				<!-- Copyright -->
					<ul id="copyright">
						<li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
function login(){
  $.ajax({
		type: "GET",
		url: "http://localhost:8080/login",

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/login");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

function logout(){
  $.ajax({
		type: "GET",
		url: "http://localhost:8080/logout",

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

function general() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/generalCheckup",

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/generalCheckup");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

function precise() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/preciseCheckup",

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/preciseCheckup");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

function detail() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/detailCheckup",

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/detailCheckup");
			},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

function solution() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/solution",
		contentType: 'text/html',

		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/solution");
			//$("html").html(data);
			//history.pushState({"html":data}, "Medical Viewer", "/user/solution");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/login");
		}
	});
}

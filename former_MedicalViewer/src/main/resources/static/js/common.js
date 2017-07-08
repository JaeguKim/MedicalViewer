     $(document).ready(function() {
    	if (sessionStorage.getItem('name') == null) {
    		$(".call").text("사용자 로그인이 필요합니다");
    		$('.more').text("로그인");
    		$('.more').attr('href', '/memberLogin');
    	}
    	else {
    		var id = sessionStorage.getItem('name');
    		$(".call").text(id + "님 환영합니다.");
    		$('.more').text("로그아웃");
    		$('.more').attr('href', '/logout');
    	}
    });

function general() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/user/generalCheckup",
		contentType: 'text/html',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("content-type", "text/html");
			xhr.setRequestHeader("x-auth-token", sessionStorage.getItem("x-auth-token"));
		},
		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/user/generalCheckup");
			//$("html").html(data);
			//history.pushState({"html":data}, "Medical Viewer", "/generalCheckup");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/memberLogin");
		}
	});
}

function precise() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/user/preciseCheckup",
		contentType: 'text/html',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("content-type", "text/html");
			xhr.setRequestHeader("x-auth-token", sessionStorage.getItem("x-auth-token"));
		},
		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/user/preciseCheckup");
			//$("html").html(data);
			//history.pushState({"html":data}, "Medical Viewer", "/user/preciseCheckup");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/memberLogin");
		}
	});
}

function detail() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/user/checkupDetail",
		contentType: 'text/html',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("content-type", "text/html");
			xhr.setRequestHeader("x-auth-token", sessionStorage.getItem("x-auth-token"));
		},
		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/user/checkupDetail");
			//$("html").html(data);
			//history.pushState({"html":data}, "Medical Viewer", "/user/checkupDetail");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/memberLogin");
		}
	});
}

function solution() {
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/user/solution",
		contentType: 'text/html',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("content-type", "text/html");
			xhr.setRequestHeader("x-auth-token", sessionStorage.getItem("x-auth-token"));
		},
		success: function ( data, textStatus, jQxhr ) {
			location.assign("http://localhost:8080/user/solution");
			//$("html").html(data);
			//history.pushState({"html":data}, "Medical Viewer", "/user/solution");
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/memberLogin");
		}
	});
}


function request() {
	$.ajax({
		type: "Post",
		url: "http://localhost:8080/user/myMedical",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("content-type", "application/json");
		},
		data: JSON.stringify({
			"username" : sessionStorage.getItem("username")
		}),
		success: function ( data, textStatus, jQxhr ) {
			x = data
		},
		error: function (request, status, throwerror) {
			location.assign("http://localhost:8080/memberLogin");
		}
	});
}
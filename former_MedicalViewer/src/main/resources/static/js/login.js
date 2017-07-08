$(function() {
	$("#login").click(function() {
		var username = $("#name").val();
		var password = $("#password").val();
		
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/user/login",
			dataType: 'json',
			contentType: 'application/json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"username" : username,
				"password" : password
			}),
			success: function ( data, textStatus, jQxhr ) {
				sessionStorage.setItem("x-auth-token", data.token);
				sessionStorage.setItem("username", data.username);
				sessionStorage.setItem("name", data.name);
				sessionStorage.setItem("birth", data.birth);
				sessionStorage.setItem("checkdate", data.checkdate);
				
				location.assign("http://localhost:8080/")
			},
			error: function (request, status, throwerror) {
			}
		});
	});
});
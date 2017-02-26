// syntax of jquery

// $(selector).action();

// change h1
/*$("#btn").click(function(){

 	$("h1").text("hi bye");
 });*/



// $(document).ready(function(){
// 	// $("#btn").click(function(){
// 	// $("#name").val();
// 	// var	name1 = $("#firstname").val();
// 	// var	name2 = $("#lastname").val();
// 	// var name = $("h1"). text();
// 	// $("h1").text(name1 + " " + name2);
// 	// $("#box").hide(2000);
// 	// $("#box").show(2000);
// 	// $("#box").toggle(2000);
// });
// });

// $(document).ready(function(){
	// $("#btn").click(function(){
	// 	var pass = $("#pass").val();
	// 	if(pass.length>6){
	// 		$("h1").removeClass("error");
	// 		$("h1").text("strong").addClass("success");
	// 	}
	// 	else{
	// 		$("h1").removeClass("success");
	// 		$("#pass").removeClass("success");
	// 		$("h1").text("weak").addClass("error");
	// 		$("#pass").addClass("error");
	// 	}

	// });

	// // $("#p1").css("color", "red");
	// $("#p1").css({
	// 	"color":"red",
	// 	"background": "coral"
	// });
	// $("#pass").keyup(function(){
	// 	var password = $("#pass").val();
	// 		if(password.length>6){
	// 		$("#title").removeClass("error");
	// 		$("#title").text("strong").addClass("success");
	// 	}
	// 	else{
	// 		$("#title").removeClass("success");
	// 		$("#title").text("weak").addClass("error");
	// 	}
		
	// });


// });

// $(document).ready(function(){
// 	$("#btn").click(function(){
// 		var comment=$("#comment_box").val();
// 		$(".allcomment").prepend(comment+"<p>");

		
// 		});
// 	});

$(document).ready(function(){
	$("#email").keyup(function(){
	var email=$("#email").val();

	if (email.indexOf('@') == -1) {
   		$("#chk_email").text("please insert valid email");
	}
	else{
		$("#chk_email").text("email is valid");
	}
	
	});
	$("#wname").click(function(){
		var a=$("#fname").val();
		var b=$("#lname").val();
		$("#wname").val(a+" "+b);

	});	
	
	

	$("#con_pass").click(function(){
		var p=$("#pass").val();
		var q=$("#con_pass").val();
		

			if(p==q){
				$("h2").text("password confirmed");
	}
			else{
				$("h2").text("password not matched");
			}
	
	});

	$(".male").draggable();
	$(".female").draggable({revert:"invalid"});
	$(".box").droppable({
		accept:".male",
		drop: function(){
			$(".box").css("background", "blue");
		}
	});
		
		
});

	
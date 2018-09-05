function animationsTest (callback) {
    // Test if ANY/ALL page animations are currently active

    var testAnimationInterval = setInterval(function () {
        if (! $.timers.length) { // any page animations finished
            clearInterval(testAnimationInterval);
            callback();
        }
    }, 25);
};
function myFunction(array){
	var r = $.Deferred();

	if(array.length == 0){
	    r.resolve();
		return r;
	}

	var element = array.shift();
	// async task 
	timer = setTimeout(function(){
		$("#console-body").append(element);
		$('#console-body').animate({scrollTop: $('#console-body').prop("scrollHeight")}, 500);
		var resolving = function(){
		r.resolve();
	}

	myFunction(array).done(resolving);

	}, 1000);
	return r;
}

var init = false;
var sudo = false;
$(function() {
	$(document).keypress(function(e) {
    	if(e.which == 13) {
	        var a = $("#console-input").val();
	        $("#console-body").append('<p>'+'yxeng@yxeng:~$ '+a+'</p>');
	        $("#console-input").val('');
			
			switch(a){
				case 'sudo apt-get install mind':
					if (!init){

						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ Installing</p>","<p class=\"css-typing\">yxeng@yxeng:~$ ....................................</p>","<p class=\"css-typing\">yxeng@yxeng:~$ ....................................</p>","<p class=\"css-typing\">yxeng@yxeng:~$ ....................................</p>","<p class=\"css-typing\">yxeng@yxeng:~$ package 'mind' has been successfully installed.</p>","<p class=\"css-typing\">yxeng@yxeng:~$ use 'help' to see a list of available commands.</p>"];
						/*var myArray1 = ["<p class=\"css-typing\"yxeng@yxeng:~$ [sudo] password for yxeng:</p>"]
						if (sudo === false){
							myFunction(myArray1);

						}
						else{
							myFunction(myArray);
							init = true;
						}*/
						myFunction(myArray);
						init = true;
					}
					else{
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ package 'mind' is installed.");
					}
					break;

				case ('help'):
					if (init === false){
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					else{
						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ play: plays yxeng's favourite music</p>","<p class=\"css-typing\">yxeng@yxeng:~$ pause: pauses the song if playing</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ info: find out who yxeng is</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ hobbies: find out what yxeng likes</p>","<p class=\"css-typing\">yxeng@yxeng:~$ universe: outputs the answer of life, universe, and everything</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ credits: is this website original?</p>"];
						myFunction(myArray);
					}

					break;
				case ('play'):
					if (init === true){
						var song = $('#audio1');
						song[0].play();
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ ~playing~</p>");
					}
					else{
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;



				case ('pause'):
					if (init === true){
						var song = $('#audio1');
						song[0].pause();
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ ~pausing~</p>");

					}
					else{
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;

				case ('info'):
					if (init === true){
						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ Full Name: Yingxuan Eng</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ Birthday: 11/28/00</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ Personality(yxeng): Code and Math Enthusiast, Diehard Lakers Fan, GO EAGLES!</p>"]
						myFunction(myArray);
					}
					else {
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;

				case ('hobbies'):
					if (init === true){
						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ code</p>","<p class=\"css-typing\">yxeng@yxeng:~$ play the piano</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ basketball</p>", "<p class=\"css-typing\">yxeng@yxeng:~$ reading</p>"]
						myFunction(myArray);
					}
					else {
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;

				
				case ('universe'):
					if (init === true){
						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ The answer is 42.</p>"];
						myFunction(myArray);
					}
					else {
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;
				case ('credits'):
					if (init === true){
						var myArray = ["<p class=\"css-typing\">yxeng@yxeng:~$ The idea came from www.lindsaylevine.com</p>","<p class=\"css-typing\">yxeng@yxeng:~$ Yes this isn't my idea</p>","<p class=\"css-typing\">yxeng@yxeng:~$ But I did my best to code the whole thing :)</p>","<p class=\"css-typing\">yxeng@yxeng:~$ I really hope you like this :)</p>","<p class=\"css-typing\">yxeng@yxeng:~$ Happy Birthday yxeng!</p>","<p class=\"css-typing\">yxeng@yxeng:~$ Yours sincerely,</p>","<p class=\"css-typing\">yxeng@yxeng:~$ Bear Bear :)</p>"];
						myFunction(myArray);
					}
					else {
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");
					}
					break;
			
				default:
					if (init === false){
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ Please install package 'mind' before proceeding.</p>");	
					}
					else {
						$("#console-body").append("<p class=\"css-typing\">yxeng@yxeng:~$ no such command</p>");
					}
					break;
				
				}

			
			$('#console-body').animate({scrollTop: $('#console-body').prop("scrollHeight")}, 500);


    	}
	});
});
	
	var database = [{username: "enen", password: "enen"}];
	var newsFeed = [{username: "Tanya", timeline: "She says it very cool"}, {username: "Misha", timeline: "Misha is working at sphere of railways"}];

	var askUsernameByPrompt = prompt("What is your username");
	var askPasswordByPrompt = prompt("What is your password");


function signIn(user, pass){
	if(user === database[0].username && pass === database[0].password) {console.log(newsFeed);}
	else{alert("Sorry, username or password!");}
}
signIn(askUsernameByPrompt, askPasswordByPrompt);

var users = [
	{"user": "krishna"},
	{"user": "vijay"},
	{"user": "vasu"},
	{"user": "venu"},
	{"user": "rajesh"},
	{"user": "varun"},
	{"user": "chandra"}
	];

let resultDetails = users.map(user => {
    let mark = Math.random() * 100;
    user.mark = mark;
    return user
});


var selectedCandidate = resultDetails.filter(user => {
	if(user.mark > 80){
		return user;
    }
});

console.log(selectedCandidate);

(function() {
	var index = localStorage.getItem("index");    
	var mySeq = localStorage.getItem("sequence");   

	var newQuestion = mySeq.split(";")[index].split(",")[1];
	var newInteractionStyle = mySeq.split(";")[index].split(",")[2];
	  console.log(newQuestion);
	  console.log(newInteractionStyle);
	  index++;
	  localStorage.setItem("index", index); // save the index number to local storage

}());
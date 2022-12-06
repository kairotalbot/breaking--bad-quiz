let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "1) This main character was a highschool chemistry teacher who went astray...",
	"a": "Saul Goodmen",
	"b": "Michael Ehrmantraut",
	"c": "Walter White",
	"d": "Jesse Pinkmen",
	"image":"",
	"answer": "c"
   },
   {
	"question": " 2) Walter White new Jesse from?",
	"a": "he didnt know Jesse",
	"b": "he used to be Jesse's teacher",
	"c": "he was friends with jess's dad",
	"d": "he was friends with Jesse",
	"image":"",
	"answer": "b"
   },
   {
	"question": " 3) What does Walter sell?",
	"a": "Candy",
	"b": "Meth",
	"c": "computers",
	"d": "he doesnt sell anything",
	"image":"",
	"answer": "b"
   },

   {
    "question": " 4) What name does Walter White go by?",
	"a": "jeff",
	"b": "meth cook",
	"c": "he uses his real name",
	"d": "Heisenberg",
	"image":"",
	"answer": "d"
   },

   {
      "question": " 5) what color was the meth that Walter white made?",
     "a": " green",
     "b": "blue",
     "c": "yellow",
     "d": "pink",
     "image":"",
     "answer": "b"
     },

     {
      "question": " 6) Walter white kills how many people?",
     "a": "he kills more then 5 people",
     "b": "he kills less then 25 people",
     "c": "he doesnt kill anyone",
     "d": "he kills almost 200 people",
     "image":"",
     "answer": "d"
     },



     {
      "question": " 7) who did walter white do what he did for?",
     "a": "he did it for the family",
     "b": "he did it for his friend",
     "c": "he did it for himself and he enjoyed it",
     "d": "he didnt do anything",
     "image":"",
     "answer": "c"
     },

     

     {
      "question": " 8) how much money does walter white make?",
     "a": "100,000 dollars",
     "b": "500,000 dollars",
     "c": "80,000,000 dollars",
     "d": "1000 dollars",
     "image":"",
     "answer": "c"
     },

     {
      "question": " 9) What bad news does walter white get?",
     "a": "his friend has cancer",
     "b": "he has lung cancer",
     "c": "he didnt get any bad news",
     "d": "he was told good news",
     "image":"",
     "answer": "b"
     },

     {
      "question": " 10) who is walter whites lawyer?",
     "a": "Saul goodmen",
     "b": "gustavo fring",
     "c": "jesse pinkmen",
     "d": "tuco salamanca",
     "image":"",
     "answer": "a"
     }

     

   



 ];//end of array of questions


 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   

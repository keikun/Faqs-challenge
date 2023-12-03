let plus1 = document.getElementById('minus1');
let answer1 = document.getElementById('answer1');
let plus2 = document.getElementById('minus2');
let answer2 = document.getElementById('answer2');
let plus3 = document.getElementById('minus3');
let answer3 = document.getElementById('answer3');
let plus4 = document.getElementById('minus4');
let answer4 = document.getElementById('answer4');

plus1.addEventListener("click", function() {
    if(plus1.className=="faq__minus"){
        plus1.className="faq__plus";
        answer1.style.display = "block";
    } else {
        plus1.className="faq__minus";
        answer1.style.display = "none"
    }
});


plus2.addEventListener("click", function() {
    if(plus2.className=="faq__minus"){
        plus2.className="faq__plus";
        answer2.style.display = "block"; 
    } else {
        plus2.className="faq__minus";
        answer2.style.display = "none"
    }
});

plus3.addEventListener("click", function() {
    if(plus3.className=="faq__minus"){
        plus3.className="faq__plus";
        answer3.style.display = "block";
    } else {
        plus3.className="faq__minus";
        answer3.style.display = "none"
    }
});

plus4.addEventListener("click", function() {
    if(plus4.className=="faq__minus"){
        plus4.className="faq__plus";
        answer4.style.display = "block";
    } else {
        plus4.className="faq__minus";
        answer4.style.display = "none"
    }
});
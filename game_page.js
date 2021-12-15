name1=localStorage.getItem("player1");
name2=localStorage.getItem("player2");
score1=0;
score2=0;

function submit() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAnswer=parseInt(number1) * parseInt(number2);
}
question_number= "<h3>" + number1 + "X" + number2 + "</h3>"
input_box = "<br>Answer : <input type='number' class='form-control' id='input_number'>"
checkButton= "<br><br><button class='btn btn-primary' onclick='check();'>Check</button> ";
row= question_number + input_box + checkButton;
document.getElementById("output").innerHTML= row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
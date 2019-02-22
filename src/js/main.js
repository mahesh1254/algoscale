var newId = require("uuid-pure").newId;

const generateInterviewId = () => '#' + newId(13);
 
inp = document.getElementById('unique-id');
inp.value = generateInterviewId();

// to show dropdown if Elsewhere is selected
function myFunction_IP() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
// // to show dropdown if visa is selected
// function yesnoCheck(that) {
//     if (that.value == "visa") {
//         alert("check");
//         document.getElementById("ifYes").style.color = "red";
//     } else {
//         document.getElementById("ifYes").style.color = "blue";
//     }
// }
// // to redirect after submit
// // window.location.href = 'view.html';


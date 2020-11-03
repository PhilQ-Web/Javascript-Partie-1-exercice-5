
document.getElementById('clickButton').onclick=showAlert;
function showAlert(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('Name').value;
    var result = lastName % firstName;
   
alert(result);
}

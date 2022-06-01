var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// displays todays date after the h1 header
let theDate = today;
document.getElementById("theDate").innerHTML = theDate;

const saveButt1 = document.getElementById('saveButt');

function rememberTask() {
    var remember = document.getElementById('input').value;
}

saveButt1.addEventListener('click',rememberTask);
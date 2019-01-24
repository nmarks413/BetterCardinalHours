
function setWelcome(){
    console.log("error?")
    if(document.getElementById("name").value){
        document.getElementById("welcome-text").innerHTML = document.getElementById("name").value + " Logged in";
    }
}
window.onload=function() {
    let input = document.getElementById("login-button");
    input.addEventListener("click", setWelcome)
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            alert('hi');
        }
    });
}
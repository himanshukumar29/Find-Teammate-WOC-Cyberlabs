function writeData(){
    firebase.database().ref("User").push().set({
        namefield :document.getElementById("namefield").value,
        college :document.getElementById("collegefield").value,
        Gender :document.getElementById("Gender").value,
        year :document.getElementById("yearfield").value,
        skill :document.getElementById("skill-field").value,
        techstack :document.getElementById("techstackfield").value,
        github :document.getElementById("github-field").value,
        linkedin :document.getElementById("linked-field").value,
        contact  :document.getElementById("contact").value,
        email :document.getElementById("Email").value
      


    })
    alert("Information uploaded successfully ")
    
}
function replace(){
    location.replace("Welcome.html")
}

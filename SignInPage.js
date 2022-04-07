document.getElementById("Sign-In-Form").addEventListener("submit",(event)=>{
  event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        location.replace("Welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)

  }

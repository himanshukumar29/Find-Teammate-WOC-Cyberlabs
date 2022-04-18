document.getElementById("Sign-Up-Form").addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        location.replace("Form.html")
    }
});

function signup()
{
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error)=>{
    document.getElementById("error").innerHTML = error.message
  })

}



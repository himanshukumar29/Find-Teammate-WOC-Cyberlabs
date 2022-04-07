firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("SignInPage.html")
    }
}}
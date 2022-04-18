firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("SignInPage.html")
    }
})
function logout(){
    firebase.auth().signOut().then(() => {
        console.log("hello")
        location.replace("SignInPage.html")
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}


function getData() {

  var starCountRef = firebase.database().ref('User/');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();


  Object.keys(data).map((key)=>{
    console.log(data[key])
  })
});
}

getData();




 var starCountRef = firebase.database().ref('User/');
starCountRef.on('value', (snapshot) => {
 snapshot.forEach((childSnapshot) => {
  var childKey = childSnapshot.key;
   var childData = childSnapshot.val();

 

  var info = childData['github'];
  console.log(info)




  

  



fetch('https://api.github.com/users/' + info)
.then(response =>response.json())
.then(data=>gitData(data))
.catch(error => console.log(error))

function gitData(data){
  var main = document.getElementById("profile");
  var div = document.createElement("div");
  div.innerHTML = '<span style="color:purple;">Name:   </span>' + data.name + 
  '<br/><span style="color:purple;">Location:  </span>' + data.location+ 
  '<br><span style="color:purple;">Profile</br></span>' +
   '<img src ="'+data.avatar_url + '"/>' +  
     '<br><br><span style="color:purple;">Followers:   </span>' + data.followers + 
   '<br><span style="color:purple;">Following:  </span>' + data.following +
    '<br><span style="color:purple;">Company:  </span>' + data.company +
    '<br><span style="color:purple;">Gists :   </span>' + data.public_gists  +
   '<br><span style="color:purple;">Blog:   </span>' + data.blog + 
   '<br><span style="color:purple;">Repos:   </span>' + data.public_repos + 
   " <hr>Full Name :      " + childData['namefield'] + 
   "<br><br><br>College :          " + childData['college']+ 
   "<br>Year of Study :      " + childData['year'] + 
   "<br>Gender :      " + childData['Gender'] +
    "<br>Skill :        " + childData['skill'] +
     "<br>Techstack :        " + childData['techstack'] +
      "<br>Github-account :          " + childData['github']+ 
      "<br>Linked In Account :          " + childData['linkedin'] +
      "<br>Contact No. :        " + childData['contact']+
    "<br>Email Id :            " + childData['email'] + "</div><br><br> ";

   main.appendChild(div)

   console.log(data)
}

  });
});




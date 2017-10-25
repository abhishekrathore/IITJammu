angular.module("chatApp",["firebase"])
.controller("chatCtrl",chatCtrl)

function chatCtrl($firebaseArray,$http){

    var chat = this;

   


   
    var chats = firebase.database().ref('chats')
    chat.chats = $firebaseArray(chats);

   function send(msg,name){
    chat.chats.$add({text:msg,name:name})
    $http.get("https://api.genderize.io/?name="+chat.name)
    .then(function(result){
        console.log(result)
        chat.gender = result.data.gender
    }).catch(function(err){
        console.log(err)
    })
   }
   chat.send = send

}






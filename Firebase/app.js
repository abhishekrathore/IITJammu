angular.module("chatApp",["firebase"])
.controller("chatCtrl",chatCtrl)

function chatCtrl($firebaseArray){

    var chat = this;
    var chats = firebase.database().ref('chats')
    chat.chats = $firebaseArray(chats);

   function send(msg,name){
    chat.chats.$add({text:msg,name:name})
   }
   chat.send = send

}


angular.module("chatApp", ["firebase"])
    .controller("chatCtrl", chatCtrl)

function chatCtrl($firebaseArray, $http) {

    var chat = this;
    var cs; // cleverbot chat status
    var chats = firebase.database().ref('chats')
    chat.chats = $firebaseArray(chats);

    function send(msg, name) {
        chat.chats.$add({ text: msg, name: name })
        chat.reply(msg)
        chat.text = ""
    }
    chat.send = send

    chat.welcomeMsg = function () {
        //Use your Cleverbot API key here
        $http.get("https://www.cleverbot.com/getreply?key=CC53rdjHxp3VxXOci-xJzY5_Y1Q&input=Hi Cleverbot!")
            .then(function (response) {/*success callback*/
                console.log(response)
                cs = response.data.cs
                console.log(response.data.cs)
                chat.chats.$add({ text: response.data.output, name: "Cleverbot" })
            });
    }

    chat.reply = function (userMsg) {
        var query = "https://www.cleverbot.com/getreply?key=CC53rdjHxp3VxXOci-xJzY5_Y1Q&input=" + userMsg + "&cs=" + cs
        $http.get(query)
            .then(function (response) {
                cs = response.data.cs
                chat.chats.$add({ text: response.data.output, name: "Cleverbot" })
            })
    }

    chat.welcomeMsg()

}


angular.module('starter')
    .controller('chatCtrl', function($scope,$window,$http) {
        console.log("chat screen");
        var devHeight = $window.innerHeight;
        var devWidth = $window.innerWidth;
        var chat = this;
        chat.maxWidth = { 'max-width': 0.8 * devWidth + 'px' }

        var cs ;
        chat.chats = []

        function send(msg) {
            chat.chats.push({ text: msg, name: "You" })
            chat.reply(msg)
            chat.msg = ""
        }
        chat.send = send
    


    chat.welcomeMsg = function () {
        //Use your Cleverbot API key here
        $http.get("https://www.cleverbot.com/getreply?key=CC53rdjHxp3VxXOci-xJzY5_Y1Q&input=Hi Cleverbot!")
            .then(function (response) {/*success callback*/
                console.log(response.data.output)
                cs = response.data.cs
                console.log(response.data.cs)
                chat.chats.push({ text: response.data.output, name: "Cleverbot" })
            });
    }

    chat.reply = function (userMsg) {
        var query = "https://www.cleverbot.com/getreply?key=CC53rdjHxp3VxXOci-xJzY5_Y1Q&input=" + userMsg + "&cs=" + cs
        $http.get(query)
            .then(function (response) {
                cs = response.data.cs
                chat.chats.push({ text: response.data.output, name: "Cleverbot" })
            })
    }

    chat.welcomeMsg()
    });

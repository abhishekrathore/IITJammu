angular.module("chatApp",[])
.controller("todoCtrl",todoCtrl)

function todoCtrl(){

    var todo = this;
    console.log("ctrl")
    todo.tasks = [];


    function addTask(t){
        var obj = {}
        obj.text = t;
        obj.status = false;
        obj.time = new Date();
        if(obj.text){
            todo.tasks.push(obj);
        }
        console.log(todo.tasks)
        todo.task =""
    }

    function removeTask(index){
        todo.tasks.splice(index,1);
    }

    function taskCompleted(index){
        todo.tasks[index].status = !todo.tasks[index].status;
        console.log(todo.tasks)
    }

    function editTask(index){
        todo.task.text = ""
        
    }

    todo.addTask = addTask
    todo.removeTask = removeTask
    todo.taskCompleted = taskCompleted
    

}


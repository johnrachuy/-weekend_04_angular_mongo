myApp.controller('TaskController', ['$scope', '$http', function($scope, $http) {

    $scope.complete = false;

    getTask();
    getCompleted();

    $scope.newTask = function() {
        var task = {
            task: $scope.task,
            complete: $scope.complete
        };
        //console.log(task);


        $http.post('/task', task).then(function(response) {
            //$scope.task = response.data;
            //console.log(response.data);

            getTask();
        });
    };

    function getTask() {
        $http.get('/task').then(function(response) {
            $scope.allTasks = response.data;

        });
    }

    $scope.completeTask = function(index) {
        $scope.allTasks[index].complete = true;
        var completed = $scope.allTasks[index];
        //console.log(completed);

        $http.put('/task', completed).then(function(response) {
            getTask();
            getCompleted();
            //$scope.taskComplete = response.data;
            //console.log(response.data);
        });

    };

    function getCompleted() {
        $http.get('/task_comp').then(function(response) {
            $scope.completedTasks = response.data;
        });
    }

    $scope.delete = function(id) {
        console.log(id);
        $http.delete('/task/' + id).then(function(response) {
            getTask();
            getCompleted();

        });
    };

    console.log('Task Controller');

}]);
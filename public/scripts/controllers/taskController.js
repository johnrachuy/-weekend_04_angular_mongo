myApp.controller('TaskController', ['$scope', '$http', function($scope, $http) {

    $scope.complete = false;
    getTask();
    getCompleted();

    $scope.newTask = function() {
        var task = {
            task: $scope.task,
            complete: $scope.complete

        };

        $http.post('/task', task).then(function(response) {
            getTask();
            $scope.task = '';
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

        $http.put('/task', completed).then(function(response) {
            getTask();
            getCompleted();
        });
    };

    function getCompleted() {
        $http.get('/task_comp').then(function(response) {
            $scope.completedTasks = response.data;
        });
    }

    $scope.delete = function(id) {
        $http.delete('/task/' + id).then(function(response) {
            getTask();
            getCompleted();
        });
    };

    console.log('Task Controller');
}]);
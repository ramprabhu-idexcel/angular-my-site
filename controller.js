app.controller("BookStore", function($scope, Calculator, MathService, username, loginName){
    console.log("AngularJS Service - Value");
    console.log(username);
    console.log("AngularJS Service - Factory");
    console.log(loginName.sayHello());

    $scope.items = [
        {ISBN:"5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20},
        {ISBN:"4352134",Name: "AngularJS", Price: 450, Quantity: 25},
        {ISBN:"2460932",Name: "Javascript", Price: 180, Quantity: 15},
        {ISBN:"3496875",Name: "Jquery", Price: 220, Quantity: 10},
        {ISBN:"7452362",Name: "JAVA", Price: 770, Quantity: 15},
        {ISBN:"4152369",Name: "ROR", Price: 260, Quantity: 25},
        {ISBN:"3478963",Name: "SharePoint", Price: 240, Quantity: 40},
        {ISBN:"7698253",Name: "DBMS", Price: 180, Quantity: 15}
    ];

    $scope.totalPrice = function(){
        var total = 0;
        for(count=0;count < $scope.items.length; count++){
            total += $scope.items[count].Price*$scope.items[count].Quantity;
        }
        return total;
    };

    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    };

    $scope.addItem = function(item){
        $scope.items.push(item);
        $scope.item = {};
    };

    $scope.add = function(){
       $scope.answer = Calculator.add($scope.number1, $scope.number2);
    };

    $scope.subtract = function(){
        $scope.answer = Calculator.subtract($scope.number1, $scope.number2);
    };

    $scope.multiply = function(){
        $scope.answer = Calculator.multiply($scope.number1, $scope.number2);
    };

    $scope.divide = function(){
        $scope.answer = Calculator.divide($scope.number1, $scope.number2);
    };

    $scope.square = function(){
        $scope.Mathanswer = MathService.square($scope.number3);
    };

    $scope.cube = function(){
        $scope.Mathanswer = MathService.cube($scope.number3);
    }
});
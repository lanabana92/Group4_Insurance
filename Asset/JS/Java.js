var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl:"home.html"
        })
        .when("/Car",{
            templateUrl:"car.html"
        })
        .when("/Car2",{
            templateUrl:"car2.html"
        })

        .when("/Feedback",{
            templateUrl:"feedback.html"
        })

        .when("/LuxuryCar",{
            templateUrl:"LuxuryCar.html"
        })
        .when("/hsbc",{
            templateUrl:"Hsbc.html"
        })

        .when("/PTI",{
            templateUrl:"PTI.html"
        })
        .when("/Motor",{
            templateUrl:"motorcycle.html"
        })
        .when("/Account",{
            templateUrl:"Account.html"
        })
        .when("/About",{
            templateUrl:"About.html"
        });
        
    });

    app.controller("Ctr",function($scope,$http){
        $http.get("data.json").then(function(response){
            $scope.car1 = response.data.menu1;
            $scope.car2 = response.data.menu2;
            $scope.car3 = response.data.menu3;
            $scope.car4 = response.data.menu4;
            $scope.car5 = response.data.menu5;
            $scope.car6 = response.data.menu6;
            $scope.car7 = response.data.menu7;
            $scope.car8 = response.data.menu8;
            $scope.car9 = response.data.menu9;
        })            
    })

    app.controller("Ctr2",function($scope){
         $scope.motorType = "0";   
         $scope.option= "0";
         
         $scope.year = $scope.option + " years";
        if($scope.motorType == "60000"){
            $scope.type = "Under 50cc"
       } else if ($scope.motorType == "70000"){
            $scope.type = "Above 50cc"
       } else {
            $scope.type = "Electric"
       }
    })

    
    
function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    var txt = "Student";
    if(un=="Student" && pw=="12345678"){
        window.location.href="#!Account";
        document.getElementById("textlogo").value = txt;
        document.getElementById("your-image").src="Asset/Img/avatar.png";
    }else{
        alert("UserName:Student\nPassword:12345678");
    }
	
}
    
  
$(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('hide');
        $('input:password').val('12345678');
        $('input:text11').val('');
    }); 
});


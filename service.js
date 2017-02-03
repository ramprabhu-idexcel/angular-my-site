// creating service
app.service('Calculator',function(){
   this.add = function(a, b) { return a+b };
   this.subtract = function(a, b) { return a-b };
   this.multiply = function(a, b) { return a*b };
   this.divide = function(a, b) { return a/b };
});

app.service('MathService', function(Calculator){
   this.square = function(a) { return Calculator.multiply(a, a) };
   this.cube = function(a) { return Calculator.multiply(a, Calculator.multiply(a, a)) };
});

//creating simple service value
app.value("username","John");

// creating simple factory
app.factory("loginName",function(){
   var name="RAMPRABHU";

   return {
      sayHello: function(){
         return { name: name };
      }
   };

});
var names = ["Michael", "Yuki", "Ellen"];

names.forEach(function(name) {
  console.log(name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Rachel'));

// this binding
var person = {
  name: 'Michael',
  greet: function(){
      names.forEach((name) => {
        console.log(this.name + ' says hi to ' + name);
      })
  }
};

function add(a,b) {
  return a+b;
}

//addStatement
var addStatement = (a, b) => {
  return a+b;
}
console.log(addStatement(4,7));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(4, 7));

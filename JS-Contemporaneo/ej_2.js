/* Arrow functions y this 

1. escribir una función constructora tradicional Timer(seconds) que guarde 
seconds en this.seconds, y que usando setTimeout con una función tradicional intente
imprimir this.seconds después de 100ms. */

function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function() {
  setTimeout(function() {
    console.log(this.seconds);
  }, 100);
};

// 2. ejecutarla y anotar el resultado que se imprime en consola (probablemente no lo esperado).
const timer = new Timer(5);
timer.start();

// el resultado que se imprime en consola será undefined, 
// ya que la función tradicional dentro de setTimeout
//  tiene su propio contexto de this, que no apunta al objeto Timer.

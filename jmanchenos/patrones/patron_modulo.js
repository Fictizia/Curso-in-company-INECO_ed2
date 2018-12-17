var mates = mates || {};

mates.operaciones = (() => {
  let total = 0;

  return {
    sumar(a, b) {
      const suma = a + b;
      total += suma;
      return suma;
    },
    restar(a, b) {
      const resta = a - b;
      total -= resta;
      return resta;
    },
    total() {
      return total;
    }
  };
})();

mates.operaciones.total();  
mates.operaciones.sumar(12, 21);
mates.operaciones.total();
mates.operaciones.restar(40, 1);
mates.operaciones.total();

console.log(mates.operaciones.total());

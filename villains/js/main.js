
let villain1 = new Villain(); // Instanciate a new villain

villain1.setMyName("Joker");
//villain1.name = "Joker";
villain1.age = -1;
villain1.lifePoints = 20;
villain1.damage = 10;

console.log(villain1.getMyName()); // Joker
console.log(villain1.getMyNamePlus); // Joker y soy el puto amo
// console.log(villain1.name);

let villain2 = new Villain(); // Instanciate another new villain

villain2.name = "Thanos";
villain2.age = 5000;
villain2.lifePoints = 1000000;
villain2.damage = 9999;

console.log(villain2.getMyName());

/* ---------- ROUND 1: FIGHT! ------------ */

let hit = villain1.attack(); // 10
let result = villain2.defence(hit);
console.log(result);

/* ---------- ROUND 2: FIGHT! ------------ */
hit = villain2.attack(); // 9999
result = villain1.defence(hit);
console.log(result);
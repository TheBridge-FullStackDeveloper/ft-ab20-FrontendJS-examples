class Villain {

	// Properties

	constructor() {
		this.name = ""; // string
		this.age = 0; // number
		this.lifePoints = 0; // number
		this.damage = 0; // number
	}

	// Methods

	// Private methods

	heal() {
		this.lifePoints += 5;
	}

	// Public methods

	// getters
	get getMyName() {
		return this.name;
	}

	// setters
	set setMyName(newName) {
		this.name = newName;
	}

	// others
	attack() {
		return this.damage;
	}

	defence(damage) {
		this.lifePoints -= damage;

		if(this.lifePoints <= 0) {
			return "Me muerooooo!";
		}

		if(this.lifePoints <= 5) {
			if(this.lifePoints == 1) {
				this.heal();
			}

			return "Me voy a morir dentro de poco";
		}

		return "Sigo vivo";
	}
}

class MegaVillain extends Villain {
	constructor() {
		super();

		this.limit = 0; // number
	}

	// Overrides

	attack() {
		return this.damage * 2;
	}

	// Extra methods

	superAttack() {
		if(this.limit > 0) {
			this.limit--;

			return this.damage * 3;
		}

		return this.attack(); // Double
	}
}

/* ------------------- MAIN PROGRAM ------------------- */

let villain1 = new Villain(); // Instanciate a new villain

villain1.setMyName = "Joker"; // w/ setter method

// wo/ setter method
villain1.age = -1;
villain1.lifePoints = 20;
villain1.damage = 10;

console.log(villain1.getMyName); // Joker
// console.log(villain1.name);

let villain2 = new Villain(); // Instanciate another new villain

villain2.name = "Thanos";
villain2.age = 5000;
villain2.lifePoints = 1000000;
villain2.damage = 9999;

console.log(villain2.getMyName);

/* ---------- ROUND 1: FIGHT! ------------ */

let hit = villain1.attack(); // 10
let result = villain2.defence(hit);
console.log(result);

/* ---------- ROUND 2: FIGHT! ------------ */

hit = villain2.attack(); // 9999
result = villain1.defence(hit);
console.log(result);

/* ---------- ROUND 3: FIGHT! ------------ */

let megaVillain1 = new MegaVillain(); // Instanciate a new megavillain

megaVillain1.name = "The Punisher";
megaVillain1.limit = 1;
megaVillain1.damage = 9999999999;

hit = megaVillain1.superAttack();
result = villain2.defence(hit);
console.log(result);

hit = megaVillain1.attack(); // Double or single ??

/* --------------------------- */

// Pido al usuario que elija si quiere ser
// un villano normal (free) o un supervillano (premium)

let choice; // boolean

// ... get choice value from human user ...

let humanPlayer;

if( choice ) {
	humanPlayer = new MegaVillain();
}
else {
	humanPlayer = new Villain();
}

/* --------------------------- */

humanPlayer.attack(); // Double or single ??
// Who knows? It's polimorphic!!!
class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  armor() {
    console.log("armor");
  }

  damage() {
    this.role === "mage" || this.role === "support"
      ? console.log("magic damage")
      : console.log("attack damage");
  }
}

class Ads extends Character {
  constructor(name, attackDamages) {
    super(name, "ads", attackDamages);
    this.attackDamages = attackDamages;
  }

  range() {
    console.log(this.attackDamages);
    this.attackDamages > 30 ? console.log("ranged") : console.log("malee");
  }
}

class Mage extends Character {
  constructor(name) {
    super(name, "mage");
  }

  magicPowers() {
    console.log("I can fly");
  }
}

class Support extends Mage {
  constructor(name) {
    super(name, "Support");
  }

  healing() {
    console.log("I can heal");
  }
}

let axe = new Character("axe", "tank");
let riki = new Ads("riki", 50);
let tinker = new Mage("tinker");
let oracle = new Support("oracle");

//First method
// Constructor function for Person
function Person(fullName, money) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = "";
  this.healthRate = 100;
}

// Methods for Person
Person.prototype.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours < 7) {
    this.sleepMood = "tired";
  } else {
    this.sleepMood = "lazy";
  }
};

Person.prototype.eat = function (meals) {
  if (meals === 3) {
    this.healthRate = 100;
  } else if (meals === 2) {
    this.healthRate = 75;
  } else {
    this.healthRate = 50;
  }
};

Person.prototype.buy = function (items) {
  if (items === 1) {
    this.money -= 10;
  }
};

// Example usage
const john = new Person("John Doe", 200); // Create a Person object
john.sleep(8); // John sleeps for 8 hours
john.eat(2); // John eats 2 meals
john.buy(1); // John buys 1 item

console.log(john.fullName); // John Doe
console.log(john.money); // 190 (money decreased by 10)
console.log(john.sleepMood); // lazy
console.log(john.healthRate); // 75

//Second method
//Using classes
class Person {
  constructor(fullName, money) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = "";
    this.healthRate = 100;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  }

  buy(items) {
    if (items === 1) {
      this.money -= 10;
    }
  }
}

// Example usage
const sally = new Person("Sally Rally", 150); // Create a Person object
sally.sleep(6); // Sally sleeps for 6 hours
sally.eat(3); // Sally eats 3 meals
sally.buy(1); // Sally buys 1 item

console.log(sally.fullName); // Sally Rally
console.log(sally.money); // 140 (money decreased by 10)
console.log(sally.sleepMood); // tired
console.log(sally.healthRate); // 100

//Third method
//Using OLOO
// Base object for Person
const personPrototype = {
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  },
  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  },
  buy(items) {
    if (items === 1) {
      this.money -= 10;
    }
  },
};

// Create a new Person object linked to the prototype
function createPerson(fullName, money) {
  const person = Object.create(personPrototype);
  person.fullName = fullName;
  person.money = money;
  person.sleepMood = "";
  person.healthRate = 100;
  return person;
}

// Example usage
const bob = createPerson("Bob Johnson", 250); // Create a Person object
bob.sleep(6); // Bob sleeps for 6 hours
bob.eat(2); // Bob eats 2 meals
bob.buy(1); // Bob buys 1 item

console.log(bob.fullName); // Bob Johnson
console.log(bob.money); // 240 (money decreased by 10)
console.log(bob.sleepMood); // tired
console.log(bob.healthRate); // 75

//Fourth method
// Factory function to create a Person
function createPerson(fullName, money) {
  const person = {
    fullName: fullName,
    money: money,
    sleepMood: "",
    healthRate: 100,
    sleep: function (hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours < 7) {
        this.sleepMood = "tired";
      } else {
        this.sleepMood = "lazy";
      }
    },
    eat: function (meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else {
        this.healthRate = 50;
      }
    },
    buy: function (items) {
      if (items === 1) {
        this.money -= 10;
      }
    },
  };

  return person;
}

// Example usage
const alice = createPerson("Alice Smith", 300); // Create a Person object
alice.sleep(8); // Alice sleeps for 8 hours
alice.eat(1); // Alice eats 1 meal
alice.buy(2); // Alice buys 2 items

console.log(alice.fullName); // Alice Smith
console.log(alice.money); // 280 (money decreased by 20)
console.log(alice.sleepMood); // lazy
console.log(alice.healthRate); // 50

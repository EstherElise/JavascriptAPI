// Her kan du skrive testene dine


//Opprette 3 ulike heros og enemies; en hvor hero vinner, en hvor hero taper, og en hvor det blir likt

const { add } = require("../app");
//   const hero = {
//     Name: "Arhi",
//     Hp: "130",
//     Attackpower: "50",
//   };

//   const enemy = {
//     Name: "Or",
//     Hp: "100",
//     Attackpower: "60",
//   };
// test ("Burde returnere true dersom heroHp er høyere enn enemyHp", () => {
//   expect(fight(hero.Hp > enemy.Hp)).toBe(true);  
// });

// test ("Burde returnere true dersom enemyHp er høyere enn heroHp", () => {
//   expect(fight(hero.Hp < enemy.Hp)).toBe(true);
// });

// test ("Burde returnere true dersom enemyHp er høyere enn heroHp", () => {
//   expect(fight(hero.Hp = enemy.Hp)).toBe(true);
// });

test("test", () => {
  expect(add(5, 10)).toBe(15);
});
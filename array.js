// What you have

var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// // What you need

var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

var officersIds = officers.map(function (officer) {
  return officer.id
});

// const officersIds = officers.map(officer => officer.id);

// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// var totalYears = pilots.reduce(function (accumulator, pilot) {
//   return accumulator + pilot.years;
// }, 0);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

// var mostExpPilot = pilots.reduce(function (oldest, pilot) {
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {});
// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   }
// ];

// var rebels = pilots.filter(function (pilot) {
//   return pilot.faction === "Rebels";
// });

// var empire = pilots.filter(function (pilot) {
//   return pilot.faction === "Empire";
// });

// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
// const empire = pilots.filter(pilot => pilot.faction === "Empire");

// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];

// var jediPersonnel = personnel.filter(function (person) {
//   return person.isForceUser;
// });

// // Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)

// var jediScores = jediPersonnel.map(function (jedi) {
//   return jedi.pilotingScore + jedi.shootingScore;
// });

// // Result: [154, 110, 156]

// var totalJediScore = jediScores.reduce(function (acc, score) {
//   return acc + score;
// }, 0);

// // Result: 420

// var totalJediScore = personnel
//   .filter(function (person) {
//     return person.isForceUser;
//   })

//   .map(function (jedi) {
//     return jedi.pilotingScore + jedi.shootingScore;
//   })

//   .reduce(function (acc, score) {
//     return acc + score;
//   }, 0);

//   const totalJediScore = personnel
//   .filter(person => person.isForceUser)
//   .map(jedi => jedi.pilotingScore + jedi.shootingScore)
//   .reduce((acc, score) => acc + score, 0);

//   var data = [
//   {
//     name: "Jan Dodonna",
//     title: "General",
//   },
//   {
//     name: "Gial Ackbar",
//     title: "Admiral",
//   },
// ]

// var result = formatElement([element])[0];

// // Yeah... that's not right at all

// data.forEach(function (element) {
//   var formatted = formatElement(element);
//   // But what then....
// });

// var results = [];

// data.forEach(function (element) {
//   var formatted = formatElement(element);
//   results.push(formatted);
// });

// var results = data.map(formatElement);

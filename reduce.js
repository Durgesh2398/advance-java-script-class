var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
  }, 0);

  console.log(totalYears);

  const years = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
  console.log(years);


  // to compare the most experience 
  var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});
  console.log(mostExpPilot);

  
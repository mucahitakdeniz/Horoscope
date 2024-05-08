function getZodiacSign(day, month) {
  const signs = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];

  const changeDates = [
    [20, 1],
    [19, 2],
    [21, 3],
    [20, 4],
    [21, 5],
    [21, 6],
    [23, 7],
    [23, 8],
    [23, 9],
    [23, 10],
    [22, 11],
    [22, 12],
  ];

  for (let i = 0; i < changeDates.length; i++) {
    if (
      (+month === changeDates[i][1] && +day >= changeDates[i][0]) ||
      (+month === changeDates[(i + 1) % 12][1] &&
        +day < changeDates[(i + 1) % 12][0])
    ) {
      return signs[i];
    }
  }

  return "Please enter a valid date";
}

export default getZodiacSign;

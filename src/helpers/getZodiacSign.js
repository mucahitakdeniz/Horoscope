function getZodiacSign(day, month, year) {
  const signs = [
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
    "Aquarius",
    "Pisces",
  ];

  const changeDates = [
    [20, 3],
    [20, 4],
    [21, 5],
    [22, 6],
    [23, 7],
    [23, 8],
    [23, 9],
    [23, 10],
    [22, 11],
    [22, 12],
    [20, 1],
    [19, 2],
  ];
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > 1 || day < daysInMonth) {
    for (let i = 0; i < changeDates.length; i++) {
      if (
        (month === changeDates[i][1] && day >= changeDates[i][0]) ||
        (month === changeDates[(i + 1) % 12][1] &&
          day < changeDates[(i + 1) % 12][0])
      ) {
        return signs[i];
      }
    }
    return signs[11];
  } else {
    return "Please enter a valid date.";
  }
}


export default getZodiacSign;

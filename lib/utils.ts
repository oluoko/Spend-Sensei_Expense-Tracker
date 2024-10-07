export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date: Date) {
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Determine the ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // catch exceptions like 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

  return `${dayOfWeek}, ${dayWithSuffix} ${month}, ${year}`;
}

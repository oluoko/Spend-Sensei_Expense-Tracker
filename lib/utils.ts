// Function to add commas only to the left side of the decimal point
export function addCommas(x: number | string): string {
  const [integerPart, decimalPart] = x.toString().split(".");
  return decimalPart
    ? `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalPart}`
    : integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to format the number to two decimal places and return it as a string
export function twoDP(x: number): string {
  return x.toFixed(2);
}

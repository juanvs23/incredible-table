export function generateRandomNumber(max: number, min: number = 1): number {
  return Math.ceil(Math.random() * (max - min));
}

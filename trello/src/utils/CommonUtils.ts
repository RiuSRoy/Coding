export function getRandomId(min: number = 1, max: number = 10000) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}
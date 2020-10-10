module.exports = function reverse(n) {
    if (n % 10 === 0) {
        while (n % 10 === 0) {
            n /= 10;
        }
    }
    n = n < 0 ? -n : n;
    return String(n).split('').reverse().join('');
}
module.exports = function makeExchange(currency) {
    const result = {};
    const coins = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
    
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    for (let i in coins) {
        result[i] = Math.floor(currency / coins[i]);
        currency -= result[i] * coins[i];
        if (result[i] === 0) {
            delete result[i];
        }
    }

    return result;
}
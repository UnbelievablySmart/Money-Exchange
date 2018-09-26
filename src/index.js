module.exports = function makeExchange(currency) {
    var result = {};
    const coins = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    for (var i in coins) {
        result[i] = Math.floor(currency / coins[i]);
        currency -= result[i] * coins[i];
        if (result[i] === 0) {
            delete result[i];
        }
    }
    return result;
}
    /*if (currency <= 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var resultH = 0, resultQ = 0, resultD = 0, resultN = 0, resultP = 0;
    
    if (currency/50 > 0) {
        resultH = Math.floor(currency/50);
        currency -= resultH;
    }
    if (currency/25 > 0) {
        resultQ = Math.floor(currency/25);
        currency -= resultQ;
    }
    if (currency/10 > 0) {
        resultD = Math.floor(currency/10);
        currency -= resultD;
    }
    if (currency/5 > 0) {
        resultN = Math.floor(currency/5);
        currency -= resultN;
    }
    if (currency > 0) {
        resultP = resultP
    }

    convert = {};
    if (resultH > 0) {
        convert["H"] = resultH;
    }
    if (resultQ > 0) {
        convert["Q"] = resultQ;
    }
    if (resultD > 0) {
        convert["D"] = resultD;
    }
    if (resultN > 0) {
        convert["N"] = resultN;
    }
    if (resultP > 0) {
        convert["P"] = resultP;
    }
    return convert;
} */

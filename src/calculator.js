class Calculator {
    constructor(result) {
        this.result = result
    }

    add(nb1, nb2) {
        this.result = nb1 + nb2;
        return this.result;
    }

    substraction(nb1, nb2){
        this.result = nb1 - nb2;
        return this.result;
    }

    multiplication(nb1, nb2){
        this.result = nb1 * nb2;
        return this.result;
    }

    division(nb1, nb2){
        this.result = nb1 / nb2;
        return this.result;
    }

    pourcentage(nb1){
        this.result = nb1 / 100;
        return this.result;
    }

    puissance(nb1, nb2){
        this.result = Math.pow(nb1, nb2);
        return this.result;
    }

    racine(nb1){
        this.result = Math.sqrt(nb1);
        return this.result;
    }
}

module.exports = {
    Calculator: Calculator,
};
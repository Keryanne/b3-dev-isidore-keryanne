const expect = require('chai').expect;
const calculatrice = require('../src/script');
const Calculator = require('../src/calculator').Calculator;


describe('Testing the Calculator Functions', function(){
    it('1. Addition between two numbers', function(done){
        let calculator = new Calculator();
        expect(calculator.add(2, 5)).to.equal(7);
        done();
    });

    it('2. Substraction between two numbers', function(done){
        let calculator = new Calculator();
        expect(calculator.substraction(10, 8)).to.equal(2);
        done();
    });

    it('3. Multiplication between two numbers', function(done){
        let calculator = new Calculator();
        expect(calculator.multiplication(2, 3)).to.equal(6);
        done();
    });

    it('4. Division between two numbers', function(done){
        let calculator = new Calculator();
        expect(calculator.division(6, 3)).to.equal(2);
        done();
    });

    it('5. Calcul pourcentage', function(done){
        let calculator = new Calculator();
        expect(calculator.pourcentage(20)).to.equal(0.2);
        done();
    });
} )
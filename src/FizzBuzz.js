class FizzBuzz {
    constructor(n = 10, rules = { 7: "Seven" }) {
        this.n = n;
        this.rules = rules;
    }

    fizzBuzzCalc() {
        const result = [];

        for (let i = 1; i <= this.n; i++) {
            let output = '';

            for (const rule in this.rules) {
                if (i % rule === 0) {
                    output += this.rules[rule];
                }
            }

            if (i % 3 === 0) {
                output += 'Fizz';
            }
            if (i % 5 === 0) {
                output += 'Buzz';
            }
            if (output === '') {
                output += i.toString();
            }

            result.push(output);
        }
        return result;
    }

    fizzBuzzSequence() {
        const result = [];

        let a = 0;
        let b = 1;

        for (let i = 1; i <= this.n; i++) {
            const currentNumber = a + b;
            a = b;
            b = currentNumber;
            if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
                result.push("FizzBuzz");
            } else if (currentNumber % 3 === 0) {
                result.push("Fizz");
            } else if (currentNumber % 5 === 0) {
                result.push("Buzz");
            } else {
                result.push(currentNumber.toString());
            }
        }

        return result;
    }

    getN() {
        return this.n
    }

    getRules() {
        return this.rules
    }
}

export default FizzBuzz;

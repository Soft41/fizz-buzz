import FizzBuzz from "../src/FizzBuzz.js";
import * as fs from "fs";

class FizzBuzzService {
    static fizzBuzzCalc(n,customRules = {}, isSequence = false, writeToFile = false) {
        const instance = new FizzBuzz(n, customRules)
        let data

        if (isSequence) {
            data = instance.fizzBuzzSequence()
        } else {
            data = instance.fizzBuzzCalc()
        }

        if (!writeToFile) {
            return data
        } else {
            const name = Date.now()
            fs.writeFileSync(`${name}.txt`, data.join('\n'), 'utf-8')
            return {
                data,
                log: `Success writing to the file, filename: ${name}`
            }
        }

    }

    static getInitValue() {
        return (new FizzBuzz).getN()
    }

    static getInitRules() {
        return (new FizzBuzz).getRules()
    }
}

export default FizzBuzzService

import FizzbuzzService from "../service/fizzbuzzService.js";
import fizzbuzzService from "../service/fizzbuzzService.js";

class FizzBuzzController {
    static getFizzBuzz(req, res) {
        const n = parseInt(req.params.n);
        const customRulesParam = req.query.rules;
        const isSequence = req.query.sequence;
        const writeToFile = req.query.write;
        const customRules = customRulesParam.split(',').reduce((acc, rule) => {
            const [key, value] = rule.split(':');
            if (key && value) {
                acc[key] = value;
            }
            return acc;
        }, {});

        try {
            const answer = FizzbuzzService.fizzBuzzCalc(n, customRules, isSequence, writeToFile);
            res.json(answer);
        } catch (error) {
            res.status(500).json({ error: 'Error request' });
        }
    }

    static getInitValue(req,res) {
        try {
            res.json(fizzbuzzService.getInitValue())
        } catch (e) {
            res.status(500).json({ error: 'Error request' });
        }
    };
    static getInitRules(req,res) {
        try {
            res.json(fizzbuzzService.getInitRules())
        } catch (e) {
            res.status(500).json({ error: 'Error request' });
        }
    };

}

export default FizzBuzzController

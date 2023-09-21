import {Router} from "express";
import FizzBuzzController from "../controller/fizzbuzzController.js";
import FizzbuzzController from "../controller/fizzbuzzController.js";


const fizzbuzzRouter = new Router()

fizzbuzzRouter.get('/initValue', FizzBuzzController.getInitValue)
fizzbuzzRouter.get('/rule', FizzbuzzController.getInitRules)
fizzbuzzRouter.post('/:n', FizzBuzzController.getFizzBuzz);

export default fizzbuzzRouter

import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    calcResult = ''; calcExp = ''; clrExpression = false; previousOper = '';
    operations = {
        current: 0,
        '=': function(){
            return this.current;
        },
        '+': function(n){
            this.current += parseInt(n);
            return this;
        },
        '-': function(n){
            this.current -= parseInt(n);
            return this;
        },
        '*': function(n){
            this.current *= parseInt(n);
            return this;
        },
        '/': function(n){
            this.current /= parseInt(n);
            return this;
        }
    }

    get showResult(){
        return this.operations.current;
    }

    buttonClick(event){
        if (this.clrExpression){
            this.calcExp = '';
            this.calcResult = '';
            this.operations.current = 0;
            this.clrExpression = false;
        }
        this.calcExp = this.calcExp + event.target.label;
        if (event.target.label === "CLR"){
            this.calcResult = '';
            this.calcExp = '';
            this.operations.current = 0;
        }
        else if (event.target.label === "+"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.previousOper](this.calcResult);
            }
            this.previousOper = '+';
            this.calcResult = '';
        }
        else if (event.target.label === "-"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.previousOper](this.calcResult);
            }
            this.previousOper = '-';
            this.calcResult = '';
        }
        else if (event.target.label === "*"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.prevOper](this.calcResult);
            }
            this.previousOper = '*';
            this.calcResult = '';
        }
        else if (event.target.label === "/"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.preiousvOper](this.calcResult);
            }
            this.previousOper = '/';
            this.calcResult = '';
        }
        else if (event.target.label === "="){
            this.calcResult = this.operations[this.previousOper](this.calcResult);
            this.calcResult = this.operations['=']();
            this.clrExpression = true;
        }
        else{
            this.calcResult = this.calcResult + event.target.label;
            
        }
    }
}
<template>
    <div>
        <div class="calculator header">
        </div>
        <div class="calculator display">
            <table class="display-input">
                <tr>
                    <td colspan="2"><div class="operand1 display-input" v-if="operand1.show"> {{ operand1.value }} </div></td>
                </tr>
                <tr>
                    <td><div class="operator display-input" v-if="operator.show"> {{ operator.value }} </div></td>
                    <td><div class="operand2 display-input" v-if="operand2.show"> {{ operand2.value }} </div></td>
                </tr>
                <tr>
                    <td colspan="2"><div class="result display-input" v-if="result.show">= {{ result.value }} </div></td>
                </tr>
            </table>
            
            
            
            
            
        </div>
        <div class="calculator input">
            <table>
                <tr>
                    <td><button value='C' @click="clearAll()" class="input-button">C</button></td>
                    <td><button value='X' @click="clear()" class="input-button">X</button></td>
                    <td><button value='/' @click="handleDivide()" class="input-button">/</button></td>
                    <td><button value='*' @click="handleMultiply()" class="input-button">*</button></td>
                </tr>
                <tr>
                    <td><button value='7' @click="notify('7')" class="input-button">7</button></td>
                    <td><button value='8' @click="notify('8')" class="input-button">8</button></td>
                    <td><button value='9' @click="notify('9')" class="input-button">9</button></td>
                    <td><button value='-' @click="hadleSubstract('-')" class="input-button">-</button></td>
                </tr>
                <tr>
                    <td><button value='4' @click="notify('4')" class="input-button">4</button></td>
                    <td><button value='5' @click="notify('5')" class="input-button">5</button></td>
                    <td><button value='6' @click="notify('6')" class="input-button">6</button></td>
                    <td><button value='+' @click="handleAdd('+')" class="input-button">+</button></td>
                </tr>
                <tr>
                    <td><button value='1' @click="notify('1')" class="input-button">1</button></td>
                    <td><button value='2' @click="notify('2')" class="input-button">2</button></td>
                    <td><button value='3' @click="notify('3')" class="input-button">3</button></td>
                    <td rowspan=2 ><button value='=' @click="compute('=')" class="input-button equal">=</button></td>
                </tr>
                <tr>
                    <td><button value='%' @click="handleModulus('%')" class="input-button">%</button></td>
                    <td><button value='0' @click="notify('0')" class="input-button">0</button></td>
                    <td><button value='.' @click="notify('.')" class="input-button">.</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            operand1:{
                show: false,
                value: ''
            },
            operator:{
                show: false,
                value: ''
            },
            operand2:{
                show: false,
                value: ''
            },
            result:{
                show: false,
                value: ''
            },
            focus: true,
            computeCalled: false
        };
    },
    methods: {
        notify: function(data){
            if(this.computeCalled){
                this.clearAll();
                this.computeCalled = false;
            }
            if(this.focus){
                this.operand1.show = true;
                this.operand1.value += data;
                this.hideOperand2();
            }else{
                this.operand2.show = true;
                this.operand2.value += data;
                this.compute();
            }
        },
        clearAll: function(){
            this.hideOperand1();
            this.hideOperand2();
            this.hideOperator();
            this.hideResult();
            this.foucsOnFirstOperand();
        },
        clear: function(){
            if(this.focus){
                this.operand1.value = this.operand1.value.substring(0,this.operand1.value.length-1);
            }else{
                this.operand2.value = this.operand2.value.substring(0,this.operand2.value.length-1);
            }
            this.compute();
        },
        handleDivide: function(){
            if(this.operator.show !== '/' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = this.divideNumbers();
                this.hideOperand2();
            }
            if(!this.operand1.show){
                this.showDefaultOperand1();
            }
            this.foucsOnSecondOperand();
            this.showOperator('/');
            this.showResult(this.operand1.value);
        },
        handleMultiply: function(){
            if(this.operator.show !== '*' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show  ){
                this.operand1.value = this.multiplyNumbers();
                this.hideOperand2();
            }
            if(!this.operand1.show){
                this.showDefaultOperand1();
            }
            this.foucsOnSecondOperand();
            this.showOperator('*');
            this.showResult(this.operand1.value);
        },
        handleSubstract: function(){
            if(this.operator.show !== '-' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show ){
                this.operand1.value = this.substractNumbers();
                this.hideOperand2();
            }
            if(!this.operand1.show){
                this.showDefaultOperand1();
            }
            this.foucsOnSecondOperand();
            this.showOperator('-');
            this.showResult(this.operand1.value);
        },
        handleAdd: function(){
            if(this.operator.show !== '+' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = this.addNumbers();
                this.hideOperand2();
            }
            if(!this.operand1.show){
                this.showDefaultOperand1();
            }
            this.foucsOnSecondOperand();
            this.showOperator('+');
            this.showResult(this.operand1.value);
        },
        handleModulus: function(){
            if(this.operator.show !== '%' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = this.modulusNumbers();
                this.hideOperand2();
            }
            if(!this.operand1.show){
                this.showDefaultOperand1();
            }
            this.foucsOnSecondOperand();
            this.showOperator('%');
            this.showResult(this.operand1.value);
        },
        compute: function(value){
            if(this.operator.value === '+'){
                this.showResult(this.addNumbers());
            }else if(this.operator.value === '-'){
                this.showResult(this.substractNumbers());
            }else if(this.operator.value === '*'){
                this.showResult(this.multiplyNumbers());
            }else if(this.operator.value === '/'){
                this.showResult(this.divideNumbers());
            }else if(this.operator.value === '%'){
                this.showResult(this.modulusNumbers());
            }
            if(value === '='){
                this.computeCalled = true;
            }
        },
        operatorChange: function(){
            this.operand1.value = this.result.value;
            this.operand2.value = '';
            this.operand2.show = false;
            this.result.value = '';
            this.result.show = false;
        },
        addNumbers: function(){
            return Number(this.operand1.value) + Number(this.operand2.value);
        },
        substractNumbers: function(){
            return Number(this.operand1.value) - Number(this.operand2.value);
        },
        multiplyNumbers: function(){
            return Number(this.operand1.value) * Number(this.operand2.value);
        },
        divideNumbers: function(){
            return Number(this.operand1.value) / Number(this.operand2.value);
        },
        modulusNumbers: function(){
            return Number(this.operand1.value) % Number(this.operand2.value);
        },
        showDefaultOperand1: function(){
            this.operand1.value=0;
            this.operand1.show = true;
        },
        hideOperand2: function(){
            this.operand2.show = false;
            this.operand2.value = '';
        },
        hideOperand1: function(){
            this.operand1.show = false;
            this.operand1.value = '';
        },
        hideOperator: function(){
            this.operator.show = false;
            this.operator.value = '';
        },
        hideResult: function(){
            this.result.show = false;
            this.result.value = '';
        },
        showOperator: function(operator){
            this.operator.show = true;
            this.operator.value = operator;
        },
        showResult: function(result){
            this.result.show = true;
            this.result.value = result;
        },
        foucsOnSecondOperand(){
            this.focus = false;
        },
        foucsOnFirstOperand(){
            this.focus = true;
        }
    }
};
</script>
<style scoped>
.operator{
    display: inline-block;
}
.calculator{
    background-color: #839192;
    width: 226px;
    border-style: solid;
    border-width: 5px;
    border-right-width: 10px;
    border-left-width: 10px;
    border-bottom-width: 10px;
    border-color: #4D5656
}

.display-input{
    float: right;
    clear: right;
    padding-right: 10px; 
    font-size: 30px;
}
.display {
    padding-top: 5px;
    height: 115px;
    background-color: #D5DBDB;
}

.input-button {
  height: 50px;
  width: 50px;
  margin: 1px;
}

.equal {
  height: 105px;
  width: 50px;
}
</style>


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
                    <td><button value='C' @click="clearAll()" class="calcualator input-button">C</button></td>
                    <td><button value='X' @click="clear()" class="calcualator input-button">X</button></td>
                    <td><button value='/' @click="divide()" class="calcualator input-button">/</button></td>
                    <td><button value='*' @click="multiply()" class="calcualator input-button">*</button></td>
                </tr>
                <tr>
                    <td><button value='7' @click="notify('7')" class="calcualator input-button">7</button></td>
                    <td><button value='8' @click="notify('8')" class="calcualator input-button">8</button></td>
                    <td><button value='9' @click="notify('9')" class="calcualator input-button">9</button></td>
                    <td><button value='-' @click="substract('-')" class="calcualator input-button">-</button></td>
                </tr>
                <tr>
                    <td><button value='4' @click="notify('4')" class="calcualator input-button">4</button></td>
                    <td><button value='5' @click="notify('5')" class="calcualator input-button">5</button></td>
                    <td><button value='6' @click="notify('6')" class="calcualator input-button">6</button></td>
                    <td><button value='+' @click="add('+')" class="calcualator input-button">+</button></td>
                </tr>
                <tr>
                    <td><button value='1' @click="notify('1')" class="calcualator input-button">1</button></td>
                    <td><button value='2' @click="notify('2')" class="calcualator input-button">2</button></td>
                    <td><button value='3' @click="notify('3')" class="calcualator input-button">3</button></td>
                    <td rowspan=2 ><button value='=' @click="compute('=')" class="calcualator input-button equal">=</button></td>
                </tr>
                <tr>
                    <td><button value='%' @click="modulus('%')" class="calcualator input-button">%</button></td>
                    <td><button value='0' @click="notify('0')" class="calcualator input-button">0</button></td>
                    <td><button value='.' @click="notify('.')" class="calcualator input-button">.</button></td>
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
                this.operand2.show = false;
                this.operand2.value = '';
            }else{
                this.operand2.show = true;
                this.operand2.value += data;
                this.compute();
            }
        },
        clearAll: function(){
            this.operand1.show = false;
            this.operand1.value = '';
            this.operand2.show = false;
            this.operand2.value = '';
            this.operator.show = false;
            this.operator.value = '';
            this.result.show = false;
            this.result.value = '';
            this.focus = true;
        },
        clear: function(){
            if(this.focus){
                this.operand1.value = this.operand1.value.substring(0,this.operand1.value.length-1);
            }else{
                this.operand2.value = this.operand2.value.substring(0,this.operand2.value.length-1);
            }
            this.compute();
        },
        divide: function(){
            if(this.operator.show !== '/' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = Number(this.operand1.value) / Number(this.operand2.value);
                this.operand2.show = false;
                this.operand2.value = '';
            }
            if(!this.operand1.show){
                this.operand1.value=0;
                this.operand1.show = true;
            }
            this.focus = false;
            this.operator.show = true;
            this.operator.value = '/';
            this.result.show = true;
            this.result.value = this.operand1.value; 
        },
        multiply: function(){
            if(this.operator.show !== '*' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show  ){
                this.operand1.value = Number(this.operand1.value) * Number(this.operand2.value);
                this.operand2.show = false;
                this.operand2.value = '';
            }
            if(!this.operand1.show){
                this.operand1.value=0;
                this.operand1.show = true;
            }
            this.focus = false;
            this.operator.show = true;
            this.operator.value = '*';
            this.result.show = true;
            this.result.value = this.operand1.value; 
        },
        substract: function(){
            if(this.operator.show !== '-' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show ){
                this.operand1.value = Number(this.operand1.value) - Number(this.operand2.value);
                this.operand2.show = false;
                this.operand2.value = '';
            }
            if(!this.operand1.show){
                this.operand1.value=0;
                this.operand1.show = true;
            }
            this.focus = false;
            this.operator.show = true;
            this.operator.value = '-';
            this.result.show = true;
            this.result.value = this.operand1.value; 
        },
        add: function(){
            if(this.operator.show !== '+' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = Number(this.operand1.value) + Number(this.operand2.value);
                this.operand2.show = false;
                this.operand2.value = '';
            }
            if(!this.operand1.show){
                this.operand1.value=0;
                this.operand1.show = true;
            }
            this.focus = false;
            this.operator.show = true;
            this.operator.value = '+';
            this.result.show = true;
            this.result.value = this.operand1.value; 
        },
        modulus: function(){
            if(this.operator.show !== '%' && this.operand1.show && this.operand2.show){
                this.operatorChange();
            }
            if(this.operator.show && this.operand2.show){
                this.operand1.value = Number(this.operand1.value) % Number(this.operand2.value);
                this.operand2.show = false;
                this.operand2.value = '';
            }
            if(!this.operand1.show){
                this.operand1.value=0;
                this.operand1.show = true;
            }
            this.focus = false;
            this.operator.show = true;
            this.operator.value = '%';
            this.result.show = true;
            this.result.value = this.operand1.value; 
        },
        compute: function(value){
            if(this.operator.value === '+'){
                this.result.show = true;
                this.result.value = Number(this.operand1.value) + Number(this.operand2.value);
            }else if(this.operator.value === '-'){
                this.result.show = true;
                this.result.value = Number(this.operand1.value) - Number(this.operand2.value);
            }else if(this.operator.value === '*'){
                this.result.show = true;
                this.result.value = Number(this.operand1.value) * Number(this.operand2.value);
            }else if(this.operator.value === '/'){
                this.result.show = true;
                this.result.value = Number(this.operand1.value) / Number(this.operand2.value);
            }else if(this.operator.value === '%'){
                this.result.show = true;
                this.result.value = Number(this.operand1.value) % Number(this.operand2.value);
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


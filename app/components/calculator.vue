<template>
    <div>
        <div class="calculator header">
        </div>
        <div class="calculator display">
        </div>
        <div class="calculator input">
            <table>
                <tr>
                    <td><button value='C' class="calcualator input-button">C</button></td>
                    <td><button value='X' class="calcualator input-button">X</button></td>
                    <td><button value='/' class="calcualator input-button">/</button></td>
                    <td><button value='*' class="calcualator input-button">*</button></td>
                </tr>
                <tr>
                    <td><button value='7' class="calcualator input-button">7</button></td>
                    <td><button value='8' class="calcualator input-button">8</button></td>
                    <td><button value='9' class="calcualator input-button">9</button></td>
                    <td><button value='-' class="calcualator input-button">-</button></td>
                </tr>
                <tr>
                    <td><button value='4' class="calcualator input-button">4</button></td>
                    <td><button value='5' class="calcualator input-button">5</button></td>
                    <td><button value='6' class="calcualator input-button">6</button></td>
                    <td><button value='+' class="calcualator input-button">+</button></td>
                </tr>
                <tr>
                    <td><button value='1' class="calcualator input-button">1</button></td>
                    <td><button value='2' class="calcualator input-button">2</button></td>
                    <td><button value='3' class="calcualator input-button">3</button></td>
                    <td rowspan=2 ><button value='=' class="calcualator input-button equal">=</button></td>
                </tr>
                <tr>
                    <td><button value='%' class="calcualator input-button">%</button></td>
                    <td><button value='0' class="calcualator input-button">0</button></td>
                    <td><button value='.' class="calcualator input-button">.</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    
};
</script>
<style scoped>
.input{
    background-color:#F2F3F4;
    width: 147px;
}

.input-button{
    height: 30px;
    width: 30px;
    margin: 1px;
}

.equal{
    height: 65px;
    width: 30px;
}
</style>


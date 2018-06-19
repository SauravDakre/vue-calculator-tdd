import Vue from "vue/dist/vue.js";
import Calculator from "./components/calculator.vue";

new Vue({
    el: "#root",
    data: {
        message: "Vue Component"
    },
    components: {
        'calculator': Calculator
    },
    template:`
        <div>
            <calculator></calculator>
        </div>
    `
});

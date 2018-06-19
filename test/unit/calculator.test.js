import { mount } from '@vue/test-utils';
import Calculator from '../../app/components/calculator.vue';

describe('calculator', () => {
    let wrapper;

    beforeEach( () => {
        wrapper = mount(Calculator);
    });

    it('should perform addition correctly', () => {
        wrapper.vm.operand1.show = true;
        wrapper.vm.operand1.value = '4';
        wrapper.vm.operand2.show = true;
        wrapper.vm.operand2.value = '5';
        wrapper.vm.operator.show = true;
        wrapper.vm.operator.value = '+';

        wrapper.vm.compute();

        expect(wrapper.vm.result.value).toBe(9);
    });

    it('should perform substraction correctly', () => {
        wrapper.vm.operand1.show = true;
        wrapper.vm.operand1.value = '4';
        wrapper.vm.operand2.show = true;
        wrapper.vm.operand2.value = '5';
        wrapper.vm.operator.show = true;
        wrapper.vm.operator.value = '-';

        wrapper.vm.compute();

        expect(wrapper.vm.result.value).toBe(-1);
    });

    it('should perform multiplication correctly', () => {
        wrapper.vm.operand1.show = true;
        wrapper.vm.operand1.value = '4';
        wrapper.vm.operand2.show = true;
        wrapper.vm.operand2.value = '5';
        wrapper.vm.operator.show = true;
        wrapper.vm.operator.value = '*';

        wrapper.vm.compute();

        expect(wrapper.vm.result.value).toBe(20);
    });

    it('should perform division correctly', () => {
        wrapper.vm.operand1.show = true;
        wrapper.vm.operand1.value = '40';
        wrapper.vm.operand2.show = true;
        wrapper.vm.operand2.value = '5';
        wrapper.vm.operator.show = true;
        wrapper.vm.operator.value = '/';

        wrapper.vm.compute();

        expect(wrapper.vm.result.value).toBe(8);
    });

    it('should perform modulus correctly', () => {
        wrapper.vm.operand1.show = true;
        wrapper.vm.operand1.value = '7';
        wrapper.vm.operand2.show = true;
        wrapper.vm.operand2.value = '5';
        wrapper.vm.operator.show = true;
        wrapper.vm.operator.value = '%';

        wrapper.vm.compute();

        expect(wrapper.vm.result.value).toBe(2);
    });
});
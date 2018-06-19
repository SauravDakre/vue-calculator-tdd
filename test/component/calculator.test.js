import { mount } from '@vue/test-utils';
import Calculator from '../../app/components/calculator.vue';

describe('calculator', () => {
    let wrapper;

    beforeEach( () => {
        wrapper = mount(Calculator);
    });

    it('should have header with class calculator and header', () => {
        expect(wrapper.findAll('div').at(1).classes()).toContain('header');
    });

    it('should have display with class calculator and display', () => {
        expect(wrapper.findAll('div').at(2).classes()).toContain('display');
    });

    it('should have header with class calculator and input', () => {
        expect(wrapper.findAll('div').at(3).classes()).toContain('input');
    })

    it('should have buttons with class calculator and input-button', () => {
        expect(wrapper.find('.calculator .input-button').exists()).toBeTruthy();
    })

    it('should display appropriate result when addition operation is performed', () => {
        const button3 = wrapper.find("[value='3']");
        const button4 = wrapper.find("[value='5']");
        const operator = wrapper.find("[value='+']");
        const compute = wrapper.find("[value='=']");
       
        button3.trigger('click');
        operator.trigger('click');
        button4.trigger('click');
        compute.trigger('click');

        const result = wrapper.find('.result');
        expect(result.text()).toBe('= 8');
    })
})
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
})
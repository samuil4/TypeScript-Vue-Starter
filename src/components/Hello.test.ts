// import { createLocalVue, mount } from '@vue/test-utils';
import { createLocalVue, mount } from '@vue/test-utils';
import Vue from 'vue';
import Hello from './Hello.vue';
import HelloDecorator from './HelloDecorator.vue';

const localVue = createLocalVue();

describe('Hello.vue', () => {
  it('should fail', () => {
    const wrapper = mount(HelloDecorator, {
      localVue,
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

import { mount } from '@vue/test-utils';
import demo from '@/examples/tree-select/demos/base.vue';

// unit test for component in examples.
describe('Tree-select', () => {
  it('base demo works fine', () => {
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
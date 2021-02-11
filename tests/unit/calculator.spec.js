import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

describe('App.vue', () => {
  it('Should be able to add numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5);
  })
})

describe('App.vue', () => {
  it('Should be able to subtract numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })
})

describe('App.vue', () => {
  it('Should be able to multiply numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  })
})

describe('App.vue', () => {
  it('Should be able to divide numbrs', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => { 
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.numberClick(9)
    wrapper.vm.numberClick(9)
    wrapper.vm.numberClick(5)
  expect(wrapper.vm.runningTotal).to.equal(1995)
  })
})

describe('operatorClick', () => {
  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(7)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(4)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick(4)
    wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(10)
  }) 
})

describe('clearClick', () => {
  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('=')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(15)
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick()
  expect(wrapper.vm.runningTotal).to.equal(0)
  expect(wrapper.vm.previousTotal).to.equal(37)
  })
})
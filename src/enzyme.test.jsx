import React from 'react'
import EnzymeTest from './enzymeTest'
import { shallow } from 'enzyme'

describe('EnzymeTest', () => {
    it('renders', () => {
        const wrapper = shallow(<EnzymeTest title="Test" />)
        expect(wrapper.find('p').text()).toEqual('Enzyme Test')
    })
})
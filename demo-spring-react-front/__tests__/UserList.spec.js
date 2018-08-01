import React from 'react';
import UserList from '../src/UserList';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

const dummyUsers = [
  {name: 'Jack', lastName: 'Franklin'},
  {name: 'Juan', lastName: 'Perez'}
]

const url = '/api/users'

const mockUrlWithouthUsers = () =>
  fetchMock.get(url, {
    status: 200
  })

describe('UserList', () => {

  beforeAll(() => {
    mockUrlWithouthUsers();
  })

  it('renders loading...', () => {

    const wrapper = shallow(<UserList id="user_id"/>);
    wrapper.setState({users: [], isLoading: true});

    expect(wrapper.find('p').text()).to.equal('Loading...');
  });

  it('renders component correctly', () => {

    const wrapper = shallow(<UserList id="user_id"/>);
    wrapper.setState({users: dummyUsers, isLoading: false});

    expect(wrapper.find('div h2').text()).to.equal('Users List');
    expect(wrapper.find('li')).to.have.lengthOf(2);
  });

});
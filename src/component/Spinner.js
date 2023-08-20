import React, { Component } from 'react'
import Loader from './Loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loader} alt="Loader"/>
      </div>
    )
  }
}

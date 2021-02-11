import React, { Component } from "react";
import Copyright from './Copyright'

export default class Home extends Component {
  render() {
    /*O Copyright importado abaixo esta sendo renderizado no servidor com o next.*/ 
    return <Copyright ano='2021' />
  }
}

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//IMPORTAR COMPONENTES MATERIAL-UI MANUALMENTE
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    
  // ESTADOS DEL COMPONENTE
  this.state = {
    numero: 0
  };
  this.aumentar = this.aumentar.bind(this);
  this.disminuir = this.disminuir.bind(this);
  }
  
  
  //FUNCIONES Y CICLO DE VIDA DEL COMPONENTE
  componentWillMount(){
    console.log("Antes de montar");
  }
  
  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }
  disminuir = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  } 
  
  // RENDERIZADO
  render() {
    const numero = this.state.numero == 0 ? <p>Vacio</p> : <p>{this.state.numero}</p>;      
    return (
      <div>
        <h1>{numero}</h1>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.disminuir}>Disminuir</button>
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

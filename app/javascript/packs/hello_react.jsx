// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//IMPORTAR COMPONENTES MATERIAL-UI MANUALMENTE
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//COMPONENTE PURO
const Tarjeta = (props) => (    
  <Card style={{
     width: 400,
     margin: 10,
  }}>
    <CardHeader
      title={props.title}
      subtitle="Created by Carlos"
      avatar={props.url}
    />
    <CardMedia
      overlay={<CardTitle title={props.title} subtitle="Created by Carlos" />}
    >
      <img src={props.url} alt="" />
    </CardMedia>
  </Card>   
);

class Hello extends React.Component {
  constructor(props) {
    super(props);
    
  // ESTADOS DEL COMPONENTE
  this.state = {
    numero: 0,
    fotos: []
  };
  this.aumentar = this.aumentar.bind(this);
  this.disminuir = this.disminuir.bind(this);
  }
  
  
  //FUNCIONES Y CICLO DE VIDA DEL COMPONENTE
  componentWillMount(){
    console.log("Antes de montar");
    //NUEVA FUNCIONALIDAD ECMASCRIPT PARA NO USAR AJAX(JQUERY)
    fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (respuesta) => {
      return respuesta.json()
    })
    .then( (fotos) => {
      this.setState({ fotos })
    })
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
    const fotos = this.state.fotos.map((foto, id) => (
      <Tarjeta key={id} title={foto.title} url={foto.url} />
    ))   
    return (
      <MuiThemeProvider>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {fotos.length > 0 ? fotos : <p>Cargando fotos..</p>}        
        </div>
      </MuiThemeProvider>
    )
  }  
  render1() {
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

import React, { Component } from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

class Egresos extends Component {
    state = { 
        titulo: "Egresos",
        gastos: [],
     };


     //El Componente se monto
     componentDidMount(){
        const URL = 'http://localhost:4000/api/v1/gastos'
        axios.get(URL)
        .then(response => {
            console.log (response.data);
            const gastos = response.data;
           this.setState({ gastos }) 
        })
        .catch( err => console.log(err));
     }

      renderizarGastos(){
        const { gastos } = this.state;
        if(gastos.length === 0){
            return <span>Cargando Gastos</span>
        } else if (gastos.length > 0){

            return (
                <React.Fragment>
                         <span>Se encontraron {gastos.length}</span>
                             { gastos.map(gastos =>{
                                return (
                                <Card className="mt-3" style={{backgroundColor: '#a3c6ff'}}>
                                    <CardBody>
                                        <CardTitle>{ gastos.monto}</CardTitle>
                                        <CardText>{ gastos.descripcion}</CardText>
                                         <CardSubtitle>{ gastos.nombre}</CardSubtitle>
                                     </CardBody>
                                </Card>
                                
                                )
            
                            })}
                </React.Fragment>

            )
        }
      }
    
    render() { 
        return ( 
             <React.Fragment>
                         <h3>{ this.state.titulo }</h3>
                            { this.renderizarGastos() }
             </React.Fragment>
        
         );
    }
}
 
export default Egresos;
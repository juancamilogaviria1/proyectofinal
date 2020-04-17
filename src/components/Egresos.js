import React, { Component } from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

class Egresos extends Component {
    state = { 
        titulo: "Egresos",
        articulos: [],
     };


     //El Componente se monto
     componentDidMount(){
        const URL = 'https://supermercado-devf.herokuapp.com/api/v1/articulos'
        axios.get(URL)
        .then(response => {
            console.log (response.data);
            const articulos = response.data;
           this.setState({ articulos }) 
        })
        .catch( err => console.log(err));
     }

     renderizarArticulos(){
        const { articulos } = this.state; 
        if(articulos.length === 0){
            return <span>Cargando Egresos</span>
        } else if (articulos.length > 0) {
           
        return (
            <React.Fragment>
                <span>Se encontraron {articulos.length}</span>
                { articulos.map(articulo =>{
                    return (
                    <Card className="mt-3" style={{backgroundColor: '#0090e3'}}>
                        <CardBody>
                            <CardTitle>{ articulo.nombre}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
                            { this.renderizarArticulos() }
            </React.Fragment>
        
         );
    }
}
 
export default Egresos;
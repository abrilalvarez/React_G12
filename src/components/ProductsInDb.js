
import React, { Component } from "react";
import Chart from './Chart';

class ProductsInDb extends Component {

  constructor() {
    super();

    this.state = {
      categoryList: []
    }
  }

  componentDidMount() {

    fetch('http://localhost:3050/api/productos')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(categories => {
        this.setState({ categoryList: categories.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4" >
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800 titulo-sidebar">
                Categorías de la Base de Datos
              </h5>
            </div>
            <div className="card-body">
              <div className="row">

                { this.state.categoryList.map( cat => 
                <Chart key={cat.id} name={cat.name}/>
                  
                  )}


              </div>
            </div>
          </div>
        </div>

      


      </React.Fragment >
    )
  }


}



export default ProductsInDb;



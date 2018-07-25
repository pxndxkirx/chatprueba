import React, { Component } from 'react';

class Mensaje extends Component{
	render(){
		return(
			<div>
				<div>
					Nombre=> {this.props.a.nombre}
				</div>
				<div>
					Mensaje=> {this.props.a.mensaje}
				</div>
			</div>		    	 
		);
	}
}
export default Mensaje;
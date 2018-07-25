import React, { Component } from 'react';
import Men from '../mensaje/mensaje';
import fire from '../config/firebasejs'


class Inicio extends Component{
	state={
		mensaje:{},
		write:false
	}


	componentDidMount(){
		this.init();
		this.viewwrite();
	}

	componentWillMount(){

	}


	viewwrite=()=>{
		let ref=fire.database().ref('write');
		ref.on("value",snapshot=>{
			this.setState({
				write:snapshot.val()
			});
		});
	}

	init=()=>{
		let ref=fire.database().ref('mensaje');
		ref.on("value",snapshot=>{
			this.setState({
				mensaje:snapshot.val()
			});
		});
	}


	send=()=>{
		let name=document.getElementsByClassName('h')[0].value;
		let message=document.getElementsByClassName('h')[1].value;
		let s=fire.database().ref('mensaje');
		s.push({
			nombre:name,
			mensaje:message
		});
	}


	write=(n)=>{
		console.log("asd");
		let s=fire.database().ref();
		s.update({
			write:true
		});
		setTimeout(function(){
			s.update({
				write:false
			});
		},500);
	}




	render(){
		return(
			<div className="container">
				<div className="messagebox">
					{
						Object.keys(this.state.mensaje||{}).map(index=>{
							return(
								<div key={index}>
									<Men a={this.state.mensaje[index]}></Men>
									<br/>
									<br/>
								</div>
							)
						})
					}
					</div>
				<h1>{this.state.write?"alguien esta escribiendo":""}</h1>

				<input className="h" type="text" placeholder="nombre"/><br/>
				<input onKeyUp={(e)=>{ this.write(e)} } className="h" type="text" placeholder="mensaje"/><br/>
				
				<button onClick={()=>this.send()}>Enviar</button>
			</div>	 
		);
	}
}
export default Inicio;
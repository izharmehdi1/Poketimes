import React from "react"

const Contact= (props) =>{
	//after parsing props peremeter it will give access to axtra props
	// console.log(props); 
	// setTimeout(()=>{
	// 	props.history.push('/about')
	// },2000) 
	//this function will redirect after 2 sec
	return(
		<div className="container">
			<h4 className="center">Contact</h4>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
		)
}

export default Contact
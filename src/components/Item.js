import React, { Component } from 'react';

export class Item extends Component {

	constructor(props){
		super(props)
		this.state = {
			level : [
				{"Hight" : "danger"},
				{"Medium" : "warning"},
				{"Low" : "success"},
			]
		}
	}
	render() {
		let temp = this.state.level[this.props.content.item.level-1]
		let i = Object.keys(temp)[0]
		return (
		  <tr className="item text-secondary">
	        <td>
	        	{this.props.content.index+1}
	        </td>
	        <td> 
	        	{this.props.content.item.name} 
	        	<span className={`badge badge-${temp[i]}`}> {i} </span> 
	        	<i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.deletingItem}/>
	        </td>
	      </tr>
		);
	}
}
export default Item
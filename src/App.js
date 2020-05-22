import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ToggleMain from "./components/ToggleMain"
import TaskMain from "./components/TaskMain"
import Item from "./components/Item"
export class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			isShow: false,
			items : [],
			taskName : '',
			taskLevel : 0
		}
		this.taskName = React.createRef()
	}

	componentDidMount() {
		let items = JSON.parse(localStorage.getItem("items")) || []
		console.log(items)
		this.setState({
			items : items
		})
	}

	// getTaskValue = (e) => {
	// 	this.setState({
	// 		[e.target.name] : e.target.value
	// 	})
	// }

	showToggle = (check) => {
		let taskName = this.taskName.current.value
		if (taskName && check) {
			this.setState({
				isShow: true,
				taskName : taskName
			})
		}
		this.taskName.current.value = ""
	}

	handleAddTask = task => {
		const cloneTasks = [...this.state.items]
		cloneTasks.push(task)
		this.setState({ isShow: false, items: cloneTasks }, () => {
			localStorage.setItem("items", JSON.stringify(this.state.items))
		})
	}


	deletingItem = (index) => {
		this.state.items.splice(index,1)
		this.setState({
			items : this.state.items
		}, () => {

			localStorage.setItem("items", JSON.stringify(this.state.items))
		})
	}
	render() {

		return (
		  <div className="App">
		  	<Header />
		  	<main className="container-fluid">
		  		<TaskMain showToggle={this.showToggle} getName={this.getTaskValue} getTaskName={this.taskName}>
		  			{
		  				this.state.items.map((item, index) => {
		  					return <Item key={index} content={{index, item}} deletingItem={() => {this.deletingItem(index)}} />
		  				})
		  			}
		  		</TaskMain >
		  		
		  		{this.state.isShow ? <ToggleMain addTask={this.handleAddTask} taskName={this.state.taskName} /> : ''}
		  	</main>
		
		  	<Footer />
		  </div>
		);
		}
	}

export default App
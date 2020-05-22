import React, { Component } from 'react';

export class ToggleMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			level: 0
		}
	}

	handleChange = e => {
		this.setState({ level: e.target.value })
	}

	handleAdd = () => {
		if (this.state.level) {
			this.props.addTask({ name: this.props.taskName, level: this.state.level })
		}
	}


	render() {

		return (
	      <div className="row toggle">
	        <div className="col-sm-12 col-md-8 col-xl-6 mx-auto">
	          <div className="card box">
	            <h5 className="card-header">
	              Chọn mức độ ưu tiên cho công việc của bạn
	            </h5>
	            <div className="card-body">
	              <div className="custom-control custom-radio">
	                <input type="radio" id="customRadio1" name="taskLevel" className="custom-control-input" value={1} onChange={this.handleChange}/>
	                <label className="custom-control-label" htmlFor="customRadio1">Cần làm gấp</label>
	              </div>
	              <div className="custom-control custom-radio">
	                <input type="radio" id="customRadio2" name="taskLevel" className="custom-control-input" value={2} onChange={this.handleChange}/>
	                <label className="custom-control-label" htmlFor="customRadio2">Hơi hơi gấp</label>
	              </div>
	              <div className="custom-control custom-radio">
	                <input type="radio" id="customRadio3" name="taskLevel" className="custom-control-input" value={3} onChange={this.handleChange}/>
	                <label className="custom-control-label" htmlFor="customRadio3">Cứ thong thả</label>
	              </div>
	              
	              <button className="btn btn-primary" onClick={this.handleAdd}>Xong</button>
	            </div>
	          </div>
	        </div>
	      </div>
    
		);
	}
}
export default ToggleMain
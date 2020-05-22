import React, { Component } from 'react';

export class TaskMain extends Component {
	render() {
		return (
	      <div className="row">
	        <div className="col-sm-12 col-md-8 col-xl-6 mx-auto">
			  <h1 className="text-secondary text-wrap mt-5 ">Ứng dụng ghi chú công việc tốt nhất Việt Nam</h1>
			  <p className="lead text-center mt-4">Hôm nay bạn chưa lên lịch việc gì! Hãy lên lịch ngay thôi <img className="icon" src="./icon/valentine.svg" alt="icon1" /></p>
			  <table>
			    <tbody><tr className="title">
			        <td>Stt</td>
			        <td>Công việc</td>
			      </tr>

				  {this.props.children}			     

			      <tr className="type">
			        <td colSpan={2}>
			          <input type="text" placeholder="Thêm một việc mới..."  name="taskName" ref={this.props.getTaskName}/>
			          <button onMouseUp={this.props.showToggle}>Thêm</button>
			        </td>
			      </tr>
			    </tbody></table>
			</div>
	      </div>
		);
	}
}
export default TaskMain
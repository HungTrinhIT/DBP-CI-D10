import React, { Component } from "react";

export default class StudentForm extends Component {
  state = {
    id: "",
    fullname: "",
    phoneNumber: "",
    email: "",
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // Đưa cái object student ra component cha
    this.props.onAddStudent(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="id">Mã SV</label>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="fullname">Họ tên</label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="fullname">SĐT</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="mt-4 btn btn-primary">
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}

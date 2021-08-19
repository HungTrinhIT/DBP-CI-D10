import React, { Component } from "react";

const initialState = {
  id: "",
  fullname: "",
  phoneNumber: "",
  email: "",
  math: "",
  chem: "",
  phy: "",
};
export default class StudentForm extends Component {
  state = initialState;

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onResetForm = () => {
    this.setState(initialState);
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // Đưa cái object student ra component cha
    this.props.onAddStudent(this.state);
    this.onResetForm();
  };

  render() {
    const { id, fullname, phoneNumber, email, math, chem, phy } = this.state;
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
                  value={id}
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
                  value={fullname}
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
                  value={phoneNumber}
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
                  value={email}
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="math">Điểm Toán</label>
                <input
                  type="text"
                  name="math"
                  value={math}
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="phy">Điểm Lý</label>
                <input
                  type="text"
                  name="phy"
                  value={phy}
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="chem">Điểm Hóa</label>
                <input
                  type="text"
                  name="chem"
                  value={chem}
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

import React, { Component } from "react";

const initialState = {
  id: "",
  fullname: "",
  phoneNumber: "",
  email: "",
  mathScore: "",
  chemistryScore: "",
  physicSroce: "",
};
export default class StudentForm extends Component {
  state = initialState;
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
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState(initialState);
  };
  render() {
    const {
      id,
      fullname,
      phoneNumber,
      email,
      mathScore,
      chemistryScore,
      physicSroce,
    } = this.state;

    return (
      <div className="pb-5 mb-3 border-bottom">
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
                  value={id}
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
                  value={fullname}
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
                  value={phoneNumber}
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
                  value={email}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Toán</label>
                <input
                  type="text"
                  name="mathScore"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={mathScore}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Lý</label>
                <input
                  type="text"
                  name="physicSroce"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={physicSroce}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Hóa</label>
                <input
                  type="text"
                  name="chemistryScore"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={chemistryScore}
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

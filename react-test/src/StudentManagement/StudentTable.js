import React, { Component } from "react";

const DEFAULT = 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const NAME = 4;
export default class StudentTable extends Component {
  state = {
    sortType: DEFAULT,
  };

  onSortTypeChange = (e) => {
    const { value } = e.target;
    this.setState({
      sortType: value,
    });
  };

  render() {
    let { students } = this.props;

    // Tính GPA
    students = students.map((student) => {
      const {
        id,
        chemistryScore,
        mathScore,
        physicSroce,
        email,
        fullname,
        phoneNumber,
      } = student;
      const gpa =
        (parseFloat(chemistryScore) +
          parseFloat(physicSroce) +
          parseFloat(mathScore)) /
        3;
      return {
        id,
        email,
        fullname,
        phoneNumber,
        gpa: Math.round(gpa, 1),
      };
    });

    // Xử lý loại sort
    console.log("before:", students);
    const { sortType } = this.state;

    switch (+sortType) {
      case GPA_UP:
        // > 0 : b come firsrt
        // < 0 : a come first
        students.sort((a, b) => a.gpa - b.gpa);
        break;
      case GPA_DOWN:
        students.sort((a, b) => b.gpa - a.gpa);
        break;
      case NAME:
        students.sort((a, b) => {
          return a.fullname.localeCompare(b.fullname);
          // if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) {
          //   return -1;
          // } else if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) {
          //   return 1;
          // }
          // return 0;
        });
        break;
      default:
        break;
    }

    return (
      <div>
        <div className="d-flex justify-content-end">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={this.onSortTypeChange}
          >
            <option value={DEFAULT}>Default</option>
            <option value={GPA_UP}>GPA Tăng dần</option>
            <option value={GPA_DOWN}>GPA Giảm dần</option>
            <option value={NAME}>Theo họ tên</option>
          </select>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((studentItem, index) => {
                const { email, fullname, phoneNumber, id, gpa } = studentItem;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{fullname}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>{gpa}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Chưa có học sinh nào , vui lòng thêm học sinh!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

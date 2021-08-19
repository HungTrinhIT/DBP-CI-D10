import React, { Component } from "react";

const DEFAULT = 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const NAME = 4;

export default class StudentTable extends Component {
  state = {
    sortType: DEFAULT,
  };

  onChangeSortType = (e) => {
    this.setState({
      sortType: +e.target.value,
    });
  };

  render() {
    // Destructering mảng students
    const { students } = this.props;
    const { sortType } = this.state;
    let newStudents = [];

    // Tính GPA dựa vào mảng students ban đầu
    newStudents = students.map((student) => {
      const { id, email, fullname, phoneNumber, math, phy, chem } = student;
      const gpa = (parseFloat(math) + parseFloat(phy) + parseFloat(chem)) / 3;

      return {
        id,
        email,
        fullname,
        phoneNumber,
        gpa: parseFloat(gpa.toFixed(1)),
      };
    });

    switch (sortType) {
      case GPA_UP:
        newStudents.sort((student1, student2) => {
          // student2 return >0
          // student1 < 0
          // giu nguyen
          return student1.gpa - student2.gpa;
        });
        break;
      case GPA_DOWN:
        newStudents.sort((student1, student2) => {
          // student2 return >0
          // student1 < 0
          // giu nguyen
          return student2.gpa - student1.gpa;
        });
        break;
      case NAME:
        newStudents.sort((student1, student2) => {
          return student1.fullname.localeCompare(student2.fullname);
        });
        break;
      default:
        break;
    }

    return (
      <div>
        <div>
          <div className="form-group">
            <label htmlFor="filter"></label>
            <select
              className="form-control"
              name="sortType"
              id="filter"
              onChange={this.onChangeSortType}
              value={this.state.sortType}
            >
              <option value={DEFAULT}>Default</option>
              <option value={GPA_UP}>GPA Up</option>
              <option value={GPA_DOWN}>GPA Down</option>
              <option value={NAME}>Fullname</option>
            </select>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>GPA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {newStudents.length > 0 ? (
              newStudents.map((studentItem, index) => {
                const { email, fullname, phoneNumber, id, gpa } = studentItem;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{fullname}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>{gpa}</td>
                    <td>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  <p>Chưa có học sinh nào , vui lòng thêm học sinh!</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// Formik
// React-final-form

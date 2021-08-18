import React, { Component } from "react";

export default class StudentTable extends Component {
  render() {
    // Destructering mảng students
    const { students } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>SĐT</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((studentItem, index) => {
                const { email, fullname, phoneNumber, id } = studentItem;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{fullname}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                  </tr>
                );
              })
            ) : (
              <p>Chưa có học sinh nào , vui lòng thêm học sinh!</p>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

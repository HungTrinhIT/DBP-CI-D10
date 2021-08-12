import React, { Component } from "react";

export default class StudentTable extends Component {
  render() {
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
            <tr>
              <td>1</td>
              <td>Hùng</td>
              <td>23123</td>
              <td>Msakdisadd@gmai;.clom</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

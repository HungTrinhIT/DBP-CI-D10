import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="mt-5">
        <h5>Product detail</h5>
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center mb-2">I Phone 12</h3>
            <img src="assets/img/iphone-12.jpg" class="card-img-top" />
          </div>
          <div className="col-md-8">
            <div class="table">
              <thead>
                <tr>
                  <td colSpan="2">
                    <h3>Thông số kỹ thuật</h3>
                  </td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>AMOLED 6.2</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>AMOLED 6.2</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>AMOLED 6.2</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>AMOLED 6.2</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>AMOLED 6.2</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>AMOLED 6.2</td>
                </tr>
              </thead>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

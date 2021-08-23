import React, { Component } from "react";

class SearchTodo extends Component {
  state = {
    query: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.onQueryTodo(this.state.query);
    }
  }

  // Check xem thực sự có cần render lại component này hay không
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.query !== this.state.query) {
      return true;
    }
    return false;
  }

  onQueryChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  btnClearQuery = (e) => {
    this.setState({
      query: "",
    });
  };
  render() {
    console.log("search render");
    return (
      <div>
        <label
          style={{
            fontWeight: "bold",
          }}
        >
          <span>Filter tasks (by name)</span>
          <div className="fg">
            {/* <input type="text" onoChange={(e)=>this.setState({query: e.target.value})}/> */}
            <input
              type="text"
              value={this.state.query}
              onChange={this.onQueryChange}
            />

            <button onClick={this.btnClearQuery}>Clear</button>
          </div>
        </label>
      </div>
    );
  }
}

export default SearchTodo;

// this.props.onQueryTodo(this.state.query);=> Sai
// this.props.onQueryTodo(e.target.value); => Dung
/*
      Do hàm setState là hàm bất đồng bộ nên khi chạy => ignore và chạy tiếp dòng dưới => excute lại cái setState
    */

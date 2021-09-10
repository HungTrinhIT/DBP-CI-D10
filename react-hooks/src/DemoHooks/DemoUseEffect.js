import React, { useEffect, useState } from "react";

const DemoUseEffect = (props) => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState({
    page: 1,
    per_page: 10,
  });

  useEffect(() => {
    // side effect
    console.log("Component did mount");
  }, [filter]);

  const onFilterProduct = () => {
    onSearchChange();
    setFilter({
      ...filter,
      page: filter.page + 1,
    });
  };

  const { onSearchChange } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={onFilterProduct}>Filter products</button>
    </div>
  );
};
export default DemoUseEffect;

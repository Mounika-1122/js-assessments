//Create a React component that uses React Memo for performance optimization.
export const ExpensiveComponent = React.memo(({ count }) => {
    console.log("ExpensiveComponent rendered");
    const result = Array.from({ length: 1000000 }, (_, i) => i * count).reduce(
      (a, b) => a + b,
      0
    );
  
    return (
      <div>
        <h2>Expensive Component</h2>
        <p>Count: {count}</p>
        <p>Result: {result}</p>
      </div>
    );
  });
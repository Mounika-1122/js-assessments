//Create a React component that fetches data from an API and displays it.

export const DataFetchingComponent = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch("https://dummyjson.com/quotes/random")
        .then((response) => response.json())
        .then((fetchedData) => setData(fetchedData));
    }, []);
  
    return (
      <>
        <h1>{data.quote}</h1>
        <p>{data.author}</p>
      </>
    );
};      




//Write a React component that handles errors and exceptions.

export const useErrorHandler = () => {
    const [error, setError] = useState(null);
  
    const handleError = (error) => {
      console.error("Error caught by useErrorHandler:", error);
      setError(error);
    }; 
    const clearError = () => setError(null); 
    return { error, handleError, clearError };
  };
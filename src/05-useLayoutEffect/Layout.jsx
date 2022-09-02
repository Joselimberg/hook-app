import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        isLoading ? <LoadingQuote /> : <Quote author={ author } quote={ quote } />
      }
      <button
        className="btn btn-primary" 
        onClick={ () => increment() }
        disabled = { isLoading }
      >
        Next quote
      </button>
      
      <button
        className="btn btn-primary" 
        onClick={ () => decrement() }
        disabled = { isLoading }
      >
        Previous quote
      </button>

      <button
        className="btn btn-primary" 
        onClick={ reset }
        disabled = { isLoading }
      >
        Reset
      </button>
    </>
  )
}

import { useEffect, useState } from "react";
import Quote from "./components/Quote/Quote";
import { getQuotes } from "./services/quotes";
import style from './App.css';
import Search from "./components/Search/Search";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getQuotes();
        setQuotes(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
    getData();
  }, []);
  
  // const quote = {
  //   quote: "Shut up, brain. I got friends now. I don't need you anymore.",
  //   character: "Lisa Simpson",
  //   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
  //   characterDirection: "Right"
  // }
  if (loading) return <p>Loading...</p>

  return (
    <div className={style.mainPage}>
      <p>{errorMessage}</p>
      <Search />
      <div className={style.quoteContainer}>
        {quotes.map((quote) => (
          <Quote quote={quote}/>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import { getQuotes } from "./services/quotes";
import style from './App.css';


export default function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getQuotes();
      setQuotes(data);
    }
    getData();
  }, []);
  
  const quote = {
    quote: "Shut up, brain. I got friends now. I don't need you anymore.",
    character: "Lisa Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    characterDirection: "Right"
  }

  return (
    <div className={style.quoteContainer}>
      {quotes.map((quote) => (
        <Quote quote={quote}/>
      ))}
    </div>
  );
}

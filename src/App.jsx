import { useEffect } from "react";
import { getQuotes } from "./services/quotes";


export default function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await getQuotes();
    }
    getData();
  }, []);

  return <h1>Hello World</h1>;
}

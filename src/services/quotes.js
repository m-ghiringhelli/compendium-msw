export async function getQuotes() {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=20');
  const data = await response.json();
  return data;
}

export async function getQuotesByCharacter(search) {
  const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character=${search}`);
  const data = await response.json();
  return data;
}
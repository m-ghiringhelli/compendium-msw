export async function getQuotes() {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=20');
  const data = response.json();
  return data;
}
import { screen, render } from "@testing-library/react";
import { quoteApiData } from "../../tests/fixtures/quotesData";
import Quote from "./Quote";

test('should render a card with p, img, h from object', () => {
    render(<Quote quote={quoteApiData} />)
    // find the pieces of the card
    const card = screen.getByTestId('card');
    const quote = screen.getByText(/women and seamen/i);
    const img = screen.getByAltText(/Smithers/i);
    const name = screen.getByRole('heading');

    // verify they exist
    expect(quote).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();

    // verify the card contains those elements
    expect(card).toContainElement(quote);
    expect(card).toContainElement(img);
    expect(card).toContainElement(name);
})
import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { quotesApiData } from './tests/fixtures/quotesData';

global.fetch = fetch;

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(ctx.json(quotesApiData))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
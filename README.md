Brewxplorer is a [Next.js](https://nextjs.org) app that uses BrewDog's [database of DIY beer recipes](https://drink.brewdog.com/uk/diy-dog) and displays  them in a user-friendly format.

The app is accessible at [brewxplorer.freywald.dev](https://brewxplorer.freywald.dev). 

## Building blocks

- API: The PunkAPI project, available [here](https://github.com/alxiw/punkapi?tab=readme-ov-file#httpspunkapionlinev3)
- Component library: Chakra UI v3 ([docs](https://chakra-ui.com/docs))
- State management: TanStack React Query ([docs](https://tanstack.com/query/latest/docs/framework/react/)). Read [this article](https://tkdodo.eu/blog/react-query-as-a-state-manager) if you want to know how it works
- Honorable mentions:
  - nuqs (next-use-query-state): great little alternative to React's `useState` that persists the state through URL search params ([docs](https://nuqs.dev/docs/installation)) 

## Getting Started

Run `npm run dev` to start up a development server at [http://localhost:3000](http://localhost:3000).

This app is hosted by Vercel - a push to the main branch starts a production deployment.

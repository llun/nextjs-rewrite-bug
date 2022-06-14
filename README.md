This is a sample project that shows redirect bug in Next.js.

It's happen only when next.js middleware rewrite the request with new domain name and url has a query params.
To test this repository,

1. Install all the dependencies and run the server `yarn dev`
2. Visit the page http://localhost:3000/bug/test?q=1 (Any query params will make this keep reloading)

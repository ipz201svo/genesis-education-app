# genesis-education-app

## Pagination

As the API does not expose the pagination feature, it was added on the frontend. The response from the API is cached with help of React Query for 1 min, it should not make an API call every time the new pageg is loaded.

## API CORS

The CORS is not enabled by default, so some header were added to every request:

`'Access-Control-Allow-Origin': '*'`

`'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'`

const API_URL = 'https://api.wisey.app/api/v1';

export const createRequest = (url: string, token?: string) => {
  const request = new Request(API_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  });

  if (token)
    request.headers.set('Authorization', `Bearer ${token}`);

  return request;
};

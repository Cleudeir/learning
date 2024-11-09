interface QueryParameters {
  [key: string]: string;
}

export default function UrlToObj(url: string): any | null {
  const regex = /.*\?(.*)/;
  const match = url.match(regex);

  if (match && match[1]) {
    const queryParams = match[1];
    const pairs = queryParams.split('&');

    const result: QueryParameters = {};

    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      result[key] = value;
    });

    const json = JSON.stringify(result, null, 2);
    return JSON.parse(json);
  } else {
    //console.log('No query parameters found in the URL.');
    return null;
  }
}

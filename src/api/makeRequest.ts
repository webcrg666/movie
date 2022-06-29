async function makeRequest(url: string) {
  const response = await fetch(url);
  const json = await response.json();

  if (json.message) {
    throw new Error(json.message);
  }

  return json;
}

export default makeRequest;

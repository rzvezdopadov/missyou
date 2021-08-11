export async function postData(url = '', data = {pf:'ege'}) {
    console.log("Data is:",data)
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

   return await response.json();
}
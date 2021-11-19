
async function sendData(){

    const data = JSON.stringify({
      title: 'Hallo Klasse',
      body: ':)',
      userId: 1,
    })

  const result = await fetch('https://jsonplaceholder.typicode.com/posts', {


  method: 'POST',
  body: data,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

    const post = await result.json();
    console.log(post);

}

sendData()
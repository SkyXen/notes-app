async function makeRequest() {
  try {
    const response = await fetch('http://localhost:3000/notes/health');

    console.log('status code: ', response.status); 

    if (response.status == 200 ) {
        process.exit(0);
    } else {
        process.exit(1);
    }
  } catch (err) {
    console.log(err);
  }
}

makeRequest();
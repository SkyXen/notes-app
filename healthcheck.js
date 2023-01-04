async function makeRequest() {
  try {
    const response = await fetch('http://localhost:3000/health');

    console.log('status code: ', response.status); // 👉️ 200

    if (response.ok) {
        console.log(response);
        process.exit(0);
    } else {
        process.exit(1);
    }
  } catch (err) {
    console.log(err);
  }
}

makeRequest();


fetch ("https://swappi.dev/api/people/1")
.then((response)=> response.json())
.then((data) => {
  data.results.forEach(char => {
  console.log(char.name);
  })
})              
.catch((error)=> {
  console.error("something went wrong!");
})
.finally (() => console.info("Fetch done!"));
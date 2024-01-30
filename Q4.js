async function getData() {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .catch((err) => console.log("Error::",err));
    if (response) 
    {
      var DataArray = [];
      for (let i = 0; i < 5; i++) {
        DataArray.push(response[i].title);
      }
    }
    return DataArray;
  }
  async function print() 
  {
    let DataArray = await getData();
    console.log(DataArray);
  }
  print();
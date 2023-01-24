fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => parseJson(data));
  
function parseJson(data){
  console.debug(data.results[0].name.last);
  console.debug(data.results[0].cell);
  console.debug(data.results[0].email);
  console.debug(data.results[0].gender);
  console.debug(data.results[0].location.city);

  
  const dtName = document.getElementById("name");
  dtName.innerHTML = data.results[0].name.last+","+" "+data.results[0].name.first; 
  const pName = document.getElementById("span_name");
  pName.innerHTML = data.results[0].name.last+","+" "+data.results[0].name.first; 
  const pNames = document.getElementById("span_name1");
  pNames.innerHTML = data.results[0].name.last+","+" "+data.results[0].name.first; 
  const dtTelefono = document.getElementById("cell");
  dtTelefono.innerHTML = data.results[0].cell; 
  const dtEmail= document.getElementById("email");
  dtEmail.innerHTML = data.results[0].email; 
  const dtCity = document.getElementById("city");
  dtCity.innerHTML =data.results[0].location.street.name+","+" "+data.results[0].location.street.number+","+" "+ data.results[0].location.city; 
  const dtTele = document.getElementById("cell2");
  dtTele.innerHTML = data.results[0].cell; 
  const dtMail= document.getElementById("email2");
  dtMail.innerHTML = data.results[0].email; 
  const dtCitys = document.getElementById("city2");
  dtCitys.innerHTML =data.results[0].location.street.name+","+" "+data.results[0].location.street.number+","+" "+ data.results[0].location.city; 
   //const dtStreet = document.getElementById("street");
  //dtStreet.innerHTML = data.results[0].location.street.name+","+" "+data.results[0].location.street.number; 
  
}
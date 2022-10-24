//key = "fc84a960833fb9eff4041729130e003b"

//citycall = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=fc84a960833fb9eff4041729130e003b`
searchCityField()
addSubmitButton()


function searchCityField(){
   let input = document.createElement('input')
   input.placeholderholder = "Enter City Name"
   input.name = "city_name"
   input.classList.add("form")
   document.body.appendChild(input)
}

function addSubmitButton(){
    let button = document.createElement('button');
    button.innerText = "Submit"
    button.classList.add("form","btn-outline","btn-success");
    button.addEventListener("click",(event)=>handleSubmit(event));
    document.body.appendChild(button)

}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    const cityName = document.getElementsByName("city_name")[0].value

    doAPICall(cityName)
}

async function doAPICall(cityName){
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fc84a960833fb9eff4041729130e003b`)
    console.log(result)
    result = result.data

    let name = document.getElementsByClassName("card-title")
    name.innerText = `${result["sys"][1]["name"]}`
    document.card-tite.appendChild(name)

    let high = document.getElementById("list-high")
    high.innerText = `High: ${result["main"]["temp-max"]}`
    document.card-body.appendChild(high)

    let low = document.getElementById("list-min")
    low.innerText = `Low: ${result["main"]["temp-min"]}`
    document.cardbody.appendChild(low)

    let humidity = document.getElementById("list-humidity")
    humidity.innerText = `High: ${result["main"]["humidity"]}`
    document.cardbody.appendChild(humidity)
    
    
    let forecast = document.getElementById("list-forecast")
    forecast.innerText = `High: ${result["weather"]["description"]}`
    document.cardbody.appendChild(forecast)

}

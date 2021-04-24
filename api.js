
const baseURL = 'https://api.covid19api.com/summary'

const searchForm = document.querySelector('form');
const globalButton = document.querySelector('#globalSubmit')

globalButton.addEventListener('submitGlobal', fetchData);
searchForm.addEventListener('submitCountry', fetchData1);


//GLOBAL
function fetchData1(e){
    e.preventDefault();

    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            let countryData = json.Countries
            let globalData = json.Global
            displayResults1(countryData);
        })
}

//COUNTRY
function fetchData(e){
    e.preventDefault();

    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            //console.log(json);
            let countryData = json.Countries
            let globalData = json.Global
            displayResults(globalData);
        })
}



function displayResults(countryData){
    
    console.log(countryData)
    //get the value from the text search box
    let country1 = document.getElementById('getCountry1').value
    console.log(country1)


    for(let i=0;i<countryData.length;i++){
        //console.log(countryData[i].CountryCode)
        if(countryData[i].CountryCode == country1){
            document.getElementById("results").innerHTML = "Country: "+ countryData[i].Country +"\nTotal Confirmed Cases: "+ countryData[i].TotalConfirmed +"\n Total Deaths: "+countryData[i].TotalDeaths +"\n Total Recovered: "+countryData[i].TotalRecovered
        }
    }

    let country2 = document.getElementById('getCountry2').value


    //filter by country
    //display data."whatever the field is"
    


        
}
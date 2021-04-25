
const baseURL = 'https://api.covid19api.com/summary'

//globalButton.addEventListener('submitCountry', fetchData1);
let globalResultsArr = []
let globalLog = document.getElementById("global-log")
const myGlobal = document.getElementById("submitGlobal")

//countryCode.addEventListener('getCountry', fetchData)
let countryResultsArr = []
let countryLog = document.getElementById("country-log")

let countryCode = document.getElementById("getCountry")
let myCountry = document.getElementById("submitCountry")

//FETCH FOR GLOBAL
function fetchData1(e){
    //e.preventDefault()

    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            let globalData = json.Global
            displayGlobalResults(globalData);
        })
}

//DISPLAY RESULTS FOR GLOBAL
function displayGlobalResults(Data){
    console.log(Data)
    let myresults = {
        tConfirmed: Data.TotalConfirmed,
        tDeaths: Data.TotalDeaths,
        tRecoveries: Data.TotalRecovered
    }
    globalResultsArr.push(myresults)
    renderGlobalResults()
}

//CREATE THE TABLE RENDERING FOR GLOBAL
function renderGlobalResults(){
    globalLog.innerHTML = ""
    for(let i = 0; i<globalResultsArr.length; i++){
        let row = createTableRow(globalResultsArr[i])
        globalLog.appendChild(row)
    }
}

//ADD ROWS USING FETCHED DATA FOR GLOBAL
//used base template structre from code-along example
function createTableRow(e) {
    console.log(e)
    
    let tableRow = document.createElement('tr')
    let tcases = document.createElement('td')
    let tdeaths = document.createElement('td')
    let trecoveries = document.createElement('td')
    
    tcases.innerText = e.tConfirmed
    tdeaths.innerText = e.tDeaths
    trecoveries.innerText = e.tRecoveries

    tableRow.appendChild(tcases)
    tableRow.appendChild(tdeaths)
    tableRow.appendChild(trecoveries)

    return tableRow
}


//FETCH FOR SPECIFIC COUNTRY
function fetchData(e){
    //e.preventDefault();

    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            let countryData = json.Countries
            displayResults(countryData);
        })
}
//DISPLAY RESULTS FOR COUNTRY
function displayResults(countryData){
    console.log(countryData)
    let myresults = {
        tConfirmed: countryData.TotalConfirmed,
        tDeaths: countryData.TotalDeaths,
        tRecoveries: countryData.TotalRecovered
    }

    //get the value from the text search box
    let country1 = document.getElementById('getCountry').value
    console.log(country1)

    for(let i=0;i<countryData.length;i++){
        //console.log(countryData[i].CountryCode)
        if(countryData[i].CountryCode == country1){
            document.getElementById("results").innerHTML = "Country: "+ countryData[i].Country +"\nTotal Confirmed Cases: "+ countryData[i].TotalConfirmed +"\n Total Deaths: "+countryData[i].TotalDeaths +"\n Total Recovered: "+countryData[i].TotalRecovered
        }
    }
    countryResultsArr.push(myresults)
    renderCountryResults()     
}
//CREATE THE TABLE RENDERING FOR COUNTRY
function renderCountryResults(){
    countryLog.innerHTML = ""
    for(let i = 0; i<countryResultsArr.length; i++){
        let row = createTableRow(countryResultsArr[i])
        countryLog.appendChild(row)
    }
}
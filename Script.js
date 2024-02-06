//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Get all the countries from Asia continent /region using Filter function
fetch('https://restcountries.com/v3.1/all')
.then((response) => response.json())
.then((data) => {

  const asianCountries = data.filter((country) => country.region === 'Asia');

  
  console.log(asianCountries);
})
.catch((error) => {
  console.error('Error fetching data:', error);
});
//-----------------------------------------------------///
//2.Get all the countries with a population of less than 2 lakhs using Filter function

const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Use the filter function to get countries with population less than 2 lakhs
    const countriesWithLowPopulation = data.filter(country => {
      const population = country.population;

      // Assuming 'population' is the correct property name, check and filter
      return population && population < 200000; // Assuming 1 lakh = 100,000
    });

    // Log the result
    console.log(countriesWithLowPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

//------------------------------------------------//
  //3.Print the following details name, capital, flag using forEach function
  
  
 //-------------------------------------------------//
   // 4.Print the total population of countries using reduce function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + country.population;
    }, 0);

    console.log('Total Population:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));
//----------------------------------------//
  //5.Print the country which uses US Dollars as currency.

// Fetch data from the Rest Countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Filter countries that use US Dollars as currency
  const countriesUsingUSD = data.filter(country => {
    return country.currencies && country.currencies.US && country.currencies.US.name === 'United States dollar';
  });

  // Check if any countries were found
  if (countriesUsingUSD.length > 0) {
    console.log('Countries using US Dollars as currency:');
    countriesUsingUSD.forEach(country => {
      console.log(country.name.common);
    });
  } else {
    console.log('No countries found that use US Dollars as currency.');
  }
})
.catch(error => {
  console.error('Error fetching data:', error);
});
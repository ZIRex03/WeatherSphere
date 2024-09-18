
import { useState } from 'react';
import Header from './pages/home/components/Header/Header';
import WeatherInfo from './pages/home/components/WeatherInfo/WeatherInfo';

const API_KEY = '3d95b220badd6522cedffcf72f7fa794';

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const [isLoading, setIsLoading] = useState('');
  const [error, setError] = useState(null);

  let nowTime = null;

  const handleKeyDown = (event:any) => {
    if(event.key === 'Enter') {
      searchWeather();
    }
  }

  const searchWeather = async () => {

    setIsLoading('loading')
    setError(null)

    try {

      console.log(city)

      const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)

      if(!response.ok){
        throw new Error ('Ошибка при получении данных');
      }

      const data = await response.json();

      const response2 = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)

      const data2 = await response2.json()

      setForecast(data2)
      setWeather(data);

    }
    catch (error: any) {
      setError(error.message)
    }
    finally{
      setIsLoading('')
    }

    setCity('')
  }

  return (
    <div className='wrapper'>
      <Header
        city = {city}
        handleInput = {setCity}
        searchWeather = {searchWeather}
        handleKeyDown={handleKeyDown}
      />
      
      {isLoading === 'loading' && 
        <div>
          <img className='loading_gif' src={require('../src/icons/waiting.gif')} alt='loading'/>
        </div>}
      {error && <h2>Ошибка: {error}</h2>}

      <WeatherInfo weather = {weather} nowTime = {nowTime} forecast={forecast}/>
    </div>
    
  );
}

export default App;

import WeatherStatusSelector from "../../../../icons/Global/WeatherStatusSelector";

interface Props{
    forecast: any,
}

const ForecastItem = ({forecast}: Props) => {

    const forecastTime = new Date(forecast.dt*1000);

  return (
    
    <div className="forecast-item">
        <p className="forecast-item-hour">{('0'+(forecastTime.getHours())).slice(-2)}:{('0'+(forecastTime.getMinutes())).slice(-2)}</p>
        <div className="forecast-item-icon">
            <WeatherStatusSelector id={forecast.weather[0].icon}/>
        </div>
        <p className="forecast-item-temp">{Math.round(forecast.main.temp)}°C</p>
    </div>
    
  )
}

export default ForecastItem
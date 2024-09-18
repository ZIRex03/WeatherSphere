interface Props {
    id:string,
}

const WeatherStatusSelector = ({id}: Props) => {
  
    switch(id){
        case '01d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='sun'/>;

        case '01n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='moon'/>;

        case '02d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds sun'/>;

        case '02n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds moon'/>;

        case '03d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds'/>;

        case '03n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds'/>;

        case '04d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds'/>;

        case '04n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='clouds'/>;

        case '09d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='shower rain'/>;

        case '09n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='shower rain'/>;

        case '10d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='rain'/>;

        case '10n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='rain'/>;

        case '11d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='thunderstorm'/>;

        case '11n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='thunderstorm'/>;

        case '13d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='snow'/>;

        case '13n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='snow'/>;
            
        case '50d':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='mist'/>;

        case '50n':
            return <img src={require(`../weatherStatus/${id}.png`)} alt='mist'/>;

        default:
            return null;
    }
}

export default WeatherStatusSelector
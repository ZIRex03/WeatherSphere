import './Header.module.scss'
import { CiSearch } from "react-icons/ci";

interface Props {
  city: string,
  handleInput: React.Dispatch<React.SetStateAction<string>>,
  searchWeather: any,
  handleKeyDown: any,
}



function Header({city, handleInput, searchWeather, handleKeyDown}: Props) {

  return (
    <div className="header">

      <a href='/' className='logo'>
        <img src={require('../../../../icons/logo.png')} alt='logo'/>
        <p>WeatherSphere</p>
      </a>
      
      <div className='search__city'>
        <CiSearch className='search__city-icon' onClick={searchWeather}/>
        <input
          value={city}
          type='search'
          className='search__city-input'
          placeholder='Введите название города...'
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    </div>
  )
}

export default Header
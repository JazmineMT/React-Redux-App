import React , {useEffect ,useState} from 'react'
import {connect} from 'react-redux'
import {fetchReports} from '../actions/index'


const Weather = props => {
    const [newCity , setNewCity] = useState(props.updateCity)


   const  handleChanges = e => {
        setNewCity({ [e.target.name]: e.target.value });
      };

   

    useEffect(()=>{
        props.fetchReports(newCity);
    }, [])

   

    return (
        
    <div className='box'>
        
        <div className='container'>
        <div className='input'>
        <input
          type='text'
          name='newcity'
          onChange={handleChanges}
          
        />
        <button className='input' >Find a new city</button>
      </div>
            {props.isLoading && <h4>Loading your weather report...</h4>}
            {props.error && (<p className="error"> Uh oh it's cloudy with a chance of no weather report...{props.error}</p>)}

            {props.weatherReport.length > 0 && (
                    <div>
                        <p>City: {props.city}</p>
                    {props.weatherReport.map(weather => (
                        <div key={weather.id}><p> Description: {weather.main}</p></div>
                    ))}
                    
                    <p> Temperature: {props.weatherTemp.temp}F°</p>
                    <p> Feels Like: {props.weatherTemp.feels_like} F°</p>
                    <p> High: {props.weatherTemp.temp_max }F° </p>
                    <p> Low: {props.weatherTemp.temp_min} F°</p>
                    <p> humidity: {props.weatherTemp.humidity} %</p>
                    
                    
                    
                    </div>
            )}   
          
        </div>
    </div>  
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading, 
        weatherReport: state.weatherReport, 
        error: state.error,
        weatherTemp: state.weatherTemp,
        city: state.city,
        updateCity: state.updateCity
    }
}

export default connect(mapStateToProps, {fetchReports})(Weather);
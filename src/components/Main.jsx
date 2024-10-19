import React, { useState } from 'react';
import "../css/Main.css";
import image from "../assets/weather.png";
import img from "../assets/country-location-icon.png"
import im from "../assets/png-transparent-education-organization-foundation-pedagogy-description-icon-angle-user-interface-design-text-thumbnail.png";
import imge from "../assets/pngtree-the-city-logo-with-buildings-silhouetted-in-circles-vector-png-image_15887653.png"
const Main = () => {
    let [city, setCity] = useState("Banglore");
    let [WeatherInfo, setWeatherInfo] = useState(null);

    let fetchApi = async () => {
        let apiKey = "4b6a228196064f1e04fb261693cdbcdd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            let data = await fetch(apiUrl);
            let finalData = await data.json();

            if (finalData.cod === 200) {
                setWeatherInfo(finalData);
                console.log(finalData);
            } else {
                console.log("Please enter a correct city name.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <input type="text" placeholder='Enter your city' onChange={(e) => setCity(e.target.value)} />
            <button onClick={fetchApi}>Get data</button>
            <img src={image} alt="Weather Icon" />

           
            {WeatherInfo && (
                <div className='card'>
                 
                    <div className="temp">
                        
                        <p>{WeatherInfo.main.temp} °C</p>
                    </div>

             
                    <div className="weather-box-container">
                        <div className="weather-box">
                            <img src= {imge} alt="city" />
                            <h2>City:</h2>
                            <p>{WeatherInfo.name}</p>
                        </div>
                        <div className="weather-box">
                        <img src={img} alt="country" />
                            <h2>Country:</h2>
                            <p>{WeatherInfo.sys.country}</p>
                        </div>
                        <div className="weather-box">
                            <img src={im} alt="description" />
                            <h2>Description:</h2>
                            <p>{WeatherInfo.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Main;

const CurrentWeather = ({data}) => {
    return(
        <div className=" px-4 pt-0 pb-4 bg-slate-700 text-neutral-200 w-[300px] mt-2 rounded-md shadow-lg">
            <div className=" text-neutral-200 flex justify-between items-top pt-2 ">
            <div>
                <span className="font-bold text-3xl w-[10px]">{data.name}</span>
                <p>{data.weather[0].description}</p>
            </div>
        <img src={`../icons/${data.weather[0].icon}.png`}  alt="01d img" />
        </div>
        <div className="flex items-center justify-between">
            <div>
                <span className="text-5xl font-bold">{Math.round(data.main.temp)}°C</span>
            </div>
            <div>
                <table className="flex flex-col w-[150px]">
                    
                    <tr className="flex justify-between">
                        <td>Feels like</td>
                        <td>{data.main.feels_like}°C</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td>Wind</td>
                        <td>{data.wind.speed}m/s</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td>Humidity</td>
                        <td>{data.main.humidity}%</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td>Pressure</td>
                        <td>{data.main.pressure}hPa</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        </div>
    )
}

export default CurrentWeather;
import { kelvinToCelsius } from "../Helper"

const WeatherCard = ({data,date,city}) => {
    const val = date && date.slice(0,3)
    
    return (
        <>
            <div class="frame" >
                <div class="moon">
                    <div class="moon-crater1"></div>
                    <div class="moon-crater2"></div>
                </div>
                <div class="hill-bg-1"></div>
                <div class="hill-bg-2"></div>
                <div class="hill-fg-1"></div>
                <div class="hill-fg-2"></div>
                <div class="hill-fg-3"></div>

                <div class="front">
                    <div>
                        <div class="temperature">
                            {kelvinToCelsius(data?.temp)}
                            
                        </div>
                        <div class="icons">
                            <i class="fas fa-wind"></i><br /><i class="fas fa-tint"></i>
                        </div>
                        <div>
                            <div class="info">
                                <p>
                                Humidity| {data?.humidity}&deg;</p>
                                <p>{val && val}</p>
                            </div>
                            <div>
                            </div>
                            <table class="preview">
                                <tbody>
                                        <tr>
                                        {/* <td>{val&& val}</td> */}
                                        <td>{city}</td>
                                    </tr>
                                    <tr>
                                        {/* <td>{val&& val}</td> */}
                                        <td>Max|{kelvinToCelsius(data?.temp_max)}&deg;</td>
                                    </tr>
                                    <tr>
                                        {/* <td>Wed</td> */}
                                        <td>Min |{kelvinToCelsius(data?.temp_min)}&deg;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="proverb">“Frogs croaking in the lagoon,<br />Means rain will come real soon.”</div>
                </div>
                <div class="drop-big-1"></div>
                <div class="drop-big-2"></div>
                <div class="drop-big-3"></div>
                <div class="drop-big-4"></div>
                <div class="drop-big-5"></div>
                <div class="drop-big-6"></div>
                <div class="drop-big-7"></div>
                <div class="drop-big-8"></div>
                <div class="drop-big-9"></div>
                <div class="drop-big-10"></div>
                <div class="drop-medium-1"></div>
                <div class="drop-medium-2"></div>
                <div class="drop-medium-3"></div>
                <div class="drop-medium-4"></div>
                <div class="drop-medium-5"></div>
                <div class="drop-medium-6"></div>
                <div class="drop-medium-7"></div>
                <div class="drop-medium-8"></div>
                <div class="drop-medium-9"></div>
                <div class="drop-medium-10"></div>
                <div class="drop-small-1"></div>
                <div class="drop-small-2"></div>
                <div class="drop-small-3"></div>
                <div class="drop-small-4"></div>
                <div class="drop-small-5"></div>
                <div class="drop-small-6"></div>
                <div class="drop-small-7"></div>
                <div class="drop-small-8"></div>
                <div class="drop-small-9"></div>
                <div class="drop-small-10"></div>
            </div>


        </>
    )
}
export default WeatherCard
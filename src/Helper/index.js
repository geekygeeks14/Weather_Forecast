export function kelvinToCelsius(kelvin) {
    // Check if the input is a valid number
    if (typeof kelvin !== 'number' || isNaN(kelvin)) {
        return "Invalid input. Please provide a valid number for Kelvin temperature.";
    }
    
    // Convert Kelvin to Celsius using the formula: Celsius = Kelvin - 273.15
    const celsius = kelvin - 273.15;
    
    // Format the Celsius value to two decimal places
    const formattedCelsius = celsius.toFixed(2);
    
    // Return the formatted result
    return formattedCelsius;
}
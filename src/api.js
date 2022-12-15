export async function fetchData(lat,lon) {
    const url='https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

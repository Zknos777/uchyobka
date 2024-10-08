async function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const weather = Math.random() > 0.5 ? "sunny" : "cold";
                resolve(weather);
            }, Math.random() * 1000);
    })
}

async function prepareForDayOut() {
    try {
        const weather = await fetchWeather();
        console.log(`const weather = ${weather}`);
    } catch (error){
        console.error("Error: ", error);
    }
}


prepareForDayOut();
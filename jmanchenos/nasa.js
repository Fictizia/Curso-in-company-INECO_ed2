async function NasaRequest(current_sun, limit, frequency) {
    try{
        const api_key = "dFcc648C0DHJsk6CLHXZ4et6BAjYkuYlTxDjCerH";
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${current_sun}&api_key=${api_key}`;
        console.log(`request started for: ${url}`);
        let resp = await fetch(url);
        let text = await resp.text();
        let data = await JSON.parse(text);
        let photos = data.photos;
        if(!photos.length>0 && limit && current_sun>limit){
            console.log('Delay for next request %sms', frequency);
            await setTimeout(NasaRequest, frequency, --current_sun, limit, frequency)
        }else{
            return photos;
        }
    }catch(error){
        console.warn('Error en la ejecución en NasaRequest con los valores %s, %s y %s: %s', current_sun, limit, frequency, error);
    }
};

async function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
 try{
    const currentValue = await NasaRequest(4000, 3000, 1000);
    console.log("currentValue:", currentValue);
 }catch(error){
    console.warn('Error en la ejecución en init: %s', error);
 }
}
init();

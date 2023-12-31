function getTrafficLightImage(){
    return document.querySelector('.traffic-light-image');
}

function setTrafficLightColor(colorImage){
    const trafficLightImage = getTrafficLightImage();
    trafficLightImage.src = `img/${colorImage}.png`;
    clearInterval(intervalId);
}

document.querySelector('.btn-red').addEventListener('click', function(){
    setTrafficLightColor('vermelho');
})

document.querySelector('.btn-yellow').addEventListener('click', function(){
    setTrafficLightColor('amarelo');
})

document.querySelector('.btn-green').addEventListener('click', function(){
    setTrafficLightColor('verde');
})

document.querySelector('.btn-automatic').addEventListener('click', function(){
    rotateLights();
    intervalId = setInterval(rotateLights, 1000)
})

function rotateLights()
{
    const trafficLightImage = getTrafficLightImage();

    if (trafficLightImage.src.includes('vermelho'))
    {
        trafficLightImage.src = "img/amarelo.png";
    }
    else if(trafficLightImage.src.includes('amarelo'))
    {
        trafficLightImage.src = "img/verde.png"; 
    }
    else
    {
        trafficLightImage.src = "img/vermelho.png";
    }
}
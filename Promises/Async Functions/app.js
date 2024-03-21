const colourChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await colourChange('violet', 1000)
    await colourChange('indigo', 1000)
    await colourChange('blue', 1000)
    await colourChange('green', 1000)
    await colourChange('yellow', 1000)
    await colourChange('orange', 1000)
    await colourChange('red', 1000)
}
rainbow().then(() => console.log("End of Rainbow"));
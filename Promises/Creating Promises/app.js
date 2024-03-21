const colourChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

colourChange('violet', 1000)
    .then(() => colourChange('indigo', 1000))
    .then(() => colourChange('blue', 1000))
    .then(() => colourChange('green', 1000))
    .then(() => colourChange('yellow', 1000))
    .then(() => colourChange('orange', 1000))
    .then(() => colourChange('red', 1000))
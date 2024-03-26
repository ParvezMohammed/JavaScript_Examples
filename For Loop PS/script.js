let numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i=0; i<numbers.length; i++){
    const row = numbers[i];
    console.log(`Row is : ${i + 1}`);
    for (let j=0; j<row.length; j++){
        console.log(row[j]);
    }
}
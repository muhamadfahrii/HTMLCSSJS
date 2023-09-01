function generateOutput (count) {
    let output ='';
    
    for (let i = 1; i <= count; i++){
        if(i % 15 === 0){
            output += 'gamelab indonesia ';
        }   else if(i % 5 === 0){
            output += 'gamelab ';
        }   else if(i % 5 === 0){
            output += 'game ';
        }
    }
    return output;
}

const inputData = [10, 25, 30];
const labels = ["pertama", "kedua", "ketiga"];

for (let i = 0; i < inputData.length; i++){
    const output = generateOutput(inputData[i]);
    const label = labels[i];
    console.log(`Hasil Uji ${label} adalah `);
    console.log(`${output} `);
}

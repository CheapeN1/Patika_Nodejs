// Terminalden değer alıp dairenin alanını hesaplama

const args = process.argv.slice(2);
const radius = parseFloat(args[0]);

function circleAreaCalc(radius){
    // Yarıçapın geçerli bir sayı olup olmadığını kontrol etme
    if (isNaN(radius) || radius <= 0) {
    console.log('Lütfen geçerli bir pozitif sayı girin.');
    } else {
    // Dairenin alanını hesaplama
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`Dairenin alanı: ${area.toFixed(2)}`);
  }
}

function  circlePerimeterCalc(radius){
    // Yarıçapın geçerli bir sayı olup olmadığını kontrol etme
    if (isNaN(radius) || radius <= 0) {
    console.log('Lütfen geçerli bir pozitif sayı girin.');
    } else {
    // Dairenin alanını hesaplama
    const area = Math.PI * radius * 2;
    console.log(`Dairenin çevresi: ${area.toFixed(2)}`);
  }
}

module.exports={
    circleAreaCalc,
    circlePerimeterCalc
}




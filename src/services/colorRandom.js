export default function colorRandom (){
  let rnd1 = Math.random() * 255;
  let rnd2 = Math.random() * 255;
  let rnd3 = Math.random() * 255;
  let bgc = `rgb(${rnd1} ${rnd2} ${rnd3})`;
  return bgc;
    
}
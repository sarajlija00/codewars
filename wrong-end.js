let animal = ['tale', 'body', 'head'];
function wrongEnd (array){
    let temp = array[0]; //uzimamo prvi element
    array[0] = array[array.length-1]; // stavljamo na prvo mjesto zadnji element
    array[array.length-1] = temp; //onaj prvo sto smo sacuvali stavljamo na zadnji
    return array; //vracamo rezutltat i sad mozes pokrenuti test
    
}
console.log (wrongEnd(animal));
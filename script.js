// function afficherPointeSapin(hauteur){
//     let lapointe = '';
//     for (let i = 0; i < hauteur; i++){
//         lapointe += " |\n"
//     }
//     console.log(" +")
//     console.log(lapointe)
// }
// afficherPointeSapin(4)
function afficherEtoiles(n) {
    let etoiles = '';
    for(let i = 0; i < n ;i++){
      etoiles += " * "
    }
    console.log(etoiles)
  }
  
  
  
  afficherEtoiles(2)
  afficherEtoiles(5)
  function afficherRectangle(hauteur, largeur) {
    for  (let i = 0; i < hauteur || i < largeur ; i++ ){
   afficherEtoiles(5)
   
  }
   
  }
  
  afficherRectangle(5, 5)
  
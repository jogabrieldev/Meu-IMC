//const total = true && true && true && true 
//console.log(total)
 function calculo(){
    let peso = document.getElementById('camp1')
    let altura = document.getElementById('camp2')
    let post = document.getElementById('resp')
   let pes = Number(peso.value)
    let alt = Number(altura.value)
    const resp = pes/alt**alt
    post.style.fontSize = '20px'
    post.style.textAlign = 'center'
    post.innerHTML = `<p>Este e o seu IMC ${resp.toFixed(1)}</p>`
 }
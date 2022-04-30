function reload(){
    // location.reload(true);
    let imgArr = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
    let min = 0;
    let max = 5;
    
    let ind1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let ind2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let count = 0;

    
    
    let rnd1 = imgArr[ind1];
    let rnd2 = imgArr[ind2];

    let res = document.getElementById('result');

    document.getElementById('pimg-1').style.backgroundImage = `url(images/${rnd1})`;
    document.getElementById('pimg-2').style.backgroundImage = `url(images/${rnd2})`;
    
    

    if(ind1 > ind2){
        res.innerText = "Player 2 Wins 👑";
    }
    
    if(ind2 > ind1){
        res.innerText = "Player 1 Wins 👑";
    }
    
    if(ind2 == ind1){
        res.innerText = "👑 Game is Tied 👑";
    }
   
}

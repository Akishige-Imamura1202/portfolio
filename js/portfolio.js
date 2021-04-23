"use strict"

var skill = 1;

document.getElementById('hambarger').onclick = function(ham){
    ham.currentTarget.classList.toggle('ham_open');
    ham.currentTarget.classList.toggle('ham_close');
    document.getElementById('menu').classList.toggle('menu_close');
    document.getElementById('menu').classList.toggle('menu_open');
}

window.onscroll = function(event){
    let position = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(position);

if(position > 250){
    document.getElementById('topbtn').classList.add('topbtn_open');
    document.getElementById('topbtn').classList.remove('topbtn_close');
    } else {
        document.getElementById('topbtn').classList.remove('topbtn_open');
        document.getElementById('topbtn').classList.add('topbtn_close');
    }
    document.getElementById('topbtn').onclick = function(){
        scrollTop:0;
    }
    
    
    if(position > 2300 && skill == 1){
        
        var script = document.createElement('script');
        script.src = 'js/graph.js';
        script.async = 'async'
        document.body.appendChild(script);
        skill--;
    }
}





//

let spin=document.querySelector(".spin");
let container=document.querySelector(".container");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const winner =document.querySelector(".winner");
let number=Math.ceil(Math.random() * 1500) + 3500;

spin.addEventListener("click" , function() {
    console.log(number);
    container.style.transform=`rotate(${number}deg)`;
    number += Math.ceil(Math.random() * 1500) + 3500 ;
    one.style.animation="";
    two.style.animation="";
    // three.style.animation="";
    // four.style.animation="";
    winner.style.opacity="0";
    setTimeout(()=>{
        winner.style.opacity="1"
        const x = rect + 30;
        console.log(x)
        const y = rectbottom;
        // console.log(x);
        // console.log(y);
        //座標上の要素を取得
        const z = document.elementFromPoint(x, y);
        if(z === one) {
            const o= inputblue.value;
            if(o) {
               winner.textContent=inputblue.value + "!";  
                    }else {
                        winner.textContent="BLUE!";
                    }
             winner.style.color="blue";
           one.style.animation="animate 1.9s ease";
        }            
        
        if(z === two) {
            const t= inputpink.value;
            if(t) {
               winner.textContent=inputpink.value + "!";  
                    }else {
                        winner.textContent="PINK!";
                    }
             two.style.animation="animate 1.9s ease"
             winner.style.color="pink"
                   }
        // if(z === three) {
        //     winner.textContent=inputlightgreen.value + "!";
        //     if(inputlightgreen.value =" ") {
        //         winner.textContent="lightgreen!"
        //        }
        //    three.style.animation="animategreen 1.9s ease"
        //    winner.style.color="lightgreen"
        // }
        // if(z === four) {
        //     winner.textContent=inputred.value + "!";
        //     if(inputred.value ="!") {
        //         winner.textContent="RED!"
        //        }
        //    four.style.animation="animate 1.9s ease"
        //    winner.style.color="red"
        // }
        //コンソールログを残す
        console.log(z);
    },5500);

});


const arrow =document.querySelector(".arrow");
const rect=arrow.getBoundingClientRect().left;
const rectbottom=arrow.getBoundingClientRect().bottom;


const btnblue =document.querySelector(".btn_blue");
const inputblue =document.querySelector(".input_blue");
const btnpink =document.querySelector(".btn_pink");
const inputpink =document.querySelector(".input_pink");
const btnlightgrren =document.querySelector(".btn_lightgreen");
const inputlightgreen=document.querySelector(".input_lightgreen");
const btnred =document.querySelector(".btn_red");
const inputred=document.querySelector(".input_red");
const add=()=> {
// window.addEventListener("click", function(e) {

    //クリック時のデフォルトの動作禁止
    // e.preventDefault();
// setTimeout(()=>{
//     const x = 397.5703125;
//     const y = 175;
//     // console.log(x);
//     // console.log(y);
//     //座標上の要素を取得
//     const z = document.elementFromPoint(x, y);
//     //コンソールログを残す
//     console.log(z);
// },7000);
    //マウスカーソルの座標を取得

    //要素の削除
    // z.parentNode.removeChild(z);

// }, false);



// console.log(input); 

btnblue.addEventListener("click",function(evt) {
        evt.preventDefault();
            one.textContent= inputblue.value;
  
    });
btnpink.addEventListener("click",function(evt) {
        evt.preventDefault();
            two.textContent= inputpink.value;
    });

// btnlightgrren.addEventListener("click",function(evt) {
//         evt.preventDefault();
//             three.textContent= inputlightgreen.value;
//             // inputpink.value = "";
//     });
// btnred.addEventListener("click",function(evt) {
//         evt.preventDefault();
//             four.textContent= inputred.value;
//             // inputpink.value = "";
//     });

 };
 add();

 
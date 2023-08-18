const miDiv=document.querySelector('#miDiv');
const miButton=document.querySelector('#miBoton');
const kokun=document.querySelector('#kokun');
//------------------------------------------
//------------------------------------------
const cara = document.querySelector('#cara');
function caratula(){
    setTimeout(() => {
        cara.classList.add('caratula2')    
    },2000);
    
}


//----------------------------------------------------
// const setText=data=>{
//     miDiv.textContent=data;
// }

// const getData=c1=>{
//     setText('Quieres jugar?');
//     setTimeout(()=>{
//         const eleccion=confirm('sis non');
//         if(eleccion==true ){
//         c1(true) 
//         caratula();
     
//         }else{
//             setText('Entendible,buenas nochess')
//         }
// },2000)
// }
// //----------------------------
// const showData=c2=>{
//     setText('Esperando autorizacion');
//     setTimeout(()=>{
//         c2({jugador:"camilo"})
//     },2000)
// }
// //----------------------------------------
// miButton.addEventListener('click',()=>{
//     getData(permitido=>{
//         if(permitido){
//             showData(user=>{
//                 setText(user.jugador)
//             })
//         }
//     })
// })
//---------------------------------------------------
const setText=data=>{
    miDiv.textContent=data;
}

const getData=()=>{
    setText('Quieres jugar?');
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const eleccion=confirm('sis non');
            if(eleccion==true ){
            resolve(true) 
         
            }else{
                setText('Entendible,buenas nochess')
            }
    },2000)
        
    })

}
//----------------------------
const showData=()=>{
    return new Promise((resolve, reject) => {
        setText('Esperando autorizacion');
        setTimeout(()=>{
            resolve({jugador:"camilo"})
        },2000)

    })
  
}
//----------------------------------------
miButton.addEventListener('click',()=>{
    getData().then(permitido=>{
        if(permitido){
          return showData()
        }
    }).then(user=>{
        setText(user.jugador)
    })
})


//
// https://www.youtube.com/watch?v=GbPAYZ7tXUY

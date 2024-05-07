const user = [
    {
        usuario: "Stel",
        password: "stel"
    },

    {
        usuario: "Ribeiro",
        password: "ribas"
    }, 

    { 
        usuario: "Cariqui",
        password: "cari"
    }
];

function validar(){

    let inputName = document.getElementById("usuario").value;
    let inputPass = document.getElementById("pass").value;
    let confirmaLogin = false;

   
    for( let i in user){

        if( inputName == user[i].usuario && inputPass == user[i].password){
          confirmaLogin = true;
            break;
        } else if( inputName != user[i].usuario || inputPass != user[i].password){
            confirmaLogin = false;
        }
    }

    if(confirmaLogin == true){
       location.href = "Home.htm";
    }else{
        alert(`Os dados estão incorrectos...`);
    }
}

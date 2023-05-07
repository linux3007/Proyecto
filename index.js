//1. try catch
console.log(3);
try {
    imprimir();
} catch (error) {
    console.log(error)
}
console.log(5);

//2. ASYNC AWAIT - function declaration

function downloadCustomers(){
    return new Promise ((resolve, reject)=>{
        let result = true;
        if (result){
            resolve('The customers were downloaded successfully');
        }else{
            reject ('The customers were not downloaded')
        }
    })
}

function generate(){
    const rta= downloadCustomers ();
    console.log(rta);
}

generate()
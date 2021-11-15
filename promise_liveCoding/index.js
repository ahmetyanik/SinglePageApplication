let dhlResolve, dhlReject

function promiseHandler(resolve,reject) {
    
    dhlResolve = resolve;
    dhlReject = reject;
}

setTimeout(()=>{

    dhlResolve("Package received")
},1000);

function callCenter(){

    dhlReject("Package canceled by sender")
}


const submitToDHL = new Promise(promiseHandler);

submitToDHL
.then((result) => {
    console.log("Dear recipient", result);
})
.catch((err) => console.log("Dear recipient",err));


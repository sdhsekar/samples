var log = "message";

function log(msg){
    console.log(msg+add(1,11));
}


exports.add = function (a, b) {
    return a+b;
}; 

log("good news");
function every ( val) {
document.getElementById('display').value +=val
 }

 function equal() {
    try {
        document.getElementById('display').value = eval(document.getElementById ('display').value);
    } catch (error) {
        document.getElementById('display').value='';
    }
 }
// var one =document.getElementById('one') .value
// var two =document.getElementById('two') .value
// var three =document.getElementById('thr').value
// var four = document.getElementById('fou').value
// var five = document.getElementById('fiv').value
// var six = document.getElementById('six').value
// var seven = document.getElementById('sev').value
// var eight = document.getElementById('eig').value
// var nine = document.getElementById('nin').value
// var ten = document.getElementById('zer').value

// // if (every) {
// //     display.innerHTML = `${}`
// // } else {
    
// // }

// document.getElementById('firstname').value = ''
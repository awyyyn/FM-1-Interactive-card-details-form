
const nameErr = document.getElementById('nameErr')
const numberErr = document.getElementById('numberErr')
const dateErr = document.getElementById('dateErr')
const cvcErr = document.getElementById('cvcErr')

const handleBlur = (event) => { 
    event.classList.remove('error-border'); 
    if(event.name == "name") nameErr.classList.add('hide')
    if(event.name == "card-number") numberErr.classList.add('hide')  
    if(event.value == "" && event.name == "mm") dateErr.classList.add('hide')
    if(event.value == "" && event.name == "yy") dateErr.classList.add('hide') 
    if(event.name == "cvc") cvcErr.classList.add('hide')
}

const redirect = () => {
    window.location.replace('/index.html')
}
 

const handleSubmit = (e) =>{
    
    e.preventDefault();
    
    var numberRegEx = /^[0-9]/
    if(e.target['name'].value == "") {
        e.target['name'].classList.add('error-border')
        nameErr.classList.remove('hide')
    }

    if(e.target['card-number'].value == ""){
        numberErr.innerHTML = "Can't be blank";
        e.target['card-number'].classList.add('error-border')
        numberErr.classList.remove('hide')
    }else if(!numberRegEx.test(e.target['card-number'].value)){ 
        numberErr.innerHTML = "Wrong format, numbers only"; 
        numberErr.classList.remove('hide')
        e.target['card-number'].classList.add('error-border')
    } 

    if(e.target['cvc'].value == ""){
        cvcErr.classList.remove('hide');
        e.target['cvc'].classList.add('error-border')
    }
     

    if(e.target['mm'].value == ""){
        dateErr.classList.remove('hide');
        e.target['mm'].classList.add('error-border')
    }

    if(e.target['yy'].value == ""){
        dateErr.classList.remove('hide');
        e.target['yy'].classList.add('error-border')
    } 
    

    if(e.target['yy'].value == "" || e.target['mm'].value == "" || !numberRegEx.test(e.target['card-number'].value) || e.target['card-number'].value == "" || e.target['name'].value == "") return
     

    window.location.replace('/complete.html')
}
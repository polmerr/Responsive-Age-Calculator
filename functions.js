function validateInput(d,m,y){
    const validInputExp = /[0-9]+/;
    const errorMessages = document.querySelectorAll('.err');

    if(!d || !m || !y)
    {
        errorMessages[0].textContent = 'All fields required';
        errorMessages[1].textContent = 'All fields required';
        errorMessages[2].textContent = 'All fields required';
        return false;
    }
    else{
        errorMessages[0].textContent = '';
        errorMessages[1].textContent = '';
        errorMessages[2].textContent = '';
    
    if (validInputExp.test(d) & validInputExp.test(m) & validInputExp.test(y))
    {
        if(d<1 || m<1){
            errorMessages[0].textContent = 'Must be a valid date';
            return false;
        }
        if(y>2024){
            errorMessages[2].textContent = 'Must be in the past';
        }
        if(m>12)
        {
            errorMessages[1].textContent = 'Must be a valid month';
        }
        if(d>31)
        {
            errorMessages[0].textContent = 'Must be a valid day';
        }
        if(d<=31 & m<=13)
        {
            if(m==2)
            {
                if(d<=28)
                {
                    return true;
                }
                else {
                    errorMessages[0].textContent = 'Must be a valid date';
                    errorMessages[1].textContent = '';
                    errorMessages[2].textContent = '';
                    return false;
                }
            }
            else if(m==4 || m==6 || m==10 || m==11)
            {
                if(d<=30)
                {
                    return true;
                }
                else{
                    errorMessages[0].textContent = 'Must be a valid date';
                    errorMessages[1].textContent = '';
                    errorMessages[2].textContent = '';
                    return false;
                }
            }
            else if(d<=31)
            {
                errorMessages[0].textContent = '';
                errorMessages[1].textContent = '';
                errorMessages[2].textContent = '';
                return true;
                
            }
            else return false;      
        }
        else
        {
            return false;
        }
    }
    else {
        errorMessages[0].textContent = 'Must be valid date';
        return false;
    }
}
}
function findAge(current_date,current_month, 
    current_year, birth_date, 
    birth_month, birth_year) 
{ 
const month = [ 31, 28, 31, 30, 31, 30, 
           31, 31, 30, 31, 30, 31 ]; 
  
if (birth_date > current_date) { 
current_date = current_date + month[birth_month - 1]; 
current_month = current_month - 1; 
} 

if (birth_month > current_month) { 
current_year = current_year - 1; 
current_month = current_month + 12; 
} 

let calculated_date = current_date - birth_date; 
let calculated_month = current_month - birth_month; 
let calculated_year = current_year - birth_year; 

return [calculated_date, calculated_month, calculated_year];
}

function calculateAge(){
    //validate input is a number and valid date
    
    //page elements
    const inputLabel = document.querySelectorAll('label');
    const inputBox = document.querySelectorAll('input');
    
    let dateDay = document.querySelector("#day").value;
    let dateMonth = document.querySelector("#month").value;
    let dateYear = document.querySelector("#year").value;

    const resultDay = document.querySelector('#days');
    const resultMonth = document.querySelector('#months');
    const resultYear = document.querySelector('#years');

    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let age = findAge(todayDay,todayMonth,todayYear,dateDay,dateMonth,dateYear);
    
    if (validateInput(dateDay,dateMonth,dateYear))
    {
    resultDay.textContent = age[0];
    resultMonth.textContent = age[1];
    resultYear.textContent = age[2];
    }
    else{
        for(let i=0; i<inputBox.length;i++)
        {
            inputLabel[i].style.color = 'hsl(0, 100%, 67%)';
            inputBox[i].style.borderColor = 'red';
        }
    }
    for(let i=0; i<inputBox.length;i++)
    {
        inputBox[i].value = '';
    }
}
function resetInput(){
    
    const inputLabel = document.querySelectorAll('label');
    const inputBox = document.querySelectorAll('input');
    for(let i=0; i<inputLabel.length;i++)
    {
        inputLabel[i].style.color = 'hsl(0, 1%, 44%)';
        inputBox[i].style.borderColor = 'hsl(0, 0%, 86%)';  
    }
}

const details = document.querySelector('.det-1-c');
const clickBtn = document.querySelector('.btn-1');
clickBtn.addEventListener('click' , function(e){
    e.preventDefault();
    if(details.style.display=="block"){
        details.style.display='none';
    }
    else{
        details.style.display='block';  
    }
   
})
const details2 = document.querySelector('.det-2-c');
const clickBtn2 = document.querySelector('.btn-2');
clickBtn2.addEventListener('click' , function(e){
    e.preventDefault();
    if(details2.style.display=="block"){
        details2.style.display='none';
    }
    else{
        details2.style.display='block';  
    }
   
})
const details3 = document.querySelector('.det-3-c');
const clickBtn3 = document.querySelector('.btn-3');
clickBtn3.addEventListener('click' , function(e){
    e.preventDefault();
    if(details3.style.display=="block"){
        details3.style.display='none';
    }
    else{
        details3.style.display='block';  
    }
   
})
const request = document.querySelector('.btn-1-2');
request.addEventListener('click', function(e){
    e.preventDefault();
    if(request.innerHTML=="Request Collaboration"){
    request.innerHTML="Requested &#10003";}
    else{
        request.innerHTML="Request Collaboration"
    }
})
const request2 = document.querySelector('.btn-2-2');
request2.addEventListener('click', function(e){
    e.preventDefault();
    if(request2.innerHTML=="Request Collaboration"){
    request2.innerHTML="Requested &#10003";}
    else{
        request2.innerHTML="Request Collaboration"
    }
})
const request3 = document.querySelector('.btn-3-2');
request3.addEventListener('click', function(e){
    e.preventDefault();
    if(request3.innerHTML=="Request Collaboration"){
    request3.innerHTML="Requested &#10003";}
    else{
        request3.innerHTML="Request Collaboration"
    }
})

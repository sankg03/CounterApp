const count = document.querySelector('#counter');


function increment()
{
    let value=parseInt(count.innerText);  // innertext will return value in string we need in integer to increment and decremnet
    value=value+1;
    count.textContent=value;
};
function decrement()
{
    let value=parseInt(count.innerText);
    if(value>0)
    value=value-1;
    count.innerText=value;
};
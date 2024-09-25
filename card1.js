document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault()

const addMoney= getInputvalueById('input-add-money')

if (addMoney <= 0 || isNaN(addMoney)) {
    alert("Invalid donation amount");
    return;
  }

  if (addMoney){
    alert('SuccessFully Donate')
  }

const balance = TextValue('acc-balance')
const newBalance = balance+ addMoney
document.getElementById('acc-balance').innerText = newBalance

const total = TextValue('amount')

const newtotal = total- addMoney
console.log(newtotal)

document.getElementById('amount').innerText = newtotal

const p = document.createElement('p');
const now = new Date();
const options = {
    weekday: 'short', 
    year: 'numeric',
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' 
};
const dateString = now.toLocaleString('en-US', options);
const timezoneOffset = `GMT ${now.getTimezoneOffset() < 0 ? '+' : '-'}${Math.abs(now.getTimezoneOffset() / 60).toString().padStart(2, '0')}00`;
const outputString = `${dateString} ${timezoneOffset} (Bangladesh Standard Time)`;

p.innerHTML = `${addMoney} Taka is Donated for famine-2024 at ${place.innerText}, Bangladesh<br>${outputString}`;

p.style.border = '1px solid black'; 
p.style.padding = '10px'; 
p.style.margin = '10px auto'; 
p.style.maxWidth = '1200px'; 
p.style.width = '100%'; 

document.getElementById('history').appendChild(p);
console.log(p);

})


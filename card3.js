document.getElementById('card-3').addEventListener('click', function(event){
    event.preventDefault()
console.log('hi')
const addMoney3= getInputvalueById('input-add-money3')

if (addMoney3 <= 0 || isNaN(addMoney3)) {
    alert("Invalid donation amount");
    return;
  }

  if (addMoney3){
    alert('SuccessFully Donate')
  }

const balance3 = TextValue('acc-balance3')
const newBalance3 = balance3+ addMoney3
document.getElementById('acc-balance3').innerText = newBalance3

const total3 = TextValue('amount')

const newtotal3 = total3- addMoney3
console.log(newtotal3)

document.getElementById('amount').innerText = newtotal3

const p =document.createElement('p')
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

p.innerHTML = `${addMoney3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh<br>${outputString}`

p.style.border = '1px solid black'; 
p.style.padding = '10px'; 
p.style.margin = '10px auto'; 
p.style.maxWidth = '1200px'; 
p.style.width = '100%'; 

document.getElementById('history').appendChild(p);
console.log(p);

})


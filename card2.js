document.getElementById('button-click2').addEventListener('click', function(event){
    event.preventDefault()
const addMoney2= getInputvalueById('input-add-money2')

if (addMoney2 <= 0 || isNaN(addMoney2)) {
    alert("Invalid donation amount");
    return;
  }
 
  if (addMoney2){
    alert('SuccessFully Donate')
  }

const balance2 = TextValue('acc-balance2')
const newBalance2 = balance2+ addMoney2
document.getElementById('acc-balance2').innerText = newBalance2

const total2 = TextValue('amount')

const newtotal2 = total2- addMoney2
console.log(newtotal2)

document.getElementById('amount').innerText = newtotal2

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

p.innerHTML = `${addMoney2} Taka is Donated for famine-2024 at ${place2.innerText}, Bangladesh<br>${outputString}`;

p.style.border = '1px solid black'; 
p.style.padding = '10px'; 
p.style.margin = '10px auto'; 
p.style.maxWidth = '1200px'; 
p.style.width = '100%'; 

document.getElementById('history').appendChild(p);
console.log(p);

})


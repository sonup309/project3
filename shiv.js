//QuerrySelcotors
var input = document.querySelector('input');
input.value='hello shivani'
var submit=document.querySelector('input[type=submit]')
submit.value='send'
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#006400';
}

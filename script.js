const text = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const ul = document.getElementById('ul');
const itemArray = [];

submitBtn.addEventListener('click',()=>{
  if(text.value){
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteBtn.addEventListener('click',(e)=>{
      e.currentTarget.parentElement.remove();
    });
    const  checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'check-btn');
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkBtn.addEventListener('click',()=> checkBtn.classList.toggle('show'));
    li.append(p,checkBtn,deleteBtn);
    ul.append(li);
    text.value= "";
  }
});

resetBtn.addEventListener('click',()=>{
  let list = document.querySelectorAll('li');
  list.forEach((item)=>{
    item.remove();
  });
});

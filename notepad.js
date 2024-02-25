function myfunction (){
    document.getElementById('span1').innerHTML='<i class="fa-solid fa-right-long"></i>';

}
function myfunction1(){
    const span1 =  document.getElementById('span1').innerHTML='<i  class="fa-solid fa-chevron-right">';
     
}

   

const addButton = document.querySelector('#add');

 const updateLsdata = ()=>{
    const textareadata = document.querySelectorAll('textarea');
    const notes= [];
    console.log(textareadata);
    textareadata.forEach((note)=>{
        
    return notes.push(note.value);

})
localStorage.setItem('notes', JSON.stringify(notes));
 }
 const addnewnote=(text = '')=>{
     const note = document.createElement('div');
     note.classList.add('note');

     const htmlData = `
     <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text? "" : "hidden"}"></div>
        <textarea class="${text? "hidden": ""}"></textarea>
    ` ;
    note.insertAdjacentHTML('afterbegin',htmlData);
    const editbutton = note.querySelector('.edit');
    const delbutton = note.querySelector('.delete');
    const maindiv = note.querySelector(".main");
    const txtarea = note.querySelector('textarea');
    
        delbutton.addEventListener('click',()=>{
            note.remove();
            updateLsdata();
        });



        txtarea.value = text;
        maindiv.innerHTML = text;

        editbutton.addEventListener('click',()=>{
            maindiv.classList.toggle('hidden');
            txtarea.classList.toggle('hidden');
        })

        txtarea.addEventListener('change',(event)=>{
            const value = event.target.value;
            maindiv.innerHTML= value;
            updateLsdata();
        })

   document.body.appendChild(note);

 }

 const notes = JSON.parse(localStorage.getItem('notes'));
 if(notes){notes.forEach((note)=> addnewnote(note))};


addButton.addEventListener('click', ()=> addnewnote());
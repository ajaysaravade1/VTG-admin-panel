const sch=document.querySelector('#school-list');

function renderSchool(doc){
    let li=document.createElement('li');
    let city=document.createElement('span');
    let name=document.createElement('span');

    li.setAttribute('data-id',doc.id);
    name.textContent=doc.data().name;
    city.textContent=doc.data().city;

    li.appendChild(city);
    li.appendChild(name);

    sch.appendChild(li);
}


var school=db.collection('School').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderSchool(doc);
    });
})
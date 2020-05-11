const sch=document.querySelector('#name-list');

function renderSchool(doc){
    let li=document.createElement('tr');
    //let city=document.createElement('span');
    let name=document.createElement('tr');
	let visitCount=document.createElement('td');
    li.setAttribute('data-id',doc.id);
    name.textContent=doc.data().name;
    visitCount.textContent=doc.data().visitCount;

    li.appendChild(name);
    li.appendChild(visitCount);

    sch.appendChild(li);
}


var school=db.collection('activity1').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderSchool(doc);
    });
})
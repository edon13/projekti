console.log("hello world");



const button1 = document.getElementById('button1');
const divbox = document.getElementsByClassName('flexcontainer')

button1.addEventListener('click',function Detyra() {
    //alert("tu qi nana")
    console.log("tu qi nana");
    //button1.style.backgroundColor = '#112D4E';
    
});
function spawnContainer(){
    const flexContainer = documentById('flexcontainer');
    const newContainer = flexContainer.children[0].cloneNode(true);

    flexContainer.appendChild(newContainer);

    setInterval(spawnContainer,3000)


}



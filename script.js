console.log("hello world");



const button1 = document.getElementById('button1');
const divbox = document.getElementsByClassName('flexcontainer')
const textbox = document.getElementById('input1')
const html= document.getElementsByName('html')

button1.addEventListener('click',function Detyra() {
    //alert("tu qi nana")

    
    textbox.style.visibility = 'visible';
    
});
function spawnContainer(){
    const flexContainer = documentById('flexcontainer');
    const newContainer = flexContainer.children[0].cloneNode(true);

    flexContainer.appendChild(newContainer);

    setInterval(spawnContainer,3000)


}



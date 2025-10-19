function Button(){

    let count=0
// const fun = () => console.log("Button clicked");
const fun2 = (e) => {
if(count<3){
    count++;
    e.target.textContent="Clicked 😤";
}
else if(count>5)
    {
e.target.textContent="No more clicks allowed 😡";
e.target.style.cssText="background-color:red; color:white; transition:0.3s; transform: scale(1.1); ";
}
else{
e.target.textContent="leave me 😡";
//change the button location 
e.target.style.cssText=`position:relative; left:${Math.random()*600}px; top:${Math.random()*500}px; transition:0.3s;  `;
//change the button location on hover
e.target.onmouseover=()=>{
    e.target.style.cssText=`position:relative; left:${Math.random()*300}px; top:${Math.random()*300}px; transition:0.5s;  `;
}
}

};

return(

<button onClick={(e)=>fun2(e)}>Click me 😊</button>

);
}
export default Button;
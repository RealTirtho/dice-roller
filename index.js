document.getElementById("btn").onclick=function(){
    const num=document.getElementById("num").value;
    const value=Number(num);
    let result="";
    if (value < 1){
        document.getElementById("res").textContent=`enter the number of dice as a positive number`;
    }
    else{
        const picture=document.getElementById("picture");
        picture.innerHTML="";
        for(let i=1;i<=value;i++)
        {
            let rand=Math.floor(Math.random()*6)+1;
            result=result+" "+rand;
            const images=document.createElement("img");
            images.src=`${rand}.PNG`;
            picture.appendChild(images); 
        }document.getElementById("res").textContent=` ${result}`;}
       
}
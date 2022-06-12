small2num=(a,b)=>{

    if(a<b)
    {
        return a
    }
else
{
    return b
}

}
smallBtnEvent=()=>{
    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=small2num(x,y)
    console.log(z)
    document.getElementById("small").innerText=z
    
}
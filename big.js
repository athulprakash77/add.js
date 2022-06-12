big2num=(a,b)=>{

    if(a>b)
    {
        return a
    }
else
{
    return b
}

}
bigestBtnEvent=()=>{
    var x=parseInt(document.getElementById("num 1").value)
    var y=parseInt(document.getElementById("num 2").value)
    var z=big2num(x,y)
    console.log(z)
    document.getElementById("big").innerText=z
    
}
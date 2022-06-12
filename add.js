add3num=(a,b,c)=>
{
    t=a+b+c
    return t
}
addbtnevent=()=>{

    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=parseInt(document.getElementById("num3").value)
    var p=add3num(x,y,z)


    document.getElementById("sum").innerText=p
}

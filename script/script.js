var cities = ['Faisalabad ', 'Lahore ', 'Karachi ', 'Islamabad ', 'Burewala ', 'Sheikhupura ', 'Kashmir '];

document.getElementById("inputClear").onclick= function(){
    inputBox.value= null;

}
document.getElementById("alert").onclick= function(){
    alert("Its a simple alert")

}
document.getElementById("name").onclick= function(){
    if(inputBox.value == ""){
        alert("Please Enter Your Name in inputbox!")
        return
    }
    else{
        document.getElementById("outputBox").value= ""
        document.getElementById("outputBox").innerHTML=inputBox.value
    }
}
document.getElementById("printCities").onclick= function(){
    document.getElementById("inputBox").value= null
    document.getElementById("outputBox").innerHTML= ""
    for(let index= 0; index<cities.length; index++)
    document.getElementById("outputBox").innerHTML+= index+1 + ") "+ cities[index] +"<br>"
}
document.getElementById("addCity").onclick= function(){
    if(inputBox.value == ""){
        alert("Please Enter City Name First in inputbox!")
        return
    }
    else{
        cities.push(inputBox.value)
        document.getElementById("outputBox").innerHTML= '"'+inputBox.value + '"'+ " has been added successfully!"
        document.getElementById("inputBox").value= null
    }
}
document.getElementById("table").onclick= function(){
    document.getElementById("outputBox").innerHTML= ""

    let value= prompt("Enter the value!")
    let length= prompt("Enter the length of the table")
    var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    var isNumeric2 = !isNaN(parseFloat(length)) && isFinite(length);
    if (!isNumeric && !isNumeric2) {
        alert("Please enter numeric values.")
    }
    else{
        for(let i=1; i<=length; i++){
            document.getElementById("outputBox").innerHTML+= value +" * "+ i+ " = "+ value*i +"<br>"
        }
    }
}
document.getElementById("outputClear").onclick= function(){
    document.getElementById("outputBox").innerHTML= ""
}
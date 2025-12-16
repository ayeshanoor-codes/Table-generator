document.getElementById("generate").addEventListener("click" , () =>{
    let number = parseInt(document.getElementById("number").value);
    let limit = parseInt(document.getElementById("limit").value);
    let result = document.getElementById("result");

    result.innerHTML = "";

    if(isNaN(number) || isNaN(limit)){
        result.innerHTML = `<p style="color:red;">Please enter a valid number!</p>`
        return;
    }

    let html = "<table>";
    for(let i=1; i<=limit; i++){
        html+=`
        <tr>
        <td>${number} x ${i}</td>
        <td>=</td>
        <td>${number*i}</td>
        </tr>`
        
    }
    html+= "</table>";
    result.innerHTML = html;
})
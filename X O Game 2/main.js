let gridItems= document.getElementsByClassName("square")
let current_turn = "X"
let isGameFinished= false
let borderArray = [
    "0" , "1" , "2"
    ,"3" , "4" , "5"
    ,"6" , "7" , "8"


]
for(const item of gridItems)
{
    item.addEventListener("click" , function()
        {
            let value = item.getAttribute("value")
            let index = value -1
            if(borderArray[index] == "X" || borderArray[index]=="O")
            {
                return
            }

            if(isGameFinished)
            {
                return
            }
            
            let squareContent = document.querySelector (`.square[value="${value}"]`)
             squareContent.innerHTML=current_turn
             borderArray[index] = current_turn 
             console.log (borderArray)
             evaluateWinner()

             if(current_turn == "X")
             {
                current_turn = "O"

             }
             else
             {
                current_turn="X"
             }
             document.getElementById("instruction").textContent=`${current_turn} turn `

        })
        function evaluateWinner()
        {
            if(
            (borderArray[0]==borderArray[1] && borderArray[1]==borderArray[2]) ||
            (borderArray[3]==borderArray[4] && borderArray[4]==borderArray[5]) ||
            (borderArray[6]==borderArray[7] && borderArray[7]==borderArray[8]) ||

            (borderArray[0]==borderArray[3] && borderArray[3]==borderArray[6]) ||
            (borderArray[1]==borderArray[4] && borderArray[4]==borderArray[7]) ||
            (borderArray[2]==borderArray[5] && borderArray[5]==borderArray[8]) ||
                
            (borderArray[0]==borderArray[4] && borderArray[4]==borderArray[8]) ||
            (borderArray[2]==borderArray[4] && borderArray[4]==borderArray[6]) 

            )
            {
            var winner = current_turn == "O" ? "O" : "X"
            isGameFinished = true
            alertify.alert(`${winner} Won!`)
            isGameFinished = true
        }
        var isDraw=true
        for(square of borderArray)
        {
            if(square != "X" && square !="O")
            {
                isDraw=false
                
            }

        }
        if (isDraw)
        {
            isGameFinished=true
            alertify.alert("Draw!")

        }
        
}
}
document.getElementById("reset-btn").addEventListener("click" , function()
{
    reset()
})

function reset()
{
    for(item of gridItems)
    {
        let value = item.getAttribute("value")
        let squareContent = document.querySelector (`.square[value="${value}"]`)
        squareContent.innerHTML = ""
     borderArray = [
            "0" , "1" , "2"
            ,"3" , "4" , "5"
            ,"6" , "7" , "8"
        
        
        ]

    }
    isGameFinished = false
    current_turn="X"
    document.getElementById("instruction").innerText = `${current_turn} turn`


}


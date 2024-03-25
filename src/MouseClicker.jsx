export function MouseClicker () {
    function buttonOnClick(event) {
        console.log(event.target.name)
    }

    return (
    <div>    
        <button className="button" name = "one" onClick = {buttonOnClick}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFN1Tvo80rYwu-eXsDNNzsuPITOdtyRPlYIsIqKaIbw&s" width={100} height={100} />
        Click me 
        </button>
        
    </div>
    )
}


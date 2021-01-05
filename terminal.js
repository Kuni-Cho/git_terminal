
  
 
init()

function init(){
    // alert("HI")
    // getEnter()
    

    getEnter()
}

function getEnter(){
    alert("Enter!!")

    let text_area = document.getElementById("textArea") 
    
    text_input = text_area.value
    text_area.addEventListener('keypress',function(e){
        if(e.key == 'Enter'){
            writeInConsole(text_input)
        }
    });
}

function writeInConsole(input_txt){

    let console = document.getElementById("console")
    temp_html = `${input_txt}`
                
    console.append(temp_html)
}
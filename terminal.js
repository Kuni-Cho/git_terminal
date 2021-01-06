init()

function init() {
    getEnter()
}

function getEnter() {

    let text_area = document.getElementById("textArea")

    text_area.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            text_input = text_area.value
            writeInConsole(text_input)

            text_area.value = ""

        }
    });
}

function writeInConsole(input_txt) {

    let console = document.getElementById("console_print")
    // temp_html = `<div> ${input_txt} </div>`

    test = document.createElement('div')
    test.setAttribute("id","test")
    test.innerText = input_txt


    console.appendChild(test)
}
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
        }
    });
}

function writeInConsole(input_txt) {

    let console = document.getElementById("console")
    temp_html = `${input_txt}`

    console.append(temp_html)
}
init()

function init() {
    getEnter()
}

function getEnter() {

    let text_area = document.getElementById("textArea")

    text_area.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            text_input = text_area.value
            return_data = dataParse(text_input)
            writeInConsole(return_data)
            text_area.value = ""
        }
    });
}

function writeInConsole(data) {

    input_txt = data["msg"]
    class_name = data["class"]
    result = data["result"]

    if (result) {
        let console = document.getElementById("console_print")

        test = document.createElement('div')
        test.setAttribute("id", "test")
        test.innerText = input_txt

        console.appendChild(test)
    }
}

function dataParse(user_input) {
    console.log(user_input)
    if (user_input === "add") {
        return { 'class': "normal_white", "msg": user_input, 'result': true }

    } else if (user_input === "untracked") {
        return { 'class': "untracked_red", "msg": user_input, 'result': true }

    } else if (user_input === "staged") {
        return { 'class': "staged_green", "msg": user_input, 'result': true }
    } else {
        return { 'class': "failed", "msg": "failed", 'result': false }
    }
}
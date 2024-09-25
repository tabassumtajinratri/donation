function getInputvalueById(id){
    const addInputValued = document.getElementById(id).value
    const number = parseFloat(addInputValued)
    return number
 }

 function TextValue(id){
    const getTextValue = document.getElementById(id).innerText
    const textValue = parseFloat(getTextValue)
    return textValue

}



function showSectionById(id){
    document.getElementById('donate').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

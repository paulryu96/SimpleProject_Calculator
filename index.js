const inputData = document.getElementById('input')
const outputData = document.getElementById('output')

function send(data){
  inputData.value = inputData.value + data
}

function allclear(){
  inputData.value = ''
  outputData.value = ''
}

function checkSign(data){
  outputData.value = inputData.value + data
  inputData.value = ''
}

function calculate(){
  outputData.value =  outputData.value + inputData.value
  inputData.value = eval(outputData.value)
  outputData.value = ''
}
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calc_keys')

keys.addEventListener('click', e=>{
  if(e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action

    if(!action){
      console.log('number key!')
    }
    if(
      action === 'add' ||
      action === 'subtract'||
      action === 'multiply' ||
      action === 'divide'
    ){
      console.log('operator key!')
    }
  }

})

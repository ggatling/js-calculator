const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calc_keys')
const display = document.querySelector('calc_display')
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener('click', e=>{
  if(e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum =display.textContent

    if(!action){
      if(displayedNum === '0' || previousKeyType === 'operator'){
        display.textContent=keyContent
      }else{
        display.textContent=displayedNum + keyContent
      }
    }

    if(
      action === 'add' ||
      action === 'subtract'||
      action === 'multiply' ||
      action === 'divide'
    ){
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType ='operator'
      calculator.dataset.operator =displayedNum
      calculator.dataset.operator =action

    }

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if(action === 'decimal'){
      display.textContent = displayedNum + '.'
    }

    if (action === 'clear'){
      console.log('clear key')
    }

    if(action === 'calculate'){
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      const calculate = (n1, operater, n2) =>{
        let result =''

        if (operator === 'add'){
          result = n1+n2
        }else if (operator==='subtract'){
          result = n1-n2
        }else if (operater ==='multiply'){
          result = n1 * n2
        }else if (operator ==='divide'){
          result = n1 /n2
        }
        return result
      }

      display.textContent = calculate(firstValue, operator, secondValue)

    }
  }

})

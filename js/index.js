// Object Template
class Template {
  constructor(previous, current) {
    this.previous = previous
    this.current = current
  }

  displayNum(num) {
    this.current.textContent += num.textContent
  }

  displayOpt(opt) {
    this.current.textContent += ` ${opt.textContent} `
    if (this.current.textContent.includes(opt.textContent)) {
      this.previous.textContent = this.current.textContent
      this.current.textContent = ""
    }
  }

  deleteNum() {
    this.current.textContent = this.current.textContent.slice(0, -1)
  }

  showDecimal(deci) {
    this.current.textContent += deci.textContent
  }

  resetDisplay() {
    this.current.textContent = ""
    this.previous.textContent = ""
  }

  compute() {
    const prevNum = parseFloat(this.previous.textContent)
    const currNum = parseFloat(this.current.textContent)
    const sum = (prevNum + currNum).toString()
    const diff = (prevNum - currNum).toString()
    const prod = (prevNum * currNum).toString()
    const div = (prevNum / currNum).toString()

    if (this.previous.textContent.includes("+")) {
      this.current.textContent = sum
    } else if (this.previous.textContent.includes("-")) {
      this.current.textContent = diff
    } else if (this.previous.textContent.includes("x")) {
      this.current.textContent = prod
    } else if (this.previous.textContent.includes("/")) {
      this.current.textContent = div
    }

    this.previous.textContent = ""
  }
}

// Variables for EVENT use
const prevDisplay = document.querySelector(".prev-display")
const currDisplay = document.querySelector(".curr-display")
const numbers = document.querySelectorAll("[data-numbers]")
const operators = document.querySelectorAll("[data-operators]")
const decimal = document.querySelector("[data-decimal]")
const deleteBtn = document.querySelector("[data-delete]")
const resetBtn = document.querySelector("[data-reset]")
const equals = document.querySelector("[data-equals]")

// Object Declaration
const calculator = new Template(prevDisplay, currDisplay)

// Event Listeners
numbers.forEach((value) => {
  value.addEventListener("click", () => {
    calculator.displayNum(value)
  })
})

operators.forEach((value) => {
  value.addEventListener("click", () => {
    calculator.displayOpt(value)
  })
})

deleteBtn.addEventListener("click", () => {
  calculator.deleteNum()
})

decimal.addEventListener("click", () => {
  if (currDisplay.textContent.includes(".")) return
  calculator.showDecimal(decimal)
})

resetBtn.addEventListener("click", () => {
  calculator.resetDisplay()
})

equals.addEventListener("click", () => {
  calculator.compute()
})

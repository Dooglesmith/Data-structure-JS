class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }
  // Adicionar elemento ao topo da pilha
  push(element) {
    this.items[this.count] = element
    console.log(`${element} added to index ${this.count}`)
    this.count++
    return this.count - 1
  }

  //Retornar e remover último elemento da pilha
  // retornar undefined se a pilha estiver vazia
  pop() {
    if (this.count == 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    console.log(`${deleteItem} removed from stack`)
    return deleteItem
  }

  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`)
    return this.items[this.count - 1]
  }

  isEmpty() {
    console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty')
    return this.count == 0
  }

  //Método para verificar o tamanho da string
  size() {
    console.log(`${this.count} elements in stack`)
    return this.count
  }

  print() {
    let elementList = ''
    for (let i = 0; i < this.count; i++) {
      elementList += this.items[i] + ' '
    }
    return elementList
  }

  clear() {
    this.items = []
    this.count = 0
    console.log(`string cleared`)
  }
}

const stack = new Stack()

//stack.isEmpty()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)

stack.size()

console.log(stack.print())

stack.clear()
stack.isEmpty()
//stack.peek()

//stack.push(300)

//stack.pop()

//stack.isEmpty()

class Stack{
    constructor(...args){
        this.args = args || []
    }

    push(element){
        this.args.push(element)
    }

    pop(){
        return this.args.length ? this.args.pop() : null
    }

    peek(){
        return this.args.length ? this.args[this.args.length - 1] : null
    }

    swap(){
        if(this.args.length > 1){
            let end_array = this.args.splice(-2)
            this.args = [...this.args, ...end_array.reverse()]
        }
    }

    isEmpty(){
        return this.args.length < 1
    }

    get size(){
        return this.args.length
    }
}

module.exports = Stack
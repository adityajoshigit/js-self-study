let privateMembersStack;

class Stack {
    constructor(initValue = []) {
        if(!privateMembersStack) privateMembersStack = new WeakMap(); 
        privateMembersStack.set(this, {
            values: initValue || [],
            count: initValue ? initValue.length : 0,
            updateCount: () => {
                privateMembersStack.get(this).count = this.values ? this.values.length : 0;
            }
        });
    }

    get count() {
        return privateMembersStack.get(this).count;
    }


    get values() {
        return privateMembersStack.get(this).values;
    }

    peek() {
        return this.values.length > 0 
            ? this.values[this.values.length - 1]
            : undefined;
    }

    push(newValue) {
        this.values.push(newValue);
        privateMembersStack.get(this).updateCount();
    }

    pop() {
        let removedElems;
        if ((this.values.length > 0)) {
            removedElems = this.values.splice(this.values.length - 1, 1);
            privateMembersStack.get(this).updateCount();
        }
        return removedElems ? removedElems[0] : undefined;
    }
}

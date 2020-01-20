/* eslint-disable prefer-const */
function objFactory(...arguments) {
    const constructor = arguments.shift();
    //Object.setPrototypeOf(obj, contructor.prototype)
    let obj = Object.create(constructor.prototype);
    let instance = constructor.apply(obj, arguments);
    return typeof instance == 'object' ? instance || obj : obj;
}

function People(name, age) {
    this.name = name;
    this.age = age;
    this.color = 'yellow';
    //return null;
}

let one = objFactory(People, 'irving', 27);
console.log(one);

export { objFactory };

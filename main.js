function SuperMath() {

    this.check = function(obj, verification) {
        verification = (verification == undefined)
        ? confirm(`Do this action : ${obj.X} ${obj.znak} ${obj.Y} ?`)
        : verification;

        if (verification) {
            this.operation(obj.X, obj.Y, obj.znak)
        } else {
            this.check(this.input(obj), true)
        }
    }

    this.input = function (obj) {

        const validOperators = ['+', '-', '/', '*', '%'];

        obj.X = +prompt('First number');
        obj.Y = +prompt('Second number');
        do {
            obj.znak = prompt('Action X and Y, only : +, -, /, *, %');
        } while (!validOperators.includes(obj.znak));

        return obj;
    }
}

SuperMath.prototype.operation = function (x, y, znak) {
    switch (znak) {
        case '+':
            alert(x + y);
            break;
        case '-':
            alert(x - y);
            break;
        case '/':
            if (y == 0) {
                y = +prompt('You cannot divide by zero, enter a new second value :');
                alert(x / y);
            } else {
                alert(x / y);
            }
            break;
        case '*':
            alert(x * y);
            break;
        case '%':
            alert(x * (y / 100));
            break;
    }
}

const obj = {
    X: 12,
    Y: 3,
    znak: "/",
}

const p = new SuperMath();
p.check(obj);
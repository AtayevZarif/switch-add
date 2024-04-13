let number = +prompt("0dan 3gacha ixtiyoriy son yozing")
let answer;

let a = Math.ceil(Math.random() * 10)
let b = Math.ceil(Math.random() * 10)



switch (number) {
    case 0:
        answer = Math.sqrt(a * b)
        break;
    case 1:
        answer = Math.ceil(Math.random() * 10)
        break;
    case 2:
        console.log("Hello Mars");
        for (let i = 0; i < 101; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
        break
    case 3:
        let array = []
        for (let i = 1; i < 11; i++) {
            if (i % 2 == 1) {
                array.push(i)
            }
        }
        console.log(array);
        break;
    default:
        answer = "error"
        break;
}

console.log(answer);

const add = (numb1, numb2) => (numb1+numb2);
const subtract = (numb1, numb2) => (numb1-numb2);
const multiply = (numb1, numb2) => (numb1*numb2);
const divide = (numb1, numb2) => (numb1%numb2);
console.log(add(1,2));
let input={curr: ""};

numbers_div=document.querySelector(".numbers");
for (let i=0; i<9; i++){
    const numb_btn=document.createElement("button");
    numb_btn.textContent=i;
    numb_btn.addEventListener("click", function() {input.curr+=i});
    numbers_div.append(numb_btn)
}
const equal_btn=document.createElement("button");
equal_btn.textContent="="
equal_btn.addEventListener("click", function() {});
numbers_div.append(equal_btn)

const clear_btn=document.createElement("button");
clear_btn.textContent="C"
clear_btn.addEventListener("click", function() {input.curr=""});
numbers_div.append(clear_btn)


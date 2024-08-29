// Task 1 ============================================
document.getElementById("b-1").addEventListener("click", function () {
  const div1 = document.getElementById("div-1");
  div1.style.width = "200px";
  div1.style.height = "90px";
  div1.textContent = `Width: ${div1.style.width}, Height: ${div1.style.height}`;
});

// Task 2 ============================================
document.getElementById("b-2").addEventListener("click", function () {
  document.getElementById("div-2").classList.toggle("bg-orange");
});

// Task 3 ============================================
document.getElementById("b-3").addEventListener("click", function () {
  const hasClass = document
    .getElementById("div-2")
    .classList.contains("bg-orange");
  document.getElementById("out-3").textContent = hasClass;
});

// Task 4 ============================================
document.getElementById("b-4").addEventListener("click", function () {
  const out4Elements = document.querySelectorAll(".out-4");
  out4Elements.forEach((element) => {
    element.classList.add("bg-red");
  });
});

// Task 5 ============================================
document.querySelectorAll(".out-5").forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("bg-blue");
  });
});

// Task 6 ============================================
document.getElementById("btn-increment").addEventListener("click", function () {
  const input = document.getElementById("number");
  input.value = parseInt(input.value) + 1;
});

document.getElementById("btn-decrement").addEventListener("click", function () {
  const input = document.getElementById("number");
  input.value = parseInt(input.value) - 1;
});

// Task 7 ============================================
document.getElementById("btn-color").addEventListener("click", function () {
  const blockColor = document.getElementById("block-color");
  const newDiv = document.createElement("div");
  newDiv.className = "block-color__item";
  newDiv.style.backgroundColor = getRandomColor();
  newDiv.addEventListener("click", function () {
    newDiv.remove();
  });
  blockColor.appendChild(newDiv);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Task 8 ============================================
document.querySelectorAll(".color-palette__item").forEach(function (element) {
  element.addEventListener("click", function () {
    const color = element.getAttribute("data-color");
    document.querySelector(".text-color").style.color = color;
  });
});
// Task 1 ============================================
/*  
Після натискання на кнопку #b-1 функція присвоює блоку #div-1 
ширину 200px, висоту 90px і вивидить значення в блок.  
*/

// Task 2 ============================================
/*  
За натисканням на кнопку #b-2 функція t2, яка надає блоку #div-2 клас .bg-orange 
*/

// Task 3 ============================================
/*  
За натисканням #b-3 запускайте функцію, яка перевіряє наявність класу .bg-orange у блоку #div-2 (так, саме #div-2 ). Результат – true або false, виводьте у .out-3. 
*/

// Task 4 ============================================
/*  
За натискання кнопки #b-4 запускайте функцію, яка надає блокам .out-4 клас .bg-red. Зверніть увага, що даних блоків більше одного, отже потрібен цикл.
*/

// Task 5 ============================================
/*  
Ускладнимо попередні завдання. За допомогою циклу повісимо на блоки .out-5 подію клік. По кліку має виконуватися функція. Функція повинна робити toggle клас .bg-orange тому .out-5 на якому клікнули.
*/

// Task 6 ============================================
/*  
Створіть HTML-сторінку з можливістю введення числового значення через кнопки (більше, менше). Користувач не повинен мати можливість друкувати текст або цифри. Число змінюється лише при натисканні на кнопки. 
*/

// Task 7 ============================================
/*
  Створіть HTML-сторінку з кнопкою, натисканням на яку додаються кольорові блоки на сторінку (кольора рандомні). Блок має видалятися зі сторінки по кліку на сам блок. 
	*/

// Task 8 ============================================
/*
  Створіть HTML-сторінку з текстом і палітрою кольорів. Натискаючи на колір палітри, колір тексту має змінюватися на обраний. Для вказівки, якій клітинці відповідає той чи інший колір, можна скористатися атрибутом data-color у кожній клітинці, а потім, за допомогою JS,          отримувати необхідний колір із цього атрибуту. 
	*/

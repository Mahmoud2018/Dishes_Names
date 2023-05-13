// take random items for array and put them in anther array
function addRandomObjectFromArray(sourceArray, targetArray, Number) {
  // Get a random index from the source array
  const randomIndex = Math.floor(Math.random() * sourceArray.length / Number);

  // Get the random object from the source array
  const randomObject = sourceArray[randomIndex];

  // Add the random object to the target array
  targetArray.push(randomObject);


}

// Define an array of items to choose from
const meet = [
  "🥩لحمة بالصينية ",
  "🥩يبرق وكوسا  ",
  "🥩شاكرية ",
  "🥩فريكة ",
  "🥩شرحات ",
  "🥩مندي ",
  "🥩لحمة بعجين ",
  "🥩داود باشا ",
  "🥩تاكو ",
  "🥩سجق ",
  "🥩همبرغر ",
  "🥩كبسة باللحمة ",
  "🥩لحمة ستيك ",
  "🥩كبة ",
  "🥩ششبرك ",
  "🥩لزانيا "
];
const cheeckin = [
  "🍗شيش ",
  "🍗فهيتا ",
  "🍗كرسبي ",
  "🍗بطاطا وجاج ",
  "🍗مقلوبة ",
  "🍗مندي ",
  "🍗كبسة ",
  "🍗بطاطا عدما ",
  "🍗ملوخية ورق او ناعمة ",
  "🍗شيش بالفخار ",
  "🍗مسخن ",
  "🍗فوتوشيني ",
  "🍗شكن بتر ",
  "🍗شكن مسالا ",
  "🍗فطيرة الدجاج "

];
const corpohedrat = [
  "🍚مجدرة ",
  "🍚رز وبازيلا ",
  "🍚معكورنا بندورة",
  "🍚معكورنا بالباشاميل ",
  "🍚مكرونة بالجبنة ",
  "🍚ريغاتوني ",
  "🍚بطاطا وشوربة عدس ",
  "🍚كوسا خرط ",
  "🍚معجنات",
  "🍤راكور ورز ",
];

const vegan = [
  "🥗مقالي ",
  "🥗مطبقة باتنجان ",
  "🥗فول مقلى ",
  "🥗يخنت بطاطا ",
  "🥗ملفوف ",
  "🥗سبانخ ",
  "🥗خبيزة ",
  "🥗مفركة بطاطا ",
  "🥗فاصولية ببندورة ",
  "🥗فاصولية بزيت ",
  "🥗لوبية ",
  "🐠سمك اجاج مقلي ",
  "🥗ملوخية ورق ",
  "🥗ملوخية ناعمة ",
  "🥗محاشي كوسا ببندورة  ",
  "🐟لاكس وبطاطا ",
]


// Define an empty array to add randomly selected items to
const foverarray1 = [];
const foverarray2 = [];
const foverarray3 = [];
const foverarray4 = [];
let week = [
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
  "الأحد"
]


// Get references to the HTML elements
const cookinglista1 = document.getElementById("random-item1");
const cookinglista2 = document.getElementById("random-item2");
const cookinglista3 = document.getElementById("random-item3");
const cookinglista4 = document.getElementById("random-item4");

const fovertlista1 = document.getElementById("fovert-list1");
const fovertlista2 = document.getElementById("fovert-list2");
const fovertlista3 = document.getElementById("fovert-list3");
const fovertlista4 = document.getElementById("fovert-list4");

const addButton = document.getElementById("add-random-item");
const resetbutton = document.getElementById("reset");
const fovertbutton = document.getElementById("save-fovert");



//Get data from LocalStorage
function getDate() {

  let array = JSON.parse(localStorage.getItem('array'));

  fovertlista1.innerHTML = array;
  fovertlista1.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    var Cooknames = array[i];
    var Weeknames = week[i];
    var item = document.createElement("li");
    item.innerHTML = Weeknames + " : " + Cooknames
    fovertlista1.appendChild(item);
  }

}

getDate()


// Random item button
function randomchoos(array, Number, lista) {
  clearArray(array);

  addRandomObjectFromArray(meet, array, Number);
  addRandomObjectFromArray(vegan, array, Number);
  addRandomObjectFromArray(corpohedrat, array, Number);
  addRandomObjectFromArray(cheeckin, array, Number);
  addRandomObjectFromArray(vegan, array, Number);
  addRandomObjectFromArray(corpohedrat, array, Number);
  addRandomObjectFromArray(vegan, array, Number);

  lista.innerHTML = array;
  lista.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    var Cooknames = array[i];
    var Weeknames = week[i];
    var item = document.createElement("li");
    item.innerHTML = Weeknames + " : " + Cooknames
    lista.appendChild(item);
  }

}

//Save clear all lista item 
function reset(array1, lista1, lista2) {
  clearArray(array1);
  lista1.innerHTML = "";
  lista2.innerHTML = "";

}


//Save random item button
function savefovert(array, lista) {

  if(array.length == 0){

  }else {
  lista.innerHTML = array;
  lista.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    var Cooknames = array[i];
    var Weeknames = week[i];
    var item = document.createElement("li");
    item.innerHTML = Weeknames + " : " + Cooknames
    lista.appendChild(item);

    let arrayString = JSON.stringify(array);
    localStorage.setItem("array", arrayString);
    }
  }

}

//clear function
function clearArray(array) {
  array.length = 0;
  localStorage.clear();
}


// CopyArray function
function copyArray(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
  }
}


const elSliderGnr = document.querySelector(".slider__GnrCard");
const elSliderBox = document.querySelectorAll(".slider__GnrCard .slider__div");
const elLeft = document.querySelector("#left");
const elRight = document.querySelector("#right");
let idx = 0;

let elForm = document.querySelector(".form");
let elName = document.querySelector(".name-text");
let elSurname = document.querySelector(".surname-text");
let elCourseType = document.querySelector(".course-text");
let elPupilListAli = document.querySelector(".AliPupilList")
let formArr = [];
let FormArrList = [];

let elModalAliBtn = document.querySelector(".ModalAliButton");
let elModalAli = document.querySelector(".ModalAli");
let elModalAliCloseBtn = document.querySelector(".backModalBtnAli");
let elModalPupilAliBtn = document.querySelector(".ModalPupilAliBtn");
let elModalPupilAli = document.querySelector(".modalPupilAli");
let elModalPupilAliBtnBack = document.querySelector(".backModalPupilBtnAli");

let elModalVali = document.querySelector(".ValiModal");
let elModalValiBtn = document.querySelector(".ModalValiButton");
let elModalValiCloseBtn = document.querySelector(".backModalBtnVali");
let elModalPupilValiBtn = document.querySelector(".ModalPupilValiBtn");
let elModalPupilVali = document.querySelector(".modalPupilVali")
let elModalPupilValiBtnBack = document.querySelector(".backModalPupilBtnVali");

let elModalGaniBtn = document.querySelector(".ModalGaniButton");
let elModalGani = document.querySelector(".ModalGani");
let elModalGaniCloseBtn = document.querySelector(".backModalBtnGani");
let elModalPupilGaniBtn = document.querySelector(".ModalPupilGaniBtn");
let elModalPupilGani = document.querySelector(".modalPupilGani");
let elModalPupilGaniBtnBack = document.querySelector(".backModalPupilBtnGani");

function elChangeSlider(){
    if(idx > elSliderBox.length - 1){
        idx = 0
    }
    else if(idx < 0){
        idx = elSliderBox.length - 1
    }

    elSliderGnr.style.transform = `translateX(${-idx * 100}%)`
}

elRight.addEventListener("click", () => {
    idx++
    elChangeSlider()
});

elLeft.addEventListener("click", () => {
    idx--
    elChangeSlider()
});

elModalPupilGaniBtn.addEventListener("click", (e) => {
    elModalGani.classList.add("modalBlock")
})
elModalPupilGaniBtnBack.addEventListener("click", (e) => {
    elModalGani.classList.remove("modalBlock")
})
elModalAliBtn.addEventListener("click", (e) => {
    elModalAli.classList.add("modalBlock")
});

elModalAliCloseBtn.addEventListener("click", (e) => {
    elModalAli.classList.remove("modalBlock")
})

elModalPupilAliBtn.addEventListener("click", (e) => {
    elModalPupilAli.classList.add("modalBlock")
})

elModalPupilAliBtnBack.addEventListener("click", (e) => {
    elModalPupilAli.classList.remove("modalBlock")
})

elModalValiBtn.addEventListener("click", (e) => {
    elModalVali.classList.add("modalBlock")
})

elModalValiCloseBtn.addEventListener("click", (e) => {
    elModalVali.classList.remove("modalBlock")
})

elModalPupilValiBtn.addEventListener("click", (e) => {
    elModalPupilVali.classList.add("modalBlock")
})
elModalPupilValiBtnBack.addEventListener("click", (e) => {
    elModalPupilVali.classList.remove("modalBlock")
})

elModalGaniBtn.addEventListener("click", (e) => {
    elModalGani.classList.add("modalBlock");
})
elModalGaniCloseBtn.addEventListener("click", (e) => {
    elModalGani.classList.remove("modalBlock");
})
elModalPupilGaniBtn.addEventListener("click", (e) => {
    elModalPupilGani.classList.add("modalBlock")
})
elModalPupilGaniBtnBack.addEventListener("click", (e) => {
    elModalPupilGani.classList.remove("modalBlock")
})


elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formArr.push({
        Name: elName.value,
        Surname: elSurname.value,
        Course: elCourseType.value
    });

    elName.value = "";
    elSurname.value = "";
    elCourseType.value = "";
    
    FormArrList = formArr.map((item) => {
        return `<li class="card px-3 w-100 mb-3">
        <p class="fs-3 mt-2 d-flex align-items-center justify-content-between">${item.Surname} ${item.Name} <span class=" float-end bg-info badge">${item.Course}</span></p>
        </li>`
    });

    elPupilListAli.innerHTML = FormArrList.join("");
})

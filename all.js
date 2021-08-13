let educationData = [
    {
        date: "2021/01-2023/08",
        degree: "Diploma",
        institution: "Seneca College",
        program: "Computer Programming & Analysis"
    },
    {
        date: "2012/09-2016/06",
        degree: "Bachelor",
        institution: "Fu-Jen University ",
        program: "French Language & Culture"
    }
]

let citiesData = [
    {
        province: "Alberta",
        cities: [
            "Airdrie",
            "Beaumont",
            "Brooks",
            "Calgary",
            "Camrose",
        ],
    }, {
        province: "British Columbia",
        cities: [
            "Abbotsford",
            "Armstrong",
            "Burnaby",
            "Campbell River",
            "Castlegar",
        ]
    }, {
        province: "Manitoba",
        cities: [
            "Brandon",
            "Dauphin",
            "Flin Flon",
            "Morden",
            "Portage la Prairie",
        ]
    }, {
        province: "New Brunswick",
        cities: [
            "Bathurst",
            "Campbellton",
            "Dieppe",
            "Edmundston",
            "Fredericton",
        ]
    }, {
        province: "Newfoundland and Labrador",
        cities: [
            "Corner Brook",
            "Mount Pearl",
            "St. John's",
        ]
    }, {
        province: "Northwest Territories",
        cities: [
            "Yellowknife",
        ]
    }, {
        province: "Nunavut",
        cities: [
            "Iqaluit",
        ]
    }, {
        province: "Ontario",
        cities: [
            "Barrie",
            "Belleville",
            "Brampton",
            "Brant",
            "Toronto",
        ]
    }, {
        province: "Prince Edward Island",
        cities: [
            "Charlottetown",
            "Summerside",
        ]
    }, {
        province: "Quebec",
        cities: [
            "Acton Vale",
            "Alma",
            "Amos",
            "Amqui",
            "Baie-Comeau",
        ]
    }, {
        province: "Saskatchewan",
        cities: [
            "Estevan",
            "Flin Flon",
            "Humboldt",
            "Lloydminster",
            "Martensville",
        ]
    }, {
        province: "Yukon",
        cities: [
            "Whitehorse",
        ]
    }
]


// education insert
function educationDisplay() {

    let educationPanel = document.querySelector(".educationPanel");
    educationData.forEach(item => {
        // create parent div
        let divParent = document.createElement("div");
        // row justify-content-center align-items-center
        divParent.classList.add("row");
        divParent.classList.add("justify-content-center");
        divParent.classList.add("align-items-center");

        // create child div1
        let divChild1 = document.createElement("div");
        // col-lg-3 educationRow me-2
        divChild1.classList.add("col-4");
        divChild1.classList.add("col-lg-3");
        divChild1.classList.add("educationRow");
        divChild1.classList.add("me-2");

        // inside child div1
        let timeChild1 = document.createElement("time");
        let h2Child1 = document.createElement("h2");
        timeChild1.textContent = item.date;
        timeChild1.setAttribute("datetime", item.date);
        h2Child1.textContent = item.degree;
        divChild1.appendChild(timeChild1);
        divChild1.appendChild(h2Child1);


        // create child div2
        let divChild2 = document.createElement("div");
        // col-8 educationRow
        divChild2.classList.add("col-7");
        divChild2.classList.add("col-lg-8");
        divChild2.classList.add("educationRow");

        // inside child div2
        let h2Child2 = document.createElement("h2");
        let pChild2 = document.createElement("p");
        h2Child2.textContent = item.institution;
        pChild2.textContent = item.program;
        divChild2.appendChild(h2Child2);
        divChild2.appendChild(pChild2);


        divParent.appendChild(divChild1);
        divParent.appendChild(divChild2);
        
        educationPanel.appendChild(divParent);
    });
}


// sticky effect
function sticky() {
    let lWidth = window.innerWidth;
    let mePng = document.querySelector(".hero img");

    // img sticky
    if (lWidth >= 992) {
        mePng.style.position = "relative";
        window.onscroll = function () {
            if (window.pageYOffset >= 70 && window.pageYOffset <= 670) {
                let offset = window.pageYOffset - 70;
                mePng.style.top = `${offset}px`;
            } else if (window.pageYOffset > 670) {
                mePng.style.top = "600";
            }
        };
    }
}


// form
let form = document.querySelector("form");

// form hour rate
function hourRate() {
    
    let typeInput = document.querySelectorAll(".type input");
    let hourly = document.querySelector(".hourlyRate");
    let hourlyInput = document.querySelector(".hourlyRate input")

    typeInput.forEach(item => {
        item.addEventListener("click", () => {
            if (item.value === "hiring") {
                hourly.style.display = "block";
                hourlyInput.setAttribute("required", "");
            } else {
                hourly.style.display = "none";
                hourlyInput.removeAttribute("required");
            }
        })
    })
}

// form cities
let datalist = document.querySelector("datalist");
function filterData() {
        citiesData.forEach(item => {
            if (form.province.value === item.province) {
                item.cities.forEach(city => {
                    let option = document.createElement("option");
                    option.value = city;
                    datalist.appendChild(option);
                })
            }
        })
}
    
function removeData() {
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }
}

function formData() {
    filterData();
    form.province.onchange = () => {
        removeData();
        filterData();
    };
}

// textarea
function charCount() {
    let textarea = document.querySelector("textarea");
    let length = document.querySelector(".area small span");
    length.textContent = 250;
    textarea.oninput = () => {
        let count = textarea.value.length;
        length.textContent = 250 - count;
        if (count === 250) {
            swal({
                title: "No more character can be typed",
                icon: "warning",
                dangerMode: true,
            });
        }
    };
}


// form validation
function validation() {
    
    let btn = document.querySelector(".submitBtn");
    btn.addEventListener("click", (e) => {
        
        let postalCode = form.pCode.value;
        let postalRegex = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
        let email = form.emailAddress.value;
        let emailRegex = /\S+@\S+\.\S+/;
        let valid = false;

        if (form.fName.value === "" || form.emailAddress.value === "" ||
            form.birthday.value === "" || form.address.value === "" ||
            form.province.value === "" || form.city.value === "" ||
            form.pCode.value === "" || form.message.value === "") {
            swal({
                title: "Please fill in all the fields",
                icon: "warning",
                dangerMode: true,
            });
            return;
        } else {
            valid = true;
        }

        if (emailRegex.test(email)) {
            form["emailAddress"].setCustomValidity("");
            valid = true;
        } else {
            form.emailAddress.setCustomValidity("Please input a valid email format. e.g: example@mail.com");
            swal({
                title: "Please input a valid email format. e.g: example@mail.com",
                icon: "warning",
                dangerMode: true,
            });
            valid = false;
            return;
        }

        
        if (postalRegex.test(postalCode)) {
            form["pCode"].setCustomValidity("");
            valid = true;
        } else {
            console.log(123);
            form.pCode.setCustomValidity("Please input a valid Canadian postal code");
            swal({
                title: "Please input a valid Canadian postal code",
                icon: "warning",
                dangerMode: true,
            });
            valid = false;
            return;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
}

function formFunc() {
    formData();
    hourRate();
    charCount();
    validation();
}

function start() {
    educationDisplay();
    sticky();
    formFunc();
}

start();
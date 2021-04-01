let submitButton = document.querySelector("#submitButton");


submitButton.addEventListener("click", function (e) {

    let display_alert = document.getElementById('alert');
    function alert() {
        let display_alert = document.getElementById('alert');
        return display_alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert-msg">Some fields are missing.</div>';
    }

    let validationCardNumber = document.getElementById("validationCardNumber");
    if (validationCardNumber.value === "") {
        validationCardNumber.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }
    if (isNaN(validationCardNumber.value)) {
        e.preventDefault();
    }

    let validationCVCNumber = document.getElementById("validationCVCNumber");
    if (validationCVCNumber.value === "") {
        validationCVCNumber.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }
    if (isNaN(validationCVCNumber.value)) {
        validationCVCNumber.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    let validationAmount = document.getElementById("validationAmount");
    if (validationAmount.value === '' || isNaN(validationAmount.value)) {
        validationAmount.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    let validationFirstName = document.getElementById("validationFirstName");
    if (validationFirstName.value === '') {
        validationFirstName.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    let validationLastName = document.getElementById("validationLastName");
    if (validationLastName.value === '') {
        validationLastName.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    let validationCity = document.getElementById("validationCity");
    if (validationCity.value === '') {
        validationCity.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    let validationState = document.getElementById("validationState");
    if (validationState.value === '') {
        validationState.className = "form-control custom-select border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }

    if (isNaN(validationPostalCode.value)) {
        validationPostalCode.className = "form-control border border-danger alert alert-danger"
        alert()
        e.preventDefault();
    }
});

let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function (e) {
    document.getElementById("myForm").reset();
});
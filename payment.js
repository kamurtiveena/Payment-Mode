function getPaymentMode() {
    var checkBox = document.getElementById("totalCheck");
    // Get the output text
    var text = document.getElementById("paymentModes");

    var custom = document.getElementById("customMode");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
        custom.style.display = "none";
    } else {
        text.style.display = "none";
        custom.style.display = "block";
    }

}

function handleEdit() {
    var amount = document.getElementById("amount").value;
    var amountShow = document.getElementById("amountShow");
    var edit = document.getElementById("edit");

    var custom = document.getElementById("customCheck");
    var customMode = document.getElementById("customMode");

    edit.style.display = "block";
    custom.style.display = "none";
    customMode.style.display = "none";
    document.getElementById("amountShow").innerHTML = amount;
}


function edited() {
    var customMode = document.getElementById("customMode");
    customMode.style.display = "block";
}
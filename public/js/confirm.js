function external_link() {
    return 1 == confirm("This link will take you to an external website.") ? !0 : !1
}
var confirm_value = document.createElement("INPUT");
confirm_value.type = "hidden", confirm_value.name = "confirm_value";

function goHindi() {
    1 == confirm("This will open the official C-DAC Hindi website सीडैक.भारत.\n\n इससे आधिकारिक सी-डैक हिंदी वेबसाइट सी-डैक.भारत खुल जाएगी |") ? confirm_value.value = "Yes" : confirm_value.value = "No", document.forms[0].appendChild(confirm_value)
}

function goEnglish() {
    confirm("This will open the official C-DAC website cdac.in") ? confirm_value.value = "Yes" : confirm_value.value = "No", document.forms[0].appendChild(confirm_value)
}
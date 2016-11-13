
var item_no = 0;

function GetDynamicTextBox(value){
	item_no++;
	
    return '<input name = "DynamicTextBox_'+item_no +'" type="text" value = "' + value + '" />' +
            '<input type="button" value="Remove" onclick = "RemoveTextBox(this)" />'
}

function AddTextBox() {
    var div = document.createElement('DIV');
    div.innerHTML = GetDynamicTextBox("");
    document.getElementById("BillSection").appendChild(div);
}

function RemoveTextBox(div) {
    document.getElementById("TextBoxContainer").removeChild(div.parentNode);
}

window.onload = AddTextBox();
function createForm(){
    var newForm = document.getElementById('newForm');
    var form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    form.setAttribute('id', 'form');
    
    var nameLabel = document.createElement('label');
    nameLabel.innerHTML = "Name:";
    nameLabel.setAttribute('for', 'name');
    form.appendChild(nameLabel);

    var nameElement = document.createElement('input');
    nameElement.setAttribute('type', 'text');
    nameElement.setAttribute('name', 'name');
    nameElement.setAttribute('id', 'name');
    form.appendChild(nameElement);

    var nameBreak = document.createElement('br');
    form.appendChild(nameBreak);

    var emailLabel = document.createElement('label');
    emailLabel.innerHTML = "Email:"
    emailLabel.setAttribute('for', 'email');
    form.appendChild(emailLabel);

    var emailElement = document.createElement('input');
    emailElement.setAttribute('type', 'email');
    emailElement.setAttribute('name', 'email');
    emailElement.setAttribute('id', 'email');
    form.appendChild(emailElement);

    var emailBreak = document.createElement('br');
    form.appendChild(emailBreak);

    var phoneLabel = document.createElement('label');
    phoneLabel.innerHTML = "Phone Number:"
    phoneLabel.setAttribute('for', 'phoneNumber');
    form.appendChild(phoneLabel);

    var phoneElement = document.createElement('input');
    phoneElement.setAttribute('type', 'text');
    phoneElement.setAttribute('name', 'phoneNumber');
    phoneElement.setAttribute('id', 'phoneNumber');
    form.appendChild(phoneElement);

    var phoneBreak = document.createElement('br');
    form.appendChild(phoneBreak);

    var addressLabel = document.createElement('label');
    addressLabel.innerHTML = "Address:"
    addressLabel.setAttribute('for', 'Address');
    form.appendChild(addressLabel);

    var addressElement = document.createElement('textarea');
    addressElement.setAttribute('name', 'address');
    addressElement.setAttribute('id', 'address');
    form.appendChild(addressElement);

    var addressBreak = document.createElement('br');
    form.appendChild(addressBreak);

    var submit = document.createElement('button');
    submit.setAttribute('onclick', 'saveContact();');
    submit.innerHTML = "Save Contact";
    form.appendChild(submit);

    newForm.appendChild(form);
}
function addContact(){
    var newTable = document.getElementById('table');
    
    var table = document.createElement('table');
    var contactField = document.createElement('tr');
    var innerField = document.createElement('td');
    innerField.setAttribute('id', 'newForm');
    contactField.appendChild(innerField);
    var saveField = document.createElement('tr');
    saveField.setAttribute('id', 'save');
    var contactLabel = document.createElement('th');
    contactLabel.innerHTML = 'CONTACT FIELD';
    var saveLabel = document.createElement('th');
    saveLabel.innerHTML = 'SAVED DATA';

    table.appendChild(contactLabel);
    table.appendChild(contactField);
    table.appendChild(saveLabel);
    table.appendChild(saveField);
    newTable.appendChild(table);
    

    createForm();

    var add = document.getElementById('add');
    var click = document.getElementById('click');
   click.parentNode.removeChild(click);
}
function saveContact(){
    localStorage.contactName = document.getElementById('name').value;
    localStorage.emailAddress = document.getElementById('email').value;
    localStorage.phoneNumber = document.getElementById('phoneNumber').value;
    localStorage.contactAddress = document.getElementById('address').value;
        
    var save = document.getElementById('save');
    var savedData = document.createElement("tr");
    var datum = document.createElement('td');
    var datum1 = document.createElement('td');
    var datum2 = document.createElement('td');
    datum.innerHTML = localStorage.contactName; //+ localStorage.emailAddress + localStorage.phoneNumber + localStorage.contactAddress;
    datum1.innerHTML =  '<td><button onclick="editContact();">Edit</button></td>';
    datum2.innerHTML = ' <td><button onclick="deleteContact();">Delete</button></td>';
    savedData.appendChild(datum);
    savedData.appendChild(datum1);
    savedData.appendChild(datum2);
    save.appendChild(savedData);
    
    clearField();
    //deleteform();
}
function deleteform(){
    var child = document.getElementById('form');
    var parent = document.getElementById('newForm');
    
    parent.removeChild(child);
}

function editContact(){
    deleteform();
    deleteContact();
    var newForm = document.getElementById('newForm');
    var form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    form.setAttribute('id', 'form');
    
    var nameLabel = document.createElement('label');
    nameLabel.innerHTML = "Name:";
    nameLabel.setAttribute('for', 'name');
    form.appendChild(nameLabel);

    var nameElement = document.createElement('input');
    nameElement.setAttribute('type', 'text');
    nameElement.setAttribute('name', 'name');
    nameElement.setAttribute('id', 'name');
    form.appendChild(nameElement).value = localStorage.contactName;

    var nameBreak = document.createElement('br');
    form.appendChild(nameBreak);

    var emailLabel = document.createElement('label');
    emailLabel.innerHTML = "Email:"
    emailLabel.setAttribute('for', 'email');
    form.appendChild(emailLabel);

    var emailElement = document.createElement('input');
    emailElement.setAttribute('type', 'email');
    emailElement.setAttribute('name', 'email');
    emailElement.setAttribute('id', 'email');
    form.appendChild(emailElement).value = localStorage.emailAddress;

    var emailBreak = document.createElement('br');
    form.appendChild(emailBreak);

    var phoneLabel = document.createElement('label');
    phoneLabel.innerHTML = "Phone Number:"
    phoneLabel.setAttribute('for', 'phoneNumber');
    form.appendChild(phoneLabel);

    var phoneElement = document.createElement('input');
    phoneElement.setAttribute('type', 'text');
    phoneElement.setAttribute('name', 'phoneNumber');
    phoneElement.setAttribute('id', 'phoneNumber');
    form.appendChild(phoneElement).value = localStorage.phoneNumber;

    var phoneBreak = document.createElement('br');
    form.appendChild(phoneBreak);

    var addressLabel = document.createElement('label');
    addressLabel.innerHTML = "Address:"
    addressLabel.setAttribute('for', 'Address');
    form.appendChild(addressLabel);

    var addressElement = document.createElement('textarea');
    addressElement.setAttribute('name', 'address');
    addressElement.setAttribute('id', 'address');
    form.appendChild(addressElement).value = localStorage.contactAddress;

    var addressBreak = document.createElement('br');
    form.appendChild(addressBreak);

    var submit = document.createElement('button');
    submit.setAttribute('onclick', 'saveContact();');
    submit.innerHTML = "Save Contact";
    form.appendChild(submit);

    newForm.appendChild(form);

    
}
function deleteContact(){
    var par = document.getElementById('save');
    par.removeChild(par.childNodes[0]);
}
function clearField(){
   document.getElementById('name').value = "";
   document.getElementById('email').value = "";
   document.getElementById('phoneNumber').value = "";
   document.getElementById('address').value = "";
}
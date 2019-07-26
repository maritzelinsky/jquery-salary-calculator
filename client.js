console.log('js');

$(document).ready(readyNow);

function readyNow() {
    // event listener
    $('#submitButton').on('click', addEmployee);
    // delete listener
    $('#newEmployeeInput').on('click', '.deleteButton', removeEmployee);
}

function addEmployee() {
    $('#newEmployeeInput').append(
        `<tr><td>` +
            $('#firstNameInput').val() + `</td><td>` +
            $('#lastNameInput').val() + `</td><td>` +
            $('#idInput').val() + `</td><td>` +
            $('#titleInput').val() + `</td><td><span>$</span>` +
            $('#annualSalaryInput').val() +`</td><td>` +
            `<button class="deleteButton">Delete</button>` +
        `</td></tr>`);

        
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('')
}

function removeEmployee() {
    console.log('delete clicked!');
    $(this).parent().parent().remove();

}
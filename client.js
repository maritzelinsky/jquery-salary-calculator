console.log('js');

$(document).ready(readyNow);

// global variables
let totalMonthly = 0;
let totalAnnual = 0;

function readyNow() {
    // event listener
    $('#submitButton').on('click', addEmployee);

    // delete listener
    $('#tBody').on('click', '.deleteButton', removeEmployee);
    
    // append total monthly to DOM
    $('#totalMonthly').append(totalMonthly);
}


function addEmployee() {
    // define inputs
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    
    // append inputs
    $('#tBody').append(
        `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td >
            <td>${annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        <tr>`
    );

    // add input annualSalary to global totalAnnual
    totalAnnual += parseFloat($('#annualSalaryInput').val());

    // divide totalAnnual by 12
    totalMonthly = totalAnnual / 12;

    // append updated totalMonthly to DOM
    $('#totalMonthly').text(totalMonthly);
    // console.log('total monthly: ', totalMonthly);
    // console.log('add: ', totalAnnual); 

    // clear inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('')

    // if totalMonthly > $20,000, add red background color make totalMonthly
    if (totalMonthly > 20000) {
        $('#totalMonthly').parent().addClass("warning");
    }  
}

function removeEmployee() {
    // find annualSalary to be deleted 
    let deleteAnnualSalary = $(this).parents('tr').find('td:nth-child(5)').text();

    // subtract deleted employees annualSalary from totalAnnual
    totalAnnual -= parseFloat(deleteAnnualSalary);
    // console.log(deleteAnnualSalary);

    // divide totalAnnual by 12
    totalMonthly = totalAnnual / 12;

    // append updated totalMonthly to DOM
    $('#totalMonthly').text(totalMonthly);
    
    // remove table row from DOM
    $(this).parent().parent().remove();
}
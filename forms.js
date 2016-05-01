$(document).ready(function (){
var staff = [];
//Places info into object, adds object to array, &c.
$('#employeeinfo').on('submit', function (event) {
  event.preventDefault();

  var values = {};
  $.each($('#employeeinfo').serializeArray(), function(i, field) {
    values[field.name] = field.value;

  })

  $('#employeeinfo').find('input[type=text]').val('');

  staff.push(values);
  //Appends info to DOM
  appendDom(values);

  //Totals monthly payroll, appends to DOM
  appendSalary(totalSalaries(staff));

//Deletes entry
//$('.person').on('click', 'button', function () {
  //$('.person').empty('<p>');
});

});

function totalSalaries(array) {
  var totalSalary = 0;
  var monthlySalary = 0;
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
totalSalary += parseInt(array[i].employeesalary);
  monthlySalary = Math.round(totalSalary / 12);
  }
  return monthlySalary;
}

function appendSalary(monthlySalary) {

  $('#container').append('<div class="payroll"></div>');
    var $pr = $('#container').children().last();

    $pr.append('<p>Total Monthly Salary: ' + monthlySalary + '</p>');
}
function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>Name: ' + empInfo.employeefirstname + " " + empInfo.employeelastname + '</p>');
      $el.append('<p>Employee ID: ' + empInfo.employeeID + '</p>');
      $el.append('<p>Job Title: ' + empInfo.employeejobtitle + '</p>');
      $el.append('<p>Annual Salary: ' + empInfo.employeesalary + '</p>');

      //Create delete button
      $el.append('<button>Delete entry</button>');
    }


});

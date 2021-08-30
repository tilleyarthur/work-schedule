var schedule = {};
var saveButton = document.querySelector('#save-button');

var auditSchedule = function(scheduleEl) {
  var date = $(scheduleEl).find('span').text().trim();

  var time = moment(date, 'L').set('hour', 17);

  $(scheduleEl).removeClass('event-group-item-warning event-group-item-danger');

  if (moment().isAfter(time)) {
    $(scheduleEl).addClass('event-group-item-danger');
  }
};

var createSchedule = function(scheduleTextArea, scheduleTime) {
  
  var scheduleSection = $('<section>').addClass('row');

  var scheduleTextArea = $('<textarea>').addClass('event-group-item');

  var scheduleTime = $('<time>').addClass('set-event');

  scheduleSection.append(scheduleTextArea, scheduleTime);

  auditSchedule(scheduleSection);
};

var loadSchedule = function() {
  schedule = JSON.parse(localStorage.getItem('planner'));

  $.each(schedule, function {
    
    createSchedule(schedule.text, schedule.date);
    });
  }

s
    
var saveSchedule = function () {
  schedule = JSON.parse(localStorage.getItem('time-block'));

  if (!time-block) {
    timeBlock = {};
  }
ß
  $.each(timeBlock, function {
    
    
    arr.forEach(function (timeBlock) {
      createSchedule(timeBlock.text, timeBlock.date);
    });
  });
};

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  var scheduleTextArea = document.querySelector('#save-event').value;

  localStorage.setItem('save-event', schedule);

  loadSchedule();
})








//display current date (day, month, number)



//each block is color-coded to show past present or future

//click into a time block to enter event

//click save button text is saved

//refresh page text is still there






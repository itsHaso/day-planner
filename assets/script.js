//updates time 
$(function currentTime() {
    //variables used through the javascript
    var date = dayjs()
    var hour9AM = $('#9AM')
    var hour10AM = $('#10AM')
    var hour11AM = $('#11AM')
    var hour12PM = $('#12PM')
    var hour1PM = $('#1PM')
    var hour2PM = $('#2PM')
    var hour3PM = $('#3PM')
    var hour4PM = $('#4PM')
    var hour5PM = $('#5PM')
    var saveBtn = $(".save-image");
    var timeSlotElArray = [hour9AM, hour10AM, hour11AM, hour12PM, hour1PM, hour2PM, hour3PM, hour4PM, hour5PM]
    $("#currentDay").text(date.format("dddd, MMMM D YYYY h:mm:ss"))
  
  
    //renders local storage and displays onto the page
    renderTask();
    function renderTask() {
      for (var el of timeSlotElArray) {
        el.val(localStorage.getItem("time" + el.data("hour")))
      }
    }
  
  
  
    function timeChange() {
      var today = dayjs().hour();
      console.log(today)
      
      $('.time-block').each(function() {
        console.log($(this));
        var time = parseInt($(this).attr('id').split('-')[1]);
    
        if(time < today) {
          $(this).addClass('past')
        } else if (time === today) {
          $(this).removeClass('past future')
          $(this).addClass('present')
        } else {
          $(this).removeClass('past present')
          $(this).addClass('future')
        }
      })
    
    }
    
    timeChange()
    
    
    setInterval(function () {
      $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY h:mm:ss'));
    },1000)
    
    function submitFrom(event) {
      event.preventDefault();
    
      var clickBtn = $(event.currentTarget);
      var text = clickBtn.siblings('textarea')
      var time = text.data('hour')
    
      localStorage.setItem('time' + time, text.val())
    }
    
    saveBtn.on('click', submitFrom);
  
  });
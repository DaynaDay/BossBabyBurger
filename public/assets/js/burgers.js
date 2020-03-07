$('#burger-form').on('submit', function(event) {
  event.preventDefault();

  
  const burgerData = {
    burger_name: $('[name=burger-name]')
      .val()
      .trim()
  };

  $.ajax({
    url: '/api/burgers',
    method: 'POST',
    data: burgerData
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.devoured').on('click', function() {
  const burgerId = $(this).attr('data-burgerid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 1
    }
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.notDevoured').on('click', function() {
  const burgerId = $(this).attr('data-burgerid');


  $.ajax({
    url: `/api/burgerss/${burgerId}`,
    method: 'DELETE'
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

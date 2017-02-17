var event = require('search-eventbrite');
event.getCategory('103',
    function(err, res, category){
        if(err) return console.log('err: ', err)
        console.log('category: ', category)
     }
    );

event.getAll({
  'location.address':'San Francisco',
  'start_date.range_start':'2017-06-23T19:00:00',
  sort_by: 'date'
}, function(err, res, events){
    if(err) return console.log('err: ', err)
    
    events = JSON.parse(res.body).events;
    clean_res = events.map(function(event) {
        return {
            name: event.name.text,
            id: event.id,
            url: event.url,
            start: event.start.local,
            thumbnail: event.logo ? event.logo.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
        }
    })
    console.log('events: ', clean_res)

  });
  
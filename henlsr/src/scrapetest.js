var electron = require('electron')
var jQuery = require('jquery')
var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

var rooms = ['AA-112','AA-204','AA-205','AA-206','AA-207','AA-208','AA-209'] 
var open_rooms = {}

//Setting a function to run the headless browser
var find_rooms = function(day, week, time) {
    
    nightmare.goto('https://www.utsc.utoronto.ca/regoffice/timetable/room_schd.php')
        
        //Give time for request
        .wait(2000)

        //Required to use jQuery
        .inject('js', './node_modules/jquery/dist/jquery.min.js')

        //Selects the current week from the calendar
        .evaluate(function(w)
        {
            $("[name='radio_week']").val(w).selected = true
        }, week)

        //Selects the current day from the dropdown menu
        .evaluate(function(d)
        {
            $("#sel_day").val(d).selected = true
        }, day)

        //Displaying schedule for the passed day and week
        .click("[value='Display']")
        
        .evaluate(function(r, t, opr)
        {
            //Iterates through rooms to use each room as a selector for jQuery
            for(i = 0; i <= r.length; i++) 
            {
                
                //Selects each row of each table
                var schedule = $('#' + r[i] + '_shed').find("tr")
                
                // Iterates through each of the 
                schedule.each(function()
                {
                    //Selects the time row and compares it to the user submitted time
                    if ($(this, "td:nth child(1)").text() == t)
                    {
                        
                        //Selects the booking row and checks if the slot is free
                        if ($(this, "td:nth child(2)").attr('class') != 'booked') 
                        {
                                 
                        }
                    }

                })

            }
        }, rooms, time, open_rooms)

        //Remove after final product
        .wait(10000)
        
        .end()
}

find_rooms(4,1)
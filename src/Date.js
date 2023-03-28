import React from "react";
import './Date.css';

var date = () =>
{
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours()+':'+ showdate.getMinutes()

    return(
        <div className= "dt"> 
            
               Todays date: {dt} - {displaytime}
            
        </div>
    );
}

export default date;
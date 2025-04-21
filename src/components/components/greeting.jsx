export function Greeting(props) {

    //getting the current date
    let day = "Monday"
    let month = "January"
    const date = new Date();
    if(date.getDay() == 0){
        day = "Monday"
    }else if(date.getDay() == 1) {
        day = "Tuesday"
    }else if(date.getDay() == 2) {
        day = "Wednesday"
    }else if(date.getDay() == 3) {
        day = "Thursday"
    }else if(date.getDay() == 4) {
        day = "Friday"
    }else if(date.getDay() == 5) {
        day = "Saturday"
    }else if(date.getDay() == 6) {
        day = "Sunday"
    }

    if(date.getMonth() == 0){
        month = "January"
    }else if(date.getMonth() == 1) {
        month = "February"
    }else if(date.getMonth() == 2) {
        month = "March"
    }else if(date.getMonth() == 3) {
        month = "April"
    }else if(date.getMonth() == 4) {
        month = "May"
    }else if(date.getMonth() == 5) {
        month = "June"
    }else if(date.getMonth() == 6) {
        month = "July"
    }else if(date.getMonth() == 7) {
        month = "August"
    }else if(date.getMonth() == 8) {
        month = "September"
    }else if(date.getMonth() == 9) {
        month = "October"
    }else if(date.getMonth() == 10) {
        month = "November"
    }else if(date.getMonth() == 11) {
        month = "December"
    }
    let TodayDate = date.getDate();
    let greeting = "Hi!";

    const currentHour = date.getHours();

    if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening";
    } else {
    greeting = "Good Night";
    }
    return (
        <div>
            <div className="text-md">
                {day} , {TodayDate} {month}
            </div>
            <div className="text-2xl text-blue-700 font-bold">
                {greeting}, {props.name}!👋 
            </div>
        </div>
    )
}
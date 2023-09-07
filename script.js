document.addEventListener('DOMContentLoaded', function (){
    // get UTC Time
    function getCurrentTimeInUTC(){
        const todaysDate = new Date ()
        return todaysDate.toISOString().substr(11,8)
    }

    // get current day
    function getCurrentDay(){
        const todaysDate = new Date ()
        const dayIndex = todaysDate.getUTCDay()
        const daysOfTheWeek =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return  daysOfTheWeek[dayIndex]

    }

    // Make content dynamic
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentTimeInUTC()
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDay()
})
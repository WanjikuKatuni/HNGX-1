document.addEventListener('DOMContentLoaded', function (){
    // get UTC Time
    function getCurrentTimeInUTC(){
        const todaysDate = new Date ()
        return todaysDate.toISOString().substr(11,8)
    }

    // Make content dynamic
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentTimeInUTC()
})
//your JS code here. If required.
function updateDateTime() {
            var timerElement = document.getElementById("timer");
            var currentDate = new Date();
            var formattedDate = currentDate.toLocaleDateString();
            var formattedTime = currentDate.toLocaleTimeString();

            // Display the formatted date and time
            timerElement.textContent = formattedDate + ", " + formattedTime;
        }

        // Update the date and time every second
        setInterval(updateDateTime, 1000);

        // Initial call to display the date and time
        updateDateTime();
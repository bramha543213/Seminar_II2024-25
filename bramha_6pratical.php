<!DOCTYPE html>
<html>
<head>
    <title>Digital Clock</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            padding-top: 100px;
            background-color: #f0f0f0;
        }
        #clock {
            font-size: 60px;
            color: #333;
            background-color: #fff;
            display: inline-block;
            padding: 20px 40px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>

    <div id="clock">
        <?php
            // Set the default timezone (change as needed)
            date_default_timezone_set("Asia/Kolkata");

            // Get the current server time
            echo date("H:i:s");
        ?>
    </div>

    <script>
        // Refresh the clock every second to keep it updated
        setInterval(function() {
            // Reload just the #clock div using AJAX
            fetch(window.location.href)
                .then(response => response.text())
                .then(html => {
                    // Create a temporary DOM element to extract #clock
                    const temp = document.createElement('div');
                    temp.innerHTML = html;
                    const newClock = temp.querySelector('#clock').innerHTML;

                    // Update the clock content
                    document.getElementById('clock').innerHTML = newClock;
                });
        }, 1000);
    </script>

</body>
</html>

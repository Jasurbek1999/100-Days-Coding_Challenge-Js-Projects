let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let seconds = document.querySelector("#second");

let clock = setInterval(
        function time() {
            let now = new Date();
            let hr = now.getHours();
            let min = now.getMinutes();
            let sec = now.getSeconds();

            if(hr < 10 ){
                hr = "0" + hr;
            }
            if(min < 10 ){
                min = "0" + min;
            }
            if(sec < 10 ){
                sec = "0" + sec;
            }

            hour.textContent = hr;
            minute.textContent = min;
            seconds.textContent = sec;
    
    }, 1000
);
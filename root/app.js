class DigitalClock {
    constructor(element) {
        this.element = element;
        console.log("Clock is Online!")
    }

    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minutes.toString().padStart(2, "0")
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        this.element.querySelector(".time").textContent = timeFormatted
        this.element.querySelector(".week").textContent = daylist[parts.day - 1]
    }

    getTimeParts() {
        const now = new Date()
        return {
            hour:  now.getHours(),
            minutes: now.getMinutes(),
            day: now.getDay(),
            ampm: now.get
        }
    }
}

const clockElement = document.querySelector(".text")
const clockObject = new DigitalClock(clockElement);
const daylist = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

clockObject.start()

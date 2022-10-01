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
    }

    getTimeParts() {
        const now = new Date()
        return {
            hour:  now.getHours(),
            minutes: now.getMinutes(),
        }
    }
}

const clockElement = document.querySelector(".text")
const clockObject = new DigitalClock(clockElement);

clockObject.start()

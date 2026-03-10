export class TimeDate {
    constructor() {
        this._timeLabel = document.querySelector("#time-date #time-label");
        this._dateLabel = document.querySelector("#time-date #date-label");
        this.init();
    }
    updateTimeDate() {
        if (!this._dateLabel || !this._timeLabel)
            return;
        const date = window.theme_utils?.get_current_localized_date() ?? "";
        const time = window.theme_utils?.get_current_localized_time() ?? "";
        const now = new Date();

        const yyyy = now.getFullYear();
        const mm   = String(now.getMonth() + 1).padStart(2, '0');
        const dd   = String(now.getDate()).padStart(2, '0');
        const HH   = String(now.getHours()).padStart(2, '0');
        const MM   = String(now.getMinutes()).padStart(2, '0');

        this._dateLabel.innerText = `${yyyy}/${mm}/${dd}`;
        this._timeLabel.innerText = `${HH}:${MM}`;
        // this._dateLabel.innerText = date;
        // this._timeLabel.innerText = time;
    }
    setTimer() {
        this.updateTimeDate();
        setInterval(() => {
            this.updateTimeDate();
        }, 1000);
    }
    init() {
        this.setTimer();
    }
}
//# sourceMappingURL=timeDate.js.map

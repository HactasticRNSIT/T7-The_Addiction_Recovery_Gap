// Recovery model

class RecoveryModel {

    constructor(name, issue, hours) {

        this.name = name;
        this.issue = issue;
        this.hours = hours;

        // Addiction level logic
        this.addictionLevel =
            hours > 5 ? "High Addiction" : "Low Addiction";
    }

}

module.exports = RecoveryModel;

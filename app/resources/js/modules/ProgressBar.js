import { Event, Observable } from "../utils/Obervable.js";

/**
   * This function initializes every other init function
   * @param {ProgressBar} manager
   */
function init(manager) {

    initHTML(manager);
}

function initHTML(manager) {

    //  
    const template = document.querySelector('#progressBarTemplate');
    manager.clone = template.content.cloneNode(true);
    manager.ProgressBarElement = manager.clone.querySelector('#ProgressBar')

    //  Fill Template Information with data
    let ProgressBarClone = manager.ProgressBarElement.cloneNode(true);
    ProgressBarClone.querySelector('#_06text2').textContent = manager.percentage + "% unseres Ziels erreicht";
    ProgressBarClone.querySelector('#goal').textContent = manager.currentValue + " EUR gespendet";
    ProgressBarClone.querySelector('#goal-status').textContent = "Ziel: " + manager.goal + " EUR";

    //  Calculate the width based on the percentage
    var width = "width:" + (manager.currentValue / manager.goal) * 100 + "%";
    ProgressBarClone.querySelector('#progress').setAttribute("style", width);

    //  Give ProgressGroup the Template HTML
    document.getElementById("_06").append(ProgressBarClone);
}


/**
 * This is the class for the Navigaiton-Bar, which extends from Observable and controls all the Page click events
   */
class ProgressBar extends Observable {

    constructor(goal, currentValue) {
        super();

        this.goal = goal;
        this.currentValue = currentValue;
        this.percentage = (this.currentValue / this.goal) * 100;

        init(this);
    }
}

export default ProgressBar;
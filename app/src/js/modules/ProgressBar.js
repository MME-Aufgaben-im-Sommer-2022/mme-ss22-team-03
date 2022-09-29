import { Observable } from "../utils/Observable.js";
import FireBaseConnector from "../database/FireBaseConnector.js";

const hundred = 100;

/**
   * This function initializes every other init function
   * @param {ProgressBar} manager
   */
async function init(manager) {

    await initData(manager);
    initHTML(manager);
}

async function initData(manager) {
    try {
        let data = await FireBaseConnector.getData("data/pages/spenden/progress");
        manager.current = data.current;
        manager.aim = data.aim;
    } catch (error) {
        console.error(error);
    }
}

function initHTML(manager) {

    var width;

    const template = document.querySelector("#progressBarTemplate");
    manager.clone = template.content.cloneNode(true);
    manager.ProgressBarElement = manager.clone.querySelector("#ProgressBar");

    manager.percentage = (manager.current / manager.aim) * hundred;

    //  Fill Template Information with data
    let ProgressBarClone = manager.ProgressBarElement.cloneNode(true);
    ProgressBarClone.querySelector("#progressBarHeader").textContent = manager.percentage + "% unseres Ziels erreicht";
    ProgressBarClone.querySelector("#progressCurrentValue").textContent = manager.current + " EUR gespendet";
    ProgressBarClone.querySelector("#progressGoal").textContent = "Ziel: " + manager.aim + " EUR";

    //  Calculate the width based on the percentage
    width = "width:" + manager.percentage + "%";
    ProgressBarClone.querySelector("#progress").setAttribute("style", width);

    //  Give ProgressGroup the Template HTML
    document.getElementById("ProgressBarHolder").append(ProgressBarClone);
}

/**
 * This is the class for the Navigaiton-Bar, which extends from Observable and controls all the Page click events
   */
class ProgressBar extends Observable {

    constructor() {
        super();

        init(this);
    }
}

export default new ProgressBar();

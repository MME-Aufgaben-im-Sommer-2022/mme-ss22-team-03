import Observable from "../utils/Observable.js";

function InitHappening(happening) {

    const happeningElement01 = happening.clone.querySelector('.happeningElement01');
    const happeningElement02 = happening.clone.querySelector('.happeningElement02');

    let htmlClone;

    if (happening.index % 2 == 0) {
        htmlClone = happeningElement01.cloneNode(true)
        htmlClone.querySelector('.Image').src = happening.data.imageSrc;

    } else {
        htmlClone = happeningElement02.cloneNode(true)
        htmlClone.querySelector('.Image2').src = happening.data.imageSrc;
    }

    htmlClone.querySelector('.Header').textContent = happening.data.header;
    htmlClone.querySelector('.Subheader').textContent = happening.data.subheader;
    htmlClone.querySelector('.Content').textContent = happening.data.content;

    happening.htmlData = htmlClone;

    // Get All Buttons from created Template
    // happening.controls = {
    //     initRequestButton: document.getElementsByName('exampleID')[0],
    // }

    // Add EventListener to Buttons
    // happening.controls.initRequestButton.addEventListener("click", function (
    //     e) {
    //         manager.exampleFunction("value");
    //   });
}

class Happening extends Observable {
    constructor(type, data, index, htmlClone) {       //type: 0 = Event, 1 = Project // data = { .header, .time, .content, .image}

        super();
        this.type = type;
        this.data = data;
        this.index = index;
        this.clone = htmlClone;

        this.htmlData = null;

        InitHappening(this);
    }

    initRequest() {
        //TODO: Instantiate Request Popup -> 
        var Popup = new Happening_Request(this.data.header, this.data.subheader);

        // Add Request Popup to Happening HTML
    }
}

class Happening_Request {
    constructor(header, subheader) {

        this.header = header;
        this.subheader = subheader;

        console.log(this.header + " / " + this.subheader);
    }
}

export default Happening;
function InitHappening(happening) {
    // TODO: create Template from html template
    // var newHappening = document.getElementById("happeningItem");

    // Fill Template with Information -> happening.data.EXAMPLEDATA
    // newHappening.get("HeaderID") = happening.data.header;
    // newHappening.getAttribute("SubheaderID") = happening.data.subheader;

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

class Happening {
    constructor(type, data) {       //type: 0 = Event, 1 = Project // data = { .header, .time, .content, .image}

        this.type = type;
        this.data = data;

        InitHappening(this);
    }

    initRequest() {
        //TODO: Instantiate Request Popup -> 
        var Popup = new event_request(this.data.header, this.data.subheader);

        // Add Request Popup to Happening HTML
    }
}

class event_request {
    constructor(header, subheader) {

        this.header = header;
        this.subheader = subheader;

        console.log(this.header + " / " + this.subheader);
    }
}

export default Happening;
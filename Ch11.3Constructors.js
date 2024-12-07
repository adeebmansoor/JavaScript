class railwayForm{
    constructor(givenName, trainNo, address){
        console.log("CONSTRUCTOR CALLED... " + givenName + ", " + trainNo + ", " + address);
        this.name = givenName;
        this.trainNo = trainNo;
        this.address = address;
    };
    preview(){
        console.log("Hey! " + this.name + " your train no. is " + this.trainNo + " and your address is " + this.address)
    };
    submit(){
        console.log(this.name + " your form is submitted for train no. " + this.trainNo + " and your address is " + this.address);
    };
    cancel(){
        console.log(this.name + " your form is cancelled for train no. " + this.trainNo + " and your address is " + this.address);
        this.trainNo = 0;
    };
};

// Create & fill form for Adeeb Mansoor
let adeebForm = new railwayForm("Adeeb", 124662, "Bhopal MadhyaPradesh.");

adeebForm.preview();
adeebForm.submit();
adeebForm.cancel();
adeebForm.preview();
class railwayForm{
    submit(){
        console.log(this.name + " your form is submitted for train no. " + this.trainNo);
    };
    cancel(){
        console.log(this.name + " your form is cancelled for train no. " + this.trainNo);
    };
    fillInfo(givenName, trainNo){
        this.name = givenName;
        this.trainNo = trainNo;
    };
};

// Create a form for Adeeb Mansoor
let adeebForm = new railwayForm();
// Fill the form with Adeeb's details
adeebForm.fillInfo("Adeeb", 124662);

// Create a form for Rohan
let rohanForm1 = new railwayForm();
let rohanForm2 = new railwayForm();
// Fill the form with Rohan's details
rohanForm1.fillInfo("Rohan", 124662);
rohanForm2.fillInfo("Rohan", 546713);

adeebForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
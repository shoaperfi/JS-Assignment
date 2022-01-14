var myDetails = {
    firstName: "Shoa",
    middleName:"Zehra",
    lastName: "Ansari",
    designation: "Intern Consulting",
    contact:1234567890,
    address: {
        houseNo: 12,
        area: "BB colony ",
        cityName: "kamptee",
        pinCode: 441001,
        state:"Maharashtra",
        country: "India",
    }
};

document.getElementById("myDetails").innerHTML = "My name is " + " " +myDetails.firstName + " " + myDetails.middleName +
" " + myDetails.lastName + " . " + "I am " + myDetails.designation + " at Perficient." + "Address"+ 
myDetails.contact + " and I live at " + myDetails.address.houseNo + " , " +  myDetails.address.area +
" , " + myDetails.address.cityName + " , " + myDetails.address.pinCode +" , " +  myDetails.address.country +" ." + "Thankyou!!";
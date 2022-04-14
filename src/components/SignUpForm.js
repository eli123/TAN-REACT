import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import axios from 'axios';

const SignUpForm = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [language, setLanguage] = useState("eng");
    const [fullNameLabel, setFullNameLabel] = useState("Full Name");
    const [phoneLabel, setPhoneLabel] = useState("Phone Number");
    const [businessId, setBusinessId] = useState("");
    const [title, setTitle] = useState("Sign Up");
    const [buttonText, setButtonText] = useState("Submit");
    const [dialogMessage, setDialogMessage] = useState("Signed up successfully.");
    const [dialogErrorMessage, setDialogErrorMessage] = useState("Error while signing up, Please contact that business owner.");

    
    useEffect(() => {
        var queryParams = new URLSearchParams(window.location.search);
        let lang = queryParams.get("lang");
        setBusinessId(queryParams.get("businessId"));
        if(lang != null && lang.trim() != ""){
            setLanguage(lang);
        }
        initLabels();
      });

    const onSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://tan320200607105243.azurewebsites.net/CreateNewCustomer', {
            'businessId': businessId,
            'phoneNumber': phoneNumber,
            'fullName': fullName
          })
          .then((response) => {
              if(response != null && response.status == 200){
                  var msg = {dialogMessage}
                  alert(msg.dialogMessage);
              }
            console.log(response);
          })
          .catch((error) => {
              var msg = {dialogErrorMessage};
              alert(msg.dialogErrorMessage);
          });
    };

    const initLabels = () =>{
        switch(language){
            case "he":
                setFullNameLabel("שם מלא");
                setPhoneLabel("מס' טלפון");
                setTitle("רישום לקוח לעסק");
                setButtonText("הירשם");
                setDialogMessage("הרישום בוצע בהצלחה.");
                setDialogErrorMessage("התרחשה בעיה בעת הרישום, נא לפנות לבעל העסק.");
                break;
            case "ar":
                setFullNameLabel("الاسم الكامل");
                setPhoneLabel("رقم الجوال");
                setTitle("تسجيل الدخول");
                setButtonText("تسجيل");
                setDialogMessage("تم التسجيل بنجاح.");
                setDialogErrorMessage("هنالك مشكلة في التسجيل. يرجى الاتصال بصاحب المصلحه.");
                break;
            default:
                break;
        }
    }

    return(
        <div >
            <h1 style={{textAlign:'center', color:'#067f7a'}}>{title}</h1>
            <br/>
            <form onSubmit={onSubmit}>
                <TextField
                id="outlined-helperText"
                name="fullName"
                label={fullNameLabel}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
                <br/>
                <br/>
                <TextField
                id="outlined-helperText"
                name="phoneNumber"
                label={phoneLabel}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br/>
                <br/>
                
                <Box textAlign='center'>
                    <Button variant='contained' style={{backgroundColor:'#067f7a'}} type="submit">
                    {buttonText}
                    </Button>
                </Box>
 
                    <br/>
                <br/>
      </form>
        </div>
    )
}

export default SignUpForm;
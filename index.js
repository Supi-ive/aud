function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((((username === "auditor1" && password === "pass1") || (username==="auditor2" && password==="pass2")) || ((username === "auditor3" && password === "pass3") || (username==="auditor4" && password==="pass4"))) || (((username === "auditor5" && password === "pass5") || (username==="auditor6" && password==="pass6")) || ((username === "auditor7" && password === "pass7") || (username==="auditor8" && password==="pass8")))) {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function letadminlogin(){
    window.location.href="admin-login.html";
}

function validateAdmin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "adpass"){
        window.location.href="admin-home.html";
    }else{
        alert("Invalid username or password. Please try again.");
    }

}

function validateSignup() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if ((email === "newauditor@gmail.com" && username ==="auditor8")&&(password ==="pass8" && confirm_password ==="pass8")){
        window.location.href = "signup_success.html";
    } 
    else{
        alert("Invalid crendentials. Please try again.")
    }
}

function submitdata(){
    for (var i = 1; i <= 40; i++) {
        var remarks = document.getElementById("remarks" + i).value;
        var marks = document.getElementById("marks" + i).value;

        if (remarks.trim() === "" || marks.trim() === "") {
            alert("Both remarks and marks are required for row " + i);
            return;
        }
        if (marks < 0 || marks > 5) {
            alert("Marks must be between 0 and 5 for row " + i);
            return;
        }
    }
    alert("Form submitted successfully!");
    
    var table=document.getElementById("dataTable");
    
    var data1=document.getElementById('marks1').value;
    var data2=document.getElementById('remarks1').value;
    var data3=document.getElementById('actiondate1').value;

    localStorage.setItem('marks1',data1);
    localStorage.setItem('remarks1',data2);
    localStorage.setItem('actiondate1',data3);
    
    var data4=document.getElementById('marks2').value;
    var data5=document.getElementById('remarks2').value;
    var data6=document.getElementById('actiondate2').value;
    localStorage.setItem('marks2',data4);
    localStorage.setItem('remarks2',data5);
    localStorage.setItem('actiondate2',data6);

    var data7=document.getElementById('marks3').value;
    var data8=document.getElementById('remarks3').value;
    var data9=document.getElementById('actiondate3').value;
    localStorage.setItem('marks3',data7);
    localStorage.setItem('remarks3',data8);
    localStorage.setItem('actiondate3',data9);

    var data10=document.getElementById('marks4').value;
    var data11=document.getElementById('remarks4').value;
    var data12=document.getElementById('actiondate4').value;
    localStorage.setItem('marks4',data10);
    localStorage.setItem('remarks4',data11);
    localStorage.setItem('actiondate4',data12);

    var data13=document.getElementById('marks5').value;
    var data14=document.getElementById('remarks5').value;
    var data15=document.getElementById('actiondate5').value;
    localStorage.setItem('marks5',data13);
    localStorage.setItem('remarks5',data14);
    localStorage.setItem('actiondate5',data15);

    var data16=document.getElementById('marks6').value;
    var data17=document.getElementById('remarks6').value;
    var data18=document.getElementById('actiondate6').value;
    localStorage.setItem('marks6',data16);
    localStorage.setItem('remarks6',data17);
    localStorage.setItem('actiondate6',data18);

    var data19=document.getElementById('marks7').value;
    var data20=document.getElementById('remarks7').value;
    var data21=document.getElementById('actiondate7').value;
    localStorage.setItem('marks7',data19);
    localStorage.setItem('remarks7',data20);
    localStorage.setItem('actiondate7',data21);

    var data22=document.getElementById('marks8').value;
    var data23=document.getElementById('remarks8').value;
    var data24=document.getElementById('actiondate8').value;
    localStorage.setItem('marks8',data22);
    localStorage.setItem('remarks8',data23);
    localStorage.setItem('actiondate8',data24);

    var data25=document.getElementById('marks9').value;
    var data26=document.getElementById('remarks9').value;
    var data27=document.getElementById('actiondate9').value;
    localStorage.setItem('marks9',data25);
    localStorage.setItem('remarks9',data26);
    localStorage.setItem('actiondate9',data27);

    var data28=document.getElementById('marks10').value;
    var data29=document.getElementById('remarks10').value;
    var data30=document.getElementById('actiondate10').value;
    localStorage.setItem('marks10',data28);
    localStorage.setItem('remarks10',data29);
    localStorage.setItem('actiondate10',data30);

    var data31=document.getElementById('marks11').value;
    var data32=document.getElementById('remarks11').value;
    var data33=document.getElementById('actiondate11').value;
    localStorage.setItem('marks11',data31);
    localStorage.setItem('remarks11',data32);
    localStorage.setItem('actiondate11',data33);

    var data34=document.getElementById('marks12').value;
    var data35=document.getElementById('remarks12').value;
    var data36=document.getElementById('actiondate12').value;
    localStorage.setItem('marks12',data34);
    localStorage.setItem('remarks12',data35);
    localStorage.setItem('actiondate12',data36);

    var data37=document.getElementById('marks13').value;
    var data38=document.getElementById('remarks13').value;
    var data39=document.getElementById('actiondate13').value;
    localStorage.setItem('marks13',data37);
    localStorage.setItem('remarks13',data38);
    localStorage.setItem('actiondate13',data39);

    var data40=document.getElementById('marks14').value;
    var data41=document.getElementById('remarks14').value;
    var data42=document.getElementById('actiondate14').value;
    localStorage.setItem('marks14',data40);
    localStorage.setItem('remarks14',data41);
    localStorage.setItem('actiondate14',data42);

    var data43=document.getElementById('marks15').value;
    var data44=document.getElementById('remarks15').value;
    var data45=document.getElementById('actiondate15').value;
    localStorage.setItem('marks15',data43);
    localStorage.setItem('remarks15',data44);
    localStorage.setItem('actiondate15',data45);

    var data46=document.getElementById('marks16').value;
    var data47=document.getElementById('remarks16').value;
    var data48=document.getElementById('actiondate16').value;
    localStorage.setItem('marks16',data46);
    localStorage.setItem('remarks16',data47);
    localStorage.setItem('actiondate16',data48);

    var data49=document.getElementById('marks17').value;
    var data50=document.getElementById('remarks17').value;
    var data51=document.getElementById('actiondate17').value;
    localStorage.setItem('marks17',data49);
    localStorage.setItem('remarks17',data50);
    localStorage.setItem('actiondate17',data51);

    var data52=document.getElementById('marks18').value;
    var data53=document.getElementById('remarks18').value;
    var data54=document.getElementById('actiondate18').value;
    localStorage.setItem('marks18',data52);
    localStorage.setItem('remarks18',data53);
    localStorage.setItem('actiondate18',data54);

    var data55=document.getElementById('marks19').value;
    var data56=document.getElementById('remarks19').value;
    var data57=document.getElementById('actiondate19').value;
    localStorage.setItem('marks19',data55);
    localStorage.setItem('remarks19',data56);
    localStorage.setItem('actiondate19',data57);

    var data58=document.getElementById('marks20').value;
    var data59=document.getElementById('remarks20').value;
    var data60=document.getElementById('actiondate20').value;
    localStorage.setItem('marks20',data58);
    localStorage.setItem('remarks20',data59);
    localStorage.setItem('actiondate20',data60);

    var data61=document.getElementById('marks21').value;
    var data62=document.getElementById('remarks21').value;
    var data63=document.getElementById('actiondate21').value;
    localStorage.setItem('marks21',data61);
    localStorage.setItem('remarks21',data62);
    localStorage.setItem('actiondate21',data63);
    
    var data64=document.getElementById('marks22').value;
    var data65=document.getElementById('remarks22').value;
    var data66=document.getElementById('actiondate22').value;
    localStorage.setItem('marks22',data64);
    localStorage.setItem('remarks22',data65);
    localStorage.setItem('actiondate22',data66);

    var data67=document.getElementById('marks23').value;
    var data68=document.getElementById('remarks23').value;
    var data69=document.getElementById('actiondate23').value;
    localStorage.setItem('marks23',data67);
    localStorage.setItem('remarks23',data68);
    localStorage.setItem('actiondate23',data69);

    var data70=document.getElementById('marks24').value;
    var data71=document.getElementById('remarks24').value;
    var data72=document.getElementById('actiondate24').value;
    localStorage.setItem('marks24',data70);
    localStorage.setItem('remarks24',data71);
    localStorage.setItem('actiondate24',data72);

    var data73=document.getElementById('marks25').value;
    var data74=document.getElementById('remarks25').value;
    var data75=document.getElementById('actiondate25').value;
    localStorage.setItem('marks25',data73);
    localStorage.setItem('remarks25',data74);
    localStorage.setItem('actiondate25',data75);

    var data76=document.getElementById('marks26').value;
    var data77=document.getElementById('remarks26').value;
    var data78=document.getElementById('actiondate26').value;
    localStorage.setItem('marks26',data76);
    localStorage.setItem('remarks26',data77);
    localStorage.setItem('actiondate26',data78);

    var data79=document.getElementById('marks27').value;
    var data80=document.getElementById('remarks27').value;
    var data81=document.getElementById('actiondate27').value;
    localStorage.setItem('marks27',data79);
    localStorage.setItem('remarks27',data80);
    localStorage.setItem('actiondate27',data81);

    var data82=document.getElementById('marks28').value;
    var data83=document.getElementById('remarks28').value;
    var data84=document.getElementById('actiondate28').value;
    localStorage.setItem('marks28',data82);
    localStorage.setItem('remarks28',data83);
    localStorage.setItem('actiondate28',data84);

    var data85=document.getElementById('marks29').value;
    var data86=document.getElementById('remarks29').value;
    var data87=document.getElementById('actiondate29').value;
    localStorage.setItem('marks29',data85);
    localStorage.setItem('remarks29',data86);
    localStorage.setItem('actiondate29',data87);

    var data88=document.getElementById('marks30').value;
    var data89=document.getElementById('remarks30').value;
    var data90=document.getElementById('actiondate30').value;
    localStorage.setItem('marks30',data88);
    localStorage.setItem('remarks30',data89);
    localStorage.setItem('actiondate30',data90);

    var data91=document.getElementById('marks31').value;
    var data92=document.getElementById('remarks31').value;
    var data93=document.getElementById('actiondate31').value;
    localStorage.setItem('marks31',data91);
    localStorage.setItem('remarks31',data92);
    localStorage.setItem('actiondate31',data93);

    var data94=document.getElementById('marks32').value;
    var data95=document.getElementById('remarks32').value;
    var data96=document.getElementById('actiondate32').value;
    localStorage.setItem('marks32',data94);
    localStorage.setItem('remarks32',data95);
    localStorage.setItem('actiondate32',data96);

    var data97=document.getElementById('marks33').value;
    var data98=document.getElementById('remarks33').value;
    var data99=document.getElementById('actiondate33').value;
    localStorage.setItem('marks33',data97);
    localStorage.setItem('remarks33',data98);
    localStorage.setItem('actiondate33',data99);

    var data100=document.getElementById('marks34').value;
    var data101=document.getElementById('remarks34').value;
    var data102=document.getElementById('actiondate34').value;
    localStorage.setItem('marks34',data100);
    localStorage.setItem('remarks34',data101);
    localStorage.setItem('actiondate34',data102);

    var data103=document.getElementById('marks35').value;
    var data104=document.getElementById('remarks35').value;
    var data105=document.getElementById('actiondate35').value;
    localStorage.setItem('marks35',data103);
    localStorage.setItem('remarks35',data104);
    localStorage.setItem('actiondate35',data105);

    var data106=document.getElementById('marks36').value;
    var data107=document.getElementById('remarks36').value;
    var data108=document.getElementById('actiondate36').value;
    localStorage.setItem('marks36',data106);
    localStorage.setItem('remarks36',data107);
    localStorage.setItem('actiondate36',data108);

    var data109=document.getElementById('marks37').value;
    var data110=document.getElementById('remarks37').value;
    var data111=document.getElementById('actiondate37').value;
    localStorage.setItem('marks37',data109);
    localStorage.setItem('remarks37',data110);
    localStorage.setItem('actiondate37',data111);

    var data112=document.getElementById('marks38').value;
    var data113=document.getElementById('remarks38').value;
    var data114=document.getElementById('actiondate38').value;
    localStorage.setItem('marks38',data112);
    localStorage.setItem('remarks38',data113);
    localStorage.setItem('actiondate38',data114);

    var data115=document.getElementById('marks39').value;
    var data116=document.getElementById('remarks39').value;
    var data117=document.getElementById('actiondate39').value;
    localStorage.setItem('marks39',data115);
    localStorage.setItem('remarks39',data116);
    localStorage.setItem('actiondate39',data117);

    var data118=document.getElementById('marks40').value;
    var data119=document.getElementById('remarks40').value;
    var data120=document.getElementById('actiondate40').value;
    localStorage.setItem('marks40',data118);
    localStorage.setItem('remarks40',data119);
    localStorage.setItem('actiondate40',data120);

    window.location.href="self_submit.html";
}

function upsubmit(){
    window.location.href="update.html";
    
}


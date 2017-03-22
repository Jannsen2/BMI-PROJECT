function GetBMI(){var BMI=0;var BMIresult="";var height=document.getElementById('BMI-height').value;var unitH1=document.getElementById('BMI-Unit-cm').checked;var unitH2=document.getElementById('BMI-Unit-in').checked;var weight=document.getElementById('BMI-weight').value;var unitW1=document.getElementById('BMI-kg').checked;var unitW2=document.getElementById('BMI-lbs').checked;var gendr1=document.getElementById('BMI-male').checked;var gendr2=document.getElementById('BMI-female').checked;var age=document.getElementById('slider-12').value;if(unitH1==true&&unitW1==true){BMI=((weight/(height*height))*10000);}
else if(unitH2==true&&unitW2==true){BMI=((weight/(height*height))*703);}
else if(unitH1==true&&unitW2==true){weight=weight*0.45;BMI=((weight/(height*height))*10000);}
else{weight=weight*2.2;BMI=((weight/(height*height))*703);}
if(gendr1==true&&gendr2==false){if(age>=7&&age<=10){if(BMI<13.7){BMIresult="Underweight";}
else if(BMI>=13.7&&BMI<=17.4){BMIresult="Healthy Weight";}
else if(BMI>17.4&&BMI<=19.4){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>10&&age<=14){if(BMI<16){BMIresult="Underweight";}
else if(BMI>=16&&BMI<=22.6){BMIresult="Healthy Weight";}
else if(BMI>22.6&&BMI<=24){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>14&&age<=17){if(BMI<17.7){BMIresult="Underweight";}
else if(BMI>=17.7&&BMI<=21){BMIresult="Healthy Weight";}
else if(BMI>21&&BMI<=26){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>=18){if(BMI<20){BMIresult="Underweight";}
else if(BMI>=20&&BMI<=25){BMIresult="Healthy Weight";}
else if(BMI>25&&BMI<=30){BMIresult="OverWeight";}
else{BMIresult="Obese";}}}
if(gendr2==true&&gendr1==false){if(age>=7&&age<=10){if(BMI<13.7){BMIresult="Underweight";}
else if(BMI>=13.7&&BMI<=17.4){BMIresult="Healthy Weight";}
else if(BMI>17.4&&BMI<=19.4){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>10&&age<=14){if(BMI<=14){BMIresult="Underweight";}
else if(BMI>=14&&BMI<=20.6){BMIresult="Healthy Weight";}
else if(BMI>20.6&&BMI<=22){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>14&&age<=17){if(BMI<16.7){BMIresult="Underweight";}
else if(BMI>=16.7&&BMI<=20){BMIresult="Healthy Weight";}
else if(BMI>20&&BMI<=27){BMIresult="OverWeight";}
else{BMIresult="Obese";}}
else if(age>=18){if(BMI<17){BMIresult="Underweight";}
else if(BMI>=17&&BMI<=22){BMIresult="Healthy Weight";}
else if(BMI>22&&BMI<=27){BMIresult="OverWeight";}
else{BMIresult="Obese";}}}
var R=BMI.toFixed(2);document.getElementById('BMI-Result1').innerHTML=R;document.getElementById('BMI-Result2').innerHTML=BMIresult;}
function GetBWS(){var BWS;var height=document.getElementById('BWS-height').value;var unitH1=document.getElementById('BWS-Unit-cm').checked;var unitH2=document.getElementById('BWS-Unit-in').checked;var gendr1=document.getElementById('BWS-male').checked;var gendr2=document.getElementById('BWS-female').checked;var Physq1=document.getElementById('BWS-skinny').checked;var Physq2=document.getElementById('BWS-normal').checked;var Physq3=document.getElementById('BWS-fat').checked;if(unitH2==true&&unitH1==false){height=height*2.54;}
if(gendr1==true&&gendr2==false){if(Physq1==true){BWS=((height-100)-((height-150)/4));}
else if(Physq2==true){BWS=((height-100)-((height-150)/4)+8);}
else{BWS=((height-100)-((height-150)/4)+16);}}
else if(gendr1==false&&gendr2==true){if(Physq1==true){BWS=((height-100)-((height-150)/2));}
else if(Physq2==true){BWS=((height-100)-((height-150)/2)+4);}
else{BWS=((height-100)-((height-150)/2)+8);}}
var R=BWS.toFixed(0);var S=BWS+4;var M=S.toFixed(0);document.getElementById('result1').innerHTML=R+" KG";document.getElementById('result2').innerHTML=(R*2.2).toFixed(0)+" BL";document.getElementById('w-r-kg1').innerHTML=R;document.getElementById('w-r-lb1').innerHTML=(R*2.2).toFixed(0);document.getElementById('w-r-kg2').innerHTML=(R-4)+" - "+M;document.getElementById('w-r-lb2').innerHTML=((R*2.2)-10).toFixed(0)+" - "+((R*2.2)+10).toFixed(0);}
function GetWHR(){var WHR=0;var WHRresult="";var height=document.getElementById('WHR-height').value;var unitH1=document.getElementById('WHR-Unit-cm').checked;var unitH2=document.getElementById('WHR-Unit-in').checked;var waist=document.getElementById('WHR-waist').value;var unitW1=document.getElementById('WHR-CM').checked;var unitW2=document.getElementById('WHR-INC').checked;var gendr1=document.getElementById('WHR-male').checked;var gendr2=document.getElementById('WHR-female').checked;if(unitH2==true){if(unitW2==true){height=height*2.54;waist=waist*2.54;}
else{height=height*2.54;}}
else{if(unitW2==true){waist=waist*2.54;}
else{height=height;waist=waist;}}
WHR=(waist/height);if(gendr1==true){if(WHR<0.43){WHRresult="Underweight";}
else if(WHR>=0.43&&WHR<=0.53){WHRresult="Healthy Weight";}
else if(WHR>=0.53&&WHR<=0.58){WHRresult="Overweight";}
else if(WHR>=0.58&&WHR<=0.63){WHRresult="Obese";}
else{WHRresult="Morbidly Obese";}}
else{if(WHR<0.42){WHRresult="Underweight";}
else if(WHR>=0.42&&WHR<=0.49){WHRresult="Healthy Weight";}
else if(WHR>=0.49&&WHR<=0.54){WHRresult="Overweight";}
else if(WHR>=0.54&&WHR<=0.58){WHRresult="Obese";}
else{WHRresult="Morbidly Obese";}}
var F=WHR.toFixed(2);document.getElementById('WHR1').innerHTML=F+"%";document.getElementById('WHR2').innerHTML=WHRresult;}
function GetBMR(){var BMR=0;var KAL=0;var height=document.getElementById('BMR-height').value;var unitH1=document.getElementById('BMR-Unit-cm').checked;var unitH2=document.getElementById('BMR-Unit-in').checked;var weight=document.getElementById('BMR-weight').value;var unitW1=document.getElementById('BMR-kg').checked;var unitW2=document.getElementById('BMR-lbs').checked;var gendr1=document.getElementById('BMR-male').checked;var gendr2=document.getElementById('BMR-female').checked;var age=document.getElementById('slider-BMR').value;var activ=document.getElementById('Select-Activity').value;if(gendr1==true){BMR=66+(13.7*weight)+(5*height)-(6.8*age);}
else{BMR=655+(9.6*weight)+(1.8*height)-(4.7*age);}
if(activ=="standard"){KAL=BMR*1.2;}
else if(activ=="rush"){KAL=BMR*1.5;}
else{KAL=BMR*1.8;}
var K=KAL.toFixed(0);document.getElementById('BMR-Result').innerHTML=K+"<small>"+" Kcal"+"</small>";}
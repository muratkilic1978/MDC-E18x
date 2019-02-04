    /* Write out to the console */
    //console.log("Murat Kilic");
    /* Shows a alert-box with a text */
    //alert("This is an alert box!!!");
    
    /* Writing out to the web document */
    //document.write("This text was printet on the document!!!");
    
    /* string datatype in JS*/
    //var firstname = 'Murat';
    /* this camel notation-form eg. secondFirstName (first word is small second words first letter i Capitol letter and third words first letter is also capitol letter) */
    //var secondFirstName="Malou";
    
    //var firstname='James';
    
    /* JS is case-sentative meaning that capitol and small letters matters */
    
    /* Number datatype in JS */
    //var age=40;
    
    /* JS automatically converts the age datatype into a string */
    //console.log(firstname + ' is a ' + age + ' year old.');
    
    /* Boolean datatype in JS */
    //var isPensioner = false;
    //console.log("Can he/she go to pension? " + isPensioner);
    
    /* Print multiple variables out to console */
    //console.log(age,firstname,secondFirstName);
    
    /* Print single variable out to console */
    //console.log(secondFirstName);
    //console.log(firstname);
    
    /* Prints a sentence to the Alert window and concats different variables */
    //alert(age + " " + firstname + " " + secondFirstName);
    

    /* calculating the birth of year by subtracting birthyear minus currentyear */
    var currentYear, yearMurat, yearGertie, ageMurat, ageGertie;
    var nameGertie, nameMurat;
    
    nameGertie = "Gertie";
    nameMurat = "Murat";
    currentYear = 2019;
    yearMurat = 1978;
    yearGertie = 1964;
    ageMurat = currentYear - yearMurat;
    GertieIsOlderThanMurat = true;
    
    //console.log(nameMurat + " is " +ageMurat+ " years old.");*/
    
    /* 2 course day */
    /* Finds types of datatype and print it to the console*/
    console.log(typeof(yearMurat));
    console.log(typeof(nameGertie));
    console.log(typeof(GertieIsOlderThanMurat));

    
    /*    ***************************
    *  if, else statement
    *  
    */

    
    var firstName, civilStatus, isMarried;
    firstName = 'Murat';
    civilStatus = 'married';
    if (civilStatus === 'married') {
        console.log(firstName + ' is married');
    } else {
        console.log(firstName + ' is single');
    }

    isMarried = false;
    if (isMarried) {
        console.log(firstName + ' is married');

    } else {
        console.log(firstName + ' is single');
    }

    /***************************
    *  Boolean logic
    *  
    */

    var firstName, age;
    firstName = 'Murat';
    age = 12;
    if (age < 13 ) {
        console.log(firstName + ' is a boy.');
    } else if ( age >= 13 && age < 18) {
        console.log(firstName + ' is a teenager.');
    } else if ( age >= 18 && age < 67 ) {
        console.log(firstName + ' is a adult.');   
    } else {
        console.log(firstName + ' is a pensioner.');  
    }

    // Alternative to a switch statement - if else statement
    age = 62;
    switch(true) {
        case age < 13:
            console.log(firstName + ' is a boy.');
            break;
        case age >= 13 && age < 18:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 18 && age < 67:
            console.log(firstName + ' is a adult.');
            break;
        default: 
            console.log(firstName + ' is a pensioner.'); 
        } 

    /***************************
    *  JS Functions
    *  
    */

    function calculateAge(birthYear) {
        return 2018 - birthYear;
    }
    var ageJohn = calculateAge(1933);
    var ageMike = calculateAge(1948);
    var ageMary = calculateAge(1964);
    var ageLarry = calculateAge(1918);
    console.log(ageJohn, ageMike, ageLarry, ageMary);
    function yearsUntilRetirement(year, firstName) {
        var age = calculateAge(year);
        var retirement = (68 - age);

        if (retirement > 0 ) {
         console.log(firstName + ' retires in ' + retirement + ' years.')
        } else {
         console.log(firstName + ' is already retired.');
        }  
    }

    yearsUntilRetirement(1978, "Murat");
    yearsUntilRetirement(1969, "Hamdi");
    yearsUntilRetirement(1949, "Gertie");
    yearsUntilRetirement(1924, "Yvonne");
    */

    /***************************
    *  JS Functions Statements and expressions
    *  
    */
    

    function sayHello() 
    {
        alert("Hello World!");
    }

    sayHello();

    
    function sayHello(name)
    {
        alert('Hello ' + name);
    }
    
    sayHello("Lars");

    function plusTwoNumbers(a, b)
    {
        return  (a + b);
    }

    function minusTwoNumbers(a, b)
    {
        return (a - b);
    }

    function minusNumbers(a, b)
    {
        var result = 0;
        result = (a - b);
        return result;
    }
    
    function FindHighestValue(val1, val2){ 
        if (val1 > val2) 
        {
            console.log(val1 + ' is bigger than ' + val2);
        } else if (val2 > val1) 
        {   
            console.log(val2 + ' is bigger than ' + val1);
        } else 
        {   
            console.log(val1 + ' is equal to ' + val2);
        }
    }

   
    // Functions expression
    var whatDoYouWorkWith = function (job, firstName) {
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kid how to code';
            case 'driver':
                return firstName + ' drives a can in Lissbon';    
            case 'designer':
                return firstName + ' designs beatifuk Websites';
            default:
                return firstName + ' does something else';
        }
    }
    console.log(whatDoYouWorkWith('teacher', 'John'));
    console.log(whatDoYouWorkWith('laywer', 'Melissa'));
    

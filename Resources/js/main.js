
    //skill descriptions, will pop up when the list item is clicked(can be done with if statements, but there has to be a better way)
    bartend = "Bartending taught time management, interpersonal communication, and how to make a good drink.";
    java = "Learned Java fundamentals, servlets, object oriented programming, fileI/O, and JDBC connections.";
    msOffice = "Earned an MS Office certification in high school on word, powerpoint, and excel. have worked with excel spreadsheets since with bar inventory management";
    labor = "labor taught hard work and time management. worked construction under a few people at different companies.";
    database = "Worked with SqlLite and MySQL in school, and MariaDB on personal projects. learned a lot about database management and became very interested in databases in class.";
    myHtml = "Learned HTML, CSS, some javascript in school. have worked on some website building since school for personal projects.";
    python = "spent time outside of school using python for personal projects. have used pygame to make space invaders, worked with files in python, and other small projects.";


    //alert(test);

    $( "li" ).on('click', function(){
        $( this ).fadeTo('slow', 0.5)
        if(this.className == 'bartend') {
            alert(bartend);
        }else if(this.className == 'java') {
            alert(java);
        }else if(this.className == 'msOffice') {
            alert(msOffice);
        }else if(this.className == 'labor') {
            alert(labor);
        }else if(this.className == 'database') {
            alert(database);
        }else if(this.className == 'myHtml') {
            alert(myHtml);
        } else if (this.className == 'python') {
            alert(python);
        }
       // alert([this.innerText])
    });


    

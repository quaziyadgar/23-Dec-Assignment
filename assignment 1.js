var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Abhishek',
        'marks': 81,
      },
      {
        'name': 'Raj',
        'marks': 88,
      },
      {
        'name': 'Rahul',
        'marks': 77,
      },
      {
        'name': 'Ranveer',
        'marks': 71,
      },
      {
       'name': 'Ranbir',
       'marks': 91,
      },
      {
       'name': 'Akshay',
       'marks': 86,
      },
      {
       'name': 'Aamir',
       'marks': 85,
      }]
  };
  var pList=[];
  var studs=g_class.students;
  for(var i=0;i<studs.length;i=i+1){
      if(studs[i].marks>=85){
        pList.push("\n"+studs[i].name);
      }
  }
 document.write("The list of Students passed are : " +pList);
 alert("The list of Students passed are :" +pList);
var jcontent1 = 
    {
        
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    },
    {
      "type": "mobile",
      "number": "123 456-7890"
    }
  ],
  "children": [
      {
        "firstName":"Atle",
        "lastName":"Smith"
    }
  ],
  "spouse": null
}

var jcontent2 = 
    {
        
  "firstName": "Janett",
  "lastName": "Beverly",
  "isAlive": true,
  "age": 47,
  "address": {
    "streetAddress": "101 Jump Street",
    "city": "New Jersey",
    "state": "NJ",
    "postalCode": "07021"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-3434"
    },
    {
      "type": "office",
      "number": "646 555-5599"
    },
    {
      "type": "mobile",
      "number": "123 456-7890"
    }
  ],
  "children": [
      {
        "firstName":"Atle",
        "lastName":"Smith"
    }
  ],
  "spouse": null
}

//var users = {
//    usr1: jcontent1,
//    usr2:jcontent2
//}

//console.log(users.usr1.firstName+ ' ' +users.usr2.firstName);

console.log(jcontent1.firstName);

var output = document.getElementById("output");

//output.innerHTML = users.usr1.firstName+ ' ' +users.usr1.lastName+ ' '+users.usr2.firstName+ ' '+users.usr2.lastName;


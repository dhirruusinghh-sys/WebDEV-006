let fd = [
    ["dheeraj",    " 7498537129", "11-09-2002", "Male" , "India" ],
    ["Verma", " 9876543210", "15-06-1998", "Female", "USA" ],
    ["John", " 1234567890", "20-03-1995","Male", "UK" ],
    ["JHA2", " 9876543210", "05-12-1990", "Female", "Canada" ]
];

fd.forEach(Element => {
    console.log(Element)
});

let Facultydata = [
  {
    "name": "Rahul Sharma",
    "phone": "9876543210",
    "city": "Bhopal",
    "dob": "1998-05-14",
    "profession": "Software Engineer"
  },
  {
    "name": "Priya Verma",
    "phone": "9123456780",
    "city": "Indore",
    "dob": "1995-09-22",
    "profession": "Doctor"
  },
  {
    "name": "Amit Patel",
    "phone": "9988776655",
    "city": "Ahmedabad",
    "dob": "1992-12-10",
    "profession": "Business Analyst"
  },
  {
    "name": "Sneha Gupta",
    "phone": "9012345678",
    "city": "Delhi",
    "dob": "2000-03-05",
    "profession": "Graphic Designer"
  },
  {
    "name": "Vikram Singh",
    "phone": "8899776655",
    "city": "Jaipur",
    "dob": "1997-07-18",
    "profession": "Civil Engineer"
  }
];

Facultydata.forEach(item => {
    console.log(item.name);
});

console.log(Facultydata[1]["name"] );


Facultydata.map((Element, idx) => {
    console.log(idx);
    console.log(Element.name);
});



let studentData = 
    {
        "name": "Vikram Singh",
        "phone": "8899776655",
        "city": "Jaipur",
        "dob": "1997-07-18",
        "profession": "Civil Engineer"
    };

console.log(Object.keys(studentData));
console.log(Object.values(studentData));
console.log(Object.entries(studentData ));


let arr = [2,4,6,8,10,2,15,7,16,100,18,9,10,22,14,6,8,10];

arr .sort((a,b) => a - b);
console.log(arr);

console.log(arr.find((val) => val === 6));
console.log(arr.findIndex((val) => val === 6));
console.log(arr.findLastIndex((val) => val === 6));


let ar1 = [22,43,6,47,84,53,56,79,42,12,23,45,67,89,90,34,56,78,90,12   ];
console.log(ar1.filter((val) => val > 50));
console.log(ar1.filter((val) => val >20));

let string = "Hello World! Welcome to JavaScript programming.";
console.log(string.split(" "));


// map foreach,findindex,findlastindex,filter,split,sort,filter,Object.keys,slice,objects.values,  JSON are all array methods in JavaScript that allow you to manipulate and work with arrays in different ways.
console.log(String);

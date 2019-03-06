var peopleArr = [
{
    name: "Hanna",
    age: 0
},
{
    name: "Jada",
    age: 35
},
{
    name: "Marianne",
    age: 25
},
{
    name: "Karen",
    age: -60
},
{
    name: "Megan",
    age: 21
},
{
    name: "Person 1",
    age: 63
},
{
    name: "Person 2",
    age: 68
},
{
    name: "Person 3",
    age: 84
},
{
    name: "Person 4",
    age: 99
},
{
    name: "Person 5",
    age: 100
},
{
    name: "Person 6",
    age: 8
},
{
    name: "Person 7",
    age: 2
},
{
    name: "Person 8",
    age: 2
},
{
    name: "Person 9",
    age: 35
},
{
    name: "Person 10",
    age: 42
},
{
    name: "Person 11",
    age: 40
},
{
    name: "Person 12",
    age: 1
},
{
    name: "Person 13",
    age: 10
},
{
    name: "Person 14",
    age: 2
}
];


function getYoungestPerson(input) {
    if(!input.length) {
        return 'no body is here'
    }
    var youngestPerson = input[0];
	for (var i = 0; i < input.length; i++) {

		if (input[i].age < youngestPerson.age) {
			youngestPerson = input[i];
            // } else if (!(input[i].age < youngestPerson.age)){
            //     youngestPerson = youngestPerson;
        } else if (input[i].age = youngestPerson.age) {
            
        }
	}
	return youngestPerson
}

getYoungestPerson(peopleArr);
console.log(getYoungestPerson(peopleArr));
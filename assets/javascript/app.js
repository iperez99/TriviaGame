//JQuery event that references the <button> id "start"//
$("#start").on("click", function () {
    // console.log("button press works!")
    $("#start").remove(); //<--this removes the start button, this prevents the player from generating more questions//

    //for loops that append the questions, and the choices with a radio button and the value that is equal to the choice//
    for (var i = 0; i < questions.length; i++) {
        $("#swrapper").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#swrapper").append("<input type= 'radio' name='question-" + i + " 'value'" + questions[i].choices[j] + "'>" + questions[i].choices[j])
        }

    }
})

//declared a variable with all the questions and answers in an array//

var questions = [
    {
        question: "1.	What is the name of Jon's direwolf?",
        choices: ["Needle", "Snow", "Ghost", "Gray"],
        answer: "Ghost"
    },
    {
        question: "2.	Who is king of Westeros when the series begins?",
        choices: ["Joffrey Baratheon", "Eddard Stark", "Petyr Baelish", "Robert Baratheon"],
        answer: "Robert Baratheon"
    },
    {
        question: "3.	In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?",
        choices: ["Theon Greyjoy", "Robin Arryn", "Gregor Glegane", "Roose Baratheon"],
        answer: "Theon Greyjoy"
    },
    {
        question: "4.	What noble house is Catelyn Stark from?",
        choices: ["House Bolton", "House Tully", "House Baratheon", "House Lannister"],
        answer: "House Tully"
    },
    {
        question: "5.	Brienne of Tarth pledged her alliance to which of these pairs??",
        choices: ["Renly Baratheon and Melisandre", "Sansa Stark and Selwyn Tarth", "Stannis Baratheon and Catelyn Stark", "Catelyn Stark and Renly Baratheon"],
        answer: "Catelyn Stark and Renly Baratheon"
    },
    {
        question: "6.	What is that name of Robb Stark's wife?",
        choices: ["Helena", "Bethany", "Talisa", "Meera"],
        answer: "Talisa"
    },
    {
        question: "7.	What is the name of Arya Stark's sword?",
        choices: ["Wrait", "Gjallarhorn", "Thorn", "Needle"],
        answer: "Needle"
    },
];
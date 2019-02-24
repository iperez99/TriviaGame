//JQuery event that references the <button> id "start"//
$("#start").on("click", function () {
    // console.log("button press works!")
    game.start();
})

//declared a variable with all the questions and answers in an array//

var questions = [
    {
        question: "What is the name of Jon's direwolf?",
        choices: ["Needle", "Snow", "Ghost", "Gray"],
        answer: "Ghost"
    },
    {
        question: "Who is king of Westeros when the series begins?",
        choices: ["Joffrey Baratheon", "Eddard Stark", "Petyr Baelish", "Robert Baratheon"],
        answer: "Robert Baratheon"
    },
    {
        question: "In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?",
        choices: ["Theon Greyjoy", "Robin Arryn", "Gregor Glegane", "Roose Baratheon"],
        answer: "Theon Greyjoy"
    },
    {
        question: "What noble house is Catelyn Stark from?",
        choices: ["House Bolton", "House Tully", "House Baratheon", "House Lannister"],
        answer: "House Tully"
    },
    {
        question: "Brienne of Tarth pledged her alliance to which of these pairs??",
        choices: ["Renly Baratheon and Melisandre", "Sansa Stark and Selwyn Tarth", "Stannis Baratheon and Catelyn Stark", "Catelyn Stark and Renly Baratheon"],
        answer: "Catelyn Stark and Renly Baratheon"
    },
    {
        question: "What is that name of Robb Stark's wife?",
        choices: ["Helena", "Bethany", "Talisa", "Meera"],
        answer: "Talisa"
    },
    {
        question: "What is the name of Arya Stark's sword?",
        choices: ["Wrait", "Gjallarhorn", "Thorn", "Needle"],
        answer: "Needle"
    },
];

//tracking stats//

var game = {

    correct: 0,
    incorrect: 0,
    counter: 20,
    //countdown timer method//
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("out of time")
            game.finished();
        }

    },

    start: function () {
        //sets the timer into html document//
        timer = setInterval(game.countdown, 1000);
        $("#swrapper").prepend("<h2>Time left: <span id='counter'>60</span> Seconds</h2>");
        $("#start").remove(); //<--this removes the start button, this prevents the player from generating more questions//

        //for loops that append the questions into an h2 tag, and the choices array with a radio button//
        for (var i = 0; i < questions.length; i++) {
            $("#swrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].choices.length; j++) {
                $("#swrapper").append("<input type= 'radio' name='question-" + i + " 'value'" + questions[i].choices[j] + "'>" + questions[i].choices[j])
            }

        }


    },
    //checks for the correct answers in each question//
    finished: function () {
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-5"]:checked'), function () {
            if ($(this).val() == questions[5].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });
        $.each($('input[name="question-6"]:checked'), function () {
            if ($(this).val() == questions[6].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });

        this.result(); //calls the results screen//
    },

    result: function () {
        clearInterval(timer);
        $("#swrapper h2").remove();
        $("#swrapper").html("<h1>Finished!</h1>");
        $("#swrapper").append("<h3>Questions that you answered correctly: " + this.correct + "</h3>");
        $("#swrapper").append("<h3>Questions that you answererd incorrectly: " + this.incorrect + "</h3>");
        $("#swrapper").append("<h3>Questions not answered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");


    }


}
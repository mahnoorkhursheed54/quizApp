var myQuestions = [
    {
        question: "In Urdu, the name “Pakistan” literally means?",
        answers: {
            a: 'Pure land',
            b: 'Truthful land',
            c: 'Land of the pure',
            d: 'Land of the truthfulness'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which animal is the national animal of Pakistan?",
        answers: {
            a: 'Tiger',
            b: 'Lion',
            c: 'Arabian horse',
            d: 'Markhor'
        },
        correctAnswer: 'd'
    },
    {
        question: "Pakistan tested nuclear weapons on?",
        answers: {
            a: '24 May 1998',
            b: '26 May 1998',
            c: '28 May 1998',
            d: '30 May 1998'
        },
        correctAnswer: 'c'
    },
    {
        question: "Pakistan Day” is celebrated each year on?",
        answers: {
            a: '23 March',
            b: '14 August',
            c: '6 September',
            d: '25 December'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is the current Prime Minister of Pakistan?",
        answers: {
            a: 'Imran Khan',
            b: 'Asif Ali Zardari',
            c: 'Nawaz Sharif',
            d: 'Bilawal Bhutto'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who suggested the name of Pakistan?",
        answers: {
            a: 'Hafeez Jhalandri',
            b: 'Chaudhary Rehmat Ali',
            c: 'Allama Iqbal',
            d: 'Quaid-e-Azam'
        },
        correctAnswer: 'b'
    },
    {
        question: "The largest dam of Pakistan is?",
        answers: {
            a: 'Bhasha dam',
            b: 'Mangla dam',
            c: 'Tarbela dam',
            d: 'Kalabagh dam'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who wrote the National Anthem of Pakistan",
        answers: {
            a: 'Allama Iqbal',
            b: 'Liaquat Ali Khan',
            c: 'Sir Syed Ahmed Khan',
            d: 'Hafeez Jhalandri'
        },
        correctAnswer: 'd'
    },
    {
        question: "K2 is the highest point of the ________ mountain range",
        answers: {
            a: 'Himalaya',
            b: 'Karakoram',
            c: 'Balkan',
            d: 'Hindu Kush'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who is the current president of Pakistan?",
        answers: {
            a: 'Shah Mehmood Qureshi',
            b: 'Shahbaz Sharif',
            c: 'Imran Khan',
            d: 'Arif Alvi'
        },
        correctAnswer: 'd'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
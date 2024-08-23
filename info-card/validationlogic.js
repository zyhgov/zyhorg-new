document.addEventListener('DOMContentLoaded', function() {
    function generateMathQuestion() {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operators = ['+', '-'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        let question, answer;
        switch (operator) {
            case '+':
                question = `${num1} + ${num2}`;
                answer = num1 + num2;
                break;
            case '-':
                question = `${num1} - ${num2}`;
                answer = num1 - num2;
                break;
        }
        return {
            question,
            answer
        };
    }

    const mathQuestionElement = document.getElementById('math-question');
    const mathData = generateMathQuestion();
    mathQuestionElement.textContent = `请回答人机验证数学题 : ${mathData.question} = `;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const studentId = document.getElementById('studentId').value.trim();
        const mathAnswer = document.getElementById('mathAnswer').value.trim();

        if (parseFloat(mathAnswer) !== parseFloat(mathData.answer)) {
            alert('验证数学题答案错误！');
            return;
        }

        fetch('./info.json')
            .then(response => response.json())
            .then(data => {
                const student = data.find(student => 
                    student.name === name && student["Student ID"].toString() === studentId
                );

                if (student) {
                    sessionStorage.setItem('student', JSON.stringify(student));
                    window.location.href = 'info.html';
                } else {
                    alert('姓名或学号错误！');
                }
            })
            .catch(error => {
                // Error handling can be implemented here if needed.
            });
    });

    var forgetLink = document.getElementById('forget-student-id');
    forgetLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('看你自己的学生卡！');
    });
});
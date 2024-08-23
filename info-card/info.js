document.addEventListener('DOMContentLoaded', function () {
    const student = JSON.parse(sessionStorage.getItem('student'));
    if (!student) {
        alert('未找到学生信息，请重新登录');
        window.location.href = 'index.html';
    } else {
        document.getElementById('name').textContent = student.name;
        document.getElementById('studentId').textContent = '学号: ' + student["Student ID"];

        document.getElementById('accountName').textContent = student.name;
        document.getElementById('accountGender').textContent = student.gender;
        document.getElementById('accountStudentId').textContent = student["Student ID"];
        document.getElementById('accountSpeciality').textContent = student.speciality;
        document.getElementById('accountSchool').textContent = student.school;
        document.getElementById('accountInstitute').textContent = student.institute;
        document.getElementById('accountClass').textContent = student.class;
        document.getElementById('accountEs').textContent = student.es;

        
    }


    const tabs = document.querySelectorAll('.menu ul li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
});


document.querySelector('li[data-tab="exit"]').addEventListener('click', function(event) {
    // 阻止默认的链接跳转行为
    event.preventDefault();
    
    // 使用JavaScript进行页面跳转
    window.location.href = "index.html";
    
    // 替换当前的历史状态，使得返回按钮不可用
    history.replaceState(null, "", "/index.html");
}, false);
document.addEventListener('DOMContentLoaded', function () {
    const specialStudentIDs = [222003857, 222003860, 222003863,222003872,222003861,222003864,222003865,222003866,222003880,222003884];
    const student = JSON.parse(sessionStorage.getItem('student'));
    
    if (student && specialStudentIDs.includes(Number(student["Student ID"]))) {
        const iframesContainer = document.getElementById('iframes-container');
        
        // 创建新的iframe元素
        const extraIframe = document.createElement('iframe');
        extraIframe.src = 'https://datawarehouse-7gl81i6ib89c2edd-1314221350.tcloudbaseapp.com/info-card/inform/warning.html';
        extraIframe.style = 'width:100%; height:230px; border:none;background-color: #ffffff00;';

        // const extraIframe2 = document.createElement('iframe');
        // extraIframe2.src = './inform/help.html';
        // extraIframe2.style = 'width:100%; height:220px; border:none;background-color: #ffffff00;';
        
        // 在容器的最上面插入新的iframe
        iframesContainer.insertBefore(extraIframe, iframesContainer.firstChild);
        // iframesContainer.insertBefore(extraIframe2, iframesContainer.firstChild);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const specialStudentIDs = [222003872];
    const student = JSON.parse(sessionStorage.getItem('student'));
    
    if (student && specialStudentIDs.includes(Number(student["Student ID"]))) {
        const iframesContainer = document.getElementById('iframes-container');
        
        const extraIframe = document.createElement('iframe');
        extraIframe.src = 'https://datawarehouse-7gl81i6ib89c2edd-1314221350.tcloudbaseapp.com/info-card/inform/collect-zhangyonghao-cp.html';
        extraIframe.style = 'width:100%; height:260px; border:none;background-color: #ffffff00;';

        iframesContainer.insertBefore(extraIframe, iframesContainer.firstChild);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const specialStudentIDs = [222003861];
    const student = JSON.parse(sessionStorage.getItem('student'));
    
    if (student && specialStudentIDs.includes(Number(student["Student ID"]))) {
        const iframesContainer = document.getElementById('iframes-container');

        const extraIframe = document.createElement('iframe');
        extraIframe.src = 'https://datawarehouse-7gl81i6ib89c2edd-1314221350.tcloudbaseapp.com/info-card/inform/collect-zhangziyang-cp.html';
        extraIframe.style = 'width:100%; height:260px; border:none;background-color: #ffffff00;';

        iframesContainer.insertBefore(extraIframe, iframesContainer.firstChild);

    }
});


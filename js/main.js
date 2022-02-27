window.addEventListener('load', (e) => {
    navClick()
    makeSubject()
    makeBarChart1()
    makeBarChart2()
});

function navClick(){
    var nav = document.querySelectorAll('nav ul li');
    var section = document.querySelectorAll('section');

    [].forEach.call(nav, function(e, i){ 
        e.addEventListener("click", function(){
            section[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, false); 
    }); 
}

function makeSubject(){
    var subject = [
        '반도체 공정 (A+)',
        '반도체 공정실습 (A+)',
        '박막 공학 (A+)',
        '박막 실습 (A+)',
        '반도체 물리학 (A+)',
        '반도체 소자공학 (A+)',
        'LED 공학 (A+)',
        '반도체 열역학 (A+)',
        '반도체응용기기설계 (A+)',
        '나노 전자공학 (A)',
        '디스플레이원론 (A+)',
        '전자소자재료공학 (A+)',
    ];
    var wrap = document.getElementsByClassName('subject_wrap')[0];

    subject.forEach(e => {
        wrap.innerHTML += `<div>${e}</div>`;
    });
}


function makeBarChart1(){
    var data = [
        {name: 'Python',
        percentage: 70},
        {name: '2D AutoCad',
        percentage: 60},
        {name: 'Solidworks',
        percentage: 60},
        {name: 'Matlab',
        percentage: 30},
        {name: 'Html5 / Css3',
        percentage: 30}
    ];
    var color = ['#ff547a', '#ffcb51', '#20cdb1', '#4ca8f0', '#4c5cf0'];
    var wrap = document.getElementsByClassName('bar-chart-wrap')[0]

    data.forEach((e, i)=>{
        var chart= ` <div class="chart-box">
                        <p>${e.name}</p>
                        <div class="bar-bg">
                            <div class="bar" style="width:${e.percentage}%; background-color: ${color[i]}"></div>
                        </div>
                        <span>${e.percentage}%</span>
                    </div>`
        wrap.innerHTML += chart;
        
    })
}

function makeBarChart2(){
    var data = [
        {name: '한글',
        percentage: 100},
        {name: 'Excel',
        percentage: 60},
        {name: 'Power Point',
        percentage: 40}
    ];
    var color = ['#ff547a', '#ffcb51', '#4ca8f0'];
    var wrap = document.getElementsByClassName('bar-chart-wrap')[1]

    data.forEach((e, i)=>{
        var chart= ` <div class="chart-box">
                        <p>${e.name}</p>
                        <div class="bar-bg">
                            <div class="bar" style="width:${e.percentage}%; background-color: ${color[i]}"></div>
                        </div>
                        <span>${e.percentage}%</span>
                    </div>`
        wrap.innerHTML += chart;
        
    })
}


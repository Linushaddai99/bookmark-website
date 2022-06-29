const features = document.querySelector('.features__navigation');

const features1 = document.querySelector('.features_item1')
const features2 = document.querySelector('.features_item2')
const features3 = document.querySelector('.features_item3')

const tab1 = document.querySelector('.features__tab-1');
const tab2 = document.querySelector('.features__tab-2');
const tab3 = document.querySelector('.features__tab-3');

const questions = document.querySelectorAll('.questions');
const ans1 = document.querySelector('.q1-ans');
const ans2 = document.querySelector('.q2-ans');
const ans3 = document.querySelector('.q3-ans');
const ans4 = document.querySelector('.q4-ans');

const popup = document.querySelector('.popup-wrapper');
const hamburgermenu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');

features.addEventListener('click', e =>{
    let classname = e.target.classList.value;
    // console.log(e)
    switch(classname){
        case "features_item1":
            features1.classList.add('red');
            features2.classList.remove('red');
            features3.classList.remove('red');
            tab1.classList.remove('hide');
            tab2.classList.add('hide');
            tab3.classList.add('hide');
            break;
        case "features_item2":
            features1.classList.remove('red')
            features2.classList.add('red')
            features3.classList.remove('red')
            tab1.classList.add('hide');
            tab2.classList.remove('hide');
            tab3.classList.add('hide');
            break;
        case "features_item3":
            features1.classList.remove('red')
            features2.classList.remove('red')
            features3.classList.add('red')
            tab1.classList.add('hide');
            tab2.classList.add('hide');
            tab3.classList.remove('hide');
            break;
            // code block
    }
})

questions.forEach(question => {
    question.addEventListener('click', e => {
        let questionClass = e.target;
        if(questionClass.classList.contains('q1')){
            ans1.classList.toggle('hide')
        }

        if(questionClass.classList.contains('q2')){
            ans2.classList.toggle('hide')
        }

        if(questionClass.classList.contains('q3')){
            ans3.classList.toggle('hide')
        }

        if(questionClass.classList.contains('q4')){
            ans4.classList.toggle('hide')
        }
    })
})

hamburgermenu.addEventListener('click', () => {
    popup.classList.toggle('hide');
})

cancel.addEventListener('click', () => {
    popup.classList.add('hide')
})


const tabs = document.querySelectorAll('.features-item');
const tabInfo1 = document.querySelector('.feature-tab1');
const tabInfo2 = document.querySelector('.feature-tab2');
const tabInfo3 = document.querySelector('.feature-tab3');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // tab.classList.toggle('clicked');
        let classes = Array.from(tab.classList);
        if(classes.includes('feature-2')){
            tabInfo1.classList.add('hide')
            tabInfo2.classList.remove('hide')
            tabInfo3.classList.add('hide')
        } else if(classes.includes('feature-3')) {
            tabInfo3.classList.remove('hide');
            tabInfo2.classList.add('hide');
        } else if(classes.includes('feature-1')){
            tabInfo2.classList.add('hide');
            tabInfo3.classList.add('hide')
            tabInfo1.classList.remove('hide')
        }
    })
})

const questions = document.querySelectorAll('.questions');
const ans1 = document.querySelector('.q1-ans')
const ans2 = document.querySelector('.q2-ans')
const ans3 = document.querySelector('.q3-ans')
const ans4 = document.querySelector('.q4-ans')
const answers = document.querySelectorAll('.ans-js')

questions.forEach(question => {
    question.addEventListener('click', () => {
        let arrow = question.childNodes[3];
    
        let classes = Array.from(question.classList);
        if(classes.includes('q1')) {
            ans1.classList.toggle('hide');
            if(ans1.classList.contains('hide')){
            arrow.setAttribute('class', 'fas fa-angle-down arrow-down')
            } else {arrow.setAttribute('class', 'fas fa-angle-up arrow-down text-danger')}
        } else if(classes.includes('q2')) {
            ans2.classList.toggle('hide');
            if(ans2.classList.contains('hide')){
                arrow.setAttribute('class', 'fas fa-angle-down arrow-down')
                } else {arrow.setAttribute('class', 'fas fa-angle-up arrow-down text-danger')}
        }  else if(classes.includes('q3')) {
            ans3.classList.toggle('hide');
            if(ans3.classList.contains('hide')){
                arrow.setAttribute('class', 'fas fa-angle-down arrow-down')
                } else {arrow.setAttribute('class', 'fas fa-angle-up arrow-down text-danger')}
        }  else if(classes.includes('q4')) {
            ans4.classList.toggle('hide');
            if(ans4.classList.contains('hide')){
                arrow.setAttribute('class', 'fas fa-angle-down arrow-down')
                } else {arrow.setAttribute('class', 'fas fa-angle-up arrow-down text-danger')}
        }

    })
})


const exit = document.querySelector('.exit');
const popup = document.querySelector('.popup-wrapper');
const menu = document.querySelector('.hamburger-menu');


exit.addEventListener('click', () => {
    popup.classList.add('hide');
});

menu.addEventListener('click', () => {
    popup.classList.remove('hide');
})

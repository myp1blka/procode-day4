const el = document.querySelector('.test');
el.innerHTML = '123';

const a = 10;

if  (a === 10) {
    console.log(a);
    const b = 20;
    {
        console.log(a);
        console.log(b);
    }
}


el.addEventListener('click', (ev) => {
    console.log(ev);
    const a = 30;
    console.log('click:', a);
});

document.addEventListener('keypress', (ev) => {
    console.log(ev);
});

const akasFunc = (b) => {
    const a = 10;
    console.log('result:', a + b);
}

akasFunc(45);


const divs = document.querySelectorAll('div');

let count = 0;

divs.forEach( (div) => {
    div.addEventListener('click', function(event) {
        // Stoppe das Bubbling
        event.stopPropagation();

        console.log(event.currentTarget);
        const element = event.currentTarget; // ist in HTMLElement, das gerade den "Event" hat
        element.style.backgroundColor = '#ff0000';
        
        count++;
        console.log('Div Clicked: '+count);
    })
});
export default function handleState(state){
    const home = document.querySelectorAll('.container-home');
    const crew = document.querySelectorAll('.container-crew');
    const destination = document.querySelectorAll('.container-destination')
    const technology = document.querySelectorAll('.container-technology')
    switch (state) {
        case 'destination':
            rmClass(destination, 'hide');
            addClass(home, 'hide');
            addClass(crew, 'hide');
            addClass(technology, 'hide');
            break;
        case 'crew':
            rmClass(crew, 'hide');
            addClass(home, 'hide');
            addClass(destination, 'hide');
            addClass(technology, 'hide');
            break;
        case 'technology':
            rmClass(technology, 'hide');
            addClass(home, 'hide');
            addClass(destination, 'hide');
            addClass(crew, 'hide');
            break;
        default:
            rmClass(home, 'hide');
            addClass(crew, 'hide');
            addClass(destination, 'hide');
            addClass(technology, 'hide');
            
    }

}

function addClass(elements, selectClass){
    elements.forEach((element)=>{
        element.classList.add(selectClass);
    })
}
function rmClass(elements, selectClass){
    elements.forEach((element)=>{
        element.classList.remove(selectClass);
    })
}
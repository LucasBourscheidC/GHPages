export default function handleState(state){
    const home = document.querySelectorAll('.home');
    const crew = document.querySelectorAll('.crew');
    const destination = document.querySelectorAll('.destination')
    const technology = document.querySelectorAll('.technology')
    switch (state) {
        case 'destination':
            addGrid(destination);
            hide(home);
            hide(crew);
            hide(technology);
            break;
        case 'crew':
            addGrid(crew);
            hide(home);
            hide(destination);
            hide(technology);
            break;
        case 'technology':
            addGrid(technology);
            hide(home);
            hide(destination);
            hide(crew);
            break;
        default:
            addGrid(home);
            hide(crew);
            hide(destination);
            hide(technology);
            
    }

}

function hide(elements){
    elements.forEach((element)=>{
        element.style.display = 'none';
    })
}
function addGrid(elements){
    elements.forEach((element)=>{
        element.style.display = 'grid';
    })
}
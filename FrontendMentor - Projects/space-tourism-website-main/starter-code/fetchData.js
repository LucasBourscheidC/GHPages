let crew;
let destinations;
let technology;

export async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      crew = data.crew;
      destinations = data.destinations;
      technology = data.technology;
    } catch (error) {
      console.error(error);
    }
  }

export function crewData (){
    return crew;
}
export function destinationsData (){
    return destinations;
}
export function technologyData (){
    return technology;
}
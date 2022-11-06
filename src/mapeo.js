const estadisticas = [
    {
        id:1,
        name:"Years Experience",
        numero:12,
        clas:"fa-regular fa-calendar-days",
    },
    {
        id:2,
        name:"Total Achievment",
        numero:4235,
        clas:"fa-solid fa-medal"
    },
    {
        id:3,
        name:"Happy Student",
        numero:3468,
        clas:"fa-solid fa-child-dress",
    },
    {
        id:4,
        name:"Positive Review",
        numero:"3k+",
        clas:"fa-solid fa-comment-dots",
    },
];



const createEstadisticas = (esta)=>{
    const  {name ,numero,clas } = esta;
    

    return `
    <div class="estadisticas">
    <i class="${clas}"></i>
        <div class="estadisticas-results">
     
          <span>${numero}</span>
          <p>${name}</p>
        </div>`;
};


const rendersEstadisticas = ()=>{
    a.innerHTML = estadisticas.map(createEstadisticas).join("");

};
const init = () =>{

rendersEstadisticas();
}

init();
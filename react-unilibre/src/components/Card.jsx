import './Card.css'

//Crear el array JSON
const Pokemon=[
    {
        id:1,
        nombre: "Pikachu",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png",
        alt: "Imagen Pikachu"
    },
    {
        id:2,
        nombre: "Charizard",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88S9v0Xv8FmZZNrlqtHuQO7RyR-nwM7iTaBQ_NeKO9A&s",
        alt: "Imagen Charizard"
    }
]

export function Card(){
    return(
        Pokemon.map((item,index)=>{
            return(
            <div className='card' key={index}>
                <h1>Numero:{item.id} </h1>
                <h2>Nombre: {item.nombre}</h2>
                <img className='imagen' src={item.imagen} alt={item.alt} />

            </div>)
        })
    )
}

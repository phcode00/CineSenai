//Crie o componente FichaDoFilme com um filme fixo: título, gênero e duração em minutos. Mostre a duração no formato "2h 46min" calculando as horas e os minutos com JavaScript dentro das chaves.

export const FichaDoFilme = () => {

    const titulo = "Vingadores Doomsday";
    const genero = "ação";
    const duracaoMinutos = 150;

    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60

    return (
        <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>
            <h2>{titulo}</h2>

            <p>Genero: {genero}</p>
            
            <p>Horas {horas}h {minutos}m</p>

        </div>

    )
}


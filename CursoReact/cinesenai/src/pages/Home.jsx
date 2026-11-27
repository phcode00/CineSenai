
import { useState } from "react";
import "./Home.css";
import { FilmeCard } from "../components/FilmeCard";

const GENERO_LABELS = {
  COMEDIA: "Comédia",
  DRAMA: "Drama",
  TERROR: "Terror",
  ROMANCE: "Romance",
  FICCAO_CIENTIFICA: "Ficção Científica",
  ANIMACAO: "Animação",
  DOCUMENTARIO: "Documentário",
  SUSPENSE: "Suspense",
  DORAMA: "Dorama",
  ESPORTE: "Esporte",
  CULT: "Cult",
  AVENTURA: "Aventura",
  MUSICAL: "Musical",
};

const filmes = [
  {
    id: 1,
    titulo: "Duna: Parte Dois",
    genero: "FICCAO_CIENTIFICA",
    duracaoMinutos: 166,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    descricao: "Paul Atreides une-se aos Fremen em busca de vingança.",
  },
  {
    id: 2,
    titulo: "Divertida Mente 2",
    genero: "ANIMACAO",
    duracaoMinutos: 96,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    descricao: "Riley entra na adolescência e novas emoções chegam.",
  },
  {
    id: 3,
    titulo: "Oppenheimer",
    genero: "DRAMA",
    duracaoMinutos: 180,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    descricao: "A história do pai da bomba atômica.",
  },
  {
    id: 4,
    titulo: "Interestelar",
    genero: "FICCAO_CIENTIFICA",
    duracaoMinutos: 169,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    descricao:
      "Exploradores viajam através de um buraco de minhoca para salvar a humanidade.",
  },
];

export const Home = () => {

  const [search, setSearch] = useState("");

  const filteredFilmes = filmes.filter((filme) => {
    
    const matchesSearch = filme.titulo.toLowerCase().includes(search.toLowerCase()) || (filme.descricao && filme.descricao.toLowerCase().includes(search.toLowerCase()));

    return matchesSearch
  })

  return (
    <div className="container">
      <div className="page-header catalog-header">
        <h2 className="catalog-title">Nosso catálogo</h2>

        <div className="catalog-filters">
            <div className="filter-search">
                <input type="text"
                className="form-control"
                placeholder="Pesquisar filmes por título ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} // O "e" é cada letra digitada
                />
            </div>
        </div>
      </div>

      {/* <div className="movie-grid">
        {filmes.map((filme) => (
          <FilmeCard
            key={filme.id}
            titulo={filme.titulo}
            genero={GENERO_LABELS[filme.genero] || filme.genero}
            duracaoMinutos={filme.duracaoMinutos}
            urlPoster={filme.urlPoster}
            descricao={filme.descricao}
          />
        ))}
      </div> */}

      <p>
        {filmes.length} {filmes.length === 1 ? "Filme" : "Filmes"} Em cartaz
      </p>

      {filteredFilmes.length > 0 ? (
        <div className="movie-grid">
          {filteredFilmes.map((filme) => (
            <FilmeCard
              key={filme.id}
              titulo={filme.titulo}
              genero={GENERO_LABELS[filme.genero] || filme.genero}
              duracaoMinutos={filme.duracaoMinutos}
              urlPoster={filme.urlPoster}
              descricao={filme.descricao}
            />
          ))}
        </div>
      ) : (
        <div className="glass home-empty">
          <svg
            className="home-empty-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <h3 className="home-empty-title">Nenhum filme encontrado</h3>
          <p className="home-empty-text">
            Tente alterar os termos da busca ou selecionar outro gênero.
          </p>
        </div>
      )}
    </div>
  );
};

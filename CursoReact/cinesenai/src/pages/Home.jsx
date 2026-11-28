
import { use, useState } from "react";
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
    {
    id: 8,
    titulo: "Matrix",
    genero: "FICCAO_CIENTIFICA",
    duracaoMinutos: 136,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    descricao: "Um hacker descobre que a realidade é uma simulação.",
  },
  {
    id: 9,
    titulo: "O Poderoso Chefão",
    genero: "DRAMA",
    duracaoMinutos: 175,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    descricao: "A saga de uma família mafiosa e a sucessão do poder.",
  },
  {
    id: 6,
    titulo: "Homem-Aranha: No Aranhaverso",
    genero: "ANIMACAO",
    duracaoMinutos: 117,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    descricao: "Miles Morales descobre um multiverso de heróis aranha.",
  },
  {
    id: 7,
    titulo: "Blade Runner 2049",
    genero: "FICCAO_CIENTIFICA",
    duracaoMinutos: 164,
    urlPoster:
      "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    descricao:
      "Um novo replicante descobre um segredo que pode mudar a sociedade.",
  },
];

export const Home = () => {

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectGenre] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredMovies = filmes.slice(0, 5);
  const featuredMovie = featuredMovies[activeIndex]

  const filteredFilmes = filmes.filter((filme) => {
    
    const matchesSearch = filme.titulo.toLowerCase().includes(search.toLowerCase()) || (filme.descricao && filme.descricao.toLowerCase().includes(search.toLowerCase()));

    const matchesGenre = selectedGenre === "" || filme.genero === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="container">

    {featuredMovie && (
      <div
      className="featured-banner"
      key={featuredMovie.id}
      style={{backgroundImage: featuredMovie.urlPoster ? `url(${featuredMovie.urlPoster})`
      : 'none'}}
      >
        <div className="featured-content">
          <span className="badge badge-primary featured-badge">Em Destaque</span>
          <h1 className="featured-title">{featuredMovie.titulo}</h1>
          <p className="featured-desc">
            {featuredMovie.descricao 
               ? featuredMovie.descricao.substring(0, 180) + ".."
               : "Sem descrição disponível."
            }
          </p>

          <div className="featured-actions">
              <span className="featured-meta">
                <strong>Duração: </strong>{featuredMovie.duracaoMinutos} min
              </span>

              <span className="badge badge-success">
                {GENERO_LABELS[featuredMovie.genero] || featuredMovie.genero}
              </span>

              <a href={`/sessoes?filmeId=${featuredMovie.id}`} className="btn btn-primary featured-cta">Ver Sessões</a>
          </div>
        </div>

        {featuredMovies.length > 1 && (
          <div className="featured-dots">
            {featuredMovies.map((filme, index) => (
              <button
              key={filme.id}
              type="buttom"
              className={'featured-dot' + (index === activeIndex ? 'featured-dot-active' : '')}
              aria-label={`Mostrar destaque ${filme.titulo}`}
              onClick={() => setActiveIndex(index)}
              >
              </button>
            ))}
          </div>
        )}
      </div>
    )}
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

            <div className="filter-genre">
                <select className="form-control"
                value={selectedGenre}
                onChange={(e) => setSelectGenre(e.target.value)}
                >
                  <option value="">Todos os Gêneros</option>
                  {Object.entries(GENERO_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>

                {/* Crie um botão "Limpar" que volta search para texto vazio e selectedGenre para texto vazio. Mostre o botão só quando existir algum filtro ativo. */}

                {(search !== "" || selectedGenre !== "") && (
                  <button className="btn btn-secondary" onClick={() => {setSearch(""); setSelectGenre("");}}>Limpar</button>
                )}
            </div>


        </div>
      </div>

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



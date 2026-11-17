import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// const lista = document.querySelector("#Lista");

// lista.innerHTML = "";

// filmes.forEach((filme) => {
//   const li = document.createElement("li");

//   li.textContent = filme.titulo;

//   lista.appendChild(li);
// });

// <ul>
  
//     {filmes.map((filme) => (
//       <li key={filme.id}>
//         {filme.titulo}
//       </li>
//     ))}
  
// </ul>
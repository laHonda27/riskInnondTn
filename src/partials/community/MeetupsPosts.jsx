import React from 'react';
import { Link } from 'react-router-dom';

function MeetupsPosts() {
  // Exemple de données d'articles
  const articles = [
    {
      title: "L'aggravation du risque d'inondation en Tunisie : éléments de réflexion",
      description: "En Tunisie, le phénomène inondation est ancien. À travers l'histoire, on compte par dizaines le nombre de fois où des régions ont été touchées. Les événements les mieux décrits et les mieux connus, pour la plupart encore dans la mémoire des gens, sont ceux enregistrés depuis le début du siècle passé et notamment après les années 1950....",
      publishedAt: "2014",
      url: "https://journals.openedition.org/physio-geo/3953",
      source: { name: "Noômène Fehri" }
    },
    {
      title: "La perception du risque d’inondations dans les zones inondables du bassin versant de Manouba-Essijoumi (Tunisie nord-orientale) : sensibilité au risque et aux actions de prévention",
      description: "En se basant sur une enquête par questionnaire auprès des habitants et d’entretiens (interview) auprès des responsables de la gestion du risque d’inondations, cet article traite la sensibilité et les actions de prévention contre ce risque dans le bassin versant de Manouba-Essijoumi (Tunisie Nord-orientale)....",
      publishedAt: "2014",
      url: "https://popups.uliege.be/0770-7576/index.php?id=5962",
      source: { name: "Walid CHOUARI" }
    },
    {
      title: "Thèses en ligne de l'Université Batna 2",
      description: "Modélisation des écoulements et perspectives de prévention contre les risques d’inondation dans quelques bassins de la Medjerda (Confins Algéro-Tunisiens)....",
      publishedAt: "2014",
      url: "http://eprints.univ-batna2.dz/585/",
      source: { name: "BELLOULA MOUFIDA" }
    },
    {
      title: "Cartographie numérique du risque d’inondation dans le Nord-Est de la Tunisie par la méthode du rapport de fréquence et l’indice statistique",
      description: "Cartographie numérique du risque d’inondation dans le Nord-Est de la Tunisie par la méthode du rapport de fréquence et l’indice statistique...",
      publishedAt: "2019",
      url: "https://www.proquest.com/openview/08eebf34158537af2be581fc13db5d7f/1?pq-origsite=gscholar&cbl=2069449",
      source: { name: "Mansour, Radhia; Abdessalem El Ghali" }
    },
  ];

  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {articles.map((article, index) => (
        <article key={index} className="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          
          {/* Contenu */}
          <div className="grow p-5 flex flex-col">
            <div className="grow">
              <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">{new Date(article.publishedAt).toLocaleDateString()}</div>
              <Link className="inline-flex mb-2" to={article.url} target="_blank">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{article.title}</h3>
              </Link>
              <div className="text-sm">
                {article.description}
              </div>
            </div>
            {/* Pied de page */}
            <div className="flex justify-between mt-3">
              <div className="text-xs inline-flex items-center font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                <span>{article.source.name}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MeetupsPosts;

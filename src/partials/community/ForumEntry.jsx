import React from 'react';
import { Link } from 'react-router-dom';

import UserAvatar from '../../images/user-40-02.jpg';
import UserImage01 from '../../images/user-28-01.jpg';
import UserImage02 from '../../images/user-28-02.jpg';
import UserImage05 from '../../images/user-28-05.jpg';
import UserImage09 from '../../images/user-28-09.jpg';
import UserImage10 from '../../images/user-28-10.jpg';

function ForumEntry() {
  return (
<article className="bg-white dark:bg-slate-800 shadow-md rounded border border-slate-200 dark:border-slate-700 p-5">
  {/* Fil d'Ariane */}
  <div className="mb-2">
    <ul className="inline-flex flex-wrap text-sm font-medium">
      <li className="flex items-center">
        <Link className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" to="/community/forum">
          Accueil
        </Link>
        <svg className="h-4 w-4 fill-current text-slate-400 dark:text-slate-500 mx-2" viewBox="0 0 16 16">
          <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
        </svg>
      </li>
      <li className="flex items-center">
        <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500" href="#0">
          Inondations en Tunisie : Situation actuelle et besoins d'aide 🌊
        </a>
      </li>
    </ul>
  </div>
  {/* En-tête */}
  <header className="pb-4">
    {/* Titre */}
    <div className="flex items-start space-x-3 mb-3">
      <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">Inondations Dévastatrices en Tunisie : Appel à la Solidarité 🌊</h2>
      {/* Bouton J'aime */}
      <div className="shrink-0">
        <button className="text-xs font-semibold text-center h-12 w-12 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-sm flex flex-col justify-center items-center">
          <svg className="inline-flex fill-slate-400 dark:fill-slate-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
            <path d="m0 6 6-6 6 6z" />
          </svg>
          <div>44</div>
        </button>
      </div>
    </div>
    {/* Méta-informations */}
    <div className="flex flex-wrap text-sm">
      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
        <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
          TunisieInondations
        </a>
      </div>
      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
        <span className="text-slate-500">Il y a 2 heures</span>
      </div>
      <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
        <span className="text-slate-500">17 Commentaires</span>
      </div>
    </div>
  </header>
  {/* Contenu */}
  <div className="space-y-4 mb-6">
    <p>Les inondations catastrophiques en Tunisie ont laissé de nombreuses familles sans abri et dans le besoin. Cette discussion est dédiée à la situation actuelle des inondations en Tunisie et aux besoins d'aide urgents.</p>
    <p>Nous demandons à tous ceux qui le peuvent de contribuer en fournissant des ressources, des informations sur les zones touchées et tout ce qui pourrait aider les personnes affectées par cette tragédie. Ensemble, nous pouvons faire une différence dans la vie de ceux qui sont touchés par cette catastrophe naturelle. 🤝</p>
  </div>
  {/* Formulaire de commentaire */}
  <div>
    <div className="flex items-start space-x-3 mb-3">
      <img className="rounded-full shrink-0" src={UserAvatar} width="40" height="40" alt="Utilisateur 02" />
      <div className="grow">
        <label htmlFor="comment" className="sr-only">
          Écrire un commentaire…
        </label>
        <textarea
          id="comment"
          className="form-textarea w-full focus:border-slate-300"
          rows="1"
          placeholder="Écrire un commentaire…"
          defaultValue={''}
        />
      </div>
    </div>
    <div className="text-right">
      <button type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
        Répondre -&gt;
      </button>
    </div>
  </div>
  {/* Commentaires */}
{/* Commentaires */}
<div className="mt-4">
  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-4">Commentaires</h3>
  <ul className="space-y-5">
    {/* Commentaire 1 */}
    <li className="relative pl-9 space-y-5">
      {/* Contenu du commentaire */}
      <div className="flex items-start">
        {/* Upvote du commentaire */}
        <div className="absolute top-0 left-0">
          <button className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-500">
            <svg className="inline-flex fill-slate-400 dark:fill-slate-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 6 6-6 6 6z" />
            </svg>
            <div>27</div>
          </button>
        </div>
        {/* Contenu du commentaire */}
        <div>
          {/* Texte du commentaire */}
          <div className="grow text-sm text-slate-800 dark:text-slate-100 space-y-2 mb-2">
            <p>
              Les inondations en Tunisie sont vraiment catastrophiques cette année. J'espère que tout le monde va bien.
            </p>
            <p>
              Il est temps pour le gouvernement de prendre des mesures sérieuses pour prévenir de telles catastrophes à l'avenir.
            </p>
          </div>
          {/* Pied de page du commentaire */}
          <div className="flex flex-wrap text-xs">
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="block mr-2" href="#0">
                <img className="rounded-full" src={UserImage01} width="24" height="24" alt="Utilisateur 01" />
              </a>
              <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                marie.tunisie
              </a>
            </div>
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                Répondre
              </a>
            </div>
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                Partager
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Commentaires imbriqués */}
      <ul className="space-y-5">
        {/* Commentaire 1.1 */}
        <li className="relative pl-9 space-y-5">
          {/* Contenu du commentaire */}
          <div className="flex items-start">
            {/* Upvote du commentaire */}
            <div className="absolute top-0 left-0">
              <button className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-500">
                <svg className="inline-flex fill-slate-400 dark:fill-slate-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path d="m0 6 6-6 6 6z" />
                </svg>
                <div>5</div>
              </button>
            </div>
            {/* Contenu du commentaire */}
            <div>
              {/* Texte du commentaire */}
              <div className="grow text-sm text-slate-800 dark:text-slate-100 space-y-2 mb-2">
                <p>
                  Oui, c'est une situation vraiment difficile pour de nombreuses personnes. Espérons que les autorités mettront en place des
                  mesures d'aide rapidement.
                </p>
              </div>
              {/* Pied de page du commentaire */}
              <div className="flex flex-wrap text-xs">
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="block mr-2" href="#0">
                    <img className="rounded-full" src={UserImage05} width="24" height="24" alt="Utilisateur 05" />
                  </a>
                  <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                    ahmed.tunisie
                  </a>
                </div>
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                    Répondre
                  </a>
                </div>
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                    Partager
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
    {/* Commentaire 2 */}
    <li className="relative pl-9 space-y-5">
      {/* Contenu du commentaire */}
      <div className="flex items-start">
        {/* Upvote du commentaire */}
        <div className="absolute top-0 left-0">
          <button className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center text-slate-600 dark:text-slate-300">
            <svg className="inline-flex fill-indigo-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 6 6-6 6 6z" />
            </svg>
            <div>19</div>
          </button>
        </div>
        {/* Contenu du commentaire */}
        <div>
          {/* Texte du commentaire */}
          <div className="grow text-sm text-slate-800 dark:text-slate-100 space-y-2 mb-2">
            <p>
              C'est tellement triste de voir notre beau pays submergé par les inondations. J'espère que des mesures d'urgence sont prises pour
              aider les victimes.
            </p>
          </div>
          {/* Pied de page du commentaire */}
          <div className="flex flex-wrap text-xs">
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="block mr-2" href="#0">
                <img className="rounded-full" src={UserImage02} width="24" height="24" alt="Utilisateur 02" />
              </a>
              <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                mohamedtunisien
              </a>
            </div>
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                Répondre
              </a>
            </div>
            <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
              <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                Partager
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Commentaires imbriqués */}
      <ul className="space-y-5">
        {/* Commentaire 2.1 */}
        <li className="relative pl-9 space-y-5">
          {/* Contenu du commentaire */}
          <div className="flex items-start">
            {/* Upvote du commentaire */}
            <div className="absolute top-0 left-0">
              <button className="text-xs font-semibold text-left w-6 rounded-sm flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-500">
                <svg className="inline-flex fill-slate-400 dark:fill-slate-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path d="m0 6 6-6 6 6z" />
                </svg>
                <div>3</div>
              </button>
            </div>
            {/* Contenu du commentaire */}
            <div>
              {/* Texte du commentaire */}
              <div className="grow text-sm text-slate-800 dark:text-slate-100 space-y-2 mb-2">
                <p>
                  Espérons que la solidarité entre les Tunisiens sera forte en cette période difficile. Chacun peut apporter sa contribution pour
                  aider.
                </p>
              </div>
              {/* Pied de page du commentaire */}
              <div className="flex flex-wrap text-xs">
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="block mr-2" href="#0">
                    <img className="rounded-full" src={UserImage09} width="24" height="24" alt="Utilisateur 03" />
                  </a>
                  <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                    nadia_solidarité
                  </a>
                </div>
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                    Répondre
                  </a>
                </div>
                <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                  <a className="font-medium text-slate-500 hover:text-slate-600 dark:hover:text-slate-400" href="#0">
                    Partager
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>
</article>
  );
}

export default ForumEntry;

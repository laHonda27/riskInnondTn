import React from 'react';

import UserImage from '../../images/user-40-04.jpg';

function ForumPostRightContent() {
  return (
<div className="w-full hidden xl:block xl:w-72">
  <div className="lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
    <div className="md:py-8">
      {/* Bouton */}
      <div className="mb-6">
        <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Créer un message d'aide</button>
      </div>

      {/* Blocs */}
      <div className="space-y-4">
        {/* Bloc 1 */}
        <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">Auteur du post</div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 shrink-0 mr-3">
              <img className="rounded-full" src={UserImage} width="40" height="40" alt="Utilisateur 04" />
            </div>
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-100">Ahmed Ben Ali</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">Membre de la communauté des secouristes 🚀</div>
            </div>
          </div>
          <ul className="text-sm space-y-2">
            <li>🔥 <span className="font-medium">28</span> Messages</li>
            <li>✍️ <span className="font-medium">143</span> Commentaires</li>
          </ul>
          <div className="mt-4">
            <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">Suivre</button>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded border border-slate-200 dark:border-slate-700">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-4">Messages populaires</div>
          <ul className="space-y-3">
            <li>
              <div className="text-sm mb-1">
                <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                  Besoin d'aide pour les inondations à Tunis, comment puis-je contribuer ?
                </a>
              </div>
              <div className="text-xs text-slate-500">
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                  Fatima Hassan
                </a>{' '}
                · Il y a 2 jours · 28 commentaires
              </div>
            </li>
            <li>
              <div className="text-sm mb-1">
                <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                  Signalement des zones touchées par les inondations à Sousse
                </a>
              </div>
              <div className="text-xs text-slate-500">
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                  Karim Amiri
                </a>{' '}
                · Il y a 1 jour · 14 commentaires
              </div>
            </li>
            <li>
              <div className="text-sm mb-1">
                <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                  Besoin d'évacuation d'urgence à Nabeul
                </a>
              </div>
              <div className="text-xs text-slate-500">
                <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                  Sami Gharbi
                </a>{' '}
                · Il y a 5 heures · 7 commentaires
              </div>
            </li>
          </ul>
          <div className="mt-4">
            <button className="btn-sm w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-none">Voir tout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ForumPostRightContent;

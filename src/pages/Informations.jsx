import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import MeetupImage from '../images/meetup-image.jpg';
import innond1 from '../images/innond/INOND1.jfif'
import innond2 from '../images/innond/INOND5.jfif'
import innond3 from '../images/innond/INOND3.jfif'
import MeetupPhoto02 from '../images/meetup-photo-02.jpg';
import video1 from '../images/innond/video1.png';
import video2 from '../images/innond/video2.png';
import Carousel from './carousel';


function Informations() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className=" mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
              <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">Consignes de sécurité face aux inondations en Tunisie</div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Préparation et Réaction aux Inondations en Tunisie</h1>
                  <p className="text-justify">Connaître et suivre des consignes de sécurité pour se préparer et réagir adéquatement aux inondations en Tunisie.</p>
                </header>


                {/* Post content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Consignes de sécurité face aux inondations en Tunisie</h2>
                  <p className="mb-6 text-justify">
                    <span className="font-semibold">La Tunisie, bien que majoritairement aride, n'est pas à l'abri des inondations,</span> en particulier pendant la saison des pluies. Il est donc essentiel de connaître et de suivre certaines consignes de sécurité pour se préparer et réagir adéquatement.
                  </p>
                  <h3 className="text-lg font-semibold mb-2">Avant l'inondation :</h3>
                  <ul className="list-disc list-inside mb-6">
                    <li>Informez-vous régulièrement de la météo et des alertes émises par les autorités locales.</li>
                    <li>Préparez un kit d'urgence contenant des vivres, de l'eau potable, une lampe torche, des piles, des médicaments essentiels et des vêtements chauds.</li>
                    <li>Évitez de construire près des zones inondables et assurez-vous que votre habitation dispose d'un bon système de drainage.</li>
                    <li>Élevez les appareils électriques et les objets de valeur pour les protéger de l'eau.</li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-2">Pendant l'inondation :</h3>
                  <ul className="list-disc list-inside mb-6">
                    <li>Ne tentez pas de traverser des zones inondées, que ce soit à pied ou en voiture. Même une faible profondeur d'eau peut être dangereuse.</li>
                    <li>Écoutez la radio ou regardez la télévision pour rester informé des dernières nouvelles et des directives des autorités.</li>
                    <li>Coupez l'électricité et le gaz pour éviter tout risque d'incendie ou d'électrocution.</li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-2">Après l'inondation :</h3>
                  <ul className="list-disc list-inside mb-6">
                    <li>Ne retournez pas chez vous avant que les autorités n'aient donné leur feu vert.</li>
                    <li>Vérifiez la stabilité des bâtiments et des infrastructures avant d'y pénétrer.</li>
                    <li>Évitez de consommer de l'eau du robinet sans la faire bouillir ou la traiter, car elle pourrait être contaminée.</li>
                    <li>Nettoyez et désinfectez tout ce qui a été en contact avec l'eau de l'inondation pour éviter les maladies.</li>
                  </ul>
                  <p className="mb-6 text-justify">
                    En suivant ces consignes, vous augmenterez vos chances de rester en sécurité face aux inondations en Tunisie. <span className="font-semibold">Il est toujours préférable de prévenir que de guérir.</span>
                  </p>
                </div>
                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                <div className="flex flex-wrap -mx-4"> 
                  {/* Photos */}
                  <div className="w-1/2 px-4"> {/* Prend la moitié de la largeur du conteneur */}
                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Photos (3)</h2>
                    <div className="grid grid-cols-1 my-6">
                      <Carousel/>                    
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="w-1/2 px-4"> {/* Prend la moitié de la largeur du conteneur */}
                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Témoignages habitants</h2>
                    <ul className="space-y-5 my-6">
                      <li className="flex items-start">
                        <div className="grow">
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Ahmed Ben Salah - Tunis</div>
                          <div className="italic">
                            “L'eau est montée si rapidement que nous n'avons pas eu le temps de sauver nos biens. C'était terrifiant.”
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="grow">
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Fatma Bouazizi - Sidi Bouzid</div>
                          <div className="italic">
                            “Nous avons perdu notre récolte à cause des inondations. C'est un coup dur pour notre famille.”
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="grow">
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Youssef El Kefi - Nabeul</div>
                          <div className="italic">
                            “Les inondations ont emporté une partie de la route. C'était presque impossible de sortir du quartier.”
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                {/* Similar Meetups */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Vidéos témoignages</h2>
                  <div className="space-y-8 sm:space-y-5 my-6 lg:mb-0 grid grid-cols-2 gap-4 ">
                    {/* Related item */}
                    <article className="mt-5 flex ml-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                      {/* Image */}
                      <a className="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0" href="#0">
                      <div className="relative flex items-center justify-center !my-4">
                        <img className="block w-full" src={video1} width="590" height="332" alt="Feed 01" />
                        <button className="absolute group">
                          <svg className="w-16 h-16" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-white opacity-80 group-hover:opacity-100 transition" cx="32" cy="32" r="32" />
                            <path
                              className="fill-indigo-500"
                              d="M40 33a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 28 26v14.002a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 40 33V33c0 .002 0 .002 0 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                      </a>
                      {/* Content */}
                      <div className="grow p-5 flex flex-col">
                        <div className='grow'>
                          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">16 Juin, 2016</div>
                          <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Se préparer face à une inondation | Catastrophes Majeures</h3>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article className="mt-5 flex ml-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                      {/* Image */}
                      <a className="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0" href="#0">
                      <div className="relative flex items-center justify-center !my-4">
                        <img className="block w-full" src={video2} width="590" height="332" alt="Feed 01" />
                        <button className="absolute group">
                          <svg className="w-16 h-16" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-white opacity-80 group-hover:opacity-100 transition" cx="32" cy="32" r="32" />
                            <path
                              className="fill-indigo-500"
                              d="M40 33a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 28 26v14.002a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 40 33V33c0 .002 0 .002 0 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                      </a>
                      {/* Content */}
                      <div className="grow p-5 flex flex-col">
                        <div className='grow'>
                          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">30 Octobre, 2018</div>
                          <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Hkayet Tounsia S03 Ep06 29 10 2018 P01</h3>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article className="mt-5 flex ml-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                      {/* Image */}
                      <a className="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0" href="#0">
                      <div className="relative flex items-center justify-center !my-4">
                        <img className="block w-full" src={video2} width="590" height="332" alt="Feed 01" />
                        <button className="absolute group">
                          <svg className="w-16 h-16" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-white opacity-80 group-hover:opacity-100 transition" cx="32" cy="32" r="32" />
                            <path
                              className="fill-indigo-500"
                              d="M40 33a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 28 26v14.002a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 40 33V33c0 .002 0 .002 0 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                      </a>
                      {/* Content */}
                      <div className="grow p-5 flex flex-col">
                        <div className='grow'>
                          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">30 Octobre, 2018</div>
                          <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Hkayet Tounsia S03 Ep06 29 10 2018 P03</h3>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article className="mt-5 flex ml-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                      {/* Image */}
                      <a className="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0" href="#0">
                      <div className="relative flex items-center justify-center !my-4">
                        <img className="block w-full" src={video2} width="590" height="332" alt="Feed 01" />
                        <button className="absolute group">
                          <svg className="w-16 h-16" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-white opacity-80 group-hover:opacity-100 transition" cx="32" cy="32" r="32" />
                            <path
                              className="fill-indigo-500"
                              d="M40 33a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 28 26v14.002a.999.999 0 0 0 1.573.819l10-7A.995.995 0 0 0 40 33V33c0 .002 0 .002 0 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                      </a>
                      {/* Content */}
                      <div className="grow p-5 flex flex-col">
                        <div className='grow'>
                          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">30 Octobre, 2018</div>
                          <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Hkayet Tounsia S03 Ep06 29 10 2018 P02</h3>
                          </a>
                        </div>
                      </div>
                    </article>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default Informations;
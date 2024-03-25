// components/Posts.js
import React, { useState, useEffect } from 'react';

import data from '../Jsons/publications.json';

function Posts() {
    const [donnees, setDonnees] = useState('');
    const [publication, setPub] = useState('');
    const [source, setSource] = useState('');
    useEffect(() => {
        // if (data.length > 0) {
        //     setPub(data[0].post);
        // }
    }, []); // Utilisez useEffect pour effectuer l'appel à setPub une fois au montage du composant


    // Fonction pour récupérer la donnée
    const saveData = () => {
        console.log(donnees);
    };


    // Fonction pour récupérer la source d'une image
    const showImage = (imag) => {
        setSource(imag);
        setPub(data[0].post);
        setDonnees({
            "post": data[0].post,
            "urlImage": [
                imag
            ],
            "number_of_characters": data[0].number_of_characters
        });
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("menu").classList.remove("hidden");
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setSource('');
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("menu").classList.add("hidden");
    };

    const items = [];
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            let images = [];
            if (item.urlImages && Array.isArray(item.urlImages)) { // Vérifiez si urlImage est un tableau
                for (let y = 0; y < item.urlImages.length; y++) {
                    let imag = "index-" + y;
                    images.push(<img key={y} class="w-[49%] border-gray-400 border-[1px] h-[270px] cursor-pointer rounded" id={imag} onClick={() => showImage(item.urlImages[y])} src={item.urlImages[y]} alt='image générée' />);
                }
            }

            items.push(
                <div key={i} class="flex justify-between">
                    <div class="basis-[55%] text-[16px] font-bold">{item.post}</div>
                    <div class="flex gap-2 flex-wrap justify-between basis-[40%]">{images}</div>
                </div>
            );
        }
    } else {
        items.push(<div>Pas de publications disponibles</div>)
    }

    return (
        <div class="bg-gray-100 transition-colors duration-300 h-screen pt-10">
            <div class="bg-white shadow rounded-lg w-[70%] m-auto py-4">
                <h2 class="font-bold text-[#f84525] text-2xl mb-2 px-4">Publication</h2>
                <div class="flex flex-col gap-y-2 px-4">
                    {items}
                </div>
            </div>
            <div class="hidden relative flex justify-center items-center z-50" id="modal">
                <div id="menu" class="hidden w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                    <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50">
                        <div class="w-[600px] relative flex flex-col justify-center items-center">
                            <span onClick={() => closeModal()}
                                class="cursor-pointer fixed z-50 top-[12px] right-[25px] border-gray-300 border-[1px] bg-gray-900 aspect-square rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="white" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </span>
                            <div class="bg-white rounded">
                                <div class="flex flex-col gap-y-4 py-4 px-12 max-h-[700px] overflow-y-auto scrollbar-w-4 scrollbar-track-white scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full scrollbar-thumb-hover-blue-900">
                                    <p class="text-[14px]">{publication}</p>
                                    <img src={source} alt="image"
                                        class="object-cover w-full h-[380px] rounded" />
                                </div>
                                <div class="flex justify-end p-3 border-gray-400 border-t-[1px]">
                                    <button class="bg-[#f84525] text-white p-2 rounded" onClick={() => saveData()}>Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //   return (
    //     <div>
    //       <h2>Publications</h2>
    //       <pre>{JSON.stringify(data, null, 2)}</pre>
    //       <ul>
    //         {data.map(item => (
    //           <li>{item.post}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
}

export default Posts;

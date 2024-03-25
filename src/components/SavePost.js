// Donnees.js
import React, { useState, useEffect } from 'react';
import donneesJSON from '../sauvegarde.json';

import { TERipple } from 'tw-elements-react';


function SavePost() {
  const [donnees, setDonnees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Utilisation des données importées directement
    setDonnees(donneesJSON);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
  
      {donnees.map(element => (
        <table className="table-auto border-collapse border border-black">
        <thead>
          <tr>
            <th>Post</th>
            <th>Images</th>
            <th>Nombre de caractères</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map(element => (
            <tr key={element.id}>
              <td>{element.post}</td>
              <td>{element.urlImages} </td>
                
             
              <td>{element.number_of_characters}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
      ))}
    </div>
  );
}

export default SavePost;

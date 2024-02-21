import { useState, useEffect, useCallback } from "react";
import React from 'react'
import Select from "react-select";
import axios from "axios";
import Swal from 'sweetalert2';
import './Generated.css'
const client = axios.create({
  baseURL: "http://localhost:8000"
});


const config = {
  headers: { "Content-Type": "multipart/form-data" }
};

function Generate() {
  const contentTopic = [
    "Voyages éco-responsables en Europe",
    "Recettes végétariennes savoureuses",
    "Entraînements à domicile efficaces",
    "Décoration d'intérieur minimaliste",
    "Productivité et gestion du temps",
    "Exploration de cultures étrangères",
    "Apprentissage de compétences numériques",
    "Automobilité durable et véhicules électriques",
    "Bien-être et méditation pour débutants",
    "Entrepreneuriat et création d'entreprise",
  ];

  const ConstentStyle = [
    { value: "Inspirant et motivant", label: "Inspirant et motivant" },
    { value: "Humoristique et décontracté", label: "Humoristique et décontracté" },
    { value: "Informatif et éducatif", label: "Informatif et éducatif" },
    { value: "Émotionnel et touchant", label: "Émotionnel et touchant" },
    { value: "Pratique et concret", label: "Pratique et concret" },
    { value: "Poétique et descriptif", label: "Poétique et descriptif" },
    { value:  "Provocant et controversé", label:  "Provocant et controversé"},
    { value:  "Technique et détaillé", label:  "Technique et détaillé" },
    { value:  "Narratif et captivant", label:  "Narratif et captivant" },
    { value: "Visuel et esthétique", label: "Visuel et esthétique"}
  ]

  const ImageStyle = [
    "Réaliste et époustouflant",
    "Artistique et créatif",
    "Minimaliste et épuré",
    "Surréaliste et imaginatif",
    "Vintage et nostalgique",
    "Futuriste et avant-gardiste",
    "Abstrait et conceptuel",
    "Naturel et organique",
    "Cartoon et illustré",
    "Sombre et mystérieux"
  ]

  const RequestLanguage = [
    "Request language 1",
    "Request language 2",
    "Request language 3",
    "Request language 4",
    "Request language 5",
    "Request language 6"
  ]

  const GeneratedPostLanguage = [
    "Generated Post language 1",
    "Generated Post language 2",
    "Generated Post language 3",
    "Generated Post language 4",
    "Generated Post language 5",
    "Generated Post language 6"
  ]

  const [formData, setFormData] = useState({
    ContentTopic: "",
    ConstentStyle: "",
    ImageStyle: "",
    RequestLanguage: "",
    GeneratedPostLanguage: "",
    NumberOfCaracter: "", // Ajout du champ "type"
    Content: "",
    // ContentTopic: "",
  });

  const [formContentTopic] = useState("");
  const [formConstentStyle] = useState("");
  const [formImageStyle] = useState("");
  const [formRequestLanguage] = useState("");
  const [formGeneratedPostLanguage] = useState("");
  const [formNumberOfCaracter, setFormNumberOfCaracter] = useState("");
  const [formContent] = useState("");
  useEffect(() => {

  }, []);


  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await client.post("/api/auth/register", formData, config);
      if (response.data.success) {
        Swal.fire({
          title: "Inscription réussie",
          text: "Vos identifiants sont correcte",
          icon: "success",
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.href = '/tapeCode'
        }, 2000)

      } else {
        Swal.fire({
          title: "Erreur",
          text: response.data.error,
          showConfirmButton: true,
          confirmButtonColor: "red",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }

  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto p-4 relative">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 w-full">
            <div className="flex jsutify-between items-center">
              <div>
                <h1 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-100">Formulaire de création d'un Post pour les réseaux sociaux</h1>
                <p className="text-gray-600 dark:text-gray-300">Remplissez les cases suivants pour générer un article compte tenu de vos attentes</p>
              </div>
              {/* <div>
                <button
                  className="middle none center mr-4 bg-[#f84525] rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Sauvegarder les données
                </button>
              </div> */}
            </div>
            <div className="main flex border rounded-full overflow-hidden m-4 select-none">
              <div className="title py-3 my-auto px-5 bg-[#f84525] text-white text-sm font-semibold mr-3">Gender</div>
              <label className="flex items-center justify-center radio p-2 cursor-pointer">
                <input className="my-auto transform scale-125 accent-[#f84525]" type="radio" name="sfg" />
                <div className="title px-2">Linkedin</div>
              </label>

              <label className="flex items-center justify-center radio p-2 cursor-pointer">
                <input className="my-auto transform scale-125 accent-[#f84525]" type="radio" name="sfg" />
                <div className="title px-2">Twitter</div>
              </label>
              <label className="flex items-center justify-center radio p-2 cursor-pointer">
                <input className="my-auto transform scale-125 accent-[#f84525]" type="radio" name="sfg" />
                <div className="title px-2">Instagram</div>
              </label>
              <label className="flex items-center justify-center radio p-2 cursor-pointer">
                <input className="my-auto transform scale-125 accent-[#f84525]" type="radio" name="sfg" />
                <div className="title px-2">Facebook</div>
              </label>
              <label className="flex items-center justify-center radio p-2 cursor-pointer">
                <input className="my-auto transform scale-125 accent-[#f84525]" type="radio" name="sfg" />
                <div className="title px-2">Blog</div>
              </label>
            </div>

            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Content topic </p>

              <input type="email" x-model="email" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="content topic" />
            </div>

            <div className="mt-2 m-4">
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase"> Content style </p>
                <Select options={ConstentStyle}
                className="mt-2 p-2 border border-gray-300 text-gray-600  rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                  
                </Select>
              </div>



            </div>
            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Image style </p>
              <select className="mt-2 p-2 border text-gray-600  border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option>Style 1</option>
                <option>Style 2</option>
                <option>Style 3</option>
                <option>Style 4</option>
                <option>Style 5</option>
              </select>

            </div>

            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Content </p>

              <textarea x-model="email" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="content" />
            </div>


            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Nombre de caractere </p>

              <input type="number" x-model="email" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="content topic" />
            </div>

            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Request language </p>
              <select className="mt-2 p-2 border text-gray-600  border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option>Request language 1</option>
                <option>Request language 2</option>
                <option>Request language 3</option>
                <option>Request language 4</option>
                <option>Request language 5</option>
              </select>

            </div>

            <div className="mt-2 m-4">
              <p className="text-xs font-semibold text-gray-700 uppercase"> Generated posts language </p>
              <select className="mt-2 p-2 border text-gray-600  border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
                <option>Generated posts language 1</option>
                <option>Generated posts language 2</option>
                <option>Generated posts language 3</option>
                <option>Generated posts language 4</option>
                <option>Generated posts language 5</option>
              </select>

            </div>


            {/* <div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
					<input type="text" placeholder="First name" className="border p-2 rounded w-full">
					<input type="text" placeholder="Last name" className="border p-2 rounded w-full">
                </div>
					<div className="mb-4">
						<input type="email" placeholder="Email address" className="border p-2 rounded w-full">
                </div>
						<div className="mb-4">
							<select className="border p-2 rounded w-full">
                        <option>United States</option>
                        <!-- Add more countries as needed -->
                    </select>
						</div>
						<div className="mb-4">
							<input type="text" placeholder="Street address" className="border p-2 rounded w-full">
                </div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								<input type="text" placeholder="City" className="border p-2 rounded w-full">
								<input type="text" placeholder="State / Province" className="border p-2 rounded w-full">
								<input type="text" placeholder="ZIP / Postal code" className="border p-2 rounded w-full">
                </div>
								<button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                    Toggle Theme
                </button>
			</div> */}
            <div className="mx-4">

              {/* <button
                className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Sauvegarder les données
              </button> */}

              <button
                className="middle none center mr-4 rounded-lg bg-[#f84525]  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Sauvegarder les données
              </button>

            </div>
          </div>

        </div></div>


      {/* <div classNameName="bg-style2 signup bg-[#e9edf5]">
        <div classNameName="flex items-center justify-center">
          <div classNameName="user-card items-center mt-[40px] lg:mb-[102px] pb bg-gray-50 w-6/12">
            <div classNameName="w-full lg:px-10">
             

              <form onSubmit={handleSubmit} classNameName="flex flex-col gap-2 font-mont pt-[37px]">
                <div classNameName="flex gap-5">
                  <div classNameName="flex flex-col w-full">
                    <label classNameName=" text-[13px]" htmlFor="firstname">
                      Prénom
                      <span classNameName="text-sm text-red-500"> *</span>
                    </label>
                    <input
                      classNameName="placeholder-[#9F9F9F] h-12   border-swoork-blue p-[15px] mb-[9px] rounded-lg border w-full"
                      type="text"
                      required
                      name="firstname"
                      placeholder="Votre prénom"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                    <span classNameName="text-sm text-red-500">
                      {formFirstnameError}
                    </span>
                  </div>

                  <div classNameName="flex flex-col w-full">

                    <label classNameName=" text-[13px]" htmlFor="lastname">
                      Nom
                      <span classNameName="text-sm text-red-500"> *</span>
                    </label>
                    <input
                      classNameName="placeholder-[#9F9F9F] h-12 h-12 border-swoork-blue p-[15px] mb-[9px] rounded-lg border w-full"
                      type="text"
                      required
                      name="lastname"
                      placeholder="Votre nom"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                    <span classNameName="text-sm text-red-500">
                      {formLastnameError}
                    </span>
                  </div>
                </div>

                <div classNameName="flex gap-5">
                  <div classNameName="flex flex-col w-full ">
                    <label classNameName=" text-[13px]" htmlFor="username">
                      Nom d'utilisateur
                      <span classNameName="text-sm text-red-500"> *</span>
                    </label>
                    <input
                      classNameName="placeholder-[#9F9F9F]  h-12 border-swoork-blue p-[15px] mb-[9px] rounded-lg border w-full "
                      type="text"
                      required
                      name="username"
                      placeholder="Votre nom d'utilisateur"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    <span classNameName="text-sm text-red-500">
                      {formUsernameError}
                    </span>
                  </div>

                  <div classNameName="flex flex-col w-full">


                    {emailParam ? ( // Utilisez l'expression conditionnelle pour afficher le loader
                      <div classNameName="flex flex-col">
                        <label classNameName="" htmlFor="email">
                          Adresse email{" "}
                          <span classNameName="text-sm text-red-500"> *</span>
                        </label>
                        <input
                          classNameName="placeholder-[#9F9F9F] h-12 p-[15px]  rounded-lg border"
                          type="email"
                          name="email"
                          required
                          placeholder="Votre adresse email"
                          value={emailParam}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <div classNameName="flex flex-col">
                        <label classNameName="" htmlFor="email">
                          Adresse email{" "}
                          <span classNameName="text-sm text-red-500"> *</span>
                        </label>
                        <input
                          classNameName="placeholder-[#9F9F9F] h-12 p-[15px]  rounded-lg border"
                          type="email"
                          name="email"
                          required
                          placeholder="Votre adresse email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />

                      </div>
                    )}

                    <span classNameName="text-sm text-red-500">{formEmailError}</span>
                  </div>

                </div>

                <div classNameName="flex gap-5">
                  <div classNameName="flex flex-col w-full">
                    <label classNameName=" text-[13px]" htmlFor="organisation">
                      Organisation
                    </label>
                    <input
                      classNameName=" w-full placeholder-[#9F9F9F] h-12  border-swoork-blue p-[15px] mb-[9px] rounded-lg border"
                      type="text"
                      name="organisation"
                      placeholder="Votre organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                    />
                    <span classNameName="text-sm text-red-500">
                      {formOrganisationError}
                    </span>
                  </div>

                  <div classNameName="flex flex-col w-full">
                    <label classNameName=" text-[13px]" htmlFor="organisation">
                      Type
                    </label>

                    <Select
                      classNameName="h-12 border-swoork-blue  p-[10px] mb-[9px] rounded-lg w-full"
                      options={TypeOrg}
                    // onChange={handleTypeChange}
                    />
                  </div>
                </div>

                <div classNameName="flex gap-5">
                  <div classNameName="flex flex-col w-full">
                    <label classNameName=" text-[13px]" htmlFor="password">
                      Mot de passe
                      <span classNameName="text-sm text-red-500"> *</span>
                    </label>
                    <div classNameName="relative">
                      <input
                        classNameName=" h-12 border-swoork-blue p-[15px] mb-[9px] rounded-lg border w-full"
                        type={showPassword ? "text" : "password"}
                        required
                        name="password"
                        placeholder="Votre mot de passe"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill={showPassword ? "black" : "gray"}
                        classNameName="absolute m-auto -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                        viewBox="0 0 16 16"
                        onClick={togglePasswordVisibility}
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                    <span classNameName="text-sm text-red-500">
                      {formPasswordError}
                    </span>
                  </div>

                  <div classNameName="flex flex-col w-full">
                    <label classNameName=" text-[13px]" htmlFor="password">
                      Confirmer le mot de passe
                      <span classNameName="text-sm text-red-500"> *</span>
                    </label>
                    <div classNameName="relative w-full">
                      <input
                        classNameName="h-12 border-swoork-blue p-[15px] mb-[9px] rounded-lg border w-full"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        required
                        placeholder="Confirmer votre mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"

                        fill={showConfirmPassword ? "black" : "gray"}
                        classNameName="absolute m-auto -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                        viewBox="0 0 16 16"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                    <span classNameName="text-sm text-red-500">
                      {formConfirmPasswordError}
                    </span>
                  </div>

                </div>

                <button
                  type="submit"
                  classNameName="bg-swoork-blue rounded-lg text-white lg:px-[135px] lg:py-[17px]  hover:scale-105 duration-300 text-lg font-mont-sm_bold"
                >
                  Soumettre
                </button>
              </form>

       
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Generate;



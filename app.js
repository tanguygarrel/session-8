var app = new Vue({
  el: '#app',
  data: {
    firstName: "Tanguy",
    lastName: "Garrel-Jaffrelot",
    description: "Je suis étudiant en journalisme et affaires internationales à Sciences Po Paris",
    photo: "./Identity picture.jpeg",
    twitter: "@tanguyGarJaff",
    mail: "tanguy.garreljaffrelot@sciencespo.fr",
    experiences: [{
      dateBegin: false,
      dateEnd: "Today",
      name: "Pizzeria Luigi",
      title: "Serveur",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      logo: 'téléchargement.png',
    }, {
      dateBegin: "Été 2013",
      dateEnd: false, 
      name: "Abattoirs de Cantoin",
      title: "Désosseur",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }, {
      dateBegin: "2012",
      dateEnd: "2013",
      name: "Piscine de Palavas-les-Flos",
      title: "Stagiaire",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }],
    Education: [{
      dateBegin: "2016",
      dateEnd: "2019",
      name: "Master Journalism & International Affairs",
      university: "Sciences Po Paris",
      logo: "téléchargement.png",
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Bachelor of Social Sciences & Fundamental Sciences",
      university: "Sciences Po Paris et Sorbonne Université"
    }],
    languages: ["Anglais", "Espagnol", "Arabe"],
    skills: ["Adobe Premier", "Pack Office", "D3.js", "CSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})
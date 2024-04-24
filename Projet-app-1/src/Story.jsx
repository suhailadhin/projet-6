import React from "react";

const Story = () => {
    return (
     <div> <p>Portfolio de Adhin Stan Suhail</p>
     <section className="Story">
      <h2>Stan Suhail Adhin &lt;/&gt;</h2>
      <article className="explicite">
        <p className="presentation">Bonjour et Bienvenue dans mon Portofolio. Je m'appelle Adhin Stan Suhail, j'ai 29 ans et je suis développeur front-end spécialisé dans le développement web. Depuis deux ans, je travaille en tant que freelance, offrant mes services pour créer des interfaces utilisateur dynamiques et intuitives pour divers clients. Ma passion pour le design et la programmation me permet de transformer les concepts créatifs en sites web fonctionnels et esthétiques.
        <br />J'ai fais une formation diplomante chez OpenClassroom dans le domaine Intégrateur Web pendant 9 Mois.
        <br />J'ai appris à coder sur le language basique HTML et CSS. Ensuite j'ai appris à maitriser le language Javascript en complément du framewoork React. J'ai utiliser la librairie Boostrapp et VusJs.
        <br />J'ai réalisé des projets professionelle ainsi dans la formation que vous verrez ci-dessous.</p>
        {/* Add more content here */}
      </article>
        <ul className="detail">
        <li>Développement front-end</li>
        <li>Conception d'interfaces utilisateur</li>
        <li>Résolution de problèmes et débogage</li>
        <li>Adaptation et mise à jour de sites existants pour améliorer leur fonctionnalité et leur design</li>
        <li>Autonome et capable de travailler de manière indépendante</li>
        <li>Créatif et soucieux du détail</li>
        <li>Passionné par l'apprentissage continu et la mise à jour des compétences</li>
        <li>Frameworks comme React, Vue.js</li>
        <li>Rigoureux, soigneux</li>
        </ul>
     </section>
     </div>
    );
}

export default Story; // Make sure to export the Story component as default

// You can also export other components or values if needed
// export const SomeOtherComponent = () => {
//   return <div>Some other component</div>;
// }

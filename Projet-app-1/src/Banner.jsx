import React from "react";
import image1 from './assets/image/figma.png';
import image2 from './assets/image/github.png';
import image3 from './assets/image/html-5.png';
import image4 from './assets/image/js.png';
import image5 from './assets/image/library.png';
import image6 from './assets/image/sass.png';

const Banner = () => {
    return (
        <section className="Banner-Competence">
            <div className="banner">
                <h2>Mes compétences &lt;/&gt; </h2>
            </div>
            <div className="article-container">
                <article className="article">
                    <div className="article-1">
                        <img src={image1} alt="Figma logo"></img>
                        <p>Figma</p>
                    </div>
                </article>

                <article className="article">
                    <div className="article-2">
                        <img src={image2} alt="Github logo"></img>
                        <p>Github</p>
                    </div>
                </article>

                <article className="article">
                    <div className="article-3">
                        <img src={image3} alt="Html 5 logo"></img>
                        <p>Html 5</p>
                    </div>
                </article>

                <article className="article">
                    <div className="article-4">
                        <img src={image4} alt="Javascript logo"></img>
                        <p>Javascript</p>
                    </div>
                </article>

                <article className="article">
                    <div className="article-5">
                        <img src={image5} alt="React logo"></img>
                        <p>React</p>
                    </div>
                </article>

                <article className="article">
                    <div className="article-6">
                        <img src={image6} alt="Sass logo"></img>
                        <p>Sass</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Banner;

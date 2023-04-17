class FilmItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set film(film) {
    this._film = film;
    this.render();
  }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .container-film {
            max-width: 70%;
            margin: 0 auto;
            height: 100%;
          }
          
          .grid {
            gap: 3%;
            margin: 5% 0;
          }
          
          .card {
            overflow: hidden;
            padding: 20px;
            background: linear-gradient(160deg, #408E91,#146C94);
            text-align: center;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;
          }
          
          
          .card_img img {
            width: 100%;
            height: auto;
          }
          
          .card_body {
            padding: 26px 20px 36px 20px;
          }
          
          .card_title {
            font-family: 'Merriweather',serif;
            font-weight: 700;
            text-transform: capitalize;
            font-size: 30px;
            padding-bottom: 20px;
            color: #F6F1E9;
          }
          
          .card_body p {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            color: #cdcdd6;
            margin-bottom: 10px;
          }
          
          @media only screen and (max-width: 1441px) and (min-width: 1025px) {
            .container-film {
                max-width: 80%;
            }
          
            .grid {
                gap: 2%;
            }
          
            .card {
                padding: 15px;
            }
          
            .card_body {
                padding: 15px;
            }
          
            .card_title {
                font-size: 22px;
                padding-bottom: 14px;
            }
          
            .card_body p {
                font-size: 16px;
            }
          
          }
          
          @media only screen and (max-width: 1024px) {
          
            .grid {
                grid-template-columns: 1fr;
                gap: 2%;
            }
          }
          
          @media only screen and (max-width: 425px) {
            .container-film {
                max-width: 90%;
            }
          
            .card {
                padding: 20px 10px;
            }
          
            .card_body {
                padding: 7px;
            }
          
            .card_title {
                font-size: 20px;
                padding-bottom: 7px;
            }
          
            .card_body p {
                font-size: 14px;
            }
          
          }
          
        </style>
        <div class="container-film">
           <div class="grid">
                <div class="card">
                    <div class="card_img">
                        <img src="${this._film.Poster}" alt="Fan Art">
                    </div>
                    <div class="card_body">
                        <h2 class="card_title">${this._film.Title}</h2>
                        <p>${this._film.Year}</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  }
   
  customElements.define('film-item', FilmItem);
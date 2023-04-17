class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
  }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        .search {
          margin: 0;
          padding: 40px;
          width: 93%;
          background: linear-gradient(160deg, #408E91,#146C94);
        }
        
        .search h2{
          font-size: 25px;
          font-weight: 500;
          padding: 5px;
          text-align: center;
          color: #ECF2FF;
        }
        
        .container-cari {
          max-width: 910px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          display: flex;
          margin-left: 10%;
          top: 10px;
          background-color: white;
        }
        
        .container-cari > input {
          width: 100%;
          padding: 16px;
          border: 0;
          font-weight: bold;
        }
        
        .container-cari > input:focus {
          outline: 0;
          border-bottom: 2px solid #408E91;
        }
        
        .container-cari > input:focus::placeholder {
          font-weight: bold;
        }
        
        .container-cari >  input::placeholder {
          color: #408E91;
          font-weight: normal;
        }
        
        .container-cari > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          color: #408E91;
          border: 3px solid #408E91;
          text-transform: uppercase;
          border-radius: 10px;
          background: transparent;
        }
        
        .container-cari > button:hover {
          background: linear-gradient(160deg, #408E91,#146C94);
          color:#ECF2FF;
        }
        
        @media screen and (max-width: 550px){
        
          .search {
            margin-top: 100px;
            width: 81%;
          }
        
          .container-cari {
            flex-direction: column;
            margin-right: 10%;
          }
        
          .container-cari > input {
            width: 100%;
            margin-bottom: 12px;
          }
        
          .container-cari > button {
            width: 100%;
          }
        }
        
        </style>
        <div id="search" class="search">
            <h2>Search Your Movie.....</h2>
            <div id="container-cari" class="container-cari">
                <input placeholder="Cari....." id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        </div>
      `;

      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }

customElements.define('search-bar', SearchBar);
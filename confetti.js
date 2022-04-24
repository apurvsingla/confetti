let matchData = [];

class Confetti extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
        .container {
          width: 100%;
          height: 100%;
        }
        
        .confetti {
          width: 15px;
          height: 15px;
          position: absolute;
          left: 50%;
          animation: confetti 4s ease-in-out -2s infinite;
          transform-origin: left top;
        }
        
        .confetti:nth-child(1) {
          background-color: tomato;
          left: 10%;
          animation-delay: 0;
        }
        
        .confetti:nth-child(2) {
          background-color: #95c3de;
          left: 20%;
          animation-delay: -5s;
        }
        
        .confetti:nth-child(3) {
          background-color: cyan;
          left: 30%;
          animation-delay: -3s;
        }
        
        .confetti:nth-child(4) {
          background-color: orange;
          left: 40%;
          animation-delay: -2.5s;
        }
        
        .confetti:nth-child(5) {
          background-color: chocolate;
          left: 50%;
          animation-delay: -4s;
        }
        
        .confetti:nth-child(6) {
          background-color: #ff9a91;
          left: 60%;
          animation-delay: -6s;
        }
        
        .confetti:nth-child(7) {
          background-color: #f2d74e;
          left: 70%;
          animation-delay: -1.5s;
        }
        
        .confetti:nth-child(8) {
          background-color: #95c3de;
          left: 80%;
          animation-delay: -2s;
        }
        
        .confetti:nth-child(9) {
          background-color: red;
          left: 90%;
          animation-delay: -3.5s;
        }
        
        .confetti:nth-child(10) {
          background-color: green;
          left: 100%;
          animation-delay: -2.5s;
        }
        
        .confetti:nth-child(11) {
          background-color: chartreuse;
          left: 10%;
          animation-delay: 0;
        }
        
        .confetti:nth-child(12) {
          background-color: crimson;
          left: 20%;
          animation-delay: -5s;
        }
        
        .confetti:nth-child(13) {
          background-color: coral;
          left: 30%;
          animation-delay: -3s;
        }
        
        .confetti:nth-child(14) {
          background-color: darkmagenta;
          left: 40%;
          animation-delay: -2.5s;
        }
        
        .confetti:nth-child(15) {
          background-color: darkslategrey;
          left: 50%;
          animation-delay: -4s;
        }
        
        .confetti:nth-child(16) {
          background-color: hotpink;
          left: 60%;
          animation-delay: -6s;
        }
        
        .confetti:nth-child(17) {
          background-color: pink;
          left: 70%;
          animation-delay: -1.5s;
        }
        
        @keyframes confetti {
          0% {
            transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
          }
        
          25% {
            transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
          }
        
          50% {
            transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
          }
        
          75% {
            transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
          }
        
          100% {
            transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
          }
        }
        </style>
        <div class="container">
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
          <div class="confetti">
          </div>
        </div>
    `;
  }
}

customElements.define("as-confetti", Confetti);
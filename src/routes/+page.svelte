<script>
  import ResumePreviewImg from '../static/Kevin_Dial_Resume_2023_v2_png.png';
  import ResumePdf from '../static/Kevin_Dial_Resume_2023_v2.pdf';
  import ThreeDWorldImg from '../static/3dworld-preview.png';
  import GamegameImg from '../static/gamegame-preview.png';
  import WavygameImg from '../static/wavygame-preview.png';
  import DaytracerImg from '../static/daytracer-preview.png';
  import AMSImg from '../static/airmilesshops-preview.png';
  import PepperdataImg from '../static/pepperdata-preview.png';
</script>

<h1>Hi! I'm Kevin, welcome to my site :)</h1>

<section>
  <div class="work-container">
    <a href={ResumePdf} target="_blank" rel="noreferrer">
      <img class="work-image" src={ResumePreviewImg} alt="resume preview" />
    </a>
    <div class="work-description">
      <strong>Resume</strong>
      Here is my resume updated – 2023
    </div>
  </div>
</section>

<!-- work exp -->
<section>
  <h2>Toy projects</h2>

  <div class="work-container">
    <a href="https://daytracer.app/" target="_blank" rel="noreferrer">
      <img class="work-image" src={DaytracerImg} alt="daytracer logo" />
    </a>
    <div class="work-description">
      <strong>Daytracer.app</strong>
      Building a desktop application to help Freelancers track their time and assign time to projects
      so its easier to build invoices – 2021
    </div>
  </div>

  <div class="work-container">
    <a href="https://dashboard.pepperdata.com" target="_blank" rel="noreferrer">
      <img class="work-image" src={PepperdataImg} alt="pepperdata dashboard preview" />
    </a>
    <div class="work-description">
      <strong>Pepperdata auth component</strong>
      Built the auth components which features smooth css transisions between different views – 2018
    </div>
  </div>

  <div class="work-container">
    <a href="https://airmilesshops.ca" target="_blank" rel="noreferrer">
      <img class="work-image" src={AMSImg} alt="airmilesshops logo" />
    </a>
    <div class="work-description">
      <strong>AirMilesShops.ca</strong>
      Built the website with a team while working at TribalScale – 2017
    </div>
  </div>
</section>

<!-- toy projects -->
<section>
  <h2>Toy projects</h2>

  <div class="work-container">
    <a href="https://3d.kevindial.com/" target="_blank" rel="noreferrer">
      <img class="work-image" src={ThreeDWorldImg} alt="3d world preview" />
    </a>
    <div class="work-description">
      <strong>3dworld</strong>
      Using computer's GPU to ray trace a 3D world in the browser – 2021
    </div>
  </div>

  <div class="work-container">
    <a href="https://gamegame-production.up.railway.app/" target="_blank" rel="noreferrer">
      <img class="work-image" src={GamegameImg} alt="gamegame preview" />
    </a>
    <div class="work-description">
      <strong>Gamegame</strong>
      websocket jump quest platformer – 2020
    </div>
  </div>

  <div class="work-container">
    <a href="https://wavy-game.kevindial.com" target="_blank" rel="noreferrer">
      <img class="work-image" src={WavygameImg} alt="wavy game preview" />
    </a>
    <div class="work-description">
      <strong>Wavygame</strong>
      html5 canvas game inspired by Flappy bird – 2016
    </div>
  </div>
</section>

<!-- links -->
<section class="links">
  <h2>Links</h2>

  <a href="https://github.com/kddial" target="_blank" rel="noreferrer"
    ><i class="fa fa-github" />github
  </a>
  <a href="https://ca.linkedin.com/in/kevindial" target="_blank" rel="noreferrer"
    ><i class="fa fa-linkedin-square" />linkedIn
  </a>
  <a href="http://myanimelist.net/animelist/kddial?status=2" target="_blank" rel="noreferrer"
    >myanimelist
  </a>
</section>

<!-- Get page views -->
<!-- todo use view-count.js -->

<!-- 1012 page views -->
<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 2rem 0;
  }

  .work-container {
    display: flex;
  }
  .work-image {
    border: 4px solid black;
    border-radius: 4px;
    transition: 0.2s border-color;
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
  .work-image:hover {
    border-color: rgb(32, 47, 222);
  }
  .work-description {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>

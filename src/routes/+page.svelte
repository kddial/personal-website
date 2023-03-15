<script>
  import ResumePreviewImg from '../static/Kevin_Dial_Resume_2023_v2_png.png';
  import ResumePdf from '../static/Kevin_Dial_Resume_2023_v2.pdf';
  import ThreeDWorldImg from '../static/3dworld-preview.png';
  import GamegameImg from '../static/gamegame-preview.png';
  import WavygameImg from '../static/wavygame-preview.png';
  import DaytracerImg from '../static/daytracer-preview.png';
  import AMSImg from '../static/airmilesshops-preview.png';
  import PepperdataImg from '../static/pepperdata-preview.png';
  import WorkPreview from '../lib/work-preview.svelte';
</script>

<h1>Hi! I'm Kevin, welcome to my site :)</h1>

<section class="work-projects">
  <WorkPreview
    importedImg={ResumePreviewImg}
    importedImgAltText="resume preview"
    workUrl={ResumePdf}
  >
    <strong>Resume</strong>
    <div>Here is my resume updated – 2023</div>
  </WorkPreview>
</section>

<!-- work exp -->
<h2>Work experience</h2>
<section class="work-projects">
  <WorkPreview
    workUrl="https://daytracer.app/"
    importedImg={DaytracerImg}
    importedImgAltText="daytracer logo"
  >
    <strong>Daytracer.app</strong>
    <div>
      Building a desktop application to help Freelancers track their time and assign time to
      projects so its easier to build invoices – 2021
    </div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://pepperdata.com"
    importedImg={PepperdataImg}
    importedImgAltText="pepperdata dashboard preview"
  >
    <strong>Pepperdata auth component</strong>
    <div>
      Built the auth components which features smooth css transisions between different views – 2018
    </div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://airmilesshops.ca"
    importedImg={AMSImg}
    importedImgAltText="airmilesshops logo"
  >
    <strong>AirMilesShops.ca</strong>
    <div>Built the website with a team while working at TribalScale – 2017</div>
  </WorkPreview>
</section>

<!-- toy projects -->
<h2>Toy projects</h2>
<section class="work-projects">
  <WorkPreview
    workUrl="https://3d.kevindial.com"
    importedImg={ThreeDWorldImg}
    importedImgAltText="3d world preview"
  >
    <strong>3dworld</strong>
    <div>Using computer's GPU to ray trace a 3D world in the browser – 2021</div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://gamegame-production.up.railway.app"
    importedImg={GamegameImg}
    importedImgAltText="gamegame preview"
  >
    <strong>Gamegame</strong>
    <div>websocket jump quest platformer – 2020</div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://wavy-game.kevindial.com"
    importedImg={WavygameImg}
    importedImgAltText="wavy game preview"
  >
    <strong>Wavygame</strong>
    <div>html5 canvas game inspired by Flappy bird – 2016</div>
  </WorkPreview>
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
  section.work-projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }

  section.links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
</style>

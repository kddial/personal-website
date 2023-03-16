<script>
  import ResumePreviewImg from '../static/Kevin_Dial_Resume_2023_v2_png.png';
  import ResumePdf from '../static/Kevin_Dial_Resume_2023_v2.pdf';
  import ThreeDWorldImg from '../static/3dworld-preview.png';
  import GamegameImg from '../static/gamegame-preview.png';
  import WavygameImg from '../static/wavygame-preview.png';
  import DaytracerImg from '../static/daytracer-preview.png';
  import AMSImg from '../static/airmilesshops-preview.png';
  import PepperdataImg from '../static/pepperdata-preview.png';

  import WorkPreview from '../lib/components/WorkPreview.svelte';
  import Space from '../lib/components/Space.svelte';
  import BlogDirectory from '../lib/blog-components/BlogDirectory.svelte';
</script>

<h1 class="root-title">
  Hi! I'm Kevin <br /> Welcome to my site :)
</h1>

<section class="work-projects">
  <WorkPreview
    importedImg={ResumePreviewImg}
    importedImgAltText="resume preview"
    workUrl={ResumePdf}
    workTitle="Resume"
  >
    <div>Here is my resume – 2023</div>
  </WorkPreview>
</section>

<!-- work exp -->
<h2>Work experience</h2>
<section class="work-projects">
  <WorkPreview
    workUrl="/work/daytracer"
    importedImg={DaytracerImg}
    importedImgAltText="daytracer logo"
    workTitle="Daytracer.app"
    shouldOpenNewTab={false}
  >
    <div>
      Building a desktop application to help Freelancers track their
      time and assign time to projects so its easier to build invoices
      – 2021
    </div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://pepperdata.com"
    importedImg={PepperdataImg}
    importedImgAltText="pepperdata dashboard preview"
    workTitle="Pepperdata auth component"
  >
    <div>
      Built the auth components which features smooth css transisions
      between different views – 2018
    </div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://airmilesshops.ca"
    importedImg={AMSImg}
    importedImgAltText="airmilesshops logo"
    workTitle="AirMilesShops.ca"
  >
    <div>
      Built the website with a team while working at TribalScale –
      2017
    </div>
  </WorkPreview>
</section>

<!-- toy projects -->
<h2>Toy projects</h2>
<section class="work-projects">
  <WorkPreview
    workUrl="https://3d.kevindial.com"
    importedImg={ThreeDWorldImg}
    importedImgAltText="3d world preview"
    workTitle="3dworld"
  >
    <div>
      Using computer's GPU to ray trace a 3D world in the browser –
      2021
    </div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://gamegame-production.up.railway.app"
    importedImg={GamegameImg}
    importedImgAltText="gamegame preview"
    workTitle="Gamegame"
  >
    <div>Multiplayer websocket jump quest platformer – 2020</div>
  </WorkPreview>

  <WorkPreview
    workUrl="https://wavy-game.kevindial.com"
    importedImg={WavygameImg}
    importedImgAltText="wavy game preview"
    workTitle="Wavygame"
  >
    <div>Canvas game inspired by Flappy bird – 2016</div>
  </WorkPreview>
</section>

<BlogDirectory />

<Space height={2} />

<!-- links -->
<section class="links">
  <a href="https://github.com/kddial" target="_blank" rel="noreferrer"
    ><i class="fa fa-github" /> GitHub
  </a>
  <a
    href="https://ca.linkedin.com/in/kevindial"
    target="_blank"
    rel="noreferrer"
    ><i class="fa fa-linkedin-square" /> LinkedIn
  </a>
  <a
    href="http://myanimelist.net/animelist/kddial?status=2"
    target="_blank"
    rel="noreferrer"
  >
    MyAnimeList
  </a>
</section>

<style>
  .root-title {
    margin-top: 0.25rem;
  }

  section.work-projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }
</style>

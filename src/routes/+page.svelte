<script>
  import ResumePreviewImg from '../static/Kevin_Dial_Resume_2023_v2_png.png';
  import ResumePdf from '../static/Kevin_Dial_Resume_2023_v2.pdf';
</script>

<h1>Hi! I'm Kevin, welcome to my site :)</h1>

<section>
  <div class="work-container">
    <a href={ResumePdf} target="_blank" rel="noreferrer">
      <img class="work-image" src={ResumePreviewImg} alt="resume preview" height="100px" />
    </a>
    <div class="work-description"><strong>Resume</strong> Here is my resume updated for 2023</div>
  </div>
</section>

<!-- work exp -->
<section />

<!-- school -->
<section />

<!-- toy projects -->
<section>
  <div>
    <a href="https://3d.kevindial.com/" target="_blank" rel="noreferrer"> 3dworld</a>
    – using computer's GPU to ray trace a 3D world in the browser - 2021
  </div>

  <div>
    <a href="https://gamegame-production.up.railway.app/" target="_blank" rel="noreferrer">
      Gamegame</a
    >
    – a websocket jump quest platformer - 2020
  </div>

  <div>
    <a href="https://wavy-game.kevindial.com" target="_blank" rel="noreferrer"> Wavygame</a>
    – html5 canvas game inspired by Flappy bird - 2016
  </div>
</section>

<!-- links -->
<section class="links">
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
    border: 3px solid black;
    border-radius: 4px;
    transition: 0.2s border-color;
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

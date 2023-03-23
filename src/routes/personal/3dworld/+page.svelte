<script>
  import Space from '../../../lib/components/Space.svelte';
  import videoFile from '../../../media/3dworld/3d-preview-video.mov';

  const videoUrl = videoFile + '#t=0.1';
</script>

<h1>3d world</h1>

<a
  href="https://github.com/kddial/ray-tracing-tutorial"
  target="_blank"
  rel="noreferrer"
>
  <i class="fa fa-github" />
  Github code
</a>
<a href="https://3d.kevindial.com" target="_blank" rel="noreferrer">
  🎉 Click here to play the game
</a>

<p>
  Ray tracing a 3d world in the browser using javascript, math
  calulations are utilizing GPU hardware for fast performance.
</p>
<p>
  – on desktop, use WASD to move player and mouse to move screen
  <br />
  – on mobile, touch bottom left quadrant to move player and touch bottom
  right quadrant to move screen
</p>

<h4>Tech used</h4>
<ul>
  <li>GPU.js</li>
  <li>Typescript</li>
  <li>React</li>
</ul>

<Space height={1} />

<h4>Demo Video</h4>
<video src={videoUrl} controls preload="auto" />

<style>
  a {
    display: block;
    margin: 0.5rem 0;
  }
  video {
    height: 400px;
  }
</style>

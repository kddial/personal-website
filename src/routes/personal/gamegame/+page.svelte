<script>
  import Space from '../../../lib/components/Space.svelte';
  import videoFile from '../../../media/gamegame/gamegame-preview-video.mov';

  const videoUrl = videoFile + '#t=0.1';
</script>

<h1>Gamegame</h1>

<a
  href="https://github.com/kddial/gamegame"
  target="_blank"
  rel="noreferrer"
>
  <i class="fa fa-github" />
  Github code
</a>
<a
  href="https://gamegame-production.up.railway.app/"
  target="_blank"
  rel="noreferrer"
>
  🎉 Click here to play the game
</a>

<p>
  Built gamegame to jump around with friends with chat. Jump quest is
  heavily inspired by Maplestory. Works on both mobile and desktop
  devices.

  <br />
  Credit: Player sprite is from
  <a
    class="credit-a"
    href="https://rvros.itch.io/animated-pixel-hero"
    target="_blank"
    rel="noreferrer">rvros.itch.io</a
  >
</p>

<p class="controls-paragraph">
  {`Controls:
"wasd" or "arrow keys" to move
"w" or "up-arrow-key" or "spacebar" to jump

Chat: Focus on the input field by pressing the "enter" key,
then type your message, then press "enter" again to send.
`}
</p>

<h4>Tech used</h4>
<ul>
  <li>Typescript</li>
  <li>WebSockets</li>
</ul>

<p />

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

  .controls-paragraph {
    white-space: pre-line;
  }

  .credit-a {
    display: inline-block;
  }
</style>

<script>
  import videoFile from '../../../media/wavy-game/wavy-game-preview.mov';

  const videoUrl = videoFile + '#t=0.1';
</script>

<h1>Wavygame</h1>

<a
  href="https://github.com/kddial/wavy-game"
  target="_blank"
  rel="noreferrer"
>
  <i class="fa fa-github" />
  Github code
</a>
<a
  href="https://wavy-game.kevindial.com/"
  target="_blank"
  rel="noreferrer"
>
  🎉 Click here to play the game
</a>

<p>
  Built the game with vanilla JavaScript and was heavily influenced by
  Flappy Bird.
</p>

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

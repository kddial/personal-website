<script>
  import pepperdataAuthLoginVideo from '../../../media/pepperdata-auth/pepperdata-auth-login-video.mov';
  import pepperdataAuthExplainerVideo from '../../../media/pepperdata-auth/pepperdata-auth-explainer-video.mov';
  import Space from '../../../lib/components/Space.svelte';

  const demoVideoUrl = pepperdataAuthLoginVideo + '#t=0.1';
  const explainVideoUrl = pepperdataAuthExplainerVideo + '#t=0.1';
</script>

<h1>Pepperdata auth component</h1>

<p>Auth component was built with:</p>
<ul>
  <li>React.js for handling state of which screen to display</li>
  <li>CSS animations for sliding between each view</li>
</ul>

<h4>Demo video of the auth component</h4>
<video src={demoVideoUrl} controls preload="auto" />

<Space height={2} />
<h4>How was it built?</h4>

<p>
  When you break it down, its actually a carousel of views with a
  container that hides all overflow views. Here is a quick prototype
  video made using Figma to demonstrate what is going on with simple
  shapes.
</p>
<video src={explainVideoUrl} controls preload="auto" />

<style>
  p {
    margin: 0;
  }
</style>

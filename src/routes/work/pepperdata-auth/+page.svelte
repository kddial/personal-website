<script>
  import pepperdataAuthLoginVideo from '../../../../static/pepperdata-auth/pepperdata-auth-login-video.mov';
  import pepperdataAuthExplainerVideo from '../../../../static/pepperdata-auth/pepperdata-auth-explainer-video.mov';
  import Space from '../../../lib/components/Space.svelte';
</script>

<h1>Pepperdata auth component</h1>

<p>Auth component was built with:</p>
<ul>
  <li>React.js for handling state of which screen to display</li>
  <li>CSS animations for sliding between each view</li>
</ul>

<h4>Demo video of the auth component</h4>
<!-- svelte-ignore a11y-media-has-caption -->
<video src={pepperdataAuthLoginVideo} controls preload="auto" />

<Space height={2} />
<h4>How was it built?</h4>

<p>
  When you break it down, its actually a carousel of views with a
  container that hides all overflow views. Here is a quick prototype
  video made using Figma to demonstrate what is going on with simple
  shapes.
</p>
<!-- svelte-ignore a11y-media-has-caption -->
<video src={pepperdataAuthExplainerVideo} controls preload="auto" />

<style>
  p {
    margin: 0;
  }

  video {
    width: 100%;
  }
</style>

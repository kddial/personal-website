<script>
  import FlexGapExample from '../../../lib/blog-components/FlexGapExample.svelte';
  import Space from '../../../lib/components/Space.svelte';
  import BlogTitle from '../../../lib/blog-components/BlogTitle.svelte';

  export let data;
</script>

<BlogTitle data={data} />

<p>
  Using <code>gap</code> inside <code>flexbox</code> is a simple
  solution to give you uniform spacing between elements. Previously I
  would use <code>margin</code> on all elements except for
  <code>first-child</code>
  and <code>last-child</code>, which was a clunky solution. The gap
  property was originally introduced for CSS Grids but it has been
  brought over for Flexbox support since 2021 (see sources).
</p>

<h4>Flexbox with gap example</h4>
<section class="example-body">
  <h5>Code</h5>
  <code class="code-snippet"
    >{`<section>
  <div class="card">Dog</div>
  <div class="card">Cat</div>
  <div class="card">Chicken</div>
  <div class="card">Cow</div>
</section>

<style>
  section {
    border: 1px solid black;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    background: pink;
    width: 400px;
    height: 50px;
  }
<\/style>
  `}
  </code>

  <h5>Result</h5>
  <FlexGapExample />
</section>

<Space height={2} />

<section class="links">
  <h4>Resources</h4>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://caniuse.com/flexbox-gap"
  >
    CanIUse Flexbox gap
  </a>

  <a
    target="_blank"
    rel="noreferrer"
    href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
  >
    MDN Browser compatibility for Gap in Flex layout
  </a>
</section>

<style>
  .example-body {
    margin-left: 1rem;
  }
</style>

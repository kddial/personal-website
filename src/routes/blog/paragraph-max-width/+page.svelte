<script>
  import Space from '../../../lib/components/Space.svelte';
</script>

<h1>Paragraph max width using ch unit</h1>

<p>
  Paragraphs have a sweet spot for best readability around 50 - 70
  characters width. So instead of using pixel values for max-width,
  use CSS character units instead. It has been supported on almost all
  browsers since 2013 (see sources).
</p>
<div>
  <h4>CSS</h4>
  <code
    >{`
    p {
      max-width: 70ch;
    }
  `}</code
  >
</div>
<Space height={1} />

<h4>Resources</h4>
<section class="links">
  <a
    target="_blank"
    rel="noreferrer"
    href="https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_font"
  >
    MDN docs on CSS lengths
  </a>

  <a
    target="_blank"
    rel="noreferrer"
    href="https://developer.mozilla.org/en-US/docs/Web/CSS/length#browser_compatibility"
  >
    MDN Browser compatibility for ch unit
  </a>

  <a
    target="_blank"
    rel="noreferrer"
    href="https://caniuse.com/ch-unit"
  >
    CanIUse for ch unit
  </a>
</section>

<style>
  p {
    max-width: 70ch;
  }
</style>

<script>
  import '../lib/styles/base.css';
  import Space from '../lib/components/Space.svelte';
</script>

<div class="website-body-width">
  <Space height={0.5} />
  <slot />
  <Space height={1} />
</div>

<script>
  import Space from '../../../lib/components/Space.svelte';
</script>

<h1>The Space component</h1>

<p>
  My favourite way of putting space between content is using a <code
    >{`<Space />`}</code
  >
  component instead of adding a css class name and then a single css style
  for <code>{`margin-top`}</code>. Here are some examples below.
</p>

<div>
  <h4>Svelte component</h4>
  <code>
    {`
    // File name Space.svelte

    <script>
      export let width = false;
      export let height = false;

      if (width) {
        width = \`\${width}rem\`;
      }

      if (height) {
        height = \`\${height}rem\`;
      }
    </script>

    <div class="space" style:width style:height />
    `}
  </code>

  <h4>Svelte usage</h4>
  <code>
    {`
    <h1>Welcome to my internet corner!</h1>
    <Space height={1} />
    <p>This is where i share thoughts that keep recurring</p>
    `}
  </code>
</div>

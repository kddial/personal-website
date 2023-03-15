<script>
  import BlogTitle from '../../../lib/blog-components/BlogTitle.svelte';
  export let data;
</script>

<BlogTitle {data} />

<p>
  My favourite way of putting space between content is using a <code
    >{`<Space />`}</code
  >
  component instead of adding a css class name and then a single css style
  for <code>{`margin-top`}</code>. Here are some examples below.
</p>

<div>
  <h4>Usage</h4>
  <code class="code-snippet">
    {`
<h1>Welcome to my internet corner!</h1>
<Space height={1} />
<p>This is where i share thoughts</p>
    `}
  </code>

  <h4>React component</h4>
  <code class="code-snippet">
    {`
// File name space.js

function Space(props) {
  const { height = null, width = null } = props;

  const style = {};
  if (height) {
    style.height = \`\${height}rem\`;
  }

  if (width) {
    style.width = \`\${width}rem\`;
  }

  return <div className="space" style={style} />;
}
export default Space;
    `}
  </code>

  <h4>Svelte component</h4>
  <code class="code-snippet">
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
</div>

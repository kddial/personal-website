<script>
  import { _data as Blog1 } from '../../routes/blog/flex-gap/+page.js';
  import { _data as Blog2 } from '../../routes/blog/paragraph-max-width/+page.js';
  import { _data as Blog3 } from '../../routes/blog/the-space-component/+page.js';
  import { _data as Blog4 } from '../../routes/blog/intersection-observer/+page.js';

  const blogArray = [Blog1, Blog2, Blog3, Blog4];
</script>

<h2 id="blog-directory">Frontend dev tips</h2>
<section class="links">
  <ul>
    {#each blogArray as blogData}
      <li><a href={blogData.path}> {blogData.title}</a></li>
    {/each}
  </ul>
</section>

<style>
  a {
    font-size: 20px;
  }

  ul {
    margin: 0;
    gap: 1rem;
  }
</style>

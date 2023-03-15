<script>
  import { _data as BlogFlexGapData } from '../../routes/blog/flex-gap/+page.js';

  const blogArray = [BlogFlexGapData];
</script>

<h2>Blogs</h2>
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
</style>

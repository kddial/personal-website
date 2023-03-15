<script>
  export let data;
</script>

<h1 class="blog-title">{data.title}</h1>
<div class="blog-date">Blog posted on {data.dateCreated}</div>

<style>
  .blog-title {
    margin-bottom: 0.5rem;
  }
  .blog-date {
    font-size: 14px;
    color: rgb(61, 61, 69);
    margin-bottom: 1.5rem;
  }
</style>

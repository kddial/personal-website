<script>
  import Space from '../../../lib/components/Space.svelte';
  import BlogTitle from '../../../lib/blog-components/BlogTitle.svelte';
  import { page } from '$app/stores';

  const iframeUrl =
    $page.url.origin + '/resources/intersection-observer-demo.html';

  export let data;
</script>

<BlogTitle {data} />

<p>Here is an example of how to use Interesction Observer API.</p>

<div>
  <h4>Demo</h4>
  <a href={iframeUrl} target="_blank" rel="noreferrer"
    >Click here to view demo</a
  >
</div>
<Space height={1} />

<div>
  <h4>HTML</h4>
  <code class="code-snippet"
    >{`
  <div class="root-top-margin root-margin">top margin</div>
  <div class="root-bottom-margin root-margin">bottom margin</div>

  <div class="feed">
    <div class="box">Box</div>
    <div class="space"></div>

    <div class="box">Box</div>
    <div class="space"></div>

    <div class="box">Box</div>
    <div class="space"></div>

    <!-- more boxes -->
  </div>

  `}</code
  >
</div>
<Space height={1} />

<div>
  <h4>JS</h4>
  <code class="code-snippet"
    >{`
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className = 'box fill';
      } else {
        entry.target.className = 'box';
      }
    });
  }

  const options = {
    root: document,
    rootMargin: '-200px 0px -210px 0px', // use negative margins on document's viewport
    threshold: 0.2, // 20% visible will execute callback on entry
  };
  let observer = new IntersectionObserver(observerCallback, options);

  const entiresToObserve = document.querySelectorAll('.box');
  entiresToObserve.forEach((entry) => {
    observer.observe(entry);
  });
  `}</code
  >
</div>
<Space height={1} />

<div>
  <h4>CSS</h4>
  <code class="code-snippet"
    >{`
  body {
    margin: 0;
    padding: 0;
  }
  .feed {
    max-width: 400px;
    margin: 0 auto;
  }

  .root-margin {
    text-align: right;
    position: fixed;
    height: 200px;
    width: 100%;
    background: rgb(137, 137, 137);
    opacity: 50%;
  }

  .root-top-margin {
    left: 0;
    top: 0;
    border-bottom: 1px solid black;
  }

  .root-bottom-margin {
    left: 0;
    bottom: 0;
    border-top: 1px solid black;
  }

  .box {
    height: 4rem;
    width: 100%;
    background: rgb(234, 234, 234);
    transition: 1s background-color;
  }

  .box.fill {
    background: lightgreen;
  }

  .space {
    height: 10rem;
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
    href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
  >
    MDN docs on Intersection Observer API
  </a>
</section>

<style>
  p {
    max-width: 70ch;
  }
</style>

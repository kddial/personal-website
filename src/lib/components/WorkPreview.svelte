<script>
  export let importedImg;
  export let importedImgAltText;
  export let workUrl;
  export let workTitle;
  export let shouldOpenNewTab = true;

  let aProps = {};
  if (shouldOpenNewTab) {
    aProps = { target: '_blank', rel: 'noreferrer' };
  }
</script>

<div class="work-container">
  <a href={workUrl} {...aProps}>
    <img
      class="work-image"
      src={importedImg}
      alt={importedImgAltText}
    />
  </a>
  <div class="work-description">
    <a class="title-link" href={workUrl} {...aProps}>
      {workTitle}
    </a>
    <slot />
  </div>
</div>

<style>
  .work-container {
    display: flex;
  }
  .work-image {
    border: 2px solid black;
    border-radius: 4px;
    transition: 0.2s border-color;
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
  .work-image:hover {
    border-color: rgb(27, 45, 239);
  }
  .work-description {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 70ch;
  }
  .title-link {
    font-size: 18px;
    letter-spacing: 0.5px;
    width: fit-content;
  }
</style>

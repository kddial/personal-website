<script>
  export let importedImg;
  export let importedImgAltText;
  export let workUrl;
</script>

<div class="work-container">
  <a href={workUrl} target="_blank" rel="noreferrer">
    <img
      class="work-image"
      src={importedImg}
      alt={importedImgAltText}
    />
  </a>
  <div class="work-description">
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
    border-color: rgb(32, 47, 222);
  }
  .work-description {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 70ch;
  }
</style>

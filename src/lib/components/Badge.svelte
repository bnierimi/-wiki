<script lang="ts">
  export let text: string = ""
  export let link: string = ""

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
  const style = `${focusStyle} rounded-xl bg-blue-700/20 hover:bg-blue-700 text-blue-700 hover:text-blue-100 mx-0.5 my-0.5 py-0.5 px-3 font-medium`
</script>

{#if link.length === 0}
  <p class={style}>
    {text}
  </p>
{:else}
  <a href={link} class={style}>
    {text}
  </a>
{/if}

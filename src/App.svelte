<script lang="ts">
  import Hero from './lib/Hero.svelte'
  import Form from './lib/Form.svelte'
</script>

<main>
  <Hero />
  <Form />
</main>

<style>
  main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 0.5fr 1fr;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    main {
      display: block;
    }
  }
</style>

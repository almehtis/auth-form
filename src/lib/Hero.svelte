<script>
  import Sputniks from './Sputniks.svelte'
</script>

<div class="hero">
  <h1>Sequids</h1>
  <p>We design and create websites for aliens, not humans</p>
  <Sputniks />

  <span>A: 249261000 km, P: 206650000 km.</span>
</div>

<style>
  .hero {
    display: grid;
    place-items: center;
    background-color: oklch(45.74% 0.163 280.84);
    color: oklch(100% 0 0);
    height: 100vh;
    padding: 1rem;
  }

  h1 {
    font-size: 3.7rem;
    text-align: center;
    line-height: normal;
    font-family: "MartianMono-Bold", sans-serif;
    font-weight: bold;
  }

  p {
    text-align: center;
    margin-top: -3rem;
    font-family: "MartianMono-Regular", sans-serif;
    font-weight: normal;
  }

  span {
    text-align: center;
    align-self: flex-end;
    padding-bottom: 3rem;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    .hero {
      display: none;
    }
  }
</style>

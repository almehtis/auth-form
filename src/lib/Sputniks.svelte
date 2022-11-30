<div>
  <div class="deimos-orbit">
    <div class="sputnik" />

    <div class="phobos-orbit">
      <div class="sputnik" />

      <div class="mars" />
    </div>
  </div>
</div>

<style>
  .deimos-orbit {
    display: grid;
    border: 1px solid oklch(0 0 0);
    border-radius: 50%;
    width: 21.8rem;
    height: 21.8rem;
    -webkit-animation: spin-right 19s linear infinite;
    animation: spin-right 19s linear infinite;
  }

  .phobos-orbit {
    display: grid;
    border: 1px solid oklch(0 0 0);
    border-radius: 50%;
    margin: auto;
    width: 9rem;
    height: 9rem;
    animation: spin-right 10s linear infinite;
  }

  .mars {
    display: grid;
    background-color: oklch(100% 0 0);
    border-radius: 50%;
    margin: auto;
    width: 2.5rem;
    height: 2.5rem;
  }

  .sputnik {
    position: absolute;
    left: 50%;
    top: -0.5rem;
    background-color: oklch(100% 0 0);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  @keyframes spin-right {
    100% {
      -webkit-transform: rotate(-360deg);
      -ms-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
</style>
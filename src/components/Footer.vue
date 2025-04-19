<!-- components/Footer.vue -->
<template>
  <footer>
    <div class="footer-widget">
      <a href="https://www.iti.es" target="_blank"><nuxt-img src="ITI-logo-dark.svg" alt="ITI" preview /></a>
    </div>
    <div class="footer-widget">
      <nuxt-img src="generalitat-dark.svg" alt="generalitat valenciana" preview />
      <nuxt-img src="ivace-dark.svg" alt="ivace" preview />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.3s;

  .footer-widget {
    max-width: 300px;
    min-width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-widget > * {
    min-height: 20px;
    max-height: 40px;
  }
  a {
    display: block;
    width: 100%;

    & > * {
      width: 100%;
      height: 100%;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>

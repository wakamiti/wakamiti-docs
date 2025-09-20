<!-- components/Footer.vue -->
<template>
  <footer>
    <div class="footer-widget">
      <span>Powered by:</span>
      <div class="logos">
        <a href="https://www.iti.es" target="_blank"><nuxt-img src="ITI-logo-dark.svg" alt="ITI" preview /></a>
      </div>
    </div>
    <div class="footer-widget" style="text-align: center; height: 100%; width: 100px !important">
      <div class="copyright">
        <span>© 2025 ITI</span>
      </div>
    </div>
    <div class="footer-widget">
      <span>Supported by:</span>
      <div class="logos">
        <nuxt-img src="generalitat-dark.svg" alt="generalitat valenciana" preview />
        <nuxt-img src="ivace-dark.svg" alt="ivace" preview />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 1rem;
  /*height: 60px;*/
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;

  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.3s;


  .footer-widget {
    /*max-width: 100%;*/
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    height: 100%;

    @media (max-width: 540px) {
      &:has(.copyright) {
        display: none;
      }
      flex-basis: 100%;
      align-items: center;
    }

    .copyright {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .logos {
      width: 200px;
      display: flex;
      justify-content: space-between;

      img {
        min-height: 20px;
        max-height: 40px;
      }
    }
    span {
      display: inline-block;
    }
    a {
      display: inline-block;
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
}
</style>
<script setup lang="ts">
</script>
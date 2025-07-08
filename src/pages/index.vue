<template>
  <header>
    <nuxt-img id="logo" src="logo-dark_2.svg" alt="Wakamiti" preview />
  </header>
  <main>
    <h1 title="caminamos hacia el futuro con la vista en el pasado">Ka mua, ka muri</h1>

    <p>
      Estamos rediseñando <strong>Wakamiti</strong> con la determinación de los grandes navegantes: una evolución que
      nace de lo aprendido, con una arquitectura más eficiente y una mejor experiencia de usuario.
    </p>
    <p>
      Mientras tanto, puedes seguir nuestra travesía a través de la hoja de ruta, o mantenerte al día con las nuevas
      versiones en nuestro canal de anuncios.
    </p>
    <p id="cta">
      <span class="button">
        <a href="https://github.com/orgs/wakamiti/projects/1" target="_blank">
          Hoja de ruta <Icon name="heroicons:map-solid" />
        </a>
      </span>
      <span class="button">
        <a href="https://github.com/orgs/wakamiti/discussions/categories/anuncios" target="_blank">
          Anuncios <Icon name="heroicons:megaphone-solid" />
        </a>
      </span>
    </p>
<!--    <form @submit.prevent="handleSubmit" class="subscription-form">-->
<!--      <div class="form-row">-->
<!--        <div class="input">-->
<!--          <input ref="input" v-model="email" type="email" :placeholder="placeholder" @focus.prevent="reset" />-->
<!--          <button type="submit" :disabled="submitted">➜</button>-->
<!--          <span v-if="submitted">✔</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->
  </main>
  <Footer />
</template>

<script setup>
// import { ref } from 'vue'
// const message = 'Correo electrónico'
//
// const email = ref('')
// const submitted = ref(false)
// const placeholder = ref(message)
// const input = ref(null)
//
// const handleSubmit = () => {
//   console.log('Correo suscrito:', email.value)
//   submitted.value = true
//   email.value = ''
//   placeholder.value = '¡Suscrito!'
//   input.value?.blur()
// }
// const reset = () => {
//   submitted.value = false
//   placeholder.value = message
// }
</script>

<style lang="scss">
body {
  background: url('@/assets/img/pexels-thales13-31192401.jpg') no-repeat bottom center fixed;
  background-size: cover;
}
header {
  padding: 5.5rem 2rem 0 2rem;

  opacity: 0;
  animation: fadeSlideDown 1s ease-out forwards;
  animation-delay: 0.3s;
}
main {
  padding: 2rem;
  flex: 1;
  max-width: 600px;
  display: block;
  margin: 0 auto;
}
h1 {
  font-size: 2.3rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--primary);
    margin: 1rem auto 0;
  }
}

#logo {
  width: 100%;
}
p {
  font-size: 1.03rem;
  color: var(--light);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: justify;
}

#cta {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5rem;

  .button {
    display: flex;
    flex-basis: 100%;
    width: 190px;
    backdrop-filter: blur(5px);

    @include respond-above(xs) {
      flex-basis: auto;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      border: 1px solid var(--primary);
      border-radius: 10px;
      width: 100%;
      text-align: center;
      color: var(--primary);
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        border: 0;
        background-color: color-mix(in srgb, var(--primary) 70%, rgba(0, 0, 0, 0));
        color: var(--dark);
        transform: scale(1.02);
        box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 50%, rgba(0, 0, 0, 0));
      }

      & > * {
        margin-left: 10px;
      }
    }

    &:nth-child(1) {
      opacity: 0;
      animation: fadeSlideLeft 1s ease-out forwards;
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      opacity: 0;
      animation: fadeSlideRight 1s ease-out forwards;
      animation-delay: 0.3s;
    }
  }
}



/*.subscription-form {
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.input input {
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid var(--light);
  border-radius: 999px;
  font-size: 1rem;
  outline: none;
  color: var(--light);
  background: transparent;
}
.input button, .input span {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
}
.input button {
  cursor: pointer;
  color: var(--primary);
  transition: color 0.2s ease;
}
.input span {
  right: 0.9rem;
}
.input button[disabled] {
  display: none;
}
.input button:hover {
  opacity: 0.7;
}*/
</style>

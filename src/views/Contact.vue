<template>
  <div class="contact">
    <div class="container">
      <h1>Kontakty</h1>
      <p>Kontaktujte nás pre získanie ďalších informácií.</p>
      <div class="contact-info">
        <p><strong>Email:</strong> valentyn.prudskyi@student.ufk.sk</p>
        <p><strong>Telefón:</strong> +421 952226104</p>
        <p><strong>Adresa:</strong> Nitra, Slovensko</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  padding: 2rem 0;
}

.contact h1 {
  margin-bottom: 1rem;
}

.contact-info {
  margin-top: 2rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}
</style>
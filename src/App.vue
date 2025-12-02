<template>
<div id="app">
<SiteHeader />
<main class="container">
<router-view />
</main>
<SiteFooter />
</div>
</template>


<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'


export default {
name: 'App',
components: { SiteHeader, SiteFooter }
}
</script>
import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReddit } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faReddit)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

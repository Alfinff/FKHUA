<template>
<div>
  <div class="container" v-if="namalogo">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
        <img :src="namalogo.picture_formated" class="d-inline-block align-top" alt="Kitten">
        {{ namalogo.title }}
      </b-navbar-brand>
      <div class="ms-auto">
        <b-button pill variant="outline-dark">Sign In</b-button>
      </div>
    </b-navbar>
  </div>
  <div>
    <b-navbar type="warning" variant="warning">
      <div class="container">
      <b-navbar-nav>
        <b-nav-item href="/" style="margin-right: 20px;">Beranda</b-nav-item>
        <b-nav-item href="/materi" style="margin-right: 20px;">Materi</b-nav-item>
        <b-nav-item href="/panduan" style="margin-right: 20px;">Panduan</b-nav-item>
        <!-- <b-nav-item-dropdown text="Materi" right style="margin-right: 20px;">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Panduan" right style="margin-right: 20px;">
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['url'])
  },
  data () {
    return {
      namalogo: null
    }
  },
  mounted () {
    axios.get(`${this.url}api/namalogo`, {
			headers: {
				Authorization: localStorage.token
			}
		}).then((result) => {
			this.namalogo = result.data.data
		}).catch((err) => {
			console.log(err)
		})
  }
}

</script>
<template>
  <div class="footers">
    <div class="foot-top" v-if="namalogo">
      <div class="row m-0">
        <div class="col-lg-6 menufooter">
          <div class="logo-img">
            <a href="#" class="logo-dinsos-footer">
              <img width="36px" :src="namalogo.picture_formated" alt="" />
              <div>
                <h5>
                  {{ namalogo.title }}
                </h5>
              </div>
            </a>
          </div>
          <div class="d-flex">
            <a href="#" class="me-2" target="_blank">
              <img src="../assets/icons/icon-facebook.svg" alt="">
            </a>
            <a href="#" class="me-2" target="_blank">
              <img src="../assets/icons/icon-twitter.svg" alt="">
            </a>
            <a href="#" class="me-2" target="_blank">
              <img src="../assets/icons/icon-instagram.svg" alt="">
            </a>
          </div>
        </div>
        <div class="col-lg-6 menufooter" v-if="footer">
          <div>
          <h5 class="foot-one-col" v-if="footer">
            {{ footer.subtitle }}
          </h5>
            <div class="title-footer">
              <h3>
                Info
              </h3>
            </div>
            <p>
              {{ footer.alamat }}
            </p>
            <p>
              {{ footer.telepon }}
            </p>
            <p>
              {{ footer.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <p>©Copyright. Universitas Airlangga. All Rights Reserved.</p>
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
      namalogo: null,
      footer: null
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
    axios.get(`${this.url}api/footer`, {
			headers: {
				Authorization: localStorage.token
			}
		}).then((result) => {
			this.footer = result.data.data
		}).catch((err) => {
			console.log(err)
		})
  }
}
</script>

<style>

</style>

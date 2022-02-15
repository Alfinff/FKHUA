<template>
    <div class="">
        <header>
          <div class="text-content-head">
          <p>Ada 39 program studi s-1 yang dimiliki Universitas Airlangga, salah satunya S-1 Pendidikan Dokter Hewam. Dekan Fakultas Kedokteran Hewan sekaligus koordinator prodi S-1 Pendidikan Dokter Hewan Prof. Dr. Pudji Srianto, drh., M.Kes bercerita kepada UNAIR NEWS tentang beragam hal menarik yang bisa mahasiswa dapatkan jika kuliah di prodi ini.</p>
          <h2>Mengapa Harus Kuliah di Kedokteran Hewan Universitas Airlangga?</h2>
        </div>
        </header>
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
      landing: null
    }
  },
  mounted () {
      axios
      .get(`${this.url}api/tes`)
      .then((result) => {
        this.landing = result.data.data
        console.log(this.landing)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
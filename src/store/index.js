/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: 'https://api-fkhua.primakom.co.id/',
        dataUser: [],
        dataProfile: null,
    },
    mutations: {
        GET_USER_PROFILE(state, data) {
            state.dataProfile = data
        },
    },
    actions: {
        getApi({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.get(`${this.state.url}${proto.url}`, proto.headers)
                    .then((res) => {
                        if (res.data.success) {
                            console.log(res.data)
                            resolve(res.data);
                            commit(proto.mutation, res.data);
                        } else if (res.data.message == "Unauthorize") {
                            Swal.fire(
                                "Gagal",
                                res.data.message,
                                "warning"
                            ).then(() => {
                                window.location.replace("/");
                                localStorage.clear();
                            });
                        } else {
                            console.log(res)
                            resolve(res.data);
                        }
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
        getApiFull({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.get(`${proto.url}`, proto.headers)
                    .then((res) => {
                        if (res.data.success) {
                            commit(proto.mutation, res.data);
                            resolve(res.data);
                        } else if (res.data.message == "Unauthorize") {
                            Swal.fire(
                                "Sesi habis!",
                                "Mohon melakukan login ulang",
                                "warning"
                            ).then(() => {
                                window.location.replace("/");
                                localStorage.clear();
                            });
                        }
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
        postApi({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.post(`${this.state.url}${proto.url}`, proto.data, proto.headers)
                    .then((res) => {
                        console.log(res)
                        if (res.data.success) {
                            Swal.fire("Berhasil", `${res.data.message}`, "success").then(() => {
                                    window.location.reload();
                                })
                                .catch(() => {
                                    window.location.reload();
                                });
                        } else if (res.data.message == 'Unauthorize') {
                            Swal.fire(
                                "Sesi habis!",
                                "Mohon melakukan login ulang",
                                "warning"
                            ).then(() => {
                                window.location.replace("/");
                                localStorage.clear();
                            });
                        } else {
                            Swal.fire("Gagal", `${res.data.message}`, "warning");
                        }
                        commit(proto.mutation, res.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
        patchApi({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.patch(`${this.state.url}${proto.url}`, proto.data)
                    .then((res) => {
                        commit(proto.mutation, res.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
        putApi({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.put(`${this.state.url}${proto.url}`, proto.data, proto.headers)
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire("Berhasil", `${res.data.message}`, "success").then(() => {
                                window.location.reload();
                            }).catch(() => {
                                window.location.reload();
                            });
                        } else if (res.data.message == 'Unauthorize') {
                            Swal.fire(
                                "Sesi habis!",
                                "Mohon melakukan login ulang",
                                "warning"
                            ).then(() => {
                                window.location.replace("/");
                                localStorage.clear();
                            });
                        } else {
                            Swal.fire("Gagal", `${res.data.message}`, "warning");
                        }
                        commit(proto.mutation, res.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
        // eslint-disable-next-line no-unused-vars
        deleteApi({ commit }, proto) {
            return new Promise((resolve, reject) => {
                Axios.delete(`${this.state.url}${proto.url}`, proto.headers)
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire(
                                    "Terhapus!",
                                    `Akun Berhasil dihapus!`,
                                    "success"
                                ).then(() => {
                                    window.location.reload();
                                })
                                .catch((err) => {
                                    window.location.reload();
                                    console.log(err);
                                });
                        } else if (res.data.message == 'Unauthorize') {
                            Swal.fire(
                                "Sesi habis!",
                                "Mohon melakukan login ulang",
                                "warning"
                            ).then(() => {
                                window.location.replace("/");
                                localStorage.clear();
                            });
                        } else {
                            Swal.fire("Gagal!", res.data.message, "warning");
                        }
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    });
            });
        },
    },
    modules: {}
})
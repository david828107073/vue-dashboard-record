<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // const myCookie = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    //   "$1"
    // );
    // console.log(`myCooike=${myCookie}`);
    // this.$http.defaults.headers.common.Authorization = myCookie;
    // const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    //API 伺服器路徑
    // 所申請的 API Path
    // console.log(api);
    // this.$http
    //   .get(api)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>

<template>
  <div class="home">
    <div class="home-card">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="home-content">

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  mounted() {
    // axios
    //   .get("/api/users")
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    axios
      .post("/api/Rbac/organization/getOrganizationDetail",
      
      {
      "token": "DR!HO4uA7B7!ComN",    
  "id": "3"
      },
      
      )
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
      //   axios
      // .post("http://120.25.170.10/Rbac/organization/addOrUpdateOrganization")
      // .then(function(res) {
      //   console.log(res);
      // })
      // .catch(function(err) {
      //   console.log(err);
      // });  
  },
  methods: {}
};
</script>

<style lang="scss">
@import "_a/css/style.scss";
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-card {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    & > div {
      flex: 1;
      height: 187px;
      border-radius: 10px;
      &:nth-of-type(1) {
        background: #4f9cff;
        margin-right: 16px;
      }
      &:nth-of-type(2) {
        background: #f86363;
        margin-right: 16px;
      }
      &:nth-of-type(3) {
        background: #f3b644;
      }
    }
  }
  &-content {
    background: #fff;
    border-radius: 10px;
    flex: 1;
  }
}
</style>

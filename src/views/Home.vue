<template>
  <div class="home">
    <div class="home-card">
      <div>
         <img :src="url" alt=""/>
      </div>
      <div>
      
      </div>
      <div>
     
      </div>
    </div>
    <div class="home-content">
      <div id="imgcontainer"></div>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" ></el-table-column>
        <el-table-column prop="name" label="姓名" ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      url: "",
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        
        ]
    
    };
  },
  mounted() {
    // axios
    //   .get("/api/users")
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });

            
            // axios.post("/api/loginpc/api/verify",
            // {
            //   responseType: 'blob'
            // }
            
            // )
            // .then(res => {
            //   console.log(res);
            //   console.log(window.URL.createObjectURL(res))
               
            // })

            // .catch(e => {
            //   console.log(e);
            // });

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/api/loginpc/api/verify", true);
    // xhr.responseType = "blob";
    // xhr.onload = function() {
    //   if (this.status == 200) {
    //     var blob = this.response;
    //     var img = document.createElement("img");
    //     img.onload = function(e) {
    //       window.URL.revokeObjectURL(img.src);//释放。
         
    //       setTimeout(()=>{
    //          axios
    //         .post("/api/loginpc/api/check", {
    //           tn_r: 120
    //         })
    //         .then(res => {
    //           console.log(res);
    //         })

    //         .catch(e => {
    //           console.log(e);
    //         });
    //       },1000)

           
    //     };
    //     img.src = window.URL.createObjectURL(blob);
    //     // console.log(window.URL.createObjectURL(blob))
    //     // $("#imgcontainer").html(img);
    //     var imgcontainer = document.getElementById("imgcontainer");
    //     imgcontainer.appendChild(img);
    //     console.log(window.URL.createObjectURL(blob))
    //   }
    // };
    // xhr.send();

    

    // axios
    //   .post("/api/Rbac/organization/getOrganizationDetail", {
    //     token: "DR!HO4uA7B7!ComN",
    //     id: "3"
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })

    //   .catch(e => {
    //     console.log(e);
    //   });

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
    
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    & > div {
      width: 30%;
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
    background: pink;
    border-radius: 10px;
    flex: 1;
  }
}
</style>

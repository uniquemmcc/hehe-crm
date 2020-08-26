<template>
  <!-- <el-container style="width:100%; height:100%;display:flex;">
    <el-aside style="width:auto;background:#fff;">
      <sider-menu :list="list" :isCollapse="isCollapse"></sider-menu>
    </el-aside>
    <el-container style="flex:1;">
      <el-header>
        <div @click="handleClick">Header</div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      
    </el-container>
  </el-container> -->
  <div class="layout">
     <div class="layout-asidebox" ref="asidebox">
     </div>
     <div class="layout-aside" ref="aside">
       <div class="layout-aside-logo"></div>
        <sider-menu :list="list" ></sider-menu>
     </div>
     <div class="layout-main">
        <div class="layout-main-header">  
          <my-header  @toggle="toggleEvent"></my-header>
        </div>
        <div class="layout-main-content">
            <router-view/>
        </div>
     </div>
  </div>
</template>

<script>
import SiderMenu from '_c/SiderMenu';
import MyHeader from '_c/MyHeader'
export default {
  name: "layout",
  components: {
    SiderMenu,
    MyHeader
  },
  data() {
    return {
      list: [],

      // isCollapse: false
    };
  },
  mounted() {
    console.log(this.$router.options.routes[2].children);
    this.list = this.$router.options.routes[2].children;
  },
  methods: {
    handleClick() {
      // this.isCollapse = !this.isCollapse;
    },
    toggleEvent(toggle){
      if(!toggle){
        this.$refs.asidebox.style.width = 0+'px'
        this.$refs.aside.style.transform = 'translate(-200px,0px)'
      }else{
        this.$refs.asidebox.style.width = 200+'px'
        this.$refs.aside.style.transform = 'translate(0px,0px)'
      }
    }
  }
};
</script>

<style lang="scss">
@import '_a/css/style.scss';
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
  
// }


.layout {
  width:100%;
  height: 100%;
  display: flex;
  position: relative;

  &-asidebox{
    width: 200px;
    background: #fff;
    transition: .5s ease;
  }
  &-aside{
    width: 200px;
 
    position: absolute;
    left: 0;
    top: 0;
    z-index:1;
    height: 100%;
    transition: .5s ease;

    &-logo{
      height: 60px;
    }
  }
  &-main{
    flex:1;
   
    display: flex;
    flex-direction: column;
    &-header {
       margin-left: 16px;
       height: 60px;
       background: #fff;
      
    }
    &-content {
      padding: 16px;  
       flex:1;
    }

  }
}
</style>


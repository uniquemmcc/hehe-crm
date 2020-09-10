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
     <div class="layout-asidebox" ref="asidebox" :class="toggle?'wd':'wd-in'">
            <div class="layout-aside" ref="aside" :class="toggle?'move':'move-in'">
       <div class="layout-aside-logo"></div>
        <sider-menu :list="list" ></sider-menu>
     </div>
     </div>

     <div class="layout-main "  :style="{width}"
     >
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

      // isCollapse: false,
       toggle: false,
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
      this.toggle = toggle
    }
  },
  computed: {
      width(){
          return this.toggle? '100%': 'calc(100% - 200px)'
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
  min-height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  &-asidebox{

    
    background: #fff;
  position: relative;
  }
  &-aside{
    height: 100%;
    background: #fff;
 position: absolute;
    left: 0;
    top: 0;

    &-logo{
      height: 60px;
    }
  }
  &-main{
      transition: .2s ease;
  /* height: 100%; */
  background: yellowgreen;
    // width: 100%;
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

  .move {
    transform: translate(-200px,0px);

    transition: .2s ease;
 }
   .move-in {
    transform: translate(0px,0px);
 
    transition: .3s ease;
 }
.wd {

    width: 0px;
    transition: .2s ease;
}
.wd-in{

      transition: .2s ease;
    width: 200px;
}


}


</style>


<template>
  <el-menu
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    :collapse="isCollapse"
    style="border:none;"
    
 
  
      :unique-opened="false"

    class="menu-container el-menu-vertical-demo"
  >


    <template v-for="item in list">
      <el-menu-item
        :index="item.name"
        v-if="!item.children"
           :key="item.name"
        :class="item.name===currentIndex?'active':''"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>


            <el-submenu
        v-if="item.children "
         :key="item.name"
        :index="item.name"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归 -->
       <re-submenu
   
        :parent="item"
  
        :current-index="currentIndex"
      ></re-submenu>
      </el-submenu>
    </template>
   
  </el-menu>
</template>

<script>

import ReSubmenu from './re-submenu.vue'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    isCollapse:{
      type: Boolean,
      default: false
    },

  },
  components: {
    ReSubmenu
  },
  data() {
    return {
      // isCollapse: true,
      activeIndex: "",
      currentIndex: ""
    };
  },
  methods: {
    handleOpen(index) {
      console.log(index)
       this.$router.push({
        name: index
      })
    },
    handleClose() {},
    handleSelect(index) {
      console.log(index);
      this.currentIndex = index;
      this.$router.push({
        name: index
      })
    }
  },
  watch: {
    activeIndex(newVal, oldVal) {
      console.log(newVal);
    }
  }
};
</script>

<style>
.menu-container i {
    /* color: #fff; */
}
.active {
  /* background: yellowgreen !important; */
}

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<template>
 <div>
    <div @click="handleAdd"><i class="el-icon-error"></i>add</div>
 </div>
</template>

<script>
export default {
  methods:{
    handleAdd(){
    //    this.$message('这是一条消息提示');
      this.$message({
        type: 'error',
        message: 'error',
        duration:0
      
      })

    // const h = this.$createElement;
    //     this.$message({
    //       message: h('p', null, [
    //         h('span', null, '内容可以是 '),
    //         h('i', { style: 'color: teal' }, 'VNode')
    //       ])
    //     });
    }
  }
}
</script>

<style>
.el-message {
  font-size: 16px;
}
</style>

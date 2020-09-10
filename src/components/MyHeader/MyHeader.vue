<template>
    <div class="myheader">
        
         <i class="el-icon-s-unfold" style="font-size:32px;padding:16px;"  @click="handleToggle"></i>
        
        <!-- <div>
           user
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            toggle: false,
        }
        
    },
    methods:{
        handleToggle(){
            this.toggle = !this.toggle
            this.$emit('toggle', this.toggle)
        }
    }

}
</script>

<style lang="scss">
.myheader {
    display: flex;
    height: 100%;
    align-items: center;
}
</style>

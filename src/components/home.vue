<template>
  
    <!-- <el-button type="info" @click="logout">退出</el-button> -->
        <el-container class="home-container">
            <!-- 头部 -->
            <el-header >
                <div class="logo">
                    <img src="../assets/ShopLogo.png" alt="">
                    <span>电商后台管理系统</span>
                </div>
                <div class="btn">
                    <el-button type="info">退出</el-button>
                </div>
            </el-header>
            <!-- 下部分 -->
            <el-container >
                <!-- 左侧 -->
                <el-aside width="200px">
                    <el-row class="tac">
                    <el-col :span="12">
                        <h5>默认颜色</h5>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="12">
                        <h5>自定义颜色</h5>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                    </el-row>
                </el-aside>
                <!-- 右侧 -->
                <el-main>Main</el-main>
            </el-container>
    </el-container>
  
</template>

<script>
export default {
    name:'home',
    methods: {
        logout(){
            window.sessionStorage.clear()
            this.$router.replace('/login')
        }
    },
}
</script>

<style scope>
.el-header{
    background-color: #373D41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0px !important;
}
.el-aside{
    background-color: #333744;
    
}
.el-main{
    background-color: #eaedf1;
}
.home-container{
    height: 100%;
}
.logo{
    display: flex;
    align-items: center;
}
.logo img{
    width: 60px;
    height: 60px;
    /* position:; */
    /* position: relative; */
    left: -100px;
}
.logo span{
    /* height: 60px; */
    position: relative;
    left: -13px;
    font-size: 20px;
    color:#fff;
    /* line-height: 60px; */
}


</style>
<template>
    <div>
        <div class="zfbrun_header">
            <img src="../assets/btn_back_icon.png" alt="" @click = "$router.go(-1)">
            <span style="font-size:1.125rem;">缘豆流水</span>
        </div>
        <div class="zfbrun_content">
            <div class="category">
                <span  :class="{'on' :color === '全部'}" @click="color = '全部'">全部</span>
                <span :class="{'on' :color === '聊天'}" @click="color = '聊天'">聊天</span>
                <span :class="{'on' :color === '购买'}" @click="color = '购买'">购买</span>
                <span :class="{'on' :color === '提现'}" @click="color = '提现'">提现</span>
            </div>
            <div class="zfbrun_list quanbu" v-show=" color === '全部'">
                <div class="zfbrun_box">
                    <div>
                        <p>霍城豆豆</p>
                        <p>2017-02-03 11:23</p>
                    </div>
                    <div class="zfbrun_box_right">
                        <p>-10缘豆</p>
                        <p>支付宝提现</p>
                    </div>
                </div>
            </div>
            <div class="zfbrun_list liaotian"  v-show=" color === '聊天'">
                <div class="zfbrun_box">
                    <div>
                        <p>霍城豆豆</p>
                        <p>2017-02-03 11:23</p>
                    </div>
                    <div class="zfbrun_box_right">
                        <p>-20缘豆</p>
                        <p>支付宝提现</p>
                    </div>
                </div>
            </div>
            <div class="zfbrun_list goumai "  v-show=" color === '购买'">
                <div class="zfbrun_box">
                    <div>
                        <p>霍城豆豆</p>
                        <p>2017-02-03 11:23</p>
                    </div>
                    <div class="zfbrun_box_right">
                        <p>-30缘豆</p>
                        <p>支付宝提现</p>
                    </div>
                </div>
            </div>
            <div class="zfbrun_list tixian"  v-show=" color ==='提现'">
                <div class="zfbrun_box">
                    <div>
                        <p>霍城豆豆</p>
                        <p>2017-02-03 11:23</p>
                    </div>
                    <div class="zfbrun_box_right">
                        <p>-40缘豆</p>
                        <p>支付宝提现</p>
                    </div>
                </div>
            </div>                                    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            color:'全部',
            num: '1',
            result:{
                
            }
        }
    }
}
</script>

<style lang="less">
.zfbrun_header {
    width: 100%;
    height: 44px;
    background: -webkit-linear-gradient(left, #7a55f3, #2ee2df);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #7a55f3, #2ee2df);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #7a55f3, #2ee2df);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #7a55f3, #2ee2df);
    color: #FFFFFF;
    line-height: 44px;
    text-align: center;
    img {
        width: .625rem;
        height: 18px;
        position: absolute;
        left: .9375rem;
        top: 13px;
    }
    .zfbrun_header_span {
        position: absolute;
        right: .9375rem;
    }
}
.zfbrun_content{
    .category{
        display: flex;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid #e5e5e5;
        span{
            width: 25%;
            display: inline-block;
            text-align: center;
            font-size: 14px;
            color: #666666;
        }
        .on{
            color: #4038A5;
        }
    }
    .zfbrun_list{ 
        
        .zfbrun_box{
            padding: 5px 15px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #e5e5e5;
            height: 50px;
            p{
                font-size: 14px;
                margin-top: 5px;
            }
            .zfbrun_box_right{
                text-align: right;
                
                p:nth-child(1){
                    color: #4038A5;
                }
                p{
                    font-size: 14px;
                }
            }
        }
    }
}
</style>

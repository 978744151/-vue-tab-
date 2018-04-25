<template>
    <div>

        <!-- <div class="draw_header">
            <img src="../assets/btn_back_icon.png" alt="" @click="$router.go(-1)">
            <span style="font-size:1.125rem;">收益提现</span>
            <span class="draw_header_span">提现记录</span>
        </div> -->
        <div class="draw_content">
            <div class="draw_yuandou">
                <p>收益缘币
                    <span>275000</span>
                </p>
            </div>
            <div class="draw_list">
                <div class="draw_method">
                    <div class="draw_img"><img src="../assets/zfb_z.png" alt=""></div>
                    <div class="draw_coin">
                        <span>需要5000缘币</span>
                        <p>提现50实到40元</p>
                    </div>
                    <span class="draw_checkbox">
                        <input type="radio" v-model="radio" value="5000" class="radio2">
                        <span :class="[radio == '5000'   ? 'check_draw_sel' : 'check_draw_nor']" class="check_draw_nor"></span>
                    </span>
                </div>
                <div class="draw_method">
                    <div class="draw_img"><img src="../assets/zfb_z.png" alt=""></div>
                    <div class="draw_coin">
                        <span>需要10000缘币</span>
                        <p>提现50实到40元</p>
                    </div>
                    <span class="draw_checkbox">
                        <input type="radio" v-model="radio" value="10000" class="radio2">
                        <span :class="[radio == '10000'   ? 'check_draw_sel' : 'check_draw_nor']"></span>
                    </span>
                </div>                
            </div>

            <div class="pay_button">
                <button @click="draw_pay_buttom">立即提现</button>
            </div>
        </div>
        <div class="draw_pop" ref="pupop" v-show="pupop">
            <div class="shop_rg_once">
                <p>温馨提示</p>
                <p>你确定提现700元至支付宝账户</p>
                <div class="draw_span">
                    <span>1、请绑定本人有效支付宝账户,绑定账户后不能更改,账户审核通过后，将已
                        支付宝转账的形式将提现金额转至您的支付宝账号;
                    </span>
                    <span>
                          2、选择提现金额后系统已自动扣除20%个人所得税
                    </span>                    
                </div>
                <div class=" d_end" >
                    <button class="d_conform" @click="pupop = false">取消</button>
                    <button  class="d_none">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            pupop:false,
            radio:'',
        }
    },
    methods:{
        draw_pay_buttom(){  
            console.log(this.radio)
            this.pupop = true;
            }
        }
    }
</script>

<style lang="less">
.draw_header {
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
    .draw_header_span {
        position: absolute;
        right: .9375rem;
    }
}

.draw_content {
    padding: 0px 15px;
    .draw_yuandou {
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
        p {
            font-size: 15px;
            color: #4038a5;
        }
    }
    .draw_list {
        .draw_method {
            display: flex;
            position: relative;
            height: 75px;
            .draw_img {
                width: 115px;
                height: 55px;
                margin-top: 10px;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .draw_coin {
                margin-top: 13px;
                margin-left: 20px;
                text-align: center;
                span {
                    font-size: 13px;
                    color: #333333;
                }
                p {
                    width: 115px;
                    height: 30px;
                    background: rgb(0, 160, 233);
                    font-size: 11px;
                    color: white;
                    line-height: 30px;
                }
            }
            .draw_checkbox {
                position: absolute;
                right: 0px;
                top: 20px;
                z-index: 0;
                input {
                    opacity: 0.1;
                    position: absolute;
                    right: 0px;
                    top: 10px;
                    z-index: 999;
                }
                .check_draw_nor {
                    margin-top: 10px;
                    width: 18px;
                    height: 18px;
                    background: url('../assets/nor.png');
                    display: inline-block;
                    background-size: 100% 100%;
                }
                .check_draw_sel {
                    margin-top: 10px;
                    width: 18px;
                    height: 18px;
                    background: url('../assets/sel.png');
                    display: inline-block;
                    background-size: 100% 100%;
                }
            }
        }
    }
    .pay_button {
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        margin-top: 30px;
        button {
            text-align: center;
            border-radius: 40px;
            width: 100%;
            display: inline-block;
            height: 40px;
            background: -webkit-linear-gradient(left, #7a55f3, #2ee2df);
            /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #7a55f3, #2ee2df);
            /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #7a55f3, #2ee2df);
            /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #7a55f3, #2ee2df);
            color: #ffffff;
            border: none;
        }
    }
}
.draw_pop{
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0px;
    z-index:999;
    // display: none;
    .draw_span{
        padding: 0px 10px;
    }
    .shop_rg_once{
        position: absolute;
        top: 35%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        background: white;
        width: 80%;
        min-height: 240px;
        height: auto;
        background-size: 100% 100%;
        text-align: center;
        // border-radius: 10px;  
        p:nth-child(1){
            height: 35px;
            color: #4038a5;
            font-size: 15px;
            font-weight: 700;
            line-height: 35px;
            text-align: center;
        }  
        p:nth-child(2){
            text-align: center;
            margin-top: 10px;
            color: #4038a5;
            font-size: 14px;
            font-weight: 700;
        } 
        span{
            margin-top: 10px;
            display: inline-block;
            font-size: 13px;
            color: #333333;
        }   
        .d_end{
            height: 40px;
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 0px;
            button:nth-child(1){
                width: 50%;
                color: #333333;
                background: #eeeeee;
                text-align: center;
                line-height: 40px;
                border: none;
            }
            button:nth-child(2){
                width: 50%;
                color: #ffffff;
                background: #4036a5;
                text-align: center;
                line-height: 40px;
                border: none;
            }
        }
    }
}
</style>

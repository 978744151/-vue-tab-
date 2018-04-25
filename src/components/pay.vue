<template>
    <div> 
        <!-- <div class="pay_header">
            <img src="../assets/btn_back_icon.png" alt="" @click = "$router.go(-1)">
            <span style="font-size:1.125rem;">充值</span>
            <span class="pay_header_span">充值记录</span>
        </div> -->
        <div class="pay_content">
            <div class="yuandou">
                <p>缘豆金额<span>1221312</span></p>
            </div>
            <div class="select">
                <p>选择充值金额</p>
            </div>
            <div class="coin">
                <div class="coin_flex">
                    <div :class="{'on':money === items.active}"   @click="paychange(items)" v-for="(items,index) in orderlist" :key="index" >
                        <p >{{parseInt(items.rmb)}}元</p>
                        <span>{{parseInt(items.yuandou)}}缘豆</span>
                    </div>
                </div>
            </div>
            <div class="pay_methods">
                <div class="pay_order">
                    <p>付款方式</p>
                </div>
                <div class="pay_image">
                    <div>
                        <img src="../assets/zfb_pay.png" alt="">
                         <span >支付宝方式</span>
                         <span class="pay_checkbox" >
                            <input type="checkbox" v-model="c_zfb" @click="zfb">
                            <label for="checkbox">{{ c_zfb }}</label>
                            <span :class="[ c_zfb == false ? 'check_span_nor' : 'check_span_sel']"></span>
                         </span>
                    </div>
                    <div>
                        <img src="../assets/wx_pay.png" alt="">
                        <span>微信方式</span>
                        <span class="pay_checkbox" >
                            <input type="checkbox" v-model="c_wx" @click="wx">
                            <label for="checkbox">{{ c_wx }}</label>
                            <span :class="[c_wx == false  ? 'check_span_nor' : 'check_span_sel']"></span>
                         </span>
                    </div>
                    <!-- <div>
                        <img src="../assets/zfb_pay.png" alt="">
                        <span>微信方式</span>
                        <span class="pay_checkbox" >
                            <input type="radio" v-model="radio" value="zfb" class="radio2">
                            <label for="checkbox">{{ radio }}</label>
                            <span :class="[radio == 'zfb'? 'check_span_sel' : 'check_span_nor']"></span>
                         </span>
                    </div>
                    <div>
                        <img src="../assets/wx_pay.png" alt="">
                        <span>微信方式</span>
                        <span class="pay_checkbox" >
                            <input type="radio" v-model="radio"  value="wx" class=".radio" >
                            <label for="checkbox">{{ radio }}</label> 
                            <span :class="[radio == 'wx'   ? 'check_span_sel' : 'check_span_nor']"></span>
                         </span>
                    </div> -->
                </div>
            </div>
            <div class="pay_button">

              <button @click="pay_buttom">立即充值</button>
            </div>
        </div>
        <div class="pay_foot">

        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import { Icon } from 'vant';
import { Toast } from 'mint-ui';
import axios from "axios"
import Qs from 'qs'
Vue.use(Icon);
export default {
    data(){
        return {
            // radio:'',
            c_zfb: false , 
            c_wx: false ,
            money: '',
            orderlist : [],
            rmb: '',
            yuandou: '',
        }
    },
    methods: {
    paychange(items){
         this.orderlist.forEach((value,index)=>{
                // console.log(value.active)
                value.active = false
            })
        items.active = true
        this.money = items.active
        this.rmb = items.rmb;
        this.yuandou = items.yuandou
    },
     check(){
        this.c_wx = false
         this.c_zfb = false;
     },
     wx(){
        this.check()
     },
     zfb(){
         this.check()
     },
     pay_buttom(){
         console.log(this.rmb)
         console.log(this.yuandou)
         
         if(this.c_zfb == true){
            //   this.$router.push({path: '/home'})
         }
         if(this.c_wx == true){
            //    this.$router.push({path: '/s'})
            
         }
     }
    },
    created(){
        axios({
            method: 'get',
            url:'http://192.168.2.10:8080/api/api-bin/ywms/entry/items/selectPriceInfo.action'
        }).then(res=>{
            console.log(res)
            if(res.data.success == 1){
                this.orderlist = res.data.result
            }
        }).catch(error=>{
            Toast({
                message: '请求出错',
                position: 'bottom',
                duration: 5000
                });
      })
    }
}
</script>

<style lang="less">
.pay_header{
    width: 100%;
    height: 44px;
    background: -webkit-linear-gradient(left, #7a55f3 , #2ee2df); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #7a55f3, #2ee2df); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #7a55f3, #2ee2df); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #7a55f3 , #2ee2df);
    color: #FFFFFF;
    line-height: 44px;
    text-align: center;
    img{
        width: .625rem;
        height: 18px;
        position: absolute;
        left: .9375rem;
        top: 13px;
    }
    .pay_header_span{
        position: absolute;
        right: .9375rem;
    }
}
.pay_content{
    padding: 0px 15px;
    .yuandou{
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
        p{
            font-size: 15px;
            color: #4038a5;
        }
    }
    .select{
        height: 35px;
        line-height: 35px;
        
        p{
            color: #333333;
            font-size: 14px;
        }
       
    }
    .coin{
        margin-bottom:30px ;
    }
    .coin_flex{
        width: 100%;
        display: flex;
        margin-top: 15px;
        flex-wrap: wrap;
        justify-content: space-between;
        div{
            width: 28%;
            border-radius: 5px;
            height: 50px;
            border: 1px solid #4038a5;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin-top: 10px;
            p{
                margin-top: 5px;
                font-size: 14px;
                color: #4038a5;
            }
            span{
                font-size: 14px;
                color: #4038a5;
            }
        }
        div.on{
            background: #4038a5;
            p{
                color: white;
            }
            span{
                color: white;
            }
        }
  
    }
    .pay_methods{
        margin-top: 15px;
    .pay_order{
        height: 35px;
        line-height: 35px;
    }
    .pay_image{
        div{
            height: 50px;
            line-height: 35px;
            position: relative;
        }
        img{
            vertical-align: middle;
            width: 27px;
            height: 27px;
        }
        span{
            margin-left: 10px;
        }
        .pay_checkbox{
            position: absolute;
            right: 0px;
            top: 8px;
            z-index: 0;
            input{
            opacity: 0.1;
            position: absolute;
            right: 0px;
            top: 8px;
            z-index: 999;
            }
            .check_span_nor{
                width: 18px;
                height: 18px;
                background: url('../assets/nor.png');
                display: inline-block;
                background-size: 100% 100%;
            }
            .check_span_sel{
                width: 18px;
                height: 18px;
                background: url('../assets/sel.png');
                display: inline-block;
                background-size: 100% 100%;
            }
        }
        }
    }
    .pay_button{
        margin-top: 30px;
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        button{
            text-align: center;
            border-radius: 40px;
            width: 100%;
            display: inline-block;
            height: 40px;
            background: -webkit-linear-gradient(left, #7a55f3 , #2ee2df); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #7a55f3, #2ee2df); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #7a55f3, #2ee2df); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #7a55f3 , #2ee2df);
            color: #ffffff;
            border: none;
        }
    }
}

</style>

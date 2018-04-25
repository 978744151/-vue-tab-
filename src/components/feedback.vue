<template>
  <div>
    <div class="feed_header">
        <img src="../assets/btn_back_icon.png" alt="" @click = "$router.go(-1)">
        <span style="font-size:1.125rem;">意见反馈</span>
        <!-- <span class="feed_header_span">充值记录</span> -->
    </div>
    <div class="feed_content">
        <div class="feed_more">
            <span>如果你遇到任何问题或者有更好的建议和意见，您可以通过下面的意见反馈框描述反馈的问题与建议，我们将尽快给你回复</span>
        </div>
        <div class="feed_textarea">
            <textarea name="" id="" rows=1 cols=27 >

            </textarea>
        </div>
        <div class="feed_contact">
            <span>我们怎么联系你(电话、qq、微信)任意方式</span>
            <input type="text" placeholder="填写时备注是何种方式">
        </div>
        <div class="pay_button">
            <button @click="draw_pay_buttom">立即提现</button>
        </div>
    </div>   
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.feed_header {
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
}
.feed_content{  
    .feed_more{
        height: 75px;
        background: #fffde2;
        box-sizing: border-box;        
        span{
            display: inline-block;
            font-size: 15px;
            padding: 10px;
            color: #4038a5;
        }
    }
    .feed_textarea{
        padding: 15px 15px;
        textarea{
            width: 100%;
            border: 1px dashed #4038a5;
            min-height: 150px;
            font-size: 14px;
            color: #333333;
            box-sizing: border-box;
            resize: none;
            padding: 10px;            
        }
    }
    .feed_contact{
        padding: 15px 15px;
        span{
            color: #4038a5;
            font-size: 14px;
        }
        input{
            margin-top: 10px;
            box-sizing: border-box;            
            padding-left: 15px;
            width: 100%;
            height: 45px;
            font-size: 14px; 
            background: #f1f1f1;
            border-radius: 6px;  
            border: none;     
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
</style>

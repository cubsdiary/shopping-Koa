<template>
  <section class="bread">
    <div class="bread-wrap">
      <nav class="">
        <a href="/">
            Home
        </a>
        <slot></slot>
      </nav>
    </div>
  </section>
</template>
<style>
  .bread{

      height: 45px;
      line-height: 45px;
      background-color: #f0f0f0;
  }
  .bread-wrap{
      width: 1280px;
      padding: 0 10px;
      font-size: 14px;
      color: #a1a1a1;
      margin: 0 auto;
  }
  .bread-wrap a{
    position: relative;
      margin-right: 20px;
  }
  .bread-wrap a:after{
      position: absolute;
      top: 0px;
      content:'/';
      height:20px;
      line-height: 20px;
  }
  .bread-wrap span{
      color:#d1434a;
  }
  @media only screen and (max-width: 1280px) {
    .bread-wrap{
      width: 100%;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>

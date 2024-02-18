<template>
  <div class="col-12 col-md-5 position-relative mb-10">
    <ul class="progressbar">
      <li :class="{ active: currentStatus >= 1 }">購物車</li>
      <li :class="{ active: currentStatus >= 2 }">填寫資料</li>
      <li :class="{ active: currentStatus >= 3 }">確認付款</li>
      <li :class="{ active: currentStatus >= 4 }">訂單完成</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['currentStatus'],
};
</script>
<style lang="scss">
@import '../../assets/SCSS/all.scss';

// progressbar
.progressbar li {
  width: 25%;
  position: relative;
  float: left;
  list-style-type: none;
  font-size: 14px;
  color: $dark;
  text-align: center;
  counter-increment: step;
}

.progressbar li::before {
  display: block;
  width: 20px;
  line-height: 20px;
  margin: 5px auto;
  background: $secondary-500;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  content: counter(step);
}

/*progressbar connectors*/
.progressbar li:after {
  content: '';
  width: 100%;
  height: 2px;
  background: $secondary-500;
  position: absolute;
  left: -50%;
  top: 15px;
  z-index: -1; /*put it behind the numbers*/
}

.progressbar li:first-child:after {
  /*connector not needed before the first step*/
  content: none;
}

/*marking active/completed steps primary-500*/
/*The number of the step and the connector before it = primary-500 */
.progressbar li.active:before,
.progressbar li.active:after {
  background: $primary-500;
  color: $light;
}
</style>

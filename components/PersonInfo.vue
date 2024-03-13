<template>
  <div class="info">
    <div class="title">郑俊玺</div>
    <div class="titleSub">前端开发 / 开源爱好者 / 2年经验</div>
    <div class="contact">
      <div class="item">
        <PhoneOutlined />
        19972982177
      </div>
      <div class="item">
        <WechatOutlined />
        19972982177
      </div>
      <div class="item">
        <MailOutlined />
        1833496831@qq.com
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from "vue";
import {
  MailOutlined,
  PhoneOutlined,
  WechatOutlined,
} from "@ant-design/icons-vue";
defineComponent({
  components: {
    MailOutlined,
    PhoneOutlined,
    WechatOutlined,
  },
});
</script>
<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0 auto 16px;
  width: 780px;
  .title {
    color: #555;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .titleSub {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    display: block;
  }
  .contact {
    font-weight: 400;
    color: #666;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>

<template>
  <div class="info">
    <div class="title">郑俊玺</div>
    <div class="titleSub">前端开发 / 开源爱好者 / 3年经验</div>
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
import {
  MailOutlined,
  PhoneOutlined,
  WechatOutlined,
} from "@ant-design/icons-vue";
</script>
<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  width: 100%;

  .title {
    color: $text-primary;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.5px;
  }

  .titleSub {
    color: $text-secondary;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }

  .contact {
    margin-top: 8px;
    font-weight: 400;
    color: $text-light;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;

      &:hover {
        color: $primary-color;
      }
      
      .anticon {
        font-size: 16px;
      }
    }
  }
}
</style>

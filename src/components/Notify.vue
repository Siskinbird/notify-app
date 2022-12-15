<template>
<!--  <table>-->
<!--    <transition-group name="list" tag="tbody">-->
<!--      <tr v-for="message in messages" :key="message.title">-->
<!--        <td><span>{{message.title}}</span></td>-->
<!--      </tr>-->
<!--    </transition-group>-->
<!--  </table>-->
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Example Page</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}

</script>

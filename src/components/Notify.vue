<template>
  <div>
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="message in messages" :key="message.title">
        <td><span>{{message.title}}</span></td>
      </tr>
    </transition-group>
    <button
        @click="loadMore"
        class="btn btnPrimary"
        :disabled="maxLength === 0"
        :class="{btnDisabled: maxLength === 0}"
 >Load more</button>
  </table>

  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: {
    maxLength() {
      return this.$store.getters.getMessagesFilter.length
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch("loadMessages")
          .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  text-align: center;
  border-collapse: collapse;
  td{
    display: flex;
    justify-content: space-between;
    padding: 12px 6px;
    font-size: 14px;
  }
}
button {
  margin-top: 20px;
  &.btnDisabled {
    cursor: default;
    opacity: .3;
  }
}

/* Animation */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

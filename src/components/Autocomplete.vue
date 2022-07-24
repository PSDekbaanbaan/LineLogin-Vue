<template>
  <div>
    <v-autocomplete
      :items="item"
      item-value="id"
      item-text="name"
      :return-object="false"
      dense
      :label="label"
      @change="changeValue"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
    props: ["label", "item"],
    mounted() {
        
    },
    methods: {
        changeValue(value) {
            this.$emit("getEnumValue", value);
        }
    },
};
</script>

<style></style>

import Vue from "vue";
import { colors } from "vuetify/lib";

var mixin = {
  methods: {
    async Confirm(text){
      return await Vue.swal({
        icon:"question",
        text:text,
        showCancelButton: true,
        allowEnterKey: false,        
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
        confirmButtonColor: '#487564',
        cancelButtonColor: colors.brown.lighten1,
      }).then((e)=>{
        return e.isConfirmed
      });
    },
    Error(text) {
      Vue.swal({
        icon: "error",
        text: "เกิดข้อผิดพลาด : " + text,
        allowEnterKey: false,
        imageWidth: 50,
        imageHeight: 50,
        confirmButtonColor: '#487564',
      });
    },
    Warning(text) {
      Vue.swal({
        icon: "warning",
        text: "แจ้งเตือน : " + text,
        allowEnterKey: false,
        confirmButtonColor: '#487564',
      });
    },
    Success(text) {
      Vue.swal({
        icon: "success",
        text: text,
        allowEnterKey: false,
        confirmButtonColor: '#487564',
      });
    },
    Info(text) {
      Vue.swal({
        icon: "info",
        text: text,
        allowEnterKey: false,
        confirmButtonColor: '#487564',
        // timer: 2000
      });
    },
    FormatNumber(value, decimal = 2) {
      let val = (value / 1).toFixed(decimal).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    NextFocus(nextRef) {
      this.$refs.[nextRef].focus();
    },
    SelectAll(Ref){
      let inputEl = this.$refs.[Ref].$el.querySelector('input');
      inputEl.select();
    }
  },
};

export default mixin;

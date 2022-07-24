<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <v-avatar style="height: 120px; min-width: 120px; width: 120px">
            <img :src="$store.state.user.DisplayImage" />
          </v-avatar>
        </v-col>
        <v-col cols="12" align="center">
          <h2>{{ $store.state.user.DisplayName }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="d-flex justify-center mb-12">
        <h3>ยินดีต้อนรับเข้าสู่ระบบ</h3>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          กรุณาให้ข้อมูล เพื่อรับสิทธิพิเศษต่างๆ
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="เบอร์โทรศัพท์"
            placeholder="เบอร์โทรศัพท์"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
    <v-footer app bottom fixed style="width: 100%" padless>
      <v-card class="flex" flat tile>
        <v-card-title>
          <v-col cols="12" align="center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-checkbox
                  v-on="on"
                  v-model="checkSubmit"
                  :label="`ยอมรับข้อตกลงและเงื่อนไข`"
                  @change="changeCheckbox"
                ></v-checkbox>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  ข้อตกลงและเงื่อนไข
                </v-card-title>

                <v-card-text>ข้อตกลงและเงื่อนไข</v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    ตกลง
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn color="primary" dark @click="submit"> {{ btnLabel }}</v-btn>
          </v-col>
        </v-card-title>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Register",
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
    dialog: false,
    checkSubmit: false,
    btnLabel: "เข้าสู่ระบบ",
  }),
  methods: {
    ...mapActions(["actCreate"]),
    save(date) {
      this.$refs.menu.save(date);
    },
    changeCheckbox() {
      if (this.checkSubmit) {
        this.btnLabel = "ลงทะเบียน";
      } else {
        this.btnLabel = "เข้าสู่ระบบ";
      }
    },
    submit() {
      this.actCreate(this.user).then(({ status, data }) => {
        if (status == 200 && data.status == "success") {
          this.$router.push("/Home").catch(() => {});
        } else {
          this.Error(data.message);
        }
      });
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
};
</script>

<style>
.padding-top-50 {
  padding-top: 3.125em;
}
</style>

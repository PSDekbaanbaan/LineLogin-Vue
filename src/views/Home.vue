<template>
  <div>
    <v-container>
      <v-row>
        <v-col col="6">
          <v-avatar style="height: 120px; min-width: 120px; width: 120px">
            <img :src="$store.state.user.DisplayImage" />
          </v-avatar>
        </v-col>
        <v-col col="6">
          <h2>สวัสดี {{ $store.state.user.DisplayName }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-divider></v-divider>
      <v-list dense>
        <v-data-table
          :headers="headersLine"
          :items="datatableLine"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item`]="props">
            <tr>
              <td style="width: 100%; text-align: center">
                <img
                  :src="
                    'https://buffet-image.kugthailand.com/Buffet01/' + props.item.Photo
                  "
                  style="
                    width: 150px;
                    height: 150px;
                    margin-left: auto;
                    margin-left: auto;
                  "
                />
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      datatableLine: [],
      headersLine: [
        {
          text: "คูปอง",
          align: "left",
          sortable: false,
          value: "Photo",
        },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions(["actGetCoupon"]),

    loadData() {
      this.actGetCoupon().then(({ status, data }) => {
        if (status == 200 && data.status == "success") {
          this.datatableLine = data.result;
        } else {
          this.Error(data.message);
        }
      });
    },
  },
};
</script>

<style></style>

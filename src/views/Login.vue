<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
import liff from "@line/liff";

export default {
  name: "Login",
  async beforeCreate() {
    await liff
      .init({
        liffId: "1657322709-jw9o2O7L", // Use own liffId
        withLoginOnExternalBrowser: true, // Enable automatic login process
      })
      .then(() => {
        this.getUserProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  methods: {
    ...mapActions(["actSetUser", "actGet"]),
    async getUserProfile() {
      const profile = await liff.getProfile();
      let userData = {
        UserId: profile.userId,
        DisplayName: profile.displayName,
        DisplayImage: profile.pictureUrl,
      };

      await this.actSetUser(userData);

      //   liff.logout();

      this.actGet(userData).then(({ status, data }) => {
        if (status == 200 && data.status == "success") {
          if (data.result.length > 0) {
            this.$router.push("/Home").catch(() => {});
          } else {
            this.$router.push("/Register").catch(() => {});
          }
        } else {
          this.Error(data.message);
        }
      });
    },
  },
};
</script>

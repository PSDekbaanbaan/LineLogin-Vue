
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from "vuetify/lib";
// import { colors } from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {        
          light: {
            // primary: colors.cyan.darken3,
            // info: colors.cyan.darken1,
            // secondary: colors.cyan.lighten2,
            // accent: colors.cyan.accent4,
            primary: '#487564',
            // secondary: '#B8D088',
            info: '#81A684', 
            secondary: colors.brown.lighten1,     
            accent: '#C3C6B1',
          },
        },
      },
      icons: {
        iconfont: "md",
      }
});

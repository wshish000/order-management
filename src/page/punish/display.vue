<template>
  <div class="fillcontain">
    <search-punish></search-punish>
    <punish-detail v-if="detailPunishShow"></punish-detail>
    <punish-chart v-if="chartPunishShow"></punish-chart>
  </div>
</template>

<script>
import PunishDetail from "./punishDetail";
import PunishChart from "./punishChart";
import { mapGetters } from "vuex";
import SearchPunish from "./searchPunish";
export default {
  name: "display",
  components: {
    SearchPunish,
    PunishChart,
    PunishDetail,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["detailPunishShow", "chartPunishShow"]),
  },
  methods: {},
};
</script>

<style scoped></style>

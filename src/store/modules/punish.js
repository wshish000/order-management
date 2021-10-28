const punish = {
  state: {
    detailPunishShow: true,
    chartPunishShow: false,
    startSearchPunish: false,
    searchPunish: {
      query_time: [
        new Date(new Date().setHours(0, 0, 0, 0)), //当日零点
        new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1), //当日23:59:59
      ],
    },
    dataOfAdd: {
      data_x: [],
      data_y: [],
    },
    dataOfSub: {
      data_x: [],
      data_y: [],
    },
  },
  getters: {
    detailPunishShow: (state) => state.detailPunishShow,
    chartPunishShow: (state) => state.chartPunishShow,
    startSearchPunish: (state) => state.startSearchPunish,
    dataOfAdd: (state) => state.dataOfAdd,
    dataOfSub: (state) => state.dataOfSub,
    searchPunish: (state) => state.searchPunish,
  },
  mutations: {
    SET_SEARCH_PUNISH: (state, payload) => {
      state.searchPunish = payload;
    },
    SET_DETAIL_PUNISH: (state, payload) => {
      state.detailPunishShow = payload;
    },
    SET_CHART_PUNISH: (state, payload) => {
      state.chartPunishShow = payload;
    },
    START_SEARCH_PUNISH: (state, payload) => {
      state.startSearchPunish = payload;
    },
    SET_DATA_OF_ADD: (state, payload) => {
      state.dataOfAdd = payload;
    },
    SET_DATA_OF_SUB: (state, payload) => {
      state.dataOfSub = payload;
    },
  },
};

export default punish;

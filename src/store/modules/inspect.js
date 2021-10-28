const inspect = {
  state: {
    detailShow: true,
    chartShow: false,
    startSearch: false,
    searchData: {
      query_time: [
        new Date(new Date().setHours(0, 0, 0, 0)), //当日零点
        new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1), //当日23:59:59
      ],
    },
    dataChaOfD: {
      data_x: [],
      data_y: [],
    },
    dataChaOfZ: {
      data_x: [],
      data_y: [],
    },
    dataShangOfD: {
      data_x: [],
      data_y: [],
    },
    dataShangOfZ: {
      data_x: [],
      data_y: [],
    },
  },
  getters: {
    detailShow: (state) => state.detailShow,
    chartShow: (state) => state.chartShow,
    searchData: (state) => state.searchData,
    startSearch: (state) => state.startSearch,
    dataChaOfD: (state) => state.dataChaOfD,
    dataChaOfZ: (state) => state.dataChaOfZ,
    dataShangOfD: (state) => state.dataShangOfD,
    dataShangOfZ: (state) => state.dataShangOfZ,
  },
  mutations: {
    SET_DETAIL: (state, payload) => {
      state.detailShow = payload;
    },
    SET_CHART: (state, payload) => {
      state.chartShow = payload;
    },
    SET_SEARCH: (state, payload) => {
      state.searchData = payload;
    },
    START_SEARCH: (state, payload) => {
      state.startSearch = payload;
    },
    SET_COD: (state, payload) => {
      state.dataChaOfD = payload;
    },
    SET_COZ: (state, payload) => {
      state.dataChaOfZ = payload;
    },
    SET_SOD: (state, payload) => {
      state.dataShangOfD = payload;
    },
    SET_SOZ: (state, payload) => {
      state.dataShangOfZ = payload;
    },
  },
};

export default inspect;

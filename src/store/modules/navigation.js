const state = {
  activeIndex: 0,
  language: "en",
  menuItems: [
    {
      text: "Home",
      route: "/home"
    },
    {
      text: "Features",
      route: "/features"
    },
    {
      text: "Technology",
      route: "/technology"
    },
    {
      text: "Gallery",
      route: "/gallery"
    },
    {
      text: "Publications",
      route: "/publications"
    },
    {
      text: "Contact Us",
      route: "/contactus"
    }
  ]
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
  },
  SET_ACTIVE_LANGUAGE(state, activeLanguageIdx) {
    state.language = activeLanguageIdx;
  }
};

const getters = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default defineAppConfig({
  docus: {
    title: "amvstrm",

    description:
      "amvstrm is an open source anime streaming platform that offer free anime with no ADs.",

    image:
      "/banner.png",

    socials: {
      github: "amvstrm/docs",
    },

    aside: {
      level: 0,
      exclude: [],
    },

    header: {
      title: "amvstrm's Docs",
      logo: false,
    },

    github: {
      owner: "amvstrm",
      repo: "docs",
      branch: "master",
      edit: true
    },

    footer: {
      iconLinks: [{
        href: "https://amvstr.me",
        icon: "mdi-play-outline",
        label: "amvstr.me",
      }, {
        href: "https://amvstrm.checkly-dashboards.com",
        icon: "mdi-monitor",
        label: "Status",
      }],

      fluid: true,
    },

    main: {
      fluid: false,
    },

    titleTemplate: "%s · amvstrm",
  },
});
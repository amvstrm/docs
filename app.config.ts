export default defineAppConfig({
  docus: {
    title: "amvstrm",
    description:
      "amvstrm is an open source anime streaming platform that offer free anime with no ADs.",
    image:
      "https://raw.githubusercontent.com/amvstrm/amvstrm/v2/public/amv_wh.png",
    socials: {
      github: "amvstrm/docs",
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      title: "Logo",
      logo: true,
    },
    github: {
      owner: "amvstrm",
      repo: "docs",
      branch: "master",
      edit: true
    },
    footer: {
      iconLinks: [
        {
          href: "https://amvstr.ml",
          icon: "mdi-play-outline",
          label: "amvstr.ml",
        },
        {
          href: "https://amvstrm.checkly-dashboards.com",
          icon: "mdi-monitor",
          label: "Status",
        },
      ],
    },
  },
});

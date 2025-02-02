type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/"
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Media",
    path: "/media"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false
        },
        {
          name: "Media",
          link: "/media",
          leavesWebsite: false
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/ASa1m",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/abdullah-saim/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true
        },
        {
          name: "Email",
          link: "mailto:abdullah.saim.as@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/pics.aim/",
          icon: "/static/icons/instagram-f.svg",
          leavesWebsite: true
        }
      ]
    }
  ],
  support: {
    buymeacoffee: "asaim",
    message: "I appreciate your support very much! 💙"
  }
};

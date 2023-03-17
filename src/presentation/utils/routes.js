const routes = {
  HOME: "/home",
  SESSIONS: "/sessions",
  NEW_SESSION: "/new-session",
  VIEW_SESSION: (sid) => `/view-session/${sid}`,
  NEW_SESSION_SLOT: (d_uname) => `/new-session/slot/${d_uname}`,
  VIEW_DOCTOR: (d_uname) => `/therapist/${d_uname}`,
  ADMIN: "/admin",
  ADMIN_LOGIN: "/admin/login",
  ADMIN_ADD_DOCTOR: "/admin/add-doctor",
};

export default routes;

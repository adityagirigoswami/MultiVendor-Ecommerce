let refreshTokenFunc = null;

export const setAuthContext = (context) => {
  refreshTokenFunc = context.refreshAccessToken;
};

const secureFetch = async (url, options = {}) => {
  let accessToken = localStorage.getItem("access");

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  let response = await fetch(url, options);

  if (response.status === 401 && refreshTokenFunc) {
    const newAccess = await refreshTokenFunc();

    if (!newAccess) {
      // 🔁 If refresh fails, clear session and redirect to login
      localStorage.clear();
      window.location.href = "/customer/login"; // or your login route
      return; // stop further execution
    }

    options.headers.Authorization = `Bearer ${newAccess}`;
    response = await fetch(url, options);
  }

  return response;
};

export default secureFetch;

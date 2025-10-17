import Cookies from "js-cookie";

const formatDate = (date) => {
  date = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
};

const postApi = async (url, data) => {
  let token = Cookies.get("au_to");

  let res = await fetch(getUrl(url), {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data),
  });

  return await res.json();
}

const postFormApi = async (url, data) => {
  let token = Cookies.get("au_to");

  let res = await fetch(getUrl(url), {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${token}`
      },
      body: data,
  });

  return await res.json();
}

const getApi = async (url, options = {}) => {
  let token = Cookies.get("au_to");

  try{
    let res = await fetch(getUrl(url), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token ?? ""}`
        },
        ...options,
    });
    
    return await res.json();
  } catch(error) {
    if (error.name !== "AbortError") {
      return {
        status: false,
      }
    }
  }
}

const checkLogin = async () => {
  let res = await getApi("/api/auth/check-login");
  
  if(res.status) {
      return true;
  } else {
      return false;
  }
}

const handleInputChange = (e, state, stateFunction, name = null, value = null) => {
  if(name && value) {
    stateFunction({
      ...state,
      [name]: value
    })
    return true;
  }

  value = e.target.value
  if(e.target.type == "checkbox") {
      value = e.target.checked
  }
  stateFunction({
    ...state,
    [e.target.name]: value,
  });
}

const getUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    if(!!parsedUrl.hostname) {
      return url;
    } else {
      return process.env.BASE_URL+url;
    }
  } catch (e) {
    return process.env.BASE_URL+url;
  }
}

const handleBulkAction = async (url, selectedIds, type, refresh = true) => {
  let res = await bulkAction(url, selectedIds, type);
  if (res.status) {
    if(refresh) {
      window.location.reload();
    }
  }
  return res;
};

const bulkAction = async (url, ids, type) => {
  return await postApi(url, {
    ids: ids,
    type: type,
  });
};

const handleStatusChange = async (url, id, status, collection) => {
  return await postApi(url, {id: id, status: status, collection: collection});
}

const handleImageChange = async (event, state, stateFunction) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    let res = await postFormApi("/api/actions/upload", formData)

    if(state && stateFunction) {
      stateFunction({
        ...state,
        [event.target.name]: file,
        filePath: res.filePath
      })
    } else {
      return file;
    }
  }
};

// export const updateAdminToken = async () => {
//   await getApi("/api/auth/update-admin-token");
// }

const publicPath = (url) => {
  return process.env.PUBLIC_PATH + url;
}

export {
  formatDate,
  postApi,
  postFormApi,
  getApi,
  checkLogin,
  handleInputChange,
  getUrl,
  handleBulkAction,
  bulkAction,
  handleStatusChange,
  handleImageChange,
  publicPath
}
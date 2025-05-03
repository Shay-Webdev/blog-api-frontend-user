export type fetchWrapperParam = {
  url: string | URL | globalThis.Request;
  opts?: RequestInit;
};
const fetchWrapper = async <T>(props: fetchWrapperParam) => {
  const { url, opts } = props;
  const defaultOpts: RequestInit = {
    mode: "cors",
  };
  let body: BodyInit | null | undefined = opts?.body;
  let headers: HeadersInit | undefined = opts?.headers;
  if (body && !(body instanceof ReadableStream)) {
    if (typeof body !== "string") {
      body = JSON.stringify(body);
    }
    headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }
  const parsedOpts = {
    ...opts,
    body,
    headers,
  };
  const abortController = new AbortController();
  const abortTimeout = setTimeout(() => {
    abortController.abort();
  }, 10000);
  try {
    const response = await fetch(url, {
      ...defaultOpts,
      ...parsedOpts,
      signal: abortController.signal,
    });
    clearTimeout(abortTimeout);
    if (response.status >= 400) {
      console.error(`fetch request failed: `, await response.json());

      throw new Error(`Fetch request failed with : ${response} `);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      console.log(`Fetch successfull`);
      const data: T = await response.json();
      return data;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    clearTimeout(abortTimeout);
    console.error(`Error fetching ${url}: `, error);
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out");
      }
      throw error;
    }
    throw new Error(`Unkown Error: ${String(error)}`);
  }
};

const getApi = async <T>(props: fetchWrapperParam) => {
  const { url, opts } = props;
  const fetchParams: fetchWrapperParam = {
    url,
    opts: {
      ...opts,
      method: "GET",
    },
  };
  return fetchWrapper<T>(fetchParams);
};

const postApi = async <T>(props: fetchWrapperParam) => {
  const { url, opts } = props;
  //  let body: BodyInit | null | undefined = opts?.body
  //  let headers: HeadersInit | undefined = opts?.headers
  //  if (body && !(body instanceof ReadableStream)){
  //    body = JSON.stringify(body)
  //    headers = {
  //      ...headers,
  //      "Content-Type":"application/json"
  //    }
  //  }
  const fetchParams: fetchWrapperParam = {
    url,
    opts: {
      ...opts,
      method: "POST",
    },
  };
  return fetchWrapper<T>(fetchParams);
};

const deleteApi = async <T>(props: fetchWrapperParam) => {
  const { url, opts } = props;
  const fetchParams: fetchWrapperParam = {
    url,
    opts: {
      ...opts,
      method: "DELETE",
    },
  };
  return fetchWrapper<T>(fetchParams);
};

const putApi = async <T>(props: fetchWrapperParam) => {
  const { url, opts } = props;
  const fetchParams: fetchWrapperParam = {
    url,
    opts: {
      ...opts,
      method: "PUT",
    },
  };
  return fetchWrapper<T>(fetchParams);
};

export { fetchWrapper, getApi, postApi, putApi, deleteApi };

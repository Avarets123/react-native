import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosBaseReq = async <DT, RT>(
  method: "post" | "get",
  url: string,
  req?: DT,
  config?: AxiosRequestConfig
): Promise<{ data: RT | null; error?: string }> => {
  let data: RT | null = null;
  try {
    await new Promise<void>((res) => setTimeout(res, 500));

    let res: AxiosResponse;

    if (method === "get") {
      res = await axios.get<RT>(url, config);
      data = res.data;
    } else {
      res = await axios[method]<RT>(url, req, config);
      data = res.data;
    }

    return { data };
  } catch (error) {
    console.log(error);

    if (error instanceof axios.AxiosError) {
      console.log(error.response?.data);
      return { error: error.response?.data.message, data };
    }

    return { error: JSON.stringify(error), data };
  }
};

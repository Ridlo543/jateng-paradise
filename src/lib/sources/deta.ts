const baseUrl = process.env.DETA_BASE_URL as string;
const apiKey = process.env.DETA_API_KEY as string;

const getHeaders = (): Headers => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("X-API-Key", apiKey);

  return headers;
};

type InsertProps = {
  baseName: string;
  payload: {
    item: Object;
  };
};
const insert = (props: InsertProps): Promise<Response> => {
  return fetch(`${baseUrl}/${props.baseName}/items`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ ...props.payload }),
  });
};

type QueryProps = {
  baseName: string;
  payload: {
    query?: Array<Object>;
    limit?: number;
    last?: string;
    sort?: "asc" | "desc";
  };
};
const query = (props: QueryProps): Promise<Response> => {
  return fetch(`${baseUrl}/${props.baseName}/query`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ ...props.payload }),
  });
};

export const DetaSource = {
  insert,
  query,
};

export type CommonError = {
  response: {
    status: number;
    statusText: string;
    data: {
      code: number;
      message: string;
      service: string;
      statusCode: number;
      status: number;
    };
  };
};

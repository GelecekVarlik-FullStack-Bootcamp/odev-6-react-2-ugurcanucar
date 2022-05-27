import api from "./api_service";

const TodoService = {};

TodoService.Category = {
  getCategories: async () => {
    return api
      .get(`category`)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addNewCategory: async (data) => {
    return api
      .post(`category`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateCategory: async (data) => {
    return api
      .put(`category/${data.id}`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

TodoService.Status = {
  getStatus: async (id) => {
    return api
      .get(`status?categoryId=${id}`)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addNewStatus: async (data) => {
    return api
      .post(`status`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateStatus: async (data) => {
    return api
      .put(`status/${data.id}`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

TodoService.Todo = {
  getTodos: async (id) => {
    return api
      .get(`todo`)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addNewTodo: async (data) => {
    return api
      .post(`todo`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateTodo: async (data) => {
    return api
      .put(`todo/${data.id}`, data)
      .then((d) => {
        if (d.status === 200) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default TodoService;

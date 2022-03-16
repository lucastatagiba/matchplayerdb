const errors = {
  register: {
    message:
      "Requisiton Error: Either of name or birthDate required propertys are missing at requisition body",
  },
  posts: {
    post: {
      message:
        "Requisiton Error: Either of title or description required propertys are missing at requisition body",
    },
    patch: {
      message:
        "Requisiton Error: It's not possible to update id, userId or createdAt propertys",
    },
  },
};

module.exports = errors;

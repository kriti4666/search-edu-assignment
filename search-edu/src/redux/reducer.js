import {
  POST_DOC,
  POST_EMAIL,
  POST_GENDER,
  POST_HOBBIES,
  POST_NAME,
  POST_PHONE,
} from "./types";

const initialValues = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  hobbies: [],
  doc: "",
};

export const Reducer = (state = initialValues, {type, payload}) => {
  switch (type) {
    case POST_NAME: {
      return {...state, name: payload};
    }
    case POST_EMAIL: {
      return {...state, email: payload};
    }
    case POST_PHONE: {
      return {...state, phone: payload};
    }
    case POST_GENDER: {
      return {...state, gender: payload};
    }
    case POST_HOBBIES: {
      return {...state, hobbies: payload};
    }
    case POST_DOC: {
      return {...state, doc: payload};
    }
    default: {
      return state;
    }
  }
};

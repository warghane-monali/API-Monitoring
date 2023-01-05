import { useAsync } from "react-async"

export const ConnectionManager = {
  get: async () => {
    return await useAsync.getData('connectionState');
  },
  set: state => {
    useAsync.writeData('connectionState', state);
  },
  post: state => {
    useAsync.writeData('connectionState', state);
  },
};
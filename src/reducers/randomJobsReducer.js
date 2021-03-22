export const initialState = {
  randomJobs: [],
  loading: false,
  pageError: false,
};

export default function randomJobsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RANDOM_JOBS":
      return { ...state, loading: true };
    case "GET_RANDOM_JOBS_SUCCESS":
      return { randomJobs: action.payload, loading: false, pageError: false };
    case "GET_RANDOM_JOBS_FAIL":
      return { ...state, loading: false, pageError: true };
    default:
      return state;
  }
}

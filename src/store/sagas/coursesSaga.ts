import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { fetchCoursesApi, type Course } from '@api/courses';
import {
  searchCoursesFailure,
  searchCoursesRequest,
  searchCoursesSuccess,
} from '@store/slices/coursesSlice';

function* handleSearchCourses(action: ReturnType<typeof searchCoursesRequest>) {
  try {
    yield delay(200);

    const courses: Course[] = yield call(fetchCoursesApi, action.payload);

    yield put(searchCoursesSuccess(courses));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to load courses';
    yield put(searchCoursesFailure(message));
  }
}

export function* coursesSaga() {
  yield takeLatest(searchCoursesRequest.type, handleSearchCourses);
}
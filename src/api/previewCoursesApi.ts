import { authAnonymous } from "./authApi";
import { createRequest } from "./common";
import { GetCourseResponse, GetCourseResult, GetCoursesResponse, GetCoursesResult } from "./types";

export const getCourses = async (page: number, count: number): Promise<GetCoursesResult> => {
  let token = localStorage.getItem("token");
  if (!token) {
    const token = await authAnonymous();
    localStorage.setItem("token", token);
  }

  const request = createRequest('/core/preview-courses', token!);
  let response = await fetch(request);

  if (response.status === 401) {
    const token = await authAnonymous();
    localStorage.setItem("token", token);
    request.headers.set("Authorization", `Bearer ${token}`);
    response = await fetch(request);
  }

  const data: GetCoursesResponse = await response.json();

  return {
    courses: data.courses.slice(page * count, (page + 1) * count),
    totalCount: data.courses.length,
  };
};

export const getCourse = async (id: string): Promise<GetCourseResult> => {
  let token = localStorage.getItem("token");
  if (!token) {
    const token = await authAnonymous();
    localStorage.setItem("token", token);
  }

  const request = createRequest(`/core/preview-courses/${id}`, token!);
  let response = await fetch(request);

  if (response.status === 401) {
    const token = await authAnonymous();
    localStorage.setItem("token", token);
    request.headers.set("Authorization", `Bearer ${token}`);
    response = await fetch(request);
  }

  const data: GetCourseResponse = await response.json();
  return data;
};

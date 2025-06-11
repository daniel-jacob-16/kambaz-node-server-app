import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { user: userId, course: courseId };
  Database.enrollments = [...Database.enrollments, newEnrollment];
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
}




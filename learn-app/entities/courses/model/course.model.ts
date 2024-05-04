export interface Progress {
  progressPercent: number;
  tariffLessonsCount: number;
  userViewedLessonsCount: number;
}

export type CourseDirection = { direction: Record<"name", string> };

export type StudentCourseDescription = {
  id: number;
  shortTitle: string;
  image: string;
  title: string;
  alias: string;
  length: number;
  avgRating: number;
  price: number;
  courseOnDirection: CourseDirection[];
  tariffs: Tariff[];
  progress: Progress;
};

export type Tariff = {
  id: number;
  name: string;
  price: number;
  type: TariffType;
  oldPrice?: number;
  creditPrice?: number;
  lengthInMonth: number;
  courseId: number;
  createdAt: string;
  videoUuid: string;
};

export enum TariffType {
  free = "free",
  basic = "basic",
  mentor = "mentor",
  project = "project",
}

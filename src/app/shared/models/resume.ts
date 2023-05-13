import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { PersonalInfo } from "./personal-info";
import { Skill } from "./skill";

export class Resume {
  constructor(
      public personalInfo: PersonalInfo,
      public experiences: Experience[],
      public education: Education[],
      public skills: Skill[],
      public certifications: Certification[],
  ) {}
}

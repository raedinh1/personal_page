var jobsData = [
{
  company: "Coursera",
  position: "Software Engineering Intern",
  url: "http://coursera.org",
  image: "img/coursera.png"
},
{
  company: "Sailthru",
  position: "Software Engineering Intern",
  url: "http://sailthru.com",
  image: "img/sailthru.png"
},
{
  company: "Glenwood Systems",
  position: "Software Engineering Intern",
  url: "http://glenwoodsystems.com",
  image: "img/glenwood.png"
}
];

Template.workExperience.helpers({
  jobs: jobsData
});

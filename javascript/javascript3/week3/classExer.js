class Job {
  constructor(title, descriptionsq, startDate, endDate) {

  }
}


class Education {
  constructor(title, school, address, startDate, endDate) {

  }
}


class Cv {
    constructor(jobs, educations, email) {
        // write code here
        this.jobs = jobs;
        this.educations = educations;
        this.email = email;
    }

    addJob(job) {
        // Adds an event to the events array
        // add functionality here
        return this.jobs.push(job);
    }

    removeJob(job) {
        // Removes an event to the events array
        // add functionality here
        this.jobs.forEach((titles) => titles.title);
    }

    addEducation(education) {
        // Adds an event to the events array
        // add functionality here
        this.educations.push(education);
    }

    removeEducation(education) {
        // Adds an event to the events array
        // add functionality here
        this.educations.pop(education);
    }

    getCvOwner() {
        // should return a promise with the user object found from this url: https://jsonplaceholder.typicode.com/users/1
    }

    renderCv() {

    }

}

const cv1 = new Cv(["serveing"], ["programing"], "dbva@gmail.com");
cv1.addJob("programer");
console.log(cv1.jobs);
console.log(cv1.removeJob("programer"));
// console.log(cv1.jobs);
// const job2 = New Job("shif", "xzfklnzkdf", "01/04/2011", "31/05/2011")
// const job3 = New Job("programer", "html, js, css ...", "01/06/2011", "--")

// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

const courses = [{
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

courses.forEach(course => {
    if (course.number === 110 || course.number === 130 || course.number === 210 || course.number === 111 || course.number === 131) {
        course.completed = true;
    }
});

function displayCourses(category = "all") {
    const courseContainer = document.querySelector(".certificate-grid");
    const totalCreditsContainer = document.getElementById("total-credits");
    courseContainer.innerHTML = "";

    let filteredCourses = category === "all" ?
        courses :
        courses.filter(course => course.subject.toLowerCase() === category);

    let totalCompletedCredits = 0;

    filteredCourses.forEach(course => {
        let courseButton = document.createElement("button");
        courseButton.classList.add("cert", course.subject.toLowerCase());

        if (course.completed) {
            courseButton.classList.add("completed");
            totalCompletedCredits += course.credits;
        }

        courseButton.innerText = `${course.subject} ${course.number}`;

        courseContainer.appendChild(courseButton);
    });

    totalCreditsContainer.innerText = `Total Credits: ${totalCompletedCredits}`;
}

function filterCertificates(category) {
    displayCourses(category);

    document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="filterCertificates('${category}')"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => displayCourses());
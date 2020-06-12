export const courses = {
  data() {
    return {
      courseval: {
        // cse
        options1: [
          { credit: null, value: null, text: "Please select an option" },
          { credit: 3, value: 1, text: "ENG-MATHS 1" },
          { credit: 4, value: 2, text: "c programming" },
          { credit: 3, value: 3, text: "python" },
          { credit: 3, value: 4, text: "DHV" },
          { credit: 3, value: 5, text: "ENG-maths 2" },
          { credit: 4, value: 6, text: "Data Structure using C" },
          { credit: 5, value: 7, text: "Digital Electronics" },
          { credit: 4, value: 8, text: "Basic Electronics" },
          { credit: 1, value: 9, text: "workshop" },
          { credit: 1, value: 10, text: "Engineering Graphics" },
          { credit: 3, value: 11, text: "Professional Communication" },
          { credit: 4, value: 12, text: "Engineering Physics" },
          {
            credit: 1,
            value: 13,
            text: "Intro to computer science Engineering",
          },
          { credit: 1, value: 14, text: "Language Lab" },
          { credit: 4, value: 15, text: "Theory of Computation" },
          { credit: 4, value: 16, text: "Operating System" },
          { credit: 4, value: 17, text: "Object Oriented Programming" },
          { credit: 3, value: 18, text: "Discrete Structures" },
          { credit: 4, value: 19, text: "Microprocessors(3-sem)" },
          { credit: 3, value: 20, text: "Introduction to logic" },
          { credit: 2, value: 21, text: "Enterpreneurship" },
          { credit: 5, value: 22, text: "Computer Networks" },
          { credit: 4, value: 23, text: "Computer Organization" },
          { credit: 5, value: 24, text: "Design & analysis of Algorithms" },
          { credit: 5, value: 25, text: "Database Management" },
          { credit: 4, value: 26, text: "Engineering Computational methods" },
          { credit: 2, value: 27, text: "Microprocessors(5-sem)" },
          { credit: 4, value: 28, text: "Compiler Design" },
          { credit: 5, value: 29, text: "Java Programming" },
          { credit: 4, value: 30, text: "Artificial Intelligence" },
          { credit: 1, value: 31, text: "Adobe Lab" },
          { credit: 2, value: 32, text: "Mini Project" },
          { credit: 4, value: 33, text: "IOT" },
          { credit: 4, value: 34, text: "Python(6-sem)" },
          { credit: 4, value: 35, text: "Software Engineering" },
          { credit: 4, value: 36, text: "Soft Computing" },
          { credit: 5, value: 37, text: "Machine Learning" },
          { credit: 4, value: 38, text: "Computer Network Security" },
          { credit: 3, value: 39, text: "Colloquium" },
          { credit: 3, value: 40, text: "Mobile communication" },
          { credit: 3, value: 41, text: "Computer Network Security(7-sem)" },
          { credit: 3, value: 42, text: "Data science and analytics" },
          { credit: 4, value: 43, text: "Compiler Design" },
          { credit: 3, value: 44, text: "School Elective-III" },
          { credit: 3, value: 45, text: "Open Elective IV (HM) " },
          { credit: 3, value: 46, text: "Mini Project(7-sem)" },
          { credit: 11, value: 47, text: "major project + internship "},
],
        // ece
        options2: [
          { credit: null, value: null, text: "Please select an option" },
          { credit: 3, value: 1, text: "Engineering Mathematics-I" },
          { credit: 4, value: 2, text: "Basic Electrical Engg" },
          { credit: 4, value: 3, text: "Basic Electronics" },
          { credit: 4, value: 4, text: "Engineering Physics" },
          { credit: 4, value: 5, text: "Introduction to ‘C’ " },
          { credit: 3, value: 6, text: "Communication Skills" },
          { credit: 1, value: 7, text: "Intro to Electronics" },
          { credit: 1, value: 8, text: "Engineering Workshop" },
          { credit: 3, value: 9, text: "Engineering Mathematics-II" },
          { credit: 2, value: 10, text: "Engineering Graphics" },
          { credit: 3, value: 11, text: "PYTHON-I" },
          { credit: 5, value: 12, text: "Electronic Circuits and simulation" },
          { credit: 4, value: 13, text: "Network Analysis and Synthesis" },
          { credit: 3, value: 14, text: "Discourse of human values" },
          { credit: 1, value: 15, text: "Language Lab" },
          { credit: 0, value: 16, text: "Environmental Studies" },
          { credit: 3, value: 17, text: "Introduction to Logic" },
          { credit: 4, value: 18, text: "Electromagnetic Field Theory" },
          { credit: 5, value: 19, text: "Analog Communication Eng" },
          { credit: 5, value: 20, text: "Digital Electronics" },
          { credit: 1, value: 21, text: "Electronics Workshop Lab" },
          { credit: 4, value: 22, text: "Data Structure using c++" },
          { credit: 5, value: 23, text: "Linear Integrated Circuits and app." },
          { credit: 5, value: 24, text: "Digital Communication Eng" },
          { credit: 4, value: 25, text: "Antenna & wave propagation" },
          { credit: 5, value: 26, text: "Microprocessor Systems" },
          { credit: 5, value: 27, text: "Digital System Design using Verilog" },
          { credit: 2, value: 28, text: "MATLAB Programming" },
          { credit: 0, value: 29, text: "Constitutional of India" },
          { credit: 4, value: 30, text: "Signal Processing & Linear Systems" },
          { credit: 4, value: 31, text: "Control systems" },
          { credit: 5, value: 32, text: "Microwave Engineering" },
          {
            credit: 4,
            value: 33,
            text: "Embedded Electronics and Microcontroller",
          },
          { credit: 3, value: 34, text: "Computer Networks and security" },
          {
            credit: 2,
            value: 35,
            text: "Minor Project-I Hardware Based Projects",
          },
          { credit: 3, value: 36, text: "School Elective –I" },
          { credit: 3, value: 37, text: "Open Elective-I" },
          { credit: 3, value: 38, text: "School Elective –II" },
          { credit: 4, value: 39, text: "Iot" },
          { credit: 5, value: 40, text: "IC Fabrication and VLSI" },
          {
            credit: 4,
            value: 41,
            text: "Probability Theory and Stochastic Process",
          },
          {
            credit: 3,
            value: 42,
            text: "Minor Project-II Hardware Based Projects",
          },
          { credit: 3, value: 43, text: "Entrepreneurship Management" },
          { credit: 2, value: 44, text: "Summer Internship Evaluation" },
          { credit: 3, value: 45, text: "Open Elective-II" },
          { credit: 4, value: 46, text: "Optical Fiber Communication" },
          { credit: 3, value: 47, text: "School Elective – III" },
          { credit: 3, value: 48, text: "School Elective-IV" },
          { credit: 5, value: 49, text: "Project- Phase-I" },
          { credit: 0, value: 50, text: "Disaster management " },
          { credit: 9, value: 51, text: "Major Project" },
          { credit: 3, value: 52, text: "Open Elective-IV" },
          { credit: 12, value: 53, text: "Internship" },
        ],
        options3: [
          { credit: null, value: null, text: "Please select an option" },
          { credit: 4, value: 1, text: "Advanced Digital Communications" },
          {
            credit: 5,
            value: 2,
            text: "Signal Processing Techniques Applications",
          },
          { credit: 4, value: 3, text: "Integrated Circuit Design" },
          { credit: 5, value: 4, text: "Wireless Networks & protocols" },
          { credit: 4, value: 5, text: "Research Methodology" },
          { credit: 4, value: 6, text: "Microwave Circuit Design" },
          { credit: 4, value: 7, text: "Optical Switching & Networks" },
          {
            credit: 3,
            value: 8,
            text: "Synthesis & optimization of Digital Circuits",
          },
          { credit: 3, value: 9, text: "School Elective-I " },
          { credit: 3, value: 10, text: "School Elective-II " },
          { credit: 0, value: 11, text: "Discourse on Human Virtues" },
          { credit: 3, value: 12, text: "Open Elective-I" },
          { credit: 3, value: 13, text: "School Elective-III " },
          { credit: 4, value: 14, text: "Embedded System Design" },
          { credit: 3, value: 15, text: "Seminar" },
          { credit: 8, value: 16, text: "Project-Synopsis" },
          { credit: 20, value: 17, text: "Project-Dissertation" },
        ],
      },
    };
  },
};

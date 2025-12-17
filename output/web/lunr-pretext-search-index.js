var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  You Your department Your institution      My Website   copyright         "
},
{
  "id": "sec-course-information",
  "level": "1",
  "url": "sec-course-information.html",
  "type": "Section",
  "number": "1",
  "title": "Course Information",
  "body": " Course Information  Taken from the official PCC course description:   Course Number  MTH 58    Course Title  Math Literacy I    CRN  11448    Location      Meeting Time      Credit Hours  4     Prerequisites  MTH 20 and (WR 80 or ESOL 252) and (RD 80 or ESOL 250) or equivalent placement.     Explores how to clearly communicate arguments supported by quantitative evidence. Investigates contextual and open-ended mathematical problems. Develops mathematical reasoning skills through interpreting information, making conjectures, communicating effectively, and verifying results. Emphasizes an understanding of the role of mathematics and how it affects decision making in life. Uses collaborative learning through in-class group interaction. Uses technology throughout the course. Full Course Content and Outcome Guide can be found here www.pcc.edu\/ccog\/ .   Learning Outcomes  Upon completion of the course students should be able to:   Use and integrate several different types of technology to explore and analyze data to solve problems.    Use contextual information to reflect on and communicate the reasonableness of mathematical approaches and solutions.    Use quantitative reasoning, articulate individual positions, and respectfully consider the approaches and solutions of others to contribute to the academic conversation.    Critically analyze information for its accuracy, relevance, and credibility to reflect on how mathematics can be used in one’s life and in the larger community.    Engage with and formulate questions to explore mathematical topics, collaborate with others, and persevere through the problem solving process.    Develop self-awareness of the learning process and self-monitor understanding and performance.      "
},
{
  "id": "sec-grading-criteria",
  "level": "1",
  "url": "sec-grading-criteria.html",
  "type": "Section",
  "number": "2",
  "title": "Grading Criteria",
  "body": " Grading Criteria  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "3",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

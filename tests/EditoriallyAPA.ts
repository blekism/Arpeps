export const markdown = `# **EDITORIALLY: A STUDENT PUBLICATION PLATFORM** {#editorially:-a-student-publication-platform}

# **FOR THE NUNTIUM BEYOND SOCIAL MEDIA**

A Capstone Project submitted to the Faculty of the

National University College of Computing and Information Technologies

in Partial Fulfillment of the requirements for the Degree of

Bachelor of Science in Information Technology

**DUPLON, HANNAH REA A.**

**LAVIANO, CRISTIAN BLAKE**

**OCTAVIANO, LHEOMARK A.**

**RODRIGUEZ, RALLIAN C.**

**MR. RUDANTE M. GALAPON**  
JULY 2026

# **RECOMMENDATION FOR ORAL EXAMINATION** {#recommendation-for-oral-examination}

The capstone attached hereto, entitled “**EDITORIALLY: A STUDENT PUBLICATION PLATFORM FOR THE NUNTIUM BEYOND SOCIAL MEDIA**”, prepared, and submitted by HANNAH REA A. DUPLON, CRISTIAN BLAKE LAVIANO, LHEOMARK A. OCTAVIANO, RALLIAN C. RODRIGUEZ in partial fulfillment of the requirements for the subject CAPSTONE PROJECT, has been accepted and recommended for ORAL EXAMINATION.

| Mr. Rudante M. Galapon |             |     |
| ---------------------- | ----------- | --- |
| Faculty In Charge      |             |     |
|                        |             |     |
|                        | Date Signed |     |

# **APPROVAL SHEET** {#approval-sheet}

The report attached hereto, entitled “**EDITORIALLY: A STUDENT PUBLICATION PLATFORM FOR THE NUNTIUM BEYOND SOCIAL MEDIA**”, is hereby approved, and accepted in partial fulfillment of the requirements for the course of Capstone Project by the Computing and Information Technology.

|                                                                                                                   |                                                                                                                   |                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Panel Member Name and Signature \_\_\_\_\_\_\_\_\_\_\_\_\_ Date Signed | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Panel Member Name and Signature \_\_\_\_\_\_\_\_\_\_\_\_\_ Date Signed | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Panel Member Name and Signature \_\_\_\_\_\_\_\_\_\_\_\_\_ Date Signed |

#

# **ACKNOWLEDGEMENT** {#acknowledgement}

The researchers would like to express their sincere gratitude to all individuals and organizations who contributed to the completion of this study.

First and foremost, we extend our deepest appreciation to our research adviser, Mr. Rudante M. Galapon, for providing invaluable guidance, constructive feedback, and continuous support throughout the development of this research.

We also thank the faculty members and panelists of the Bachelor of Science in Information Technology program at National University \- Dasmariñas for their insights, recommendations, and encouragement that helped improve the quality of this study. Our gratitude is extended to The Nuntium for providing the opportunity, resources, and environment necessary to conduct this research and gain practical experience relevant to the project.

We are likewise thankful to all respondents, participants, and individuals who shared their time and valuable input during the data-gathering and evaluation phases of the study.

Finally, we express our heartfelt appreciation to our families, friends, and classmates for their unwavering support, patience, and encouragement throughout this journey. To everyone who contributed directly or indirectly to the successful completion of this study, we offer our sincere thanks.

#

#

#

#

#

#

#

#

#

# **EXECUTIVE SUMMARY**

    The current process used by The Nuntium for managing and publishing articles often relies on social media platforms and disconnected tools, leading to inefficiencies, weak editorial oversight, and limited content preservation. This fragmented workflow results in delays, miscommunication, and reduced accountability during article creation and approval. Editorially addresses these challenges by providing a web-based system that centralizes the editorial process and offers a dedicated publication platform for student journalists of The Nuntium.

The main objective of this study is to develop a system that streamlines editorial workflows, enhances collaboration among members, and provides a platform for publishing articles. The system ensures that all content undergoes proper editorial verification before publication, promoting credibility, accountability, and transparency in student journalism.

The proposed solution, Editorially, consists of 3 core components that work together to deliver an efficient publication workflow. The Publication Site serves as the public-facing interface where readers can access articles and explore featured content. The Content Pipeline Module allows writers and editors to collaborate through a structured workflow that includes proposal submission, approval, creation and review, and final checks before publishing, and the Article Management Module handles the post-publishing content management like editing or archiving.

**\*KEYWORDS:** Editorially, Student Publication, Content Management System, Editorial Workflow, Publication Platform, Journalism, Article Management, Project Management System, Progressive Web App, Web Application\*

# **TABLE OF CONTENTS**

**[EDITORIALLY: A STUDENT PUBLICATION PLATFORM FOR THE NUNTIUM](#editorially:-a-student-publication-platform) [BEYOND SOCIAL MEDIA](#heading=h.42vx28j1g2u7) I**

[**RECOMMENDATION FOR ORAL EXAMINATION**](#recommendation-for-oral-examination) **II**

[**APPROVAL SHEET**](#approval-sheet) **II**

[**TABLE OF CONTENTS**](#heading=) **III**

[**ACKNOWLEDGEMENT**](#acknowledgement) **IV**

[**EXECUTIVE SUMMARY**](#heading=) **V**

[**CHAPTER I**](#heading=) **1**

[**INTRODUCTION**](#heading=) **1**

[1.1 Project Context](#project-context) 1

[1.2 Purpose and Description](#purpose-and-description) 2

[1.3 Objectives](#objectives) 3

[1.4 Scope and Delimitations](#heading=) 5

[1.5 Technical Terms](#technical-terms) 8

[**CHAPTER II**](#chapter-ii) **19**

[**REVIEW OF RELATED LITERATURE**](#review-of-related-literature) **9**

[2.1 Related Literature 1](#2.1-related-literature)0

[2.2 Related Studies](#2.2-related-studies) 16

[2.3 Synthesis](#2.3-synthesis) 17

[**CHAPTER III**](#chapter-iii) **19**

[**TECHNICAL BACKGROUND**](#technical-background) **19**

[3.1 Details of the Technology to be Used](#3.1-details-of-the-technology-to-be-used) 19

[3.2 Project Technical Description 2](#3.2-project-technical-description)2

[**CHAPTER IV**](#chapter-iv) **24**

**METHODOLOGY, RESULTS, AND DISCUSSIONS 24**

[4.1 Requirement Analysis and Documentation](#4.1-requirement-analysis-and-documentation) 24

[4.2 Design of Software, Systems, Product and/or Processes 3](#4.2-design-of-software,-systems,-product-and/or-processes)1

[4.3 Development and Testing](#4.3-development-and-testing) 39

[4.4 Description of The Prototype](#4.4-description-of-the-prototype) 45

[4.5 Sampling Size and Sampling Techniques](#4.5-sampling-size-and-sampling-techniques) 57

[4.6 Implementation Plan](#4.6-implementation-plan) 59

[4.7 Implementation Results 6](#4.7-implementation-results)0

[**CHAPTER V**](#chapter-v) **78**

**SUMMARY AND RECOMMENDATIONS 78**

[5.1 Summary](#5.1-summary) 78

[5.2 Recommendations 8](#5.2-recommendations)0

[**REFERENCES**](#references) **83**

[**APPENDICES**](#appendices) **88**

[APPENDIX A Relevant Source Code](#appendix-a) 89

[APPENDIX B ISO 25010 Evaluation Form](#appendix-b) 199

[APPENDIX C MARS Evaluation Form 2](#appendix-c)06

[APPENDIX D Software Progress Report 2](#appendix-d)12

[APPENDIX E Photos showcasing data gathering and investigation 23](#appendix-e)0

[APPENDIX F Test Documents 2](#appendix-f)34

[APPENDIX G User Manual 3](#appendix-g)13

[APPENDIX H Grammarian Certification 3](#appendix-h)29

[APPENDIX I Plagiarism and Ethics Certification 33](#appendix-i)1

[APPENDIX J IEEE Conference Paper 3](#appendix-j)35

[APPENDIX K Bionote of Team Members 34](#appendix-k)2

# **CHAPTER I**

# **INTRODUCTION**

In the Philippines where journalism and news consumption have historically been limited, social media, particularly Facebook, has become the dominant source of information for many citizens (David, 2019). While this shift allows faster access to news, it also encourages the spread of misinformation due to the absence of built-in verification mechanisms (Aimeur, Amri, Brassard, 2023). Unlike traditional media institutions that follow editorial and fact-checking standards (Baker & Fairbank, 2025), online users often lack the tools and media literacy to distinguish credible reports from false ones (Avram et al., 2020; Mangarin & Climaco, 2024). This environment has weakened public trust in journalism, as the pressure to publish quickly can lead to errors and sensationalism (William, 2025). Strengthening transparency in the reporting process by showing how stories are proposed, approved, verified, and corrected has been suggested as a key step toward rebuilding this trust (Moshavi, 2022). Furthermore, readers tend to judge credibility based on design and presentation rather than content depth (Spillane, Lawless, & Wade, 2020), making it crucial for news organizations to adopt systems that have an engaging design, highlight accuracy, accountability, and transparency (Bhuiyan et al., 2021).

Editorially is a web-based application that centralizes the editorial process of The Nuntium, and provides a platform for them to publish their articles. The system is composed of 3 main modules: the Publication Site, Content Pipeline Module, and Article Management Module. The Publication Site serves as the front-facing platform where readers can access editorial board approved articles through the Editorial Board’s approval verification for factual accuracy. Meanwhile, the Content Pipeline Module enables writers, and editorial board to collaborate through a structured workflow proposing articles, drafting of the article content, review, and approval. Once an article is approved by the editorial board, it is then published to the Publication Site, ensuring that all publicly visible articles have passed proper editorial scrutiny.

1. ## **Project Context** {#project-context}

As journalism continues to evolve in the digital era, student publications face increasing pressure to balance accuracy, timeliness, and credibility in their reporting. Many

still rely on manual or loosely organized processes-paired with shared documents or social media drafts-which can result in workflow confusion, inconsistent revisions, and weak editorial oversight. Along with relying on Social Media for publishing content, though there’s the benefit of a wider reach for content discoverability, it also comes with the issue of having little to no options with preserving content since posted articles in social media have no way to be managed due to the simple fact that Social Media was never built to support what a student publication is made to do-which is to deliver content to its readers in an organized manner.

These inefficiencies highlight the need for a structured digital system that integrates both content pipeline for the editorial process, article management for the publishing phase, and a dedicated platform for readers to consume Student Publication articles. Editorially addresses the issues by combining a Content Pipeline Module for project tracking and editorial process of creating and posting the approved articles. Within this setup, the assigned Student Publication writers can collaborate under a clear workflow, editors can monitor progress, and validate the content before being published. The Article Management Module component allows post-publication management such as updating article content, editing thumbnails, archiving article or adjusting visibility such as making certain articles appear at the top as a featured article, ensuring that published works remain accurate and up to date, additionally, it serves the purpose of preserving the content made by the publication through the ability to search and bookmark articles.

2. ## **Purpose and Description** {#purpose-and-description}

Editorially, a web application is made so that Student Publications do not have to rely on Social Media sites alone to deliver their content and practice their journalistic proficiency. Its main purpose is to centralize and streamline the editorial process of student publications so that creation of articles always follows a certain process that all involved members can follow, and an area where Student Publications can publish their content to, and for the readers to have a platform where they can consume the publication’s content without the distractions of Social Media. With this platform, the Editorial Board can always monitor and oversee all the content before it is published after the Student Publication Members have finished creating the content.

As expressed by the former Editor-In-Chief of The Nuntium \- the Student Publication of National University Dasmariñas, their publication right now relies on Facebook to deliver

its content, and managing the process of creating the actual content is difficult due to the fact that different tools is used for different aspects of the project, and for this to work, it mainly relies on the manual updates done by each involved member on the status of their work which is inefficient since this method is prone to delayed updates due to personal or academic reasons. Once all the approvals are met, said content will be marked for publishing for the readers to see. The uploaded content can be through the Article Management Module of the system. This also helps in content preservation since The Nuntium will now have the complete collection of all their posted articles that was published through the system, and discoverability will now be better since articles will be searchable, and bookmarking of articles is included in the Publication side of the system available for all users. The goals of these features are to help streamline and centralize the fragmented process of The Nuntium which rely on multiple tools and only Facebook to publish their work.

3. ## **Objectives** {#objectives}

The general objective of the study is to develop a web application that can also be used in mobile platforms that enhances operational efficiency, improves content discoverability, and improves the overall quality of the student publications. These objectives were formulated to address the fragmented workflows and lack of structured editorial oversight identified with The Nuntium. By integrating content management, collaboration within a single platform, the system aims to strengthen editorial accountability, promote transparency, and preserve content integrity.

**Specifically, this project aimed to:**

1. Design and develop a system that streamlines editorial workflows through a range of integrated features:

- Provides an independent online platform for publishing and accessing articles, reducing reliance on third-party social media platforms.
- Implements a structured editorial workflow that supports article proposal, approval, assignment, content creation, review, and publication.
- Enhances transparency and accountability within the editorial process through role-based access and approval stages.

- Ensures content credibility by allowing publication only after verification and approval by authorized editorial board members.
- Improves operational efficiency and minimizes workflow confusion among publication members.

2. To develop the system by using the following software:

- [Draw.io](http://draw.io) was utilized to design the architecture of the system.
- Figma was used during the design phase to create wireframes and UI mockups, ensuring a consistent and user-friendly interface across platforms.
- Development was carried out in Visual Studio Code, a lightweight yet powerful code editor that supported multiple extensions and integrations for React projects.
- Supabase serves as the backend, providing real-time database services, authentication.
- Firebase for hosting the website to be publicly accessible.
- React.js was utilized for the web-based interface.
- Github was used for the collaboration and merging of code.
- Finally, Google Docs for the documentation of the system.

3. Test and Improve the system using Functionality and Compatibility Test.

4. Conduct an evaluation of the web application using ISO 25010 with the following criterias:

- Functional Stability
- Reliability
- Performance Efficiency
- Usability
- Security
- Compatibility
- Maintainability
- Portability

  And conduct an evaluation of the mobile application using MARS with the following criterias:

- Engagement
- Functionality
- Information
- Aesthetics
  4. ## **Scope and Delimitations**

Editorially focused on the design and implementation of a website application that can be used in mobile platforms. The system aims to equip The Nuntium with a centralized digital platform for content creation, editorial review, and content publishing. It is composed of multiple modules that work together to streamline publication workflows and ensure the delivery of credible, editorial board approved articles.

The Publication Site serves as the front-facing module for readers where approved articles and publications are found. It includes search and filtering.

For the Editorial Management**,** the system supports the full editorial process through Content Pipeline Module and an article management module**.** In terms of the Content Pipeline Module of the system, the Editor-In-Chief and other assisting roles for the EIC can monitor all ongoing articles, while the Section Editors are limited to managing and proposing articles under their section. Article proposals require editorial board approval before proceeding. Once approved, tasks are manually assigned as per the selection of the Section Editor that proposed the article.

For content creation, Editorially allows publication members to comply with their assigned tasks. After the assigned members submit their work the next phase is the review and approval of the editorial board. The Editorial Board handles posting of the articles to the Publication Site, as well as managing the posts after publishing.

However, the system has its certain delimitations such as, the system was originally designed to be evaluated only with The Nuntium. However, due to limited response during the coordination stage, the testing and evaluation was instead conducted with a third party publication, Heraldo Filipino, the Student Publication of De La Salle University \- Dasmarinas.

Nevertheless, since the participating publication operates under the same general editorial framework with minimal differences, the findings still remain relevant to the general workflow and operational needs of The Nuntium.

Editorially is intended only for The Nuntium, and excludes professional or independent media and other student publications. System access is regulated through RBAC, meaning features related to the doing any process for the publication is controlled, and this ensures that the system remains secure and each module is focused on its intended users, maintaining the integrity of each publication’s internal workflow while allowing readers to safely access Editorial Board Approved content.

Content review is manually conducted by the editorial board to ensure that human editorial oversight remains central to the publication process, preserving journalistic integrity and accountability.

The system is limited to the management and publication of standard editorial articles. These articles follow a structured format consisting of a headline, thumbnail image, and main content body. The platform supports written journalistic works, including news articles, feature stories, and opinion pieces presented within this format.

The system does not support multimedia-based content such as video reports, live broadcasts, or audio materials, as its primary focus is on delivering structured written and visual journalistic outputs.

Furthermore, non-editorial communications including institutional announcements, class suspensions, event notices, general student advisories, and photojournalism are excluded from the system’s scope. Such communications are more appropriately disseminated through official institutional channels and established social media platforms.

The system excluded instant posting of articles that bypass the creation and approval process. This ensures that all published content undergoes proper editorial review and verification, thereby upholding the publication standards of accuracy, accountability, and credibility. The current version of Editorially does not include a scheduled posting feature, where approved articles are automatically published at a future date or time. All approved articles are published upon final review of an editor. This exclusion aligns with the system’s

focus on ensuring editorial oversight and timely dissemination of verified information rather than automated scheduling. Future iterations of the system may consider implementing scheduled posting as a feature to further enhance publication flexibility and article management efficiency.

The successful implementation of Editorially is expected to provide practical and academic benefits to various stakeholders involved with The Nuntium. This section identifies the primary users and institutions that will benefit from the system. By addressing the common issues of fragmented workflows, weak editorial oversight, and reliance on social media platforms, the system contributes to a more efficient, and credible publication environment. The system will benefit the following stakeholders:

1. **Current and Future Student Journalists and Writers** **of The Nuntium** – They will benefit from a structured platform to collaborate, manage tasks, and publish article content, encouraging accountability and professional skills.

2. **Editorial Board** \- The Editorial Board of a publication will benefit from a system that helps them better monitor the overall process of creating and publishing articles, reducing their reliance on informal methods of approval, and ensuring that only appropriate roles are capable of publishing the articles, promoting responsibility, accountability, and transparency, and reducing the risk of unverified content from being published.

3. **Readers and the General Public** – Receive reliable news and article contents in a user-friendly interface, improving access to credible information and enhancing media literacy.

4. **School Administration** \- The institution will benefit from a streamlined digital publication process that promotes accountability, transparency, and responsible media practice among students, as well as an independent platform for the institution’s student publication.

5. **Future Researchers \-** This study can be a reference for future research and system development related to improving student publication websites, publication content management.
   5. ## **Technical Terms** {#technical-terms}

6. **Editorially \-** A mobile and web application for The Nuntium with content pipeline and article management modules for streamlining editorial workflow and article publication.

7. **Content Pipeline Module \-** A component of Editorially designed to list all article topics, handle article topic proposals, drafting, submission, and approvals of each article content.

8. **Article Management Module** \- A component of Editorially responsible for posting of approved articles, updating article content, editing thumbnails, and featuring and archiving published articles.

9. **Publication Site** \- The system interface where readers can access editorial board approved articles and publications.

10. **User Authentication** \- A security process that ensures only registered users can access the system and its features based on their credentials.

11. **Search and Filtering** \- A feature allowing users to find specific content easily based on keywords or dates. Enhances content discoverability.

12. **Supabase** \- A backend platform that provides Editorially a real-time database management, authentication, hosting, and cloud functions.

13. **ISO 25010** \- A standard evaluation used to assess and evaluate the system’s web version in terms of functionality, reliability, performance, usability, security, compatibility, maintainability, and portability.

14. **MARS** \- A standard evaluation used to assess and evaluate the system’s mobile app version in terms of engagement, functionality, information, and aesthetics.

#

# **CHAPTER II** {#chapter-ii}

# **REVIEW OF RELATED LITERATURE** {#review-of-related-literature}

This chapter explores the related literature and related studies of the study. It also includes a synthesis of the reviewed literature and studies to highlight gaps, similarities, and insights that will guide this study.

## **2.1 Related Literature** {#2.1-related-literature}

**Digital Journalism and Credibility**

Credibility has long been recognized as the cornerstone of responsible journalism. In an era of digital transformation, however, maintaining that credibility has become increasingly complex. Journalism’s ethical foundation—anchored in truthfulness, fairness, independence, and accountability—remains essential to producing information that the public perceives as reliable and ethically made. Upholding these standards safeguards not only a publication’s reputation but also the public’s trust in news institutions (Nabirye H., 2025).

Digital transformation has disrupted traditional editorial oversight, exposing journalism to political manipulation, misinformation, and fragmented audiences. Yet this same disruption offers an opportunity to rebuild trust through transparency and innovation. Integrating practices such as audience engagement, fact-checking, and responsible communication allows the media to reaffirm its role as a credible democratic institution (Nabirye H., 2025).

A growing body of research notes that credibility in the age of social media has shifted from institutions to individuals. Online audiences now evaluate information based on the perceived trustworthiness of a content creator or participant rather than on the editorial standards of professional news outlets. While social media platforms amplify news consumption, they also enable manipulation through bots and algorithmic bias, producing artificial legitimacy around false or sensationalized content (Kerunga et al., 2020). This shift highlights the erosion of institutional credibility and the need for systems that restore editorial accountability, such as structured publication platforms with proper approval processes.

Historical analyses reveal that concerns over media trust have persisted for nearly a century, but digital technologies have intensified them by erasing familiar signals of authenticity—editorial bylines, established outlets, and professional vetting. Scholars note that global differences in media environments, political climates, and socioeconomic factors further complicate the question of how to rebuild trust. Despite numerous initiatives, there remains no clear consensus on which strategies effectively restore credibility (Schiffrin, A., 2025). This ongoing uncertainty underscores the need for mechanisms that visibly enforce verification and ethical consistency within digital journalism.

At the heart of credible reporting lies fact-checking, an editorial safeguard ensuring accuracy, transparency, and integrity. As explained in The Fact Checker’s Bible, effective verification depends not on rigid procedures but on unwavering adherence to these values (Baker & Fairbank, 2025). Fact-checking serves dual purposes: it protects publications from libel and, more importantly, reinforces journalism’s social responsibility to present the truth with diligence and fairness. A commitment to rigorous verification strengthens not only individual stories but also the collective credibility of the press. When incorporated systematically into an editorial workflow, fact-checking transforms journalism into an accountable and self-correcting process—an approach particularly relevant for educational and institutional publications.

Research on social-media-driven misinformation further illustrates why editorial systems are vital. False information spreads more rapidly online than in legacy media because platforms prioritize virality over accuracy. Features such as algorithmic amplification, echo chambers, and peer-to-peer sharing promote emotional, sensational content that often escapes timely correction (Baker & Fairbank, 2025). These conditions create an ecosystem where misinformation can thrive unchecked, weakening the perceived reliability of all digital content, including legitimate journalism.

Empirical evidence shows that individuals exhibiting Problematic Social Media Use (PSMU) are especially vulnerable to misinformation. Studies found that the higher a user’s PSMU level, the more likely they are to believe and engage with false news, particularly by clicking and sharing (Meshi & Molina, 2025). This behavioral trend reveals how psychological and habitual factors amplify susceptibility to false content. As engagement-driven algorithms continue to reward emotional or controversial posts,

audiences increasingly conflate popularity with credibility—a dangerous distortion that underscores the necessity of controlled, editorially verified publication systems.

Collectively, these findings demonstrate that digital journalism’s credibility crisis stems from both structural and behavioral causes: weakened editorial oversight, algorithmic bias, and declining public media literacy. Addressing these issues requires tools that re-institutionalize verification, transparency, and accountability in the digital publishing process. Systems such as Editorially respond to this need by embedding fact-checking standards, and collaborative editorial workflows into a single platform—ensuring that every published article passes through an ethical process that rebuilds trust in student journalism.

**Student Publications and Their Challenges**

The transition to digital platforms has significantly influenced how student journalists produce and distribute information. Studies reveal that working remotely has provided greater flexibility for student writers, allowing them to balance academic and non-academic responsibilities more efficiently. This shift has also led to notable improvements in writing quality, layout creativity, and topic relevance, with campus publications increasingly covering timely social issues such as health, technology, and politics (Reinjoe et al., 2022). Moreover, readers now have more convenient access to news and information through various online media platforms, resulting in a more interactive and engaging consumption experience than traditional print formats (Berry, W., 2025).

Despite these benefits, digital transformation also introduces complex challenges for student publications. One of the most pressing concerns is the proliferation of misinformation in digital spaces. The accessibility and immediacy of online media allow unverified information to spread rapidly, often without adequate editorial oversight (Reinjoe et al., 2022). While professional outlets struggle with similar issues, the problem is more acute in campus settings, where publications operate with limited resources, smaller editorial teams, and less formalized fact-checking structures (Berry, W., 2025). As Caled and Silva (2022) observed, even mainstream media are susceptible to manipulation due to the prioritization of novelty and engagement over accuracy a trend that student publications are not immune to. This lack of institutional safeguards makes it difficult for campus outlets to ensure that their platforms are not misused for misinformation or propaganda (Berry, W., 2025).

Another challenge lies in the reliance on social media platforms such as Facebook and TikTok for distributing content. Although these platforms increase visibility and engagement, they do not provide the editorial tools necessary for structured collaboration, content management, or quality control. Consequently, campus publications risk losing ownership and credibility over their content once it is disseminated online (Berry, W., 2025). The convenience of social media comes at the expense of editorial rigor, making it difficult to maintain the ethical and procedural standards traditionally associated with journalism.

Furthermore, the shift to online operations has impacted interpersonal dynamics within publication teams. The reduced face-to-face interaction caused by remote work has limited opportunities for mentorship, socialization, and experiential learning—factors essential for developing the professional and ethical judgment expected of future journalists. Participants in related studies noted that this lack of rapport and exposure negatively affected their motivation and performance, highlighting a non-technical yet significant challenge in sustaining a collaborative editorial culture (Reinjoe et al., 2022).

Overall, the reviewed literature underscores that while digital platforms have improved accessibility, efficiency, and audience engagement, they have also weakened editorial discipline and increased the risk of misinformation. For student publications, the challenge is not only to adapt to digital media but to do so without compromising credibility and institutional oversight. These findings justify the development of a dedicated system that integrates project management, editorial review, and content publishing in one platform-ensuring that student journalism remains organized, credible, and aligned with the principles of ethical reporting (Reinjoe et al., 2022\) (Berry, W., 2025).

**Role of Content Management Systems in Improving Digital Student Journalism**

    In the digital information consumption era, a content management system (CMS) has become the preferred method to how organizations create, organize, manage, and publish content online. A CMS provides a unified platform where content creators, editors, and administrators can collaborate within a structured workflow, reducing the need for manual coordination across separate tools. Modern CMS platforms commonly offer defined user roles, approval workflows, and centralized content storage, which help streamline production and reduce errors associated with manual management of content. These capabilities allow multiple members to work together more efficiently in delivering content, clearly defining

responsibilities and maintaining consistency throughout the publishing process. A CMS also supports task delegation and organized workflows that improve collaboration and overall content quality compared to informal practices. (Soni, A, 2023\)

The journalism sector, which shares functional similarities with student publications, highlights the strategic role of CMS platforms in editorial work. Modern newsroom CMS platforms facilitate content scheduling, automated workflows, and editorial team collaboration, allowing editorial teams to focus on content quality rather than administrative tasks. These platforms also support enhanced audience engagement and analytics, illustrating how content management systems contribute to both internal workflow efficiency and external readership growth.(John, A., 2024\)

In academic contexts, CMS has become increasingly widespread. For example, in an academic library website, content management systems are used to build and maintain content that supports researchers and students through organized creation, editing, and publishing tools. The steady increase in CMS adoption among universities indicates a broader institutional shift toward centralized digital content management in scholarly settings, supporting effective information access and administrative control.(He and Huang, 2023\)

According to industry analyses, a CMS platform can reduce redundant work, enable assignment of tasks and approvals, and set role-based permissions, which ensures that content creation follows an organized process from drafting to final publication. In contrast, informal tools like text messages, shared drives, or social media lack these governance features, often leading to workflow confusion and inconsistent outputs.(Soni, A, 2023\)

For student publications specifically, the relevance of a CMS becomes clearer when considering the shortcomings of relying on manual or informal publishing channels. Unlike static webpages, email drafts, or pieces coordinated through social media and file sharing, a custom CMS can support a specific editorial workflow, version tracking, and centralized repository access, enabling publication teams to handle multiple contributors, edits, and article formats more efficiently. Moreover, CMS platforms can integrate design templates, ensuring consistent visual presentation across articles, and built‑in governance features that enforce editorial standards. Such structured systems also offer analytics and content organization

tools that help measure reader engagement and manage content across devices-features that are difficult to implement effectively through informal tools alone.(Smith, J., 2026\)

Research in broader educational publishing domains similarly supports the benefits of structured content systems. Educational CMS platforms empower authors and editors by simplifying the content lifecycle \- from conception through publication, thus shifting focus back to quality content creation and editorial oversight rather than technical execution.(Content2Classroom, 2026\)

Together, these studies highlight that CMS platforms are not merely tools for adapting to short-term challenges (such as pandemic-driven shifts to online publication) but are strategic assets that improve efficiency, quality, and sustainability in content creation and dissemination. For student publications \- where multiple contributors must work together, maintain quality standards, and distribute work to their audience \- a CMS offers a systematic solution that informal or manual workflows cannot achieve.

**User Experience and Media Presentation**

Visual design and overall presentation play a crucial role in shaping how audiences perceive the credibility and trustworthiness of online news. The user experience (UX) of a publication website not only affects how content is consumed but also how it is evaluated. Research shows that even when the textual content remains constant, the perceived bias and reliability of an article can be influenced by the quality of its visual presentation. In one experiment, the same news article—when displayed with low visual quality—was perceived as significantly more biased compared to when it was presented with higher-quality visuals. This suggests that aesthetic presentation contributes directly to perceived impartiality, with cluttered or poorly designed layouts heightening user skepticism and reducing perceived trust (Spillane et al., 2018).

A related study further reinforces the importance of design in distinguishing legitimate news sources from fake or misleading ones. Findings reveal that fake news websites tend to exhibit low-quality aesthetics, minimal visual organization, and inconsistent design patterns.

These sites often deprioritize visual coherence and brand identity because their primary objectives—such as financial gain or political influence—focus on attracting attention rather than building long-term credibility. The lack of institutional structure or

professional oversight leads to poorly designed pages that undermine their legitimacy as news outlets. Conversely, established publications maintain structured and coherent designs that signal organizational credibility and journalistic integrity. The study concludes that aesthetic quality can serve as a practical indicator for detecting disinformation, as low-quality or inconsistent visual design often correlates with unreliable content (Ruiz, 2018).

Similarly, empirical evidence confirms that even purely presentational elements—independent of content—significantly shape users’ credibility judgments. In a study that isolated presentation from meaning, participants rated news articles as more credible when they included videos or a balanced number of images, while large fonts or text-heavy layouts reduced credibility. Interviews with participants revealed that users consciously notice and rely on such visual cues—such as imagery, typography, and multimedia presence—when assessing trustworthiness. The findings emphasize that online news credibility is determined not only by factual accuracy or content quality but also by the visual and experiential dimensions of information delivery (Wobbrock et al., 2019).

Taken together, these studies highlight that design and presentation are central to user trust formation in digital journalism. Readers often make rapid credibility judgments based on interface quality, layout coherence, and aesthetic appeal before even engaging with the text. For student publications, this insight underscores the need to prioritize thoughtful design and organized presentation alongside editorial accuracy. Systems like Editorially should therefore ensure that the reader-facing publication site not only presents verified and institution-approved content but also communicates professionalism and transparency through its design—enhancing both user engagement and perceived credibility (Spillane et al., 2018\) (Ruiz, 2018\) (Wobbrock et al., 2019).

**Digital Publishing Platform**

While not the sole factor, a good user interface and experience are essential in encouraging the continuous use of a news app. Key features include simple navigation, personalized content through user accounts, push notifications, and the flexibility to use the app without registration (Guo, 2024). An effective recommendation system is also important for maintaining user engagement. The CNN mobile news app supports these features by

delivering real-time news through a user-friendly interface that allows users to focus on content without difficulty in navigation. It also includes functionality such as article saving for later reading and push notifications, enabling users to stay updated on current events at their convenience (CNN, 2023).

## **2.2 Related Studies** {#2.2-related-studies}

**Publication Project Management Systems**

Project management systems (PMS) are designed to centralize organizational processes, allowing teams to plan, monitor, and execute tasks efficiently within a unified digital environment. These systems serve as structured frameworks for collaboration, providing tools for scheduling, task assignment, communication, and document tracking. In recent years, organizations—including academic institutions—have increasingly adopted PMS tools to streamline workflows, minimize redundancy, and improve accountability across departments.Research on Electronic Document Management Systems (EDMS) highlights the broader value of centralized management solutions in institutional settings.

According to Aliazas et al. (2024), the successful implementation of EDMS in universities resulted in enhanced efficiency, improved accessibility, and stronger collaboration across administrative, academic, and research functions. The study also revealed that involving users in the implementation process and emphasizing usability led to higher acceptance and consistent utilization of the system. By integrating document management into key operational areas, institutions achieved measurable gains in productivity and process transparency. This demonstrates that centralized digital management systems—whether for documents or projects—play a vital role in improving coordination and long-term system adoption within organizations.

Complementing these findings, industry research from CMSWire emphasizes the importance of centralization in managing content and workflows. Their analysis found that centralized management systems significantly streamline the content creation process by reducing redundant administrative tasks, consolidating assets, and allowing content to be repurposed efficiently across multiple channels. This shift enables teams to focus more on strategy and creativity rather than repetitive coordination, which directly translates to improved productivity and higher-quality outputs. Such insights reinforce that when

organizations unify their tools and workflows under a single management system, the result is greater operational clarity, faster turnaround, and more consistent quality control (Kihlstrom, 2025).

Together, these studies illustrate the critical role of centralized management platforms—whether in academia or media—in enhancing collaboration, efficiency, and usability. Building upon these principles, the Project Management Module of Editorially applies the same centralized logic to the editorial workflow of student publications. It consolidates the entire article development process—from concept proposal, drafting, and revision to editorial approval—into one integrated environment. By doing so, Editorially addresses the fragmented and manual processes common in student newsrooms, ensuring that every publication operates under a clear and structured workflow. This centralization not only improves team coordination and task visibility but also strengthens editorial accountability and content quality, making the publication process more efficient and aligned with professional journalistic standards.

## **2.3 Synthesis** {#2.3-synthesis}

Across the reviewed studies, a consistent theme emerges: centralized yet flexible systems significantly enhance efficiency, collaboration, and user experience in digital publishing environments. Research on Project Management Systems (PMS) emphasizes their role in improving organizational performance by providing structure, oversight, and real-time visibility across workflows (Mwana & Lubisi, 2023; Matias & Andres, 1992). Integrated collaboration tools and automation further strengthen these systems by enabling synchronized teamwork, immediate feedback, and streamlined task execution (Gurnov, 2024; Crudu, 2025; Hartsell et al., 2020; Najah & Amyot, 2022). Complementing the efficiency of PMS and CMS systems, research on theme and layout presentation reveals that design elements outside the article content—such as typography, structure, and visual balance—directly affect perceived credibility and trustworthiness. Presentation-based cues serve as visual indicators of professionalism, signaling to readers that the information presented is reliable and well-curated (Wobbrock et al., 2019).

Taken together, these studies form the foundation of Editorially’s architecture. The system combines a centralized project management module for structured article workflows, tools for publishing and managing content.

This integration into a single platform directly addresses both the operational and perceptual challenges that were identified in Chapter 1 which are being faced by student publications relying on Social Media as their main publishing platform. Editorially streamlines the content creation, ensuring responsible editorial governance and reinforcing credibility through thoughtful design.

#

# **CHAPTER III** {#chapter-iii}

# **TECHNICAL BACKGROUND** {#technical-background}

This chapter outlines the technologies, tools, and frameworks used in developing Editorially. It also presents the system architecture, database design, and technical diagrams to illustrate the system’s workflow and data processes.

These technologies and design choices were selected not only for system performance and scalability but also to address the challenges identified in Chapter I, particularly the need for a structured editorial process, verification, and an independent platform for credible student journalism.

## **3.1 Details of the Technology to be Used** {#3.1-details-of-the-technology-to-be-used}

**Technology Used**

Editorially integrates a Content Pipeline Module with an Article Management Module to streamline the end-to-end news creation workflow. The Content Pipeline Module facilitates article proposals, task assigning, content drafting, and progress tracking, ensuring that editorial and creative teams remain aligned throughout the publishing process. Editorially serves as the central hub for creating, editing, and delivering news content, supporting both textual and visual materials.

**Hardware Components**

The app is designed to run smoothly on mobile devices with at least 4GB of RAM and 32GB of storage. This ensures reliable performance and provides enough space for temporary files and cached data, helping users avoid slowdowns or interruptions. To get the best experience and take advantage of the latest features and security updates, it's also important that the device runs the latest version of their Web Browsers for better compatibility with Editorially’s PWA and the Website itself.

For those using the web-based version on a personal computer, a processor with a minimum speed of 2.3GHz and at least 4GB of RAM is recommended. This helps maintain a responsive and lag-free experience.

**Software Components**

This section explains the different tools and technologies used in developing the web and mobile versions of Editorially. The development team carefully selected each tool to ensure efficient, scalable, and user-friendly user experience.

Draw.io was used to design the system architecture due to its intuitive interface and collaborative features. It allows the team to visually map out components, data flows, and user roles, making it easier to communicate ideas across the team and iterate quickly. The diagrams served as a clear reference throughout development, ensuring alignment between design and implementation.

Figma served as the primary tool for the UI/UX design of the system, supporting collaborative wireframing and prototyping. This enables designers and developers to work together seamlessly in creating an interface that is both visually engaging and user-friendly.

Editorially’s Publication Site and Editorial Management Module was developed using React.js, a JavaScript Framework known for its modular and component-based architecture.

React.js was selected to leverage its strong ecosystem and suitability for building responsive, interactive web interfaces improving usability and engagement for student journalists.

The mobile version was developed as a Progressive Web App (PWA). By integrating a service worker and a web app manifest, the PWA makes it installable and functions similarly to a native mobile application. This eliminates the need for separate native app development while maintaining a consistent user experience across mobile and web platforms.

Supabase serves as the backend platform that provides Editorially a real-time database management, authentication, and edge functions. Supabase was chosen due to its compatibility with the Editorially’s database requirements like SQL for Relational Database Schema, and its organized way of handling data. Editorially’s the type of system that relies heavily on table relationships like author to articles, or assignee to tasks, and this is

important since Editorially should be able to show data in an accurate manner, other options such as Firebase can technically do this but it’s not a true relationships like how an RDBMS is, so what happens instead is querying data gets unnecessarily tedious. To conclude, Supabase was chosen due to its compatibility with Editorially’s system type. The need for a way to store and retrieve data in an organized manner along with clear relationships between tables. The way ideas get transformed into actual articles works well with Supabase’s Relational Database structure.

On the other hand, Firebase was used for hosting the system due to it’s compatibility with Github Actions for a CI/CD Pipeline.

Visual Studio Code was the main development environment for building both the web and mobile versions of the application. Its support for JavaScript and extensive library of extensions, enhanced productivity in the development and code quality.

Finally, Google Docs was used for the whole documentation process of Editorially. While Github was used as the platform for version control and collaboration on code, allowing the team to track changes, manage and merge branches, and handle issues efficiently.

**Peopleware**

- Project Team: Consists of a project manager, designers and developers, each member of the team brings knowledge and skills in the website development. Their combined expertise ensures that the system will be built intuitive, responsive, secure and user-friendly.

- Editorial Board: One of the primary users of Editorially which handles the creation and publishing of the content in the Publication Site.

- Editorial Members: One of the primary users of the Editorially. They are responsible for accomplishing assigned tasks, writing articles, and creating publication materials that will be reviewed and published through the system.

- End Users: The other primary user of Editorially in which they are the ones consuming the content being delivered by the publication.

**Network Connectivity**

Editorially requires the usage of WiFi for real time updates regarding the proposed article topic approvals, ongoing topics and tasks, and article posting approvals. Security measures were also implemented to protect each user’s personal data which ensures a safe and private accessibility to sensitive information. Wireless Connectivity is also utilized to ensure easy access, making it convenient to interact with the system across different environments.

## **3.2 Project Technical Description** {#3.2-project-technical-description}

Editorially is a primarily a web application adapted to be used in a mobile platform through the use of Progressive Web App. Editorially is a platform with a publication site alongside with the combination of content pipeline module and article management module specifically designed for The Nuntium. Editorially offers a centralized platform that addresses the challenges encountered by The Nutium in Chapter I. The system architecture is carefully designed to provide efficient and seamless user experience.

**The system is structured into three primary layers:**

**Presentation Layer**: This layer is built using React.js, delivering a responsive and user-friendly interface. React.js enables the development of dynamic web pages, while the mobile version was developed as a Progressive Web App (PWA) making it installable and functions similarly to a native mobile application.

**Application Layer**: Developed using React.js, this layer forms the foundation of the application, managing core functionalities and business logic.

**Database Layer**: Supabase is a good choice for a system like Editorially because it provides a reliable SQL-based backend (PostgreSQL) while reducing development complexity through built-in services such as authentication, file storage, and real-time updates. Its relational database structure is well-suited for managing content, users, roles, and publishing workflows, which are essential in a student publication system. Additionally, Supabase supports row-level security, allowing fine-grained access control for writers, editors, and readers, and offers scalable hosting that can grow with the publication’s needs without requiring extensive infrastructure management.

**The user flow and features are designed to cater the needs of the target users of the system. **

**Publication Site:** This feature allows the readers to view and interact with all the articles published by the student publication. Readers can view their preferred articles.

**Content Pipeline Module:** This module enables the Editorial Board to effectively oversee and manage article projects within The Nuntium. The Editor-in-Chief holds comprehensive oversight of all projects across the publication’s sections, including the approval of proposed article concepts and final articles for posting. Section Editors, on the other hand, are limited to managing and monitoring projects within their assigned sections, with the authority to propose articles and assign tasks to section members, while Section Members are only allowed to access article projects within their section and contribute on article projects that are assigned to them. The Editor-In-Chief serves as the final reviewer, ensuring that each article meets the publication’s editorial and ethical standards prior to its release.

**Article Management Module:** This feature handles the posting of articles that went through the evaluation of the Editorial Board. It also handles the post-publication management of the articles.

#

# **CHAPTER IV** {#chapter-iv}

# **METHODOLOGY, RESULTS, AND DISCUSSIONS**

This chapter presents the methods and processes undertaken in the development and evaluation of Editorially. It outlines the research methodology applied, including the system development approach, data collection methods, and evaluation procedures used to assess the system’s performance and effectiveness. The chapter also discusses the conceptual framework that guided the project’s design, supported by detailed system and database diagrams that illustrate the platform’s functionalities and architecture. Finally, it presents the results and discussion, highlighting how the implemented features address the identified issues and objectives of the study.

## **4.1 Requirement Analysis and Documentation** {#4.1-requirement-analysis-and-documentation}

Editorially is a web-based project that is adapted to mobile. It is a content management platform designed for The Nuntium. It is a dedicated platform where publication members can create, review, and publish articles in a structured workflow. The system aims to reduce dependence on social media for news dissemination, helping prevent misinformation and ensuring that all published content has been verified by the editorial board.

The platform includes a content pipeline module which supports proposing, approving, assigning to members, drafting, creation of articles, and article approval for posting, enabling student publications to work more efficiently and maintain editorial standards. On the publication site, it serves as an accessible and credible source of editorial board articles, reinforcing the student publication’s trustworthiness.

A proper requirement analysis and documentation are important in defining the system’s objectives and functionalities. The requirements for Editorially were gathered through interviews with the Editor-In-Chief and Adviser of The Nuntium from National University \- Dasmariñas, as well as the SDAO (Student Development and Activities Office) to determine how the system will be structured, and which entities will be included since censorship in publication in general is a sensitive matter. The interviews provided insights on what are the challenges being faced by the publication.

The gathered requirements were checked if the features are feasible and if it is tailored to The Nuntium’s needs. A detailed outline of the findings was documented which became the basis on the creation of Editorially’s design and system architecture. This ensures that each component within the system is relevant, user-friendly, and addresses The Nuntium’s operational challenges and needs.

This document describes the process of identifying the needs of The Nuntium, designing the system, developing its features, deploying it, and evaluating its performance. By following these steps, the project aims to create a reliable and user-friendly tool that strengthens journalistic integrity, supports transparency, and fosters a culture of responsible reporting.

**4.1.1** **Project Design Development**

**![][image1]**

_Figure 1\. Waterfall Methodology_  
The Waterfall Development Methodology was adopted for Editorially to provide a structured and sequential approach to system development within the project's academic setting.

This methodology allowed the development team to complete each phase of the project in a defined order, ensuring that all requirements and deliverables were thoroughly documented and approved before proceeding to the next stage. The Waterfall approach was selected because the project requirements were clearly identified at the beginning of the study, making a linear development process suitable for achieving the project's objectives.

The methodology emphasized comprehensive planning, detailed documentation, and systematic progression through each development phase. Feedback from the Editor-in-Chief and Student Publication members was gathered primarily during the requirements gathering and evaluation stages to ensure that the system addressed the identified needs of the organization.

- **Requirements Analysis:** This phase served as the foundation of the project. Developers worked closely with the Editor-in-Chief and members of the Student Publication to gather, analyze, and document the system requirements. Functional and non-functional requirements were identified, reviewed, and finalized before moving to the design phase. The approved requirements became the basis for all subsequent development activities.

- **System Design:** During this phase, the system architecture, database structure, user interfaces, and workflow processes were designed based on the approved requirements. Wireframes, process diagrams, and design specifications were prepared to provide a clear blueprint for system development. All design components were reviewed to ensure alignment with the project's objectives before implementation began.

- **Development:** In this phase, developers translated the approved design into a functional system. Core modules such as article management, editorial workflow, user management, and other required features were developed according to the design specifications. The coding process followed the established design documents to ensure consistency and maintainability throughout the system.

- **Testing and Evaluation:** Once development was completed, the system underwent comprehensive testing to identify and correct errors. Unit testing, integration testing, and system testing were conducted to verify that all modules functioned properly and worked together as intended. User Acceptance Testing (UAT) was also performed with Student Publication members to ensure that the system met user requirements and expectations. The system was evaluated to determine its effectiveness in addressing the problems identified in the study. Feedback from users was collected and analyzed to assess system performance, usability, and functionality.

- **Implementation and Maintenance:** After successful testing and approval, the completed system was prepared for implementation. The system was deployed and made available for use by the intended users. Necessary configurations, data preparation, and user orientation activities were conducted to facilitate a smooth transition to the new system. Also, Necessary corrections, improvements, or maintenance activities were documented to ensure the continued effectiveness of the system.

**4.1.2 Conceptual Framework of the Study**

**![][image2]**

_Figure 2\. Input-Process-Output (IPO) Model_

The Input-Process-Output (IPO) model illustrates the essential components and workflow followed in developing Editorially, aligning its design and functions with the problems identified in Chapter 1—particularly the fragmentation of tools used by The Nuntium, the lack of structured editorial oversight, and the absence of a centralized and credible content platform.

**Input:**

The inputs include the knowledge requirements, software tools, and hardware resources necessary for system development. Knowledge requirements focus on the design and development of a publication management system and article publishing workflows that mirror actual editorial processes. Client interviews revealed the need for a centralized platform that enables content management, coordination among student publication members, and editorial review workflows before publication — addressing the inefficiencies caused by relying on multiple disconnected tools.

Software tools such as Draw.io, React.js, Supabase, Firebase, Visual Studio Code, Figma, GitHub, and Google Docs were selected to support the system’s accessibility, scalability, and collaborative capabilities. Hardware requirements, including a device with at least 8 GB RAM, an x86_64 CPU, WXGA (1366 × 768\) display, and 11 GB of free storage, were specified to ensure stable and efficient development.

**Process:**

The process follows the Waterfall Methodology, which consists of a structured and sequential progression through the phases of requirements analysis, system design, development, testing, implementation, and evaluation and maintenance. Each phase is completed before proceeding to the next, ensuring that all system requirements are thoroughly defined and documented prior to development. This systematic approach provides a clear framework for the development of Editorially, enabling the research team to address workflow inefficiencies and communication gaps identified in Chapter 1 while ensuring that the system meets the operational needs of student publications.

**Output:**

The output of this process is a content management platform that enables The Nuntium to manage its editorial workflows, verify content through editorial board oversight, and publish articles within a controlled and credible environment.

**Evaluation and Feedback:**

Finally, the system is assessed using ISO 25010 and MARS frameworks to evaluate its software quality and usability. The results of these evaluations are analyzed to determine

whether the system meets the specified requirements and objectives established during the earlier phases of development. The feedback from the evaluation serve as references for future system enhancements and maintenance activities, reinforcing Editorially’s goal of improving efficiency, transparency, and credibility within The Nuntium.

**4.1.3 Use Case Diagram**

**![][image3]**

_Figure 3\. Use Case Diagram_

_Figure 3_ shows the Use Case Diagram of the system which consists of four roles: Reader, Publication Member, Section Editor, and Editorial Board. Each role has their own features and limitations in the system.

Readers have access only to the Publication Site, where they can view all articles published by the student publication. They can browse articles by section, search for specific articles, and apply filters to quickly find content.

Section members can access the page where their assigned tasks are located. Tasks are manually assigned to users with this role. If assigned, they are required to comply with the submission.

Section Editors are the head of their designated section. They propose articles, assign task manually to members. After a member complies, they can see the submissions of the members.

Editorial Management composed of Editor-In-Chief which is the head of the publication along with the other Editorial Board Members, are the ones approving the proposed articles or article ready for publishing.

The Editor-In-Chief also has the final call on whether to approve a proposed article or not. In terms of approval for publishing, the Editorial Management have equal rights, and they can either approve for publishing or return the submissions for revision as well.

## **4.2 Design of Software, Systems, Product and/or Processes** {#4.2-design-of-software,-systems,-product-and/or-processes}

**4.2.1 Level 0 Diagram**

**![][image4]**

_Figure 4\. Data Flow Diagram Level 0_

The figure above illustrates the Context Data Flow Diagram (DFD) Level 0 of Editorially, showing how the system facilitates a structured workflow for The Nuntium. At the center of the diagram is the Editorially System, which acts as the central hub connecting all external entities involved in the publication process—Readers, Publication Members, and Editorial Board.

The Editorial Board entity, composed of the Editor-in-Chief and assisting roles such as Editorial Management Roles, reviews proposed article topics by Section Editors, and determines whether they meet the publication’s editorial and ethical standards. Once approved, tasks are delegated to the Section Members, who collaborate in creating articles. These submissions are then reviewed by the Editorial Board ensuring compliance with editorial guidelines and institutional integrity before publication.

After articles are approved, the Editor-In-Chief publishes them to the Publication Site, where Readers can access and interact with editorial board-approved articles. Published articles are recommended to be verified by the editorial board whether the published content is factually correct.

This flow reflects the problems and solutions identified in Chapters 1–3: addressing fragmented workflows, reliance on social media, and the lack of editorial transparency. By structuring every content interaction through defined data flows and approval checkpoints, the system reinforces journalistic integrity and ensures that all published materials undergo proper verification before reaching the public.

**4.2.2 Level 1 Diagram**

**![][image5]**

_Figure 5\. Data Flow Diagram Level 1_

The figure above presents the Level 1 Data Flow Diagram (DFD) of Editorially, illustrating the internal processes that govern how data and editorial tasks move within the system. Each process reflects the workflow of The Nuntium, where collaboration, verification, and accountability are essential for producing credible content.

The system is composed of several interconnected processes, such as Editorial Workflow process, and reader interaction. Upon login, the system validates user credentials and identifies their assigned roles—Publication Member, Section Editor, or Editorial Board, determining the specific functions they can access.

The Editorial Workflow Management process represents the structured article lifecycle, beginning with article topic proposal, followed by review and approval by the Editorial Board. Once a topic is approved, article tasks are manually assigned to the designated section members. Reflecting the system’s goal of reducing fragmented tool usage and improving coordination within The Nuntium.

Submissions are routed to the Editorial Board for evaluation. maintaining editorial oversight and ensuring that all outputs meet institutional and ethical standards. Once approved by Editorial Board, the content transitions into the Publishing Process, where it is made available on the Publication Site for public access, wherein Readers can immediately see posts as soon as an article is posted.

This Level 1 DFD extends the conceptual overview in Level 0 by detailing how Editorially operationalizes its main goal to centralize editorial processes and establish a structured publication workflow. Each process and data store corresponds to a solution proposed in Chapter 1: integrating fragmented tools, reinforcing editorial oversight, and ensuring only verified content are published in the publication site. Through this, Editorially strengthens institutional credibility, improves efficiency, and provides a structured environment that aligns with the journalistic standards of The Nuntium.

**4.2.3 HIPO Diagram**

          ** ![][image6]**

_Figure 6\. HIPO Chart_

The figure above presents the Hierarchy plus Input-Process-Output (HIPO) diagram of Editorially, which illustrates the hierarchical structure and role-based workflow of the system. As a combined Content Pipeline and Article Management Module, Editorially organizes users and processes according to editorial responsibilities to ensure transparency, accountability, and proper verification at every stage of article creation.

The workflow begins with the Editor-In-Chief adding members to access the system. General readers can view published and approved articles in the Publication Site. Once publication members are added within the system, Section Members gain access to assigned tasks generated from approved article proposals. These members collaborate through the system’s text editors, allowing efficient content creation without relying on fragmented tools such as separate text editor.

At the editorial level, Section Editors oversee content within their designated sections, managing tasks assignments and preliminary reviews. Their evaluations are raised to the Editorial Management Roles, who further assess topic relevance, content integrity, and adherence to publication standards. The Editor-in-Chief holds final decision authority for publication, ensuring that every article aligns with institutional and journalistic standards before public release.

This hierarchical process mirrors the real-world editorial structure of student publications, addressing the issues of disorganized workflows and lack of verification highlighted in Chapter 1\. Each level of editorial oversight within Editorially reinforces the system’s primary goals: maintaining editorial accountability, promoting structured collaboration, and safeguarding the credibility of published content.

**4.2.3 SQL Data Relationship Diagram**

**![][image7]**

_Figure 7\. SQL Data Relationship Diagram_

PostgreSQL is a suitable database management system for a content management system (CMS) designed for student publications due to its reliability, scalability, and support for complex data relationships. As an open-source relational database, PostgreSQL provides cost efficiency, which is particularly beneficial for academic institutions operating under limited budgets. It supports advanced features such as transactional integrity (ACID compliance), role-based access control, indexing, and robust security mechanisms, ensuring data consistency and controlled access to editorial content.

For a student publication CMS, PostgreSQL effectively manages structured data such as user accounts, article drafts, revisions, editorial approvals, and publication records. Its support for concurrent users allows multiple writers and editors to work simultaneously without compromising data integrity. Additionally, PostgreSQL’s extensibility and compatibility with modern web frameworks make it well-suited for scalable digital publishing platforms that may expand over time.

Overall, PostgreSQL offers a secure, stable, and flexible database solution that aligns with the collaborative, structured, and data-intensive requirements of a student publication content management system.

**4.2.4 Gantt Chart**

**![][image8]**

_Figure 8\. Editorially Gantt Chart_

    The Gantt chart illustrates the step-by-step progress of the Editorially project using the Waterfall Methodology. During the Project Requirements and Analysis phase, the initial topic proposal was conducted in November 2024\. However, the proposed topic was not approved, requiring the researchers to identify and develop an alternative project topic. From December 2024 to January 2025, the researchers searched for potential clients and conducted interviews to gather the necessary information, requirements, and insights for the development of the system. Simultaneously, Chapters 1 and 2 of the study were prepared and submitted for the proposal defense. Following the proposal evaluation, revisions were made to the documentation based on the panelists’ recommendations, leading to a successful re-defense in January 2025\.

Upon completing the requirements and analysis phase, the project proceeded to the System Design phase from January to June 2025\. During this period, the researchers conceptualized the overall system architecture and workflow from January to March 2025\. The user interface design was developed and finalized from February to April 2025, while Chapter 3 of the study was prepared from March to April 2025\.

Additional consultations with the client were conducted from March to April 2025 to gather comments, suggestions, and recommendations that would contribute to the refinement of the proposed system design. The Capstone 1 defense was conducted in May 2025, after which the researchers reviewed and planned the implementation of the recommendations provided by the panelists.

The Development phase commenced in January 2025 and continued through October 2025\. During this phase, the approved system design was translated into a functional platform through the development and integration of the system’s core features. Chapter 4 was initiated from April to July 2025 to document the development process and technical implementation of the system. Following the completion of the major development activities, additional enhancements and modifications were carried out from September to October 2025 to incorporate feedback and recommendations gathered from both the panelists and the client.

The Testing and Evaluation phase was conducted from September to October 2025\. During this period, both the mobile and web versions of the system underwent comprehensive testing and evaluation to assess functionality, reliability, usability, and overall performance. Any identified issues were documented and resolved to ensure that the system met the intended project requirements and quality standards. The finalization of Chapters 1 through 5 of the research paper was completed in October 2025 to reflect the completed development and evaluation results.

The Implementation and Maintenance phase was conducted from August to October 2025\. This phase involved fixing major and minor system issues, implementing final improvements and polishing, and refining existing functionalities to improve overall system performance and user experience. The system deployment activities were carried out from September to October 2025, followed by the presentation of the completed system to the client for final review and validation in October 2025\. Upon successful validation, the project proceeded to the Capstone 2 defense, marking the completion of the study.

The study employed a Modified Waterfall Methodology tailored to the academic requirements of the researchers. The development process followed a structured sequence consisting of Requirements and Analysis, System Design, Development, Testing and

Evaluation, and Implementation and Maintenance. Each phase produced specific deliverables that served as inputs for the succeeding phase, ensuring a systematic and organized development process. Although feedback from clients, advisers, and panelists was incorporated at key project milestones, the overall approach maintained the sequential and phase-driven structure characteristic of the Waterfall model.

## **4.3 Development and Testing** {#4.3-development-and-testing}

    To ensure that Editorially meets all the requirements and operates correctly, a series of comprehensive procedures were carried throughout its development process.

**4.3.1 Functionality Testing**

Functionality Testing was carried out to confirm that each component of both the web and mobile versions of Editorially functioned properly before being integrated into the entire system. This process ensured that every module and feature performed as intended when tested individually and produced accurate results across various input scenarios. Test cases were designed for all major functionalities, including user interface interactions, data processing, validation rules, and navigation flow.

| Module No. |      Module Name      |  Function Name  | Description                                                                 | Remarks |
| :--------: | :-------------------: | :-------------: | --------------------------------------------------------------------------- | :-----: |
|            |  **Website/Mobile**   |                 |                                                                             |         |
|   **1**    |  **Profile Module**   |      Login      | Enables registered users to access the system using their credentials.      | Passed  |
|            |                       | Change Password | Allows users to reset their password.                                       | Passed  |
|            |                       | Change Username | Allows users to change username                                             | Passed  |
|            |                       |     Logout      | Allows users to log out of their account                                    | Passed  |
|   **2**    | **Member Management** |   Update Role   | Allows members of publication with authority to update the role of a member | Passed  |

|       |                               |       Update Section        |                    Allows members of publication with authority to update the section of a member                     | Passed |
| :---: | :---------------------------: | :-------------------------: | :-------------------------------------------------------------------------------------------------------------------: | :----: |
|       |                               |       Disable Account       | Allows members of publication with authority to disable the account of misbehaving or bad users within their platform | Passed |
|       |                               |     Listing of Members      |                     Allows members of publication to see the list of members of their publication                     | Passed |
| **3** | **Content Management Module** |  Listing Published content  |                    Allows members of publication to see all published content of their publication                    | Passed |
|       |                               |      Update Thumbnail       |                   Allows members of publication with authority to update the thumbnail of articles                    | Passed |
|       |                               |       Update Content        |               Allows members of publication with authority to update the content of the posted articles               | Passed |
|       |                               |      Featured Article       |                                            Allow EIC to feature an article                                            | Passed |
|       |                               |      Archiving Article      |                                      Allow Editor-In-Chief to archive an article                                      | Passed |
| **4** | **Project Management Module** |  Propose an article topic   |                                   Allows Section Editors to propose article topics                                    | Passed |
|       |                               | Edit approved article topic |                  Allows members of publication with authority to update the article topic’s details                   | Passed |

|       |                             |       Approving function        |        Allow Editor-In-Chief and other editorial board members to approve an article         | Passed |
| :---: | --------------------------- | :-----------------------------: | :------------------------------------------------------------------------------------------: | :----: |
|       |                             |           Text Editor           |              Allow members to work on a text editor on writing article contents              | Passed |
|       |                             |        Image Submission         |               Allow members to submit the thumbnail to be used for the article               | Passed |
|       |                             |           Assign task           |              Allows manual assigning of member to an article project if needed               | Passed |
|       |                             | Delete article project and task |                    Allows Editorial Board to archive a project if needed                     | Passed |
|       |                             |   Submitting to assigned task   | Allows assigned members to mark their work in the system as submitted and waiting for review | Passed |
|       |                             |         Reject Proposal         |                        Allows Editorial board to reject the proposal                         | Passed |
| **5** | **Publication Site Module** |    Viewing published article    |                            Allow users to view published articles                            | Passed |
|       |                             |       Searching articles        |                         Allows users to search for specific articles                         | Passed |
|       |                             |       Filtering Articles        |                                Allow users to filter articles                                | Passed |
|       |                             |        PWA installation         |                    Allow users to install the app in their mobile phones                     | Passed |

_Table 1\. Functionality Testing Results_

Table 1 presents the functionality testing outcomes for both the web and mobile components of Editorially. The findings indicate that all modules and features functioned as expected, with every component successfully passing the test cases conducted during the evaluation stage. The testing process covered essential aspects such as authentication, data validation, user navigation, and analytics. No significant defects or functional inconsistencies were identified throughout the testing phase. Both the frontend and backend modules performed efficiently, ensuring consistent data flow and stable system performance across various scenarios.

**4.3.2 Unit Testing**

Unit testing was conducted to evaluate the functionality and reliability of Editorially’s core modules, ensuring that each component operates as intended and supports the system’s overall objectives. This testing phase focuses on verifying the behavior of individual features—such as user authentication, article submission and approval workflows, and content publication under controlled conditions. The results of the unit tests serve as a validation that the system effectively addresses the issues identified in Chapter 1, particularly the fragmented editorial workflow and lack of structured verification in The Nuntium’s process. By confirming that each unit performs according to its specified requirements, the testing outcomes demonstrate the system’s capability to deliver a seamless editorial process. Successful unit testing provides the foundation for system reliability, ensuring that Editorially functions as a cohesive tool for improving collaboration, accountability, and content credibility within student publications.

|    Module Name     |  Function Name  |  Pass  | Fail | Percentage |
| :----------------: | :-------------: | :----: | :--: | :--------: |
| **Website/Mobile** |                 |        |      |            |
| **Profile Module** |      Login      | Passed |  0%  |    100%    |
|                    | Change Password | Passed |  0%  |    100%    |
|                    | Change username | Passed |  0%  |    100%    |
|                    |     Logout      | Passed |  0%  |    100%    |

|       Member Management       |             Update Role              | Passed | 0%  | 100% |
| :---------------------------: | :----------------------------------: | :----: | :-: | :--: |
|                               |            Update Section            | Passed | 0%  | 100% |
|                               |           Disable Account            | Passed | 0%  | 100% |
|                               |          Listing of Members          | Passed | 0%  | 100% |
| **Content Management Module** |            Manual Posting            | Passed | 0%  | 100% |
|                               |      Listing Published content       | Passed | 0%  | 100% |
|                               |           Update thumbnail           | Passed | 0%  | 100% |
|                               |            Update content            | Passed | 0%  | 100% |
|                               |           Featured article           | Passed | 0%  | 100% |
|                               |          Archiving Article           | Passed | 0%  | 100% |
| **Project Management Module** |       Propose an article topic       | Passed | 0%  | 100% |
|                               |     Edit approved article topic      | Passed | 0%  | 100% |
|                               |          Approving function          | Passed | 0%  | 100% |
|                               |             Text Editor              | Passed | 0%  | 100% |
|                               |            Assign subtask            | Passed | 0%  | 100% |
|                               | Deleting article project and subtask | Passed | 0%  | 100% |
|                               |     Submitting to assigned task      | Passed | 0%  | 100% |
|                               |           Reject Proposal            | Passed | 0%  | 100% |

| Publication Site Module | Viewing published article | Passed | 0%  | 100% |
| ----------------------- | :-----------------------: | :----: | :-: | :--: |
|                         |    Searching articles     | Passed | 0%  | 100% |
|                         |    Filtering Articles     | Passed | 0%  | 100% |
|                         |     PWA installation      | Passed | 0%  | 100% |

_Table 2\. Unit Testing Results_

**4.3.3 Compatibility Testing**

Compatibility testing was performed to ensure that Editorially operates consistently across various browsers and devices, confirming that its features function correctly regardless of platform. Since the system is designed as a Progressive Web Application (PWA), this testing phase is essential to verify that users, whether on desktop or mobile, can seamlessly access, navigate, and interact with the platform without performance or layout issues.

Ensuring cross-platform compatibility directly supports the study’s objectives outlined in Chapter 1: expanding access to verified and institution-approved journalistic content beyond traditional web environments and minimizing dependence on social media for news dissemination. By validating the system’s responsiveness and usability across browsers and mobile devices, compatibility testing demonstrates how Editorially upholds inclusivity and accessibility, enabling both readers and members to engage with credible student journalism anytime and anywhere.

| Web System  |        Version        | Compatibility Results |
| ----------- | :-------------------: | :-------------------: |
| **Browser** |      Chrome v142      |      Compatible       |
|             | Microsoft Edge v142.x |      Compatible       |
|             |     Opera GX v123     |      Compatible       |
|             |     Firefox v144      |      Compatible       |
|             |     Safari v26.1      |      Compatible       |

| Mobile Application |  Version   | Compatibility Results |
| :----------------: | :--------: | :-------------------: |
|    **Android**     | Android 15 |      Compatible       |
|                    | Android 14 |      Compatible       |
|                    | Android 13 |      Compatible       |
|                    | Android 12 |      Compatible       |
|                    | Android 11 |      Compatible       |
|                    | Android 10 |      Compatible       |
|                    | Android 9  |      Compatible       |
|      **iOS**       |   iOS 26   |      Compatible       |

_Table 3\. Compatibility Testing Results_

The table presents the results of Editorially’s compatibility testing. The results show that Editorially has passed and is compatible with the following web browsers which are; Chrome, Microsoft Edge, Opera GX, Firefox, and Safari. While for mobile applications, the results show that Editorially is compatible with Android versions 9 to 15 and iOS version 26\.

## **4.4 Description of The Prototype** {#4.4-description-of-the-prototype}

**4.4.1 Web System**

The web system of Editorially serves as the central platform for managing, producing, and publishing digital content for student publications. It encompasses all primary functions article creation, project management, editorial review, and publication viewing within a unified and accessible interface. Designed as a Progressive Web Application (PWA), the web version ensures responsiveness across various screen sizes and browser environments. Each page within the web system was developed to align with the established editorial workflow, ensuring that writers and editors can collaboratively manage content with transparency and control. This structure directly addresses the journalistic issues identified in Chapter 1 by providing a centralized, reliable, and accessible content management space that minimizes fragmentation and dependency on external tools.

**![][image9]**  
**Figure 9:** **Login Page**

Provides users with access to their account by entering the necessary details ensuring personalized at protected usage of the system.

![][image10]  
**Figure 10: Home Page**

The main landing page where users can explore the latest, verified news and navigate through different categories for a quick and easy access to contents.

![][image11]  
**Figure 11: Section Page**

The section page is where users can view latest and all articles of a specific section (e.g News, Layout, Literary).

![][image12]

**Figure 12: View Article Page**  
Displays the information of the selected article of the user. This is where the user consumes the created content of the publication.

![][image13]  
**Figure 13: Search Articles Page**

The Search article page is where the users search and filter to find a specific article.

![][image14]  
**Figure 14: About Us Page**

The about us page is where the users can view the purpose, about the publication, and list of members of the publication.

![][image15]  
**Figure 15: Our Process Page**

Where readers can see how articles are delivered to them.

![][image16]  
**Figure 16: Admin Dashboard Page**

This page provides an overview of the metrics regarding the performance of the publication as a whole.

![][image17]  
**Figure 17: Topic List Page**

This page displays all proposed and ongoing topics of specific sections within the publication, allowing the editorial team to track article progress, assign tasks, and manage content.

![][image18]  
**Figure 18: Topic View Page**

This is where members can find information about the project and its overall progress, view the tasks, and the submitted tasks.

![][image19]  
**Figure 19: Editorially Text Editor Page**  
 This is where publication members can create article content.

![][image20]  
**Figure 20: Upload Thumbnail Modal**  
This is where publication members can upload the thumbnail of the article.

![][image21]  
**Figure 21: Member List Page**

This is where all the members of the student publication is listed for the publication members to have an overview of all the members.

![][image22]  
**Figure 22: Construct Article Page**

Once all tasks have been completed e.g. content and thumbnail, the Editorial Board can now finalize the article and do final edits before publishing the article.

![][image23]  
**Figure 23: Specific User Profile Page**

This is the page where a specific user’s role and section in the publication are edited by those who have the authority to do so, such as the Editorial Board.

![][image24]  
**Figure 24: Content List Page**

This is the page that shows the student publication’s published articles.

![][image25]  
**Figure 25: Content Management Page**

This is where the article is managed or edited. The Editor-In-Chief can archive the content and Editorial Board can edit its thumbnail, and edit its headline and content.

**4.4.2 Mobile App**

The mobile version of Editorially mirrors the functionalities of its web counterpart through its PWA-based architecture, ensuring a consistent user experience across devices. It was designed to provide readers with access articles, optimized for smaller screens and mobile interaction.

This mobile accessibility supports the system’s goal of broadening reach and engagement, ensuring that articles remains available anytime and anywhere. With this, Editorially reinforces inclusivity and adaptability, addressing the accessibility and efficiency challenges outlined in Chapter 1\.

![][image26]  
**Figure 26:** **Homepage**  
 The main landing page where users can explore the latest, verified news and navigate through different categories for a quick and easy access to contents.

**![][image27]**  
**Figure 27: Section Page**  
The section page is where users can view latest and all articles of a specific section (e.g News, Layout, Literary).

![][image28]  
**Figure 28: View Article Page**  
 Displays the information of the selected article of the user. This is where the user consumes the created content of the publication.

![][image29]  
**Figure 29: Search Articles Page**  
The Search article page is where the users search and filter to find a specific article.

![][image30]  
**Figure 30: About Us Page**  
The about us page is where the users can view the purpose, about the publication, and list of members of the publication.

## **4.5 Sampling Size and Sampling Techniques** {#4.5-sampling-size-and-sampling-techniques}

![][image31]

_Figure 31\. Purposive Sampling_

Editorially utilized Purposive Sampling approach to carefully select participants who possess the appropriate knowledge, expertise, and experience relevant to the study. This sampling method was chosen because the research required informed evaluation from individuals who are directly involved in editorial workflows, system development, and digital publication processes. Since the study focuses on assessing both the technical performance and practical usability of the system, it was necessary to gather insights from participants who can provide expert judgment rather than relying on random selection. Purposive sampling ensured that only those capable of offering meaningful, experience-based feedback were included, thereby improving the reliability and relevance of the evaluation results. In total, 30 participants were selected to test and evaluate the system, consisting of the following:

**10 IT Experts** \- Professionals with expertise in software development, systems architecture, database management, or related information technology fields. They have assessed the technical quality of the system focusing on its performance, efficiency, system scalability, maintainability and security protocols.

**10 Subject Matter Experts (SMEs)** \- Individuals with substantial experience in journalism, editorial processes, or managing digital publication workflows. This group includes the Editorial Board and the Publication Members. They have evaluated the system’s ability to address existing editorial challenges of Student Publications that primarily rely on Social Media platforms to publish their articles.

**10 End Users** \- Readers and publication staff members who represent the intended user base of the Student Publications. They have evaluated the system’s usability, navigation, responsiveness, and the practicality of its features for daily reading, as well as the process of how a publication delivers content to enlighten them about how in this platform, there is an standardized process of publishing content, promoting trust and credibility on the system and the publications that will use Editorially that all published content went through thorough evaluation and approvals before it is publicized.

Prior to system development, an initial unstructured interview was conducted with—the Editor-In-Chief of The Nuntium. This consultation provided essential operational insights and system requirements that informed the design of the system, as well as

introducing the problems The Nuntium is facing if it is relying primarily on Social Media platforms to publish its articles, along with the fragmented tools to manage the creation of articles, dissemination of tasks, and overall collaboration on creating articles. The interview enabled the participant to openly share challenges in their current workflow, propose desired features, and outline the general editorial processes they are following. Insights gathered from this discussion significantly influenced the design of the platform’s key functionalities, which were assessed during the testing phase.

## **4.6 Implementation Plan** {#4.6-implementation-plan}

The project followed a structured development process consisting of several key phases: Planning, Risk Analysis, Engineering, Evaluation, and Maintenance. During the Planning phase (November to January), the project team focused on defining the system’s objectives and scope, identifying its workflow, integration aspects, and key features. Relevant data and documents were gathered from the Editor-in-Chief of The Nuntium to establish the system’s initial framework and ensure alignment with organizational goals.

The Risk Analysis phase (January to May) involved identifying and documenting potential technical and management risks within the system. A prototype was developed during this stage to visualize the system’s functionality and address major risks early, allowing for informed design evaluations.

Next, in the Engineering phase (May to September), the system underwent core development, integration, and testing. This included fixing issues identified during the first defense, integrating essential features like real-time updates, document handling, and preparing for a formal review during the final defense to validate the system’s performance and reliability.

The Evaluation phase (August to October) centered on implementing feedback from the second defense, conducting final validation with the client, and optimizing the system’s code to enhance responsiveness and minimize delays. This stage also included finalizing the research documentation (Chapters 1 to 5\) and ensuring the system was ready for deployment through final adjustments and performance checks.

Finally, the Maintenance phase focuses on ongoing support post-deployment. The development team continues to monitor system performance, address user feedback, apply

updates, and resolve any emerging issues to maintain long-term stability, responsiveness, and reliability of the system.

## **4.7 Implementation Results** {#4.7-implementation-results}

    **4.7.1 Web System Evaluation**

    The system was evaluated using well-established frameworks to ensure an outstanding user experience and alignment with industry standards. This strategic approach aims to improve Editorially’s operational efficiency while providing users with a smooth and enjoyable experience. To assess the system’s quality, the ISO25010 framework was applied, focusing on key factors such as functionality, efficiency, compatibility, usability, reliability, maintainability, portability, and security. In addition, the Editorially mobile application was evaluated using the Mobile Application Rating Scale (MARS), a trusted framework that offers a comprehensive assessment of mobile apps across several dimensions—user engagement, functionality, aesthetics, and information quality. By leveraging MARS, developers and researchers can gain valuable insights into how the application performs in real-world conditions, ensuring that it effectively meets stakeholder needs while maintaining high standards of performance and user satisfaction.

| Rating |    Range     |  Interpretation   |
| :----: | :----------: | :---------------: |
|   5    | 5.00 \- 4.20 |     Excellent     |
|   4    | 4.19 \- 3.40 | Very Satisfactory |
|   3    | 3.39 \- 2.60 |   Satisfactory    |
|   2    | 2.59 \- 1.80 | Needs Improvement |
|   1    | 1.79 \- 1.00 |       Poor        |

_Table 5\. Scoring System of ISO25010_

    Table 5 presents the Likert Scale illustration used to evaluate the Editorially system based on the respondents’ survey responses. The Likert Scale includes five levels of satisfaction, ranging from Excellent to Poor. Each level corresponds to a numerical range, with 5 representing the highest rating and 1 the lowest, allowing for clear measurement and interpretation of results.

A score between 4.21 and 5.00 is categorized as Excellent, indicating that the system performs exceptionally well and provides a smooth user experience. Scores from 3.41 to 4.20 are rated as Very Satisfactory, meaning the system functions effectively but could benefit from minor improvements. A Satisfactory rating, ranging from 2.61 to 3.40, suggests that the system performs adequately but requires enhancement. Scores between 1.81 and 2.60 fall under Needs Improvement, implying that certain system features need fixing. Finally, ratings from 1.00 to 1.80 are classified as Poor, indicating that major revisions are necessary. Users rate the ISO 25010 criteria on a scale of 1 to 5, after which the average score is computed and assigned to a category. For instance, a “User Interface” score of 4.60 would be considered Excellent, a “System Speed” score of 3.10 would fall under Satisfactory, and a “Customer Support” score of 2.00 would be rated as Needs Improvement. These categories help identify which aspects of the system require immediate attention or improvement.

The Likert Scale ranges were determined mathematically by subtracting the lowest score (1) from the highest score (5), resulting in a range of 4\. This value was then divided by 5, yielding 0.8 as the size of each interval. Starting from 1.00, 0.8 is repeatedly added to establish the upper limits of each category: 1.00–1.80 (Poor),  
1.81–2.60 (Needs Improvement), 2.61–3.40 (Satisfactory), 3.41–4.20 (Very Satisfactory), and 4.21–5.00 (Excellent). This step-by-step calculation ensures that each satisfaction level is evenly distributed and accurately represents user feedback.

![][image32]

_Figure 32\. Weighted Mean Formula_

Figure 32 illustrates the formula used to calculate the respondents’ average rating. In this formula, 𝑋̅ denotes the mean, Σ represents the total sum of all values, X refers to the assigned score or weight, and n indicates the total number of respondents.

![][image33]

_Figure 33\. Standard Deviation for Sample Formula_

Figure 33 shows that the calculation begins with determining the weighted average, followed by computing the standard deviation using a sampling method. The standard deviation formula measures how much the values in the sample vary or deviate from the mean. In the formula, s stands for the sample standard deviation, 𝑥̅ denotes the mean, x represents each individual value, n indicates the total number of observations, and Σ signifies the summation of all values.

| Evaluation Results from 10 IT Experts |                   |                        |                    |          |
| ------------------------------------- | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                          | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Functionality                         |       4.30        |          0.61          |     Excellent      |    5     |
| Reliability                           |       4.40        |          0.60          |     Excellent      |    4     |
| Usability                             |       4.02        |          0.58          | Very Satisfactory  |    8     |
| Efficiency                            |       4.20        |          0.57          |     Excellent      |    7     |
| Security                              |       4.22        |          0.73          |     Excellent      |    6     |
| Compatibility                         |       4.56        |          0.50          |     Excellent      |    2     |
| Maintainability                       |       4.48        |          0.50          |     Excellent      |    3     |
| Portability                           |       4.88        |          0.43          |     Excellent      |    1     |

_Table 6\. Evaluation Result from IT Experts using ISO2501_

Table 6 presented the evaluation results gathered from 10 IT Experts who assessed the system based on the ISO 25010 software quality standards. The Weighted Mean reflects their collective judgment across eight quality criteria, providing insight into the system’s

overall performance from a professional technical perspective. The system achieved an Overall Mean Score of 4.38 with a Standard Deviation of 0.57, interpreted as “Excellent.” This indicates that the IT experts consistently viewed the system as reliable, functional, and well-developed.

Among the evaluated criteria, Portability ranked highest with a mean score of 4.88. The IT experts acknowledged the system’s strong capability to operate effectively across different platforms. The high ratings, supported by a low Standard Deviation of 0.43, indicate a strong agreement regarding the system’s adaptability and accessibility in various environments. This score suggests that The Nuntium will be able to access and use Editorially seamlessly across different devices.

Compatibility (4.56) and Maintainability (4.48) also received high rankings, reflecting the experts’ assessment that the system integrates well with different devices and can be easily modified or updated when needed. Compatibility ensures that student writers, editors, and staff can access and use the platform across various devices and browsers, which is essential given their diverse hardware and usage environments. Meanwhile, strong maintainability indicates that the system can be easily updated or modified to accommodate changes in publication policies, editorial workflows, or academic requirements. These results suggest that the technical structure of the system was well-designed and sustainable for long-term use.

On the other hand, Usability obtained the lowest mean score of 4.02, interpreted as “Very Satisfactory.” While still positive, this result signaled to the developers that improvements in user interface design and ease of navigation are necessary to enhance the overall user experience of The Nuntium.

The feedback provided by the 10 IT Experts played a crucial role in identifying both the strengths and areas needing enhancement within the system. Their professional insights helped validate the system’s technical reliability while also highlighting opportunities for refinement—particularly in usability and efficiency. Through their evaluation, the development team was guided in making informed improvements to ensure the system becomes more user-friendly, efficient, and aligned with industry standards.

Overall, the participation of the IT experts did not only confirm the system’s excellent quality but also contributed significantly to its continuous improvement by providing constructive, standards-based feedback.

| Evaluation Results from 10 Subject Matters |                   |                        |                    |          |
| ------------------------------------------ | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                               | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Functionality                              |       4.70        |          0.54          |     Excellent      |    1     |
| Reliability                                |       4.26        |          0.80          |     Excellent      |    7     |
| Usability                                  |       4.38        |          0.66          |     Excellent      |    5     |
| Efficiency                                 |       4.22        |          0.73          |     Excellent      |    8     |
| Security                                   |       4.50        |          0.70          |     Excellent      |    3     |
| Compatibility                              |       4.40        |          0.67          |     Excellent      |    4     |
| Maintainability                            |       4.28        |          0.78          |     Excellent      |    6     |
| Portability                                |       4.66        |          0.51          |     Excellent      |    2     |

_Table 7\. Evaluation Result from Subject Matters using ISO25010_

Table 7 presented the evaluation results gathered from 10 Subject Matter Experts who assessed the system based on the ISO 25010 software quality standards. The Weighted Mean reflects their collective evaluation across eight quality criteria, providing insights grounded in professional knowledge and practical experience. The system obtained an Overall Mean Score of 4.42 with a Standard Deviation of 0.68, interpreted as “Excellent.” This indicates that the SMEs consistently perceived the system as effective, dependable, and suitable for its intended use.

The high rating for Functionality, which received the highest weighted mean of 4.70 (Rank 1), indicating that the experts found the system supports essential editorial workflows such as article creation, editing, approval, publishing, and article management meeting the SMEs needs and performing its intended tasks successfully.

The relatively low Standard Deviation of 0.54 suggests strong agreement among the SMEs regarding the system’s effectiveness in delivering its core functions.

Portability, which ranked second with a mean score of 4.66, highlights the system’s ability to operate across different platforms. The high scores for Security (4.50) and Compatibility (4.40) reflects the experts’ confidence in the system’s data protection features and its ability to function smoothly within various environments. This means that for The Nuntium, their work is ensured to be secure and can only be accessed and modified by an authorized member.

Although Efficiency received the lowest mean score of 4.22 (Rank 8), it still falls within the “Excellent” range. This suggests that the system performs well overall but could further benefit from improvements in processing speed and resource usage. For a student publication, improving efficiency can translate into faster page loading, quicker content publishing, and smoother handling of multimedia files—factors that directly affect both editorial workflow and reader experience.

The feedback provided by the 10 Subject Matter Experts played an important role in enhancing the system. Their evaluations validated that the system meets domain-specific requirements while also identifying areas where performance could be further refined. Their insights helped guide improvements related to efficiency and reliability, ensuring that the system aligns more closely with real-world operational needs.

Overall, the participation of the Subject Matter Experts not only confirmed the system’s strengths in functionality and adaptability but also contributed to its continuous improvement by providing informed recommendations for further optimization.

| Evaluation Results from 10 End Users |                   |                        |                    |          |
| ------------------------------------ | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                         | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Functionality                        |       4.74        |          0.52          |     Excellent      |    4     |
| Reliability                          |       4.74        |          0.48          |     Excellent      |    5     |
| Usability                            |       4.34        |          0.65          |     Excellent      |    8     |
| Efficiency                           |       4.52        |          0.57          |     Excellent      |    7     |
| Security                             |       4.80        |          0.49          |     Excellent      |    3     |
| Compatibility                        |       4.80        |          0.45          |     Excellent      |    2     |
| Maintainability                      |       4.58        |          0.60          |     Excellent      |    6     |
| Portability                          |       4.94        |          0.32          |     Excellent      |    1     |

_Table 8\. Evaluation Result from End Users using ISO25010_

Table 8 presented the evaluation results gathered from 10 End Users who assessed the system based on the ISO 25010 software quality standards. The Weighted Mean reflects their perception of the system’s performance across eight quality criteria based on actual usage and interaction. The system achieved an Overall Mean Score of 4.68 with a Standard Deviation of 0.51, interpreted as “Excellent.” This indicates a high level of satisfaction and consistent positive experience among the users.

Portability ranked first with a weighted mean of 4.94, demonstrating that users strongly agreed that the system performs well across different devices and environments. The low Standard Deviation of 0.32 further indicates strong consensus regarding its accessibility and flexibility. This is highly relevant to The Nuntium, where publication members often create articles between classes, at home, or during off-campus activities. A highly portable system allows writers and editors to stay engaged in the publication process regardless of time or location, fostering timely collaboration and continuous content development.

Compatibility (4.80, Rank 2\) and Security (4.80, Rank 3\) also received high ratings, suggesting that users perceived the system as reliable in terms of integration and safe in handling their data. This builds trust among The Nuntium's student publication members, encouraging consistent system use and reducing concerns about data integrity, lost drafts, or unauthorized changes to published materials.

High scores in Functionality (4.74) and Reliability (4.74) confirm that the system effectively meets user needs and performs consistently to support the editorial workflows and tasks.

Although Usability received the lowest weighted mean of 4.34 (Rank 8), it remains within the “Excellent” interpretation. This finding suggests that while the system is generally easy to use, some users experienced minor difficulties with navigation or interface interaction. Addressing these concerns is especially important in a student publication context, as staff turnover is frequent and new members must quickly learn how to use the system. Enhancing usability can reduce training time, minimize errors, and help new users to become productive more quickly.

The feedback provided by the 10 End Users was essential in further improving the system. Their actual usage experience helped validate the system’s strengths in portability, security, and overall performance, while also identifying areas where the user interface and interaction could be enhanced. Their responses guided the development team in making user-centered improvements aimed at increasing ease of use and overall efficiency.

In summary, the participation of the End Users confirmed the system’s effectiveness, adaptability, and reliability, while also contributing valuable insights that support continuous refinement toward a more intuitive and user-friendly system.

| Evaluation Results from 10 End Users 10 Subject Matters 10 IT Experts |                   |                        |                    |          |
| --------------------------------------------------------------------- | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                                                          | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Functionality                                                         |       4.58        |          0.61          |     Excellent      |    3     |
| Reliability                                                           |       4.46        |          0.67          |     Excellent      |    5     |
| Usability                                                             |       4.24        |          0.65          |     Excellent      |    8     |
| Efficiency                                                            |       4.31        |          0.64          |     Excellent      |    7     |
| Security                                                              |       4.50        |          0.69          |     Excellent      |    4     |
| Compatibility                                                         |       4.58        |          0.56          |     Excellent      |    2     |
| Maintainability                                                       |       4.44        |          0.65          |     Excellent      |    6     |
| Portability                                                           |       4.82        |          0.42          |     Excellent      |    1     |
| **Overall Mean and SD**                                               |     **4.49**      |        **0.61**        |   **Excellent**    |          |

_Table 9\. Overall Evaluation Result from End Users, Subject Matters, IT Experts using ISO25010_

Table 9 presented the consolidated evaluation results gathered from 10 End Users, 10 Subject Matter Experts, and 10 IT Experts who assessed the system based on the ISO 25010 software quality standards. The combined evaluation provides a comprehensive perspective by integrating user experience, domain relevance, and technical assessment. The system achieved an Overall Mean Score of 4.49 with a Standard Deviation of 0.61, interpreted as “Excellent,” indicating a high level of acceptance and consistent positive evaluation across all respondent groups.

Among the criteria, Portability ranked first with a weighted mean of 4.82. This result reflects strong agreement among evaluators that the system performs effectively across different devices and environments, highlighting its accessibility and adaptability.

Compatibility (4.58, Rank 2\) and Functionality (4.58, Rank 3\) also received high ratings, indicating that the system integrates well with various platforms and successfully performs its intended tasks.

Security (4.50) and Reliability (4.46) were also rated highly, suggesting that the system is dependable and capable of protecting user data. Maintainability (4.44) and Efficiency (4.31) further demonstrate that the system is stable and operationally sound.

Usability obtained the lowest weighted mean of 4.24 (Rank 8), although still interpreted as “Excellent.” This suggests that while the system is effective overall, there are opportunities to enhance user interface design and navigation to further improve user experience.

The combined feedback from End Users, Subject Matter Experts, and IT Experts played a significant role in strengthening the system. Their diverse perspectives helped validate the system’s performance from practical, professional, and technical viewpoints while also identifying areas for refinement. This collective evaluation guided improvements focused on enhancing usability and overall system efficiency.

In summary, the participation of the three groups confirmed that the system is functional, reliable, and adaptable. Their insights contributed to the continuous improvement of the system, ensuring that it meets both technical standards and user needs while supporting further optimization for a more seamless and user-friendly experience, meaning that once fully deployed, The Nuntium will be able to easily move from having a fragmented workflow to an organized one through Editorially, thus, solving their main issue of having a fragmented workflow and an unorganized management and preservation of their published articles.

    **4.7.2 Mobile Application Evaluation**

| Rating |    Range     |  Interpretation   |
| :----: | :----------: | :---------------: |
|   4    | 3.26 \- 4.00 | Highly Acceptable |
|   3    | 2.60 \- 3.25 |    Acceptable     |
|   2    | 1.76 \- 2.59 | Fairly Acceptable |
|   1    | 1.00 \- 1.75 |   Unacceptable    |

_Table 10\. Scoring System of Mobile Application Rating Scale (MARS)_

Table 10 presented the 4-point rating scale used to evaluate the Engagement, Functionality, Aesthetics, and Information aspects of the mobile application. The scale ranges from 1 to 4, with 4 being the highest rating, described as “Highly Acceptable,” and 1 being the lowest, described as “Unacceptable.” A score within 3.26 to 4.00 indicates that the system performs exceptionally well, while a score between 1.00 and 1.75 suggests that the system fails to meet user expectations. This rating system serves as a guide for interpreting user feedback and identifying the app’s strengths and areas for improvement. To determine the interval for each category, the total range of scores (4.00 – 1.00 \= 3.00) was divided by four levels, resulting in an interval size of 0.75. These intervals were then applied consistently across all categories for example, the “Acceptable” range spans 2.60 to 3.25.By using this structured approach, the study ensures that user satisfaction is measured accurately and objectively, providing a fair representation of how well the system meets user needs.

| Evaluation Results from 10 IT Experts |                   |                        |                    |          |
| ------------------------------------- | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                          | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Engagement                            |       3.81        |          0.39          | Highly Acceptable  |    1     |
| Functionality                         |       3.60        |          0.49          | Highly Acceptable  |    4     |
| Aesthetics                            |       3.73        |          0.44          | Highly Acceptable  |    3     |
| Information                           |       3.78        |          0.41          | Highly Acceptable  |    2     |

_Table 11\. Overall Evaluation Result from IT Experts using MARS_

Table 11 presented the evaluation results gathered from 10 IT Experts who assessed the system using the Mobile App Rating Scale (MARS), covering four key criteria: Engagement, Functionality, Aesthetics, and Information. The system achieved an Overall Mean Score of 3.73 with a Standard Deviation of 0.43, interpreted as “Highly Acceptable.” This indicates that the IT Experts generally viewed the mobile application as effective, interactive, and well-structured in delivering its intended functions.

Among the evaluated criteria, Engagement received the highest weighted mean of 3.81 (Rank 1), reflecting the experts’ assessment that the system’s interactive features successfully promote user involvement and collaboration within publication members. The high score for Information (3.78, Rank 2), indicating that the content provided by the application is clear, relevant, and supportive of its intended purpose.

Aesthetics obtained a mean of 3.73 (Rank 3), showing that the IT Experts had a positive perception of the system’s visual design and layout. An appealing and organized interface helps motivate consistent use of the system and reinforces professionalism within The Nuntium.

Although Functionality (3.60, Rank 4\) received the lowest score, it remains within the “Highly Acceptable” range. This suggests that while the core features are working as

intended, further optimization such as improving responsiveness or reducing loading delays could enhance the mobile experience. Addressing these areas would benefit The Nuntium by ensuring faster content updates, smoother editorial workflows, and reduced technical interruptions.

Overall, the evaluation provided by the 10 IT Experts contributed significantly to improving the system’s mobile experience. Their technical insights helped validate the application’s strengths in engagement and information delivery while identifying areas where functionality could be refined. Their technical feedback directly supports continuous improvement, helping ensure that the mobile platform remains efficient, responsive, and capable of supporting the dynamic needs of The Nuntium.

| Evaluation Results from 10 Subject Matters |                   |                        |                    |          |
| ------------------------------------------ | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                               | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Engagement                                 |       3.72        |          0.50          | Highly Acceptable  |    2     |
| Functionality                              |       3.30        |          0.70          | Highly Acceptable  |    4     |
| Aesthetics                                 |       3.63        |          0.55          | Highly Acceptable  |    3     |
| Information                                |       3.76        |          0.47          | Highly Acceptable  |    1     |

_Table 12\. Overall Evaluation Result from Subject Matters using MARS_

Table 12 presented the evaluation results gathered from 10 Subject Matter Experts who assessed the system using the Mobile App Rating Scale (MARS), covering Engagement, Functionality, Aesthetics, and Information. The system obtained an Overall Mean Score of 3.60 with a Standard Deviation of 0.56, interpreted as “Highly Acceptable.”

This indicates that the Subject Matter Experts generally found the system capable of delivering a satisfactory and meaningful user experience.

Among the evaluated criteria, Information received the highest weighted mean of 3.76 (Rank 1), highlights the system’s strength in presenting accurate, relevant, and well-organized content. For a student publication, this ensures that articles, revisions, comments are easily accessible. Effective information delivery reduces revisions, supports editorial consistency, and helps produce quality articles.

The score for Aesthetics (3.63, Rank 3\) suggests that the interface design was positively received, though with room for improvement. For The Nuntium, improving visual consistency and layout can enhance usability and reduce the learning curve for new publication members.

Meanwhile, Functionality recorded the lowest mean score of 3.30 (Rank 4), although still interpreted as “Highly Acceptable”, showed more varied responses, as reflected by the higher standard deviation. This variation may stem from differences in device performance or responsiveness. Improving functionality consistency would benefit The Nuntium by ensuring that all contributors—regardless of device—can reliably perform tasks such as editing, reviewing, and approving content.

The feedback provided by the 10 Subject Matter Experts played an important role in refining the system. Their insights helped validate the system’s strengths in delivering relevant information and supporting collaboration, while also identifying opportunities to improve technical performance and functionality.

Overall, the participation of the Subject Matter Experts confirmed that the system effectively supports communication and article management needs, while also contributing valuable recommendations that guide further improvements in usability and responsiveness.

| Evaluation Results from 10 End Users |                   |                        |                    |          |
| ------------------------------------ | :---------------: | :--------------------: | :----------------: | :------: |
| **Criteria**                         | **Weighted Mean** | **Standard Deviation** | **Interpretation** | **Rank** |
| Engagement                           |       3.55        |          0.50          | Highly Acceptable  |    2     |
| Functionality                        |       3.44        |          0.57          | Highly Acceptable  |    3     |
| Aesthetics                           |       3.40        |          0.49          | Highly Acceptable  |    4     |
| Information                          |       3.74        |          0.44          | Highly Acceptable  |    1     |

_Table 13\. Overall Evaluation Result from End Users using MARS_

Table 13 presented the evaluation results gathered from 10 End Users who assessed the system using the Mobile App Rating Scale (MARS), covering Engagement, Functionality, Aesthetics, and Information. The system achieved an Overall Mean Score of 3.53 with a Standard Deviation of 0.50, interpreted as “Highly Acceptable.” This indicates that users generally found the system effective, visually appealing, and informative.

Among the evaluated criteria, Information received the highest weighted mean of 3.74 (Rank 1), suggesting that users found the app’s content as clear, relevant, and easy to understand. For The Nuntium, this is essential, as publication members must quickly access article drafts, submission statuses, and editorial feedback. Clear information presentation helps reduce confusion and supports efficient article management. Engagement followed with a mean score of 3.55 (Rank 2), reflecting that users were able to interact with the system and remain involved in its processes.

Functionality obtained a mean of 3.44 (Rank 3), indicating that the system performs its intended features effectively, although some processes could be smoother. Enhancing functionality would allow The Nuntium to manage content more efficiently.

Aesthetics received the lowest mean score of 3.40 (Rank 4), though still interpreted as “Highly Acceptable,” suggesting that while users were satisfied with the interface, improvements in layout consistency and readability could further enhance their experience. For The Nuntium, refining the visual design can improve usability, reduce eye strain during extended use, and encourage more frequent interaction with the system.

The feedback provided by the 10 End Users contributed significantly to the refinement of the system. Their firsthand experience helped validate the system’s strengths in delivering relevant information and supporting user engagement, while also identifying areas for improvement in interface design and feature responsiveness.

Overall, the participation of the End Users confirmed that the system effectively meets their needs in terms of content delivery and interaction for the student publication members, while also offering valuable insights that guide ongoing enhancements toward a more seamless and user-friendly mobile experience.

| Evaluation Results from 10 End Users 10 Subject Matters 10 IT Expert |                   |                        |                       |          |
| -------------------------------------------------------------------- | :---------------: | :--------------------: | :-------------------: | :------: |
| **Criteria**                                                         | **Weighted Mean** | **Standard Deviation** |  **Interpretation**   | **Rank** |
| Engagement                                                           |       3.69        |          0.47          |   Highly Acceptable   |    2     |
| Functionality                                                        |       3.44        |          0.60          |   Highly Acceptable   |    4     |
| Aesthetics                                                           |       3.58        |          0.51          |   Highly Acceptable   |    3     |
| Information                                                          |       3.76        |          0.44          |   Highly Acceptable   |    1     |
| **Overall Mean and SD**                                              |     **3.61**      |        **0.50**        | **Highly Acceptable** |          |

_Table 14\. Overall Evaluation Result from End Users, Subject Matters, IT Experts using MARS_

Table 14 presented the consolidated evaluation results gathered from 10 End Users, 10 Subject Matter Experts, and 10 IT Experts who assessed the system using the Mobile App Rating Scale (MARS). The combined responses provide a comprehensive perspective that integrates user experience, domain relevance, and technical evaluation. The system obtained an Overall Mean Score of 3.61 with a Standard Deviation of 0.50, interpreted as “Highly Acceptable,” indicating that the system was consistently well-received across all evaluator groups.

Among the criteria, Information ranked first with a weighted mean of 3.76, reflecting strong agreement that the system delivers clear, relevant, and useful content. Engagement followed with a mean score of 3.69 (Rank 2), demonstrating that the system effectively supports interaction and sustained participation among users.

Aesthetics received a mean score of 3.58 (Rank 3), indicating positive perception of the system’s visual layout and overall interface. Meanwhile, Functionality obtained the lowest weighted mean of 3.44 (Rank 4), although still interpreted as “Highly Acceptable.” This suggests that while the system performs its intended functions, there are opportunities to further enhance responsiveness and optimize certain features.

The combined feedback from End Users, Subject Matter Experts, and IT Experts played an important role in improving the system. Their diverse perspectives validated the strengths of the application in delivering relevant information and promoting engagement, while also identifying areas where functionality could be refined.

Overall, the participation of the three evaluator groups confirmed that the system provides a meaningful and effective mobile experience. Their insights contributed to the continuous enhancement of the application, particularly in improving performance and usability to support a more seamless and collaborative user experience. This means that usability wise, the system meets the needs of the publication, and that there is room for improvement on actual usability like improved user interface and user experience. This is further justified by the results showing rank 3 on Aesthetics indicating that the UI/UX can be improved to better suit how a publication would want to see the Application, while a low rank for functionality even with highly acceptable interpretation could mean that there are certain functions that works fine, but can be improved to be of more use to the publication.

Overall, the users deemed the app engaging based on the engagement ranking 1st, this means that the apps does its job of making users stay to use the app, and that addressing the needed improvements would complete the experience a student publication is looking for.

# **CHAPTER V** {#chapter-v}

# **SUMMARY AND RECOMMENDATIONS**

## **5.1 Summary** {#5.1-summary}

    The project successfully achieved its objectives by developing Editorially, an integrated web and mobile platform specifically designed for The Nuntium. The system provides a unified environment for managing editorial workflows, creating and approving content, and distributing articles in a structured, and collaborative manner. By consolidating multiple tools into a single platform, Editorially directly addresses the challenges identified in earlier chapters, including fragmented processes, lack of transparency in workflow, and limited accessibility for readers, writers, and publication staff.

The web system offers comprehensive functionality, including article creation, project management, editorial review, role. While the mobile application ensures accessibility and engagement across devices. The mobile platform was implemented using a Progressive Web Application (PWA) approach, ensuring responsiveness, usability, and seamless interaction regardless of device or operating system.

The system delivers clear benefits for all stakeholders in the student publication process. Writers are provided with structured, guided workflows that foster accountability and adherence to editorial standards. Editorial boards benefit from streamlined review, approval, and project tracking, reducing miscommunication and ensuring quality control before publication. Readers gain access to a credible, organized source of verified news, promoting trust in student journalism.

In conclusion, Editorially is not only technically robust but also socially and academically purposeful, effectively bridging the gap between technology and journalistic practice. By combining management tools, collaborative features, and educational elements, the platform reinforces transparency, responsibility, and collaboration in student journalism, ultimately enhancing the quality, reliability, and accessibility of The Nuntium.

**5.1.1 Key Findings**

    The Editorially system was assessed using the ISO 25010 standard alongside the Mobile App Rating Scale (MARS) to evaluate its functionality, usability, efficiency, security, and overall user engagement. Employing both frameworks offered a comprehensive appraisal of the platform’s performance on web and mobile interfaces. Below is a summary of the principal findings:

- Functionality (ISO 25010): Functionality rated strongly across all participant groups, indicating that the web system reliably delivers its core features and meets users’ primary needs. Subject Matter Experts were the most confident, suggesting only minor refinements are needed.

- Reliability: This attribute received consistently high marks, demonstrating confidence in the system’s stable and dependable operation; slightly lower scores from IT Professionals and End Users point to opportunities for minimizing minor interruptions.

- Usability (ISO 25010): The interface was found to be intuitive and easy to navigate for both technical and non-technical users. Usability is a clear strength of the system, though incremental improvements could further enhance the experience.

- Efficiency: Efficiency performed well in web assessments, indicating effective resource use and responsiveness; minor optimizations could further improve perceptions across all user groups.

- Security: Solid ratings reflect adequate data protection measures and user trust. Continued attention to security hardening and transparency will help maintain stakeholder confidence.

- Compatibility: Generally positive results suggest the system integrates well with other platforms, though minor adjustments may be needed to improve interoperability with certain devices.

- Maintainability: High scores indicate the system is structured for smooth updates and fixes, supporting long-term sustainability.  

- Portability: Rated strongly, showing the system can be deployed across different environments with minimal adaptation. Monitoring platform-specific behavior may improve cross-platform consistency.

- Engagement (MARS): The mobile app averaged 3.69, indicating it keeps users’ interest fairly well. IT Professionals perceived it as more engaging than some End Users, so adding interactive features could further boost engagement.

- Functionality (MARS): Core mobile functions work effectively, consistent with ISO findings, though mobile-specific workflow refinements could raise perceived effectiveness.

- Aesthetics: This was the strongest MARS dimension, showing wide appreciation for visual design and layout. Positive aesthetics support usability and contribute to favorable impressions.

- Information: Content is generally clear and useful, though it ranks slightly below aesthetics and engagement for some groups. Refining content clarity, context, and in-app guidance would improve perceived value and task completion.

Editorially has demonstrated itself as an effective and practical platform for streamlining editorial workflows and enhancing content management. Evaluations using ISO 25010 and MARS show the system performs strongly overall, earning “Excellent” ratings on core ISO attributes and “Highly Acceptable” on mobile assessments. By centralizing data, automating routine tasks, and enhancing collaboration, Editorially reduces administrative burden, improves task efficiency, and allows personnel to focus more on decision-making and quality content delivery.

## **5.2 Recommendations** {#5.2-recommendations}

    Based on the assessment of Editorially as a system, specific recommendations were made for the future developers and researchers planning to improve the system’s customizability, functionality, and overall applicability.

- The integration of ready-made layout templates for PubMats is recommended to further reduce dependence on external editing tools. This enhancement supports the system’s goal of centralizing publication processes and allows members to produce

  professional-quality materials efficiently within the platform.

- It is advised to implement a robust logging system to record detailed user and system activities in a structured and searchable manner. Enhanced logging will promote transparency, accountability, and traceability—key values in both journalism and responsible system administration.

- Future versions of Editorially should incorporate detailed analytics that track the time and progress of each stage in the article workflow. These analytics will help identify delays, bottlenecks, and areas for improvement, enabling editorial teams to refine their processes and enhance overall productivity.

- The system may include an optional feature that automatically shares articles to the publication’s official social media pages. Only the article’s headline, thumbnail, and link to the publication site should be posted, ensuring that Editorially remains the primary and verified source of published content while extending reach to a wider audience.
- The addition of scheduled publication capabilities is recommended to allow the editorial board to plan and automate article releases according to their editorial calendars. This feature would reinforce proper content planning and align student publications with professional newsroom practices.

- To further improve accessibility and usability, it is recommended to update the system’s interface for visual clarity, consistency, and responsiveness. Providing intuitive navigation and role-based dashboards will improve workflow efficiency and encourage greater user adoption.

- Future versions of the system should include a scheduled posting functionality to allow editors to set specific publication dates and times for approved articles, improving control over content release and workflow flexibility.

- The system should retain or improve its instant posting capability, allowing publications that prefer immediate release of approved articles to do so efficiently while maintaining content integrity.

- Future development should include a more flexible and detailed role management system, allowing administrators to define or customize access levels and permissions according to each publication’s internal structure.

- Continuous refinement of the user interface is advised to improve navigation, readability, and responsiveness across devices, ensuring an intuitive experience for all user roles.

- It is recommended that future system enhancements include the development and integration of a custom publication material (PubMat) editor within the platform. At present, multimedia and visual publication materials are created using external applications such as Canva and Adobe Photoshop, as these tools provide more advanced and specialized capabilities for graphic design and multimedia production. While this approach ensures high-quality outputs, integrating a dedicated PubMat editor in future iterations of the system would improve workflow efficiency by centralizing content creation and reducing dependency on third-party applications. Such integration would further streamline the publication process and enhance system independence.

- It is also recommended that future versions of the system incorporate a real-time collaborative text editor similar to Google Docs. Currently, collaborative editing may require external tools or sequential revisions, which can slow down the editorial process. A built-in real-time editor would allow multiple contributors to simultaneously draft, edit, and review content, thereby improving communication, reducing version conflicts, and enhancing overall workflow efficiency. Implementing this feature would significantly strengthen collaborative capabilities within the student publication environment.

# **REFERENCES** {#references}

Artem Gurnov. (2024, June 11). _Why Should I Use Collaborative Editing in_ Aimeur, E., Amri, ㅤㅤㅤS., & Brassard, G. (2023). Fake news, disinformation and misinformation in ㅤㅤㅤsocial media: A review. _Social Network Analysis and Mining_, _13_(1), 1–36. ㅤㅤㅤ[https://doi.org/10.1007/s13278-023-01028-5](https://doi.org/10.1007/s13278-023-01028-5)  
Aliazas, J. V., Dela Cruz, R., & Ilagan, N. (2024). _View of Enhancing University_ ㅤㅤㅤ*Operations: A Study of the Electronic Document Management Systems* ㅤㅤㅤ*(EDMS) of One Higher Education Institution*. TWIST Journal. ㅤㅤㅤ[https://twistjournal.net/twist/article/view/337/273](https://twistjournal.net/twist/article/view/337/273)  
Artem Gurnov. (2024, June 11). _Why Should I Use Collaborative Editing in Project_ ㅤㅤㅤ*Management Software?* Wrike.com; Wrike. ㅤㅤㅤ[https://www.wrike.com/project-management-guide/faq/why-should-i-use-collab](https://www.wrike.com/project-management-guide/faq/why-should-i-use-collaborative-editing-in-project-management-software/)ㅤㅤㅤ[orative-editing-in-project-management-software/](https://www.wrike.com/project-management-guide/faq/why-should-i-use-collaborative-editing-in-project-management-software/)  
Avram, M., Micallef, N., Patil, S., & Menczer, F. (2020). Exposure to social ㅤㅤㅤengagement metrics increases vulnerability to misinformation. _Harvard_ ㅤㅤㅤ*Kennedy School Misinformation Review*, _1_(5). ㅤㅤㅤ[https://doi.org/10.37016/mr-2020-033](https://doi.org/10.37016/mr-2020-033)  
Baker, A., & Fairbank, V. (2022). _The Truth in Journalism Fact-Checking Guide_. ㅤㅤㅤThetijproject.ca. [https://thetijproject.ca/guide/the-editorial-process/](https://thetijproject.ca/guide/the-editorial-process/)  
Berry, W. (2025). _..........................................._ Scribd. ㅤㅤㅤ[https://www.scribd.com/document/685165040/Digital-Shift-in-Campus-Journalism](https://www.scribd.com/document/685165040/Digital-Shift-in-Campus-Journalism)  
BHUIYAN, M. M., Whitley, H., Horning, M., Lee, S. W., & Mitra, T. (2021). Designing ㅤㅤㅤTransparency Cues in Online News Platforms to Promote Trust: Journalists’ & ㅤㅤㅤConsumers’ Perspectives. _Proceedings of the ACM on Human-Computer_ ㅤㅤㅤ*Interaction*, _5_(CSCW2), 1–31. [https://doi.org/10.1145/3479539](https://doi.org/10.1145/3479539)  
CNN. (2023). _CNN International \- Breaking News, US News, World News and Video_. ㅤㅤㅤCNN. [https://edition.cnn.com/](https://edition.cnn.com/)  
Crudu, A. (2025, May 3). _Collaborative Document Sharing \- A Must-Have Feature for_ ㅤㅤㅤ*Project Management Software*. Moldstud.com; MoldStud \- Custom Software ㅤㅤㅤDevelopment Company. ㅤㅤㅤ[https://moldstud.com/articles/p-collaborative-document-sharing-a-must-have-feature-f](https://moldstud.com/articles/p-collaborative-document-sharing-a-must-have-feature-for-project-management-software) ㅤㅤㅤ[or-project-management-software](https://moldstud.com/articles/p-collaborative-document-sharing-a-must-have-feature-for-project-management-software)

Cui, T. (n.d.). _Local-based collaborative text editor using CRDT_. Retrieved October ㅤㅤㅤ21, 2025, from ㅤㅤㅤ[https://www.scs.stanford.edu/24sp-cs244b/projects/Local-based_collaborative_text_e](https://www.scs.stanford.edu/24sp-cs244b/projects/Local-based_collaborative_text_editor_using_CRDT.pdf)ㅤㅤㅤ[ditor_using_CRDT.pdf](https://www.scs.stanford.edu/24sp-cs244b/projects/Local-based_collaborative_text_editor_using_CRDT.pdf)  
David, C. C., San Pascual, Ma. R. S., & Torres, Ma. E. S. (2019). Reliance on ㅤㅤㅤFacebook for news and its influence on political engagement. _PLOS ONE_, ㅤㅤㅤ*14*(3), e0212263. [https://doi.org/10.1371/journal.pone.0212263](https://doi.org/10.1371/journal.pone.0212263)  
Edghill, I. (2025). _The Case for Student Journalism | KSVT_. Ksvt.org. ㅤㅤㅤ[https://www.ksvt.org/article/the-case-for-student-journalism](https://www.ksvt.org/article/the-case-for-student-journalism)  
GNM Press Office. (2024, December 2). _The Guardian Foundation call on the_ ㅤㅤㅤ*government to embed news and media literacy into the curriculum*. The ㅤㅤㅤGuardian; The Guardian. ㅤㅤㅤ[https://www.theguardian.com/guardian-foundation/2024/dec/02/the-guardian-foundati](https://www.theguardian.com/guardian-foundation/2024/dec/02/the-guardian-foundation-call-on-the-government-to-embed-news-and-media-literacy-into-the-curriculum)ㅤㅤㅤ[on-call-on-the-government-to-embed-news-and-media-literacy-into-the curriculum](https://www.theguardian.com/guardian-foundation/2024/dec/02/the-guardian-foundation-call-on-the-government-to-embed-news-and-media-literacy-into-the-curriculum)  
Google Cloud. (2019, May 31). _Detect Text (OCR) | Cloud_ ㅤㅤㅤ*Vision API Documentation | Google Cloud*. Google Cloud. ㅤㅤㅤ[https://cloud.google.com/vision/docs/ocr](https://cloud.google.com/vision/docs/ocr)  
Guardian staff reporter. (2025, January 10). _Mark Zuckerberg’s end to Meta_ ㅤㅤㅤ*factchecking is a desperate play for engagement*. The Guardian; The ㅤㅤㅤGuardian. ㅤㅤㅤ[https://www.theguardian.com/technology/2025/jan/10/mark-zuckerberg-meta-factchec](https://www.theguardian.com/technology/2025/jan/10/mark-zuckerberg-meta-factchecking)ㅤㅤㅤ[king](https://www.theguardian.com/technology/2025/jan/10/mark-zuckerberg-meta-factchecking)  
Guo, M. (2024). Predictors of Mobile News Consumption through News Applications ㅤㅤㅤ(Apps): The Impacts of Audience Characteristics, Media Usage, and ㅤㅤㅤMotivations. _Journalism and Media_, _5_(3),1071–1084. ㅤㅤㅤ[https://doi.org/10.3390/journalmedia5030068](https://doi.org/10.3390/journalmedia5030068)  
Halpern, B. (2024). Critical Awakening: Enhancing Students’ Agency through Critical ㅤㅤㅤMedia Literacy. _Educational Research and Development Journal_, _14_(1),14–34. ㅤㅤㅤ[https://files.eric.ed.gov/fulltext/EJ1431502.pdf](https://files.eric.ed.gov/fulltext/EJ1431502.pdf)  
Hartsell, C., Mahadevan, N., Nine, H., Bapty, T., Dubey, A., & Karsai, G. (2020). ㅤㅤㅤ*Workflow Automation for Cyber Physical System Development Processes*. ㅤㅤㅤArXiv.org. [https://arxiv.org/abs/2004.05654](https://arxiv.org/abs/2004.05654)

Hu, Y., Jing, X., Ko, Y., & Rayz, J. T. (2021). Misspelling Correction with Pre-trained ㅤㅤㅤContextual Language Model. _ArXiv:2101.03204 \[Cs\]_. ㅤㅤㅤ[https://arxiv.org/abs/2101.03204](https://arxiv.org/abs/2101.03204)  
IBM. (2023, August 26). _Named Entity Recognition_. Ibm.com. ㅤㅤㅤ[https://www.ibm.com/think/topics/named-entity-recognition](https://www.ibm.com/think/topics/named-entity-recognition)  
Iovescu, D., & Tudose, C. (2024). Real-Time Document Collaboration—System ㅤㅤㅤArchitecture and Design. _Applied Sciences_, _14_(18), 8356\. ㅤㅤㅤ[https://doi.org/10.3390/app14188356](https://doi.org/10.3390/app14188356)  
Jatana, N., Singh, M., Gupta, C., Dhand, G., Malik, S., Dadheech, P., Aneja, N., & ㅤㅤㅤAneja, S. (2024). Differentially processed optimized collaborative rich text ㅤㅤㅤeditor. _Multimedia Tools and Applications_. ㅤㅤㅤ[https://doi.org/10.1007/s11042-024-19734-3](https://doi.org/10.1007/s11042-024-19734-3)  
Kerunga, Joseph & Rowe, Evan & Gondwe, Greg. (2020). Journalism Credibility in ㅤㅤㅤthe Digital Age – Examining Shifts in Paradigms. SSRN Electronic Journal. ㅤㅤㅤ10.2139/ssrn.3641943  
Kihlstrom, G. (2025, May 22). _Benefits of Using Centralized Content Management_. ㅤㅤㅤCMSWire.com. ㅤㅤㅤ[https://www.cmswire.com/digital-experience/building-a-case-for-centralized-con](https://www.cmswire.com/digital-experience/building-a-case-for-centralized-content-management/)ㅤㅤㅤㅤㅤㅤ[tent-management/](https://www.cmswire.com/digital-experience/building-a-case-for-centralized-content-management/)  
Mangarin, R. A., & Climaco, J. L. (2024). _Exploring Contributing Factors on Poor_ ㅤㅤㅤ*Digital Literacy of Students: A Review of Existing Studies \- International* ㅤㅤㅤ*Journal of Research and Innovation in Applied Science (IJRIAS)*. International ㅤㅤㅤJournal of Research and Innovation in Applied Science (IJRIAS). ㅤㅤㅤ[https://rsisinternational.org/journals/ijrias/articles/exploring-contributing-factors-on-poo](https://rsisinternational.org/journals/ijrias/articles/exploring-contributing-factors-on-poor-digital-literacy-of-students-a-review-of-existing-studies/?fbclid=IwY2xjawL5dutleHRuA2FlbQIxMQABHmNyf7mvXnBTmoDPZU5tUyDhBIv-AXEE1eGN75hGRC4BSoV0_nGubwHjKBdp_aem_rfAuKRexcAqLUZUcD1MUHA)ㅤㅤㅤ[r-digital-literacy-of-students-a-review-of-existing-studies/?fbclid=IwY2xjawL5dutleHRu](https://rsisinternational.org/journals/ijrias/articles/exploring-contributing-factors-on-poor-digital-literacy-of-students-a-review-of-existing-studies/?fbclid=IwY2xjawL5dutleHRuA2FlbQIxMQABHmNyf7mvXnBTmoDPZU5tUyDhBIv-AXEE1eGN75hGRC4BSoV0_nGubwHjKBdp_aem_rfAuKRexcAqLUZUcD1MUHA)ㅤㅤㅤ[A2FlbQIxMQABHmNyf7mvXnBTmoDPZU5tUyDhBIv-AXEE1eGN75hGRC4BSoV0_n](https://rsisinternational.org/journals/ijrias/articles/exploring-contributing-factors-on-poor-digital-literacy-of-students-a-review-of-existing-studies/?fbclid=IwY2xjawL5dutleHRuA2FlbQIxMQABHmNyf7mvXnBTmoDPZU5tUyDhBIv-AXEE1eGN75hGRC4BSoV0_nGubwHjKBdp_aem_rfAuKRexcAqLUZUcD1MUHA)ㅤㅤㅤ[GubwHjKBdp_aem_rfAuKRexcAqLUZUcD1MUHA](https://rsisinternational.org/journals/ijrias/articles/exploring-contributing-factors-on-poor-digital-literacy-of-students-a-review-of-existing-studies/?fbclid=IwY2xjawL5dutleHRuA2FlbQIxMQABHmNyf7mvXnBTmoDPZU5tUyDhBIv-AXEE1eGN75hGRC4BSoV0_nGubwHjKBdp_aem_rfAuKRexcAqLUZUcD1MUHA)  
Marie-Rose Sheinerman. (2025, February 11). _Media Literacy in Schools Is on the_ ㅤㅤㅤ*Rise as Teachers Grapple With Misinformation and Conspiracy Theories*. Teen *\_\_\_\_\_*Vogue.[https://www.teenvogue.com/story/media-literacy-schools-misinformation](https://www.teenvogue.com/story/media-literacy-schools-misinformation)  
Martynov, N., Baushenko, M., Kozlova, A., Kolomeytseva, K., Abramov, A., & ㅤㅤㅤFenogenova, A. (2023). _A Methodology for Generative Spelling Correction via_ ㅤㅤㅤ*Natural Spelling Errors Emulation across Multiple Domains and Languages*. ㅤㅤㅤArXiv.org. [https://arxiv.org/abs/2308.09435](https://arxiv.org/abs/2308.09435)

Matias, J. N., & Andrés Monroy-Hernandez. (2014). NewsPad. _ArXiv (Cornell_ ㅤㅤㅤ*University)*, _28_, 1987–1992. [https://doi.org/10.1145/2559206.2581354](https://doi.org/10.1145/2559206.2581354)  
ㅤㅤㅤMeshi, D., & Molina, M. D. (2025). Problematic social media use is associated ㅤㅤㅤwith believing in and engaging with fake news. _PLOS One_, _20_(5), e0321361. ㅤㅤㅤ[https://doi.org/10.1371/journal.pone.0321361](https://doi.org/10.1371/journal.pone.0321361)  
Miniukovich, A., & Figl, K. (2023). The effect of prototypicality on webpage ㅤㅤㅤaesthetics, ㅤㅤㅤusability, and trustworthiness. _International Journal of Human-Computer Studies_, _179_, ㅤㅤㅤ103103.[https://doi.org/10.1016/j.ijhcs.2023.103103](https://doi.org/10.1016/j.ijhcs.2023.103103)  
Moshavi, S. (2022, February 11). _8 ways to rebuild trust in journalism_. World ㅤㅤㅤEconomic Forum. ㅤㅤㅤ[https://www.weforum.org/stories/2022/02/trust-me-i-m-a-journalist](https://www.weforum.org/stories/2022/02/trust-me-i-m-a-journalist)  
Mwana, K., & Lubisi, J. (2019). _Assessing the use of Project Management Information_ ㅤㅤㅤ*Systems and Its Impact on Project Outcome*. ㅤㅤㅤ[https://ieomsociety.org/pilsen2019/papers/451.pdf](https://ieomsociety.org/pilsen2019/papers/451.pdf)  
Nabirye H., K. (2025). The Future of News Media: Trust and Credibility. _IDOSR_ ㅤㅤㅤ*JOURNAL of COMMUNICATION and ENGLISH*, _10_(1), 64–68. ㅤㅤㅤ[https://doi.org/10.59298/idosr/jce/101.6468.20250000](https://doi.org/10.59298/idosr/jce/101.6468.20250000)  
Najah Mary El-Gharib, & Amyot, D. (2022). Robotic Process Automation Using ㅤㅤㅤProcess Mining $\\unicode{x2013}$ A Systematic Literature Review. _ArXiv_ ㅤㅤㅤ*(Cornell University)*, _148_. [https://doi.org/10.1016/j.datak.2023.102229](https://doi.org/10.1016/j.datak.2023.102229) Philippines. (1991). _Republic Act No. 7079: An Act providing for the development and promotion of_ ㅤㅤㅤ*campus journalism and for other purposes*. ㅤㅤㅤ[https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/2685](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/2685?utm_source=chatgpt.com)  
Reinjoe, J., Namit, F., Parico, A., & Magno, J. (2022). Paperless Publication: ㅤㅤㅤSurveying the Shifting Shape of Campus Journalism. In _European Online_ ㅤㅤㅤ*Journal of Natural and Social Sciences*. ㅤㅤㅤ[https://european-science.com/eojnss_proc/article/viewFile/6725/3047](https://european-science.com/eojnss_proc/article/viewFile/6725/3047)  
Ruiz, J. (2018). Discerning Disinformation through Design: Exploring Fake News ㅤㅤㅤWebsite Design Patterns. In _Communication &_. ㅤㅤㅤ[https://papers.iafor.org/wp-content/uploads/papers/mediasia2018/MediAsia2018_42587.pdf](https://papers.iafor.org/wp-content/uploads/papers/mediasia2018/MediAsia2018_42587.pdf)

Schiffrin, A. (2019, August 28). Credibility and Trust in Journalism. Oxford Research ㅤㅤㅤEncyclopedia of Communication. Retrieved 21 Oct. 2025, from ㅤㅤㅤ[https://oxfordre.com/communication/view/10.1093/acrefore/9780190228613.001.0001](https://oxfordre.com/communication/view/10.1093/acrefore/9780190228613.001.0001/acrefore-9780190228613-e-794)ㅤㅤㅤ[/acrefore-9780190228613-e-794](https://oxfordre.com/communication/view/10.1093/acrefore/9780190228613.001.0001/acrefore-9780190228613-e-794).  
Spillane, B., Lawless, S., & Wade, V. (2020). The Impact of Increasing and ㅤㅤㅤDecreasing the Professionalism of News Webpage Aesthetics on the ㅤㅤㅤPerception of Bias in News Articles. _Human-Computer Interaction. Design and_ ㅤㅤㅤ*User Experience*, 686–710. [https://doi.org/10.1007/978-3-030-49059-1_50](https://doi.org/10.1007/978-3-030-49059-1_50)  
Spillane, B., Lawless, S., & Wade, V. (2018). Increasing and Decreasing Perceived ㅤㅤㅤBias by Distorting the Quality of News Website Design. _Electronic Workshops_ ㅤㅤㅤ*in Computing*. [https://doi.org/10.14236/ewic/hci2018.61](https://doi.org/10.14236/ewic/hci2018.61)  
Tran, M., Zhang, Y., & Soleymani, M. (2020). _Towards A Friendly Online Community:_ ㅤㅤㅤ*An Unsupervised Style Transfer Framework for Profanity Redaction*. ㅤㅤㅤArXiv.org.[https://arxiv.org/abs/2011.00403](https://arxiv.org/abs/2011.00403)  
Webiny Inc.. (2025). _Streamlined multi-tenancy management with Webiny_ \[Webpage\]. ㅤㅤㅤRetrieved October 21, 2025, from ㅤㅤㅤ[https://www.webiny.com/features/multi-tenancy-site-management](https://www.webiny.com/features/multi-tenancy-site-management?utm_source=chatgpt.com)  
Wobbrock, J. O., Hsu, A. K., Burger, M. A., & Magee, M. J. (2019). Isolating the ㅤㅤㅤEffects of Web Page Visual Appearance on the Perceived Credibility of Online ㅤㅤㅤNews among College Students. _Proceedings of the 30th ACM Conference on_ ㅤㅤㅤ*Hypertext and Social Media*. [https://doi.org/10.1145/3342220.3343663](https://doi.org/10.1145/3342220.3343663)`

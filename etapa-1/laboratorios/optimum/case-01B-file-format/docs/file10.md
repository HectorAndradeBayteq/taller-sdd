Software Requirements Engineering
Sardar Mudassar Ali Khan
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in
any form or by any means, including photocopying, recording, or other electronic or mechanical
methods, without the prior written permission of the publisher, except in the case of brief
quotations embodied in critical reviews and certain other noncommercial uses permitted by
copyright law. Although the author/co-author and publisher have made every effort to ensure
that the information in this book was correct at press time, the author/co-author and publisher do
not assume and hereby disclaim any liability to any party for any loss, damage, or disruption
caused by errors or omissions, whether such errors or omissions result from negligence,
accident, or any other cause. The resources in this book are provided for informational purposes
only and should not be used to replace the specialized training and professional judgment of a
health care or mental health care professional. Neither the author/co-author nor the publisher
can be held responsible for the use of the information provided within this book. Please always
consult a trained professional before making any decision regarding the treatment of yourself or
others.
Author/Co-Author – Sardar Mudassar Ali Khan
Publisher – C# Corner
Editorial Team – Deepak Tewatia, Baibhav Kumar
Publishing Team – Praveen Kumar
Promotional & Media – Rohit Tomar, Rohit Sharma
https://www.c-sharpcorner.com/ebooks/ 2

Declaration
I Sardar Mudassar Ali hereby declare that this book contains original work and that not any part
of it has been copied from any other sources. It is further declaring that I have completed my
book under the project of Free Education for Humanity and with the guidance of my teachers
and my senior colleagues and this is entirely possible based on my efforts and, my ideas.
https://www.c-sharpcorner.com/ebooks/ 3

Acknowledgment
It would be my pleasure and I am feeling ecstatically rapturous to pay the heartiest thanks. First,
To Allah (SWT) who is most beneficent and most merciful that he enabled me and blessed me
to take the pebble out of his multitude of bounties. To my dear parents, their prayers become
true towards the completion of my book. I am greatly beholden to my esteemed honorable
motivator and kind-hearted, teachers, friends, and colleagues who supported my idea all the
way and never let me down and corporate with me in this way completely sincerely and
heartedly.
Also, special thanks to those who helped me a lot in my way, but I have forgotten them to
mention here.
— Sardar Mudassar Ali Khan
https://www.c-sharpcorner.com/ebooks/ 4

Table of Contents:
Welcome to Software Requirements Engineering .............................................................................. 6
The metaphor of Software Requirement Engineering ........................................................................ 9
Prerequisites for Software Requirement Engineering ...................................................................... 12
Key Requirement Decisions ............................................................................................................ 17
Feasibility Study ............................................................................................................................ 21
Introduction of Requirement Elicitation .......................................................................................... 27
Requirement Validation and Verification ........................................................................................ 40
Requirement Management ............................................................................................................ 44
Introduction of Software Process Models ....................................................................................... 48
Software Process Models ............................................................................................................... 51
Importance of Software Models ..................................................................................................... 69
Selection of Process Models ........................................................................................................... 77
Essential and Accidental Requirements ........................................................................................... 83
System Functional Requirements ................................................................................................... 86
System Non-Functional Requirements ............................................................................................ 89
Introduction of System .................................................................................................................. 93
Requirement Analysis .................................................................................................................... 98
System Design ............................................................................................................................. 109
Development and Configuration Management .............................................................................. 153
Quality Assurance ....................................................................................................................... 157
Results and Discussions of Software product ................................................................................. 184
https://www.c-sharpcorner.com/ebooks/ 5

1
Welcome to Software
Requirements Engineering
Overview
In this chapter, we explore Understanding Software Requirement
Engineering. Defining, gathering, and documenting system needs.
Importance and reading guide included.
https://www.c-sharpcorner.com/ebooks/ 6

Introduction
Software Requirement is the process of describing the features and functionalities of the
targeted system. Software Requirements give us a clear picture of the targeted system i.e., what
the expectation of the customer for his/her product requirements can be obvious or hidden,
known and unknown expected and unexpected according to the client's point of view.
Example: (Online Law Firm Android App) is a Real-Time Cloud-Based android application that
will provide judicial assistance to society. We aim to help people solve their Judicial problems
and guide them by providing the best possible solution. Another goal of the application is to
bring all the interested parties on a single platform. Notification-based alerts to notify all the
parties. Our system will help the Laws and find new cases. The system will have a
communication system through which users can communicate with each other. Our system will
have a rating system through which the client will rate the users.
What is Software Requirement
Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
Example:
• Login Functionality of Online Law Firm Android App.
• Admin of the system can suspend and delete any accounts.
• Users of the system can delete any contact.
• Clients can submit /her Case in our system
What is Requirement Engineering
The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
Example:
Let us consider you want to gather the requirement for (Law Firm Android App) from your client
and after completing the requirement elicitation process you analyze them and finely you write
the software requirement specification document of the project is called Requirement
Engineering process.
Why Software Requirement Engineering is Important
Software requirement engineering is a very important phase of the software development
process or simply Software development life cycle (SDLC). This phase is used to translate the
unclear and incomplete idea of the customer into complete precise and formal specification. This
document is very must important and acts as a bridge between the Customer, User, and
Developers. Therefore, the importance of software requirement engineering is very important for
the development of effective and efficient software products.
https://www.c-sharpcorner.com/ebooks/ 7

How to Read this Book
This book is designed to be read either topic by topic or cover by cover. If you are a primary
level programmer, then you should read this book topic by topic OR if you are an intermediate
level programmer then you should read this book from chapter 2 OR if you are a High-level
programmer then you should read this book from part 2. If you are a general reader, then read
the book from start to end.
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
https://www.c-sharpcorner.com/ebooks/ 8

2
The metaphor of Software
Requirement Engineering
Overview
In this chapter, we will explore Software Requirement Engineering.
Discover how metaphors illuminate system development, akin to
constructing a house, fostering clear understanding and effective
communication.
https://www.c-sharpcorner.com/ebooks/ 9

Introduction
In this chapter, we will discuss the metaphors of software requirement engineering and how we
can use the metaphor in requirement engineering for the development of software products.
What is a metaphor
A metaphor is the figure of speech that is used to understand and explain something better in
software engineering as well as in software requirement engineering. Metaphors clearly define
the hidden similarities of the system metaphors define the clear picture of the software system
from the idea to the requirement of system software development is same as developing the
house in which we first define requirement then we arrange the finance for that then we go to
another step-like construction.
Metaphors in Software Requirement Engineering
In software engineering as well as in software requirement engineering metaphors clearly define
the hidden picture and similarities of the system metaphors define the clear picture of a software
system from idea to the requirement of system software development is the same as developing
the house in which we first define requirement then we arrange the finance for that then we go
to other steps like construction same in software system we need at first stage idea then we
gather requirement for that idea to become a real software system for this process we use some
techniques and follow some procedure for the requirement engineering process.
Metaphors are like you want to buy a car you want to know each and everything about that car
from the basic requirement of the car to the functionalities as well as the latest feature of the car.
But in a software system we follow some procedures for the development first, we define the
idea then we gather software requirements for that system after that we follow software
development principles for an efficient system.
In later stages, we will use this concept for the requirement engineering process for the project
(Online Law Firm Android App).
How to Use Metaphors in Requirement Engineering
In software requirement engineering we use metaphors for defining each little requirement of the
system of the software because at a later stage we analyze that requirement and then we start
designing and developing the project.
• Software Development is building like a house in which we first chose the place where
we want to build the house and we describe the requirements for that house and then we
define each step for the completion of the house. In Software development we first
define the idea then we describe that idea in the form of functional and non-functional
requirements after that we arrange some resources for that project and decide a
timeframe for the completion of the software development process and project.
• Software Should be like a real-world object that behaves according to the defined
functionality that any customer gives to the development team. The software should be
functional.
• A good customer can give you a rich number of requirements that can help you in the
software development process but if you are facing a problem with the customer then
you use the techniques for the requirement engineering process for any project you are
working on.
https://www.c-sharpcorner.com/ebooks/ 10

Importance of metaphors in software Requirement Engineering
Metaphors have great importance in Software requirement engineering because it is the very
important phase of the software development process or simply Software development life cycle
(SDLC). This phase is used to translate the unclear and incomplete idea of the customer into
complete precise and formal specification. This document is very must important and acts as a
bridge between the Customer, User, and Developers. Therefore, the importance of Metaphors is
very important for the development of effective and efficient software products.
• Metaphors help us to define hidden similarities of the system.
• Metaphors clearly define the hidden similarities of the system metaphors define the clear
picture of the software system from the idea to the requirement of system software
development is same as developing the house in which we first define requirement then
we arrange the finance for that then we go to another step-like construction.
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
• Functional Requirements define the functionalities of the system
Example:
• Login Functionality of Online Law Firm Android App.
• Admin of the system can suspend and delete any accounts.
• Users of the system can delete any contact.
• Clients can submit /her Case in our system
Non-Functional Requirement supports the Functional Requirements of the
system.
• Availability
• Security
• Modifiability
• Interoperability
https://www.c-sharpcorner.com/ebooks/ 11

3
Prerequisites for Software
Requirement Engineering
Overview
In this chapter, we will explore critical aspects of software requirement
engineering (SRE) prerequisites, emphasizing their pivotal role in
project success. It underscores the importance of meticulous planning,
efficient problem definition, and thorough requirement engineering for
delivering high-quality software products.
https://www.c-sharpcorner.com/ebooks/ 12

Introduction
In this chapter, we will discuss the prerequisites in software requirement engineering. In
software development, the most important thing is an idea and after that, we do requirement
elicitation for that idea and then we define pre- and post-requirement for that software idea. In
requirement elicitation, the most important thing is quality requirements because these
requirements help us in the software construction process and make the project successful. The
worst thing in the software development process is to revise development projects two to three
times. Before beginning any project, we must be sure about prerequisites, and after checking
that all the permits have been obtained and make sure that all the requirements are obtained
then move to the next step of the software development life cycle (SDLC). The term Measure
Twice and cut once are very important in software development because Measures all the
prerequisites first and then start the development process.
Importance of Prerequisites
In Software development, the prerequisites are very important because if any organization or
individual programmer wants to develop a high-quality software product, they must ensure
prerequisites and high-quality practice. Such practice emphasizes the beginning of the project.
• If you emphasize these practices at the end of the project, then you emphasize system
testing where many people think and ensure quality assurance.
• If you emphasize these practices in the middle of the project, then you emphasize
construction practices where the development team starts designing and developing the
project.
• If you emphasize these practices at the start of the project, then you need a proper plan
for the development process and need high-quality requirements for high-quality
products.
Determine the system you are working On.
In Software development, the prerequisites are very important because if any organization or
individual programmer wants to develop a high-quality software product, they must ensure
prerequisites and high-quality practice. Such practice emphasizes the beginning of the project.
Before the start of development determines the project, you are working on what is the nature of
the project like life-critical information critical. Determine the time frame and budget for that
project. Before beginning any project, we must be sure about prerequisites, and after checking
that all the permits have been obtained and make sure that all the requirements are obtained
then move to the next step of the software development life cycle (SDLC).
Cause of Incomplete Planning.
• A big project requires more efficient planning for making the project successful likewise a
small project also requires planning but if at the start of the project you made a mistake
and miss any prerequisites then your project will require two to three times revision is the
worst part of development.
• Incomplete Requirements may lead a project to be Unsuccessful.
• Before beginning any project, we must be sure about prerequisites and after checking
that all the permits have been obtained and make sure that all the requirements are
obtained then move to the next step of the software development life cycle (SDLC) if you
forget something in the first stage of software development then your project may lead to
an unsuccessful project.
https://www.c-sharpcorner.com/ebooks/ 13

Problem Definition Prerequisites
In Software Development the prerequisites are very important for long-term projects as well as
short-term projects. But before the start of any project identify the problem that may cause the
project to lead to the failed software product.
Example:
• Incomplete Planning
• Poorly define the project scope
• Ineffective leadership
• Fail to identify the assumptions
• Fail to track the progress.
• Lack of detailed documentation.
• Fail to track requirements
• Fail in the selection of the right technology.
• Inaccurate measurement of time and budget.
• Cultural terms in global terms.
• Lack of datil in project planning.
Requirement Engineering Prerequisites
Complete Planning
A big project requires more efficient planning for making the project successful likewise a small
project also requires planning but if at the start of the project you made a mistake and miss any
prerequisites then your project will require two to three times revision this is the worst part of
development.
Efficiently define the project scope
In the Requirement Engineering process defining the project, the scope is very much important
because if you define the scope of the project as poor or incomplete scope your project leads to
unsuccessful.
Effective leadership
In software development, the if project leader is ineffective and poorly manages the project
improperly defines the iteration of completion of a project is unsuccessful and useless at the end
of the project.
Successfully identify the assumptions
In software development, if you failed to define the assumption about the project then your
project in the end will be useless.
Example:
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
https://www.c-sharpcorner.com/ebooks/ 14

Track the progress.
In software development, if you failed to track the full progress of the project then your project, in
the end, will be useless.
Detailed documentation.
In software development, documentation is a very important phase in which we write software
documents like SRS document Design Document in later stages of development we use reverse
engineering techniques then we use these documents for updating the software product.
Full track requirements
Software requirement engineering is a very important phase of the software development
process or simply Software development life cycle (SDLC). This phase is used to translate the
unclear and incomplete idea of the customer into complete precise and formal specification. This
document is very important and acts as a bridge between the Customer, User, and Developers.
Therefore, the importance of software requirement engineering is very important for the
development of effective and efficient software products.
Selection of the right technology.
In software development, if you fail in the selection of technology which technology is best for
the development of the project then it may also lead to the project being unsuccessful.
Accurate measurement of time and budget.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
Detailed project planning.
• A big project requires more efficient planning for making the project successful likewise a
small project also requires planning but if at the start of the project you made a mistake
and miss any prerequisites then your project will require two to three times revision this
is the worst part of development.
• Incomplete Requirements may lead a project to be Unsuccessful.
• Before the beginning of any project, we must be sure about prerequisites and after
checking that all the permits have been obtained and make sure that all the requirements
are obtained then move to the next step of the software development life cycle (SDLC) if
you forget something in the first stage of software development then your project may
lead to an unsuccessful project.
Amount of time you spend on Requirement Engineering.
In Software Development the prerequisites are very important for long-term projects as well as
short-term projects. But before the start of any project determine the amount of time you spend
on the requirement engineering process as well because software development time and budget
are very important for the completion of a successful project.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
https://www.c-sharpcorner.com/ebooks/ 15

• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If you emphasize these practices at the end of the project, then you emphasize system
testing where many people think and ensure quality assurance.
• If you emphasize these practices in the middle of the project, then you emphasize
construction practices where the development team starts designing and developing the
project.
• If you emphasize these practices at the start of the project, then you need a proper plan
for the development process and need high-quality requirements for a high-quality
product
Note:
• For the successful delivery of the project emphasize these practices at the start of the
project, then you need a proper plan for the development process and need high-quality
requirements for a high-quality product.
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
• Functional Requirements define the functionalities of the system.
• Reverse engineering is the process in which when we want to update the software
product, we use reverse engineering journey form document to code the product.
https://www.c-sharpcorner.com/ebooks/ 16

4
Key Requirement Decisions
Overview
In this chapter, we delve software requirement engineering (SRE)
prerequisites for project success, emphasizing planning, defining
scope, leadership, assumptions, progress tracking, documentation,
technology selection, budgeting, and programming language choice.
https://www.c-sharpcorner.com/ebooks/ 17

Introduction
Software requirement engineering is a very important phase of the software development
process or simply Software development life cycle (SDLC). This phase is used to translate the
unclear and incomplete idea of the customer into complete precise and formal specification. This
document is very must important and acts as a bridge between the Customer, User, and
Developers. Therefore, the importance of software requirement engineering is very important for
the development of effective and efficient software products.
• Key Decision at the start of the project is very important for the successful delivery of the
project.
Some of the key decisions that are very important for successful projects
are given below.
Complete Planning
A big project requires more efficient planning for making the project successful likewise a small
project also requires planning but if at the start of the project you made a mistake and miss any
prerequisites then your project will require two to three times revision is the worst part of
development.
Efficiently define the project scope
In the Requirement Engineering process defining the project, the scope is very much important
because if you define the scope of the project as poor or incomplete scope your project leads to
unsuccessful.
Effective leadership
In software development, the if project leader is ineffective and poorly manages the project
improperly defines the iteration of completion of the project is unsuccessful and useless at the
end of the project.
Successfully identify the assumptions
In software development, if you failed to define the assumption about the project then your
project in the end will be useless.
Example:
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Track the progress.
In software development, if you failed to track the full progress of the project then your project, in
the end, will be useless.
Detailed documentation.
In software development, documentation is a very important phase in which we write software
documents like SRS document Design Document in later stages of development we use reverse
engineering techniques then we use these documents for the updating the software product.
https://www.c-sharpcorner.com/ebooks/ 18

Full track requirements
Software requirement engineering is a very important phase of the software development
process or simply Software development life cycle (SDLC). This phase is used to translate the
unclear and incomplete idea of the customer into complete precise and formal specification. This
document is very must important and acts as a bridge between the Customer, User, and
Developers. Therefore, the importance of software requirement engineering is very important for
the development of effective and efficient software products.
Selection of the right technology.
In software development, if you fail in the selection of technology which technology is best for
the development of the project then it may also lead to the project being unsuccessful.
Accurate measurement of time and budget.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
Detailed project planning.
• A big project requires more efficient planning for making the project successful likewise a
small project also requires planning but if at the start of the project you made a mistake
and miss any prerequisites then your project will require two to three times revision is the
worst part of development.
• Incomplete Requirements may lead a project to be Unsuccessful.
• Before the beginning of any project, we must be sure about prerequisites and after
checking that all the permits have been obtained and make sure that all the requirements
are obtained then move to the next step of the software development life cycle (SDLC) if
you forget something in the first stage of software development then your project may
lead to an unsuccessful project.
Choose the programming language.
In software development, if you failed in the selection of programming language which
programming language is best for the development of the project then it may also lead to the
project being unsuccessful. If you want your project to be successful and delivered on time, then
select the right programming language that supports your idea that can easily implement your
project functionality.
Cause of Not Choosing the Right Technology.
If at the start of the project you select the wrong programming language, then at the middle of
the software development your project will need a revision of the programming language then at
that stage you go from middle to start of the project and then start development with a new
programming language that supports your idea, and this is the worst type of development.
Choose the Technology you want to use.
In software development, if you fail in the selection of technology which technology is best for
the development of the project then it may also lead to the project being unsuccessful. In
software development, if you fail in the selection of technology which technology is best for the
development of the project then it may also lead to the project being unsuccessful.
https://www.c-sharpcorner.com/ebooks/ 19

Cause of Not Choosing the Right Technology.
If at the start of the project, you select the wrong technology then at the middle of the software
development your project will need a revision of technology then at that stage you go from
middle to start of the project and then start development with new technology that supports your
idea, and this is the worst type of development.
Selection of Major Software Construction Practices.
Coding
• Selection of the right programming language.
• Follow the coding techniques.
• Follow the Software Engineering principals
• Follow the coding convention.
• Coding standards
Teamwork
• Will the Programmer start programming individually or start working with team members
to define some certain steps that either team or individual programmer will follow for
completion of the project?
Quality Assurance
• Define some quality insurance techniques that will help you to develop the best software
product.
• Write test cases for quality assurance.
• Define a testing strategy for your product.
• Unit Testing
• System Testing
• Integration testing
• Black box testing
• Whitebox testing
Tools
• Select Right Technology.
• Select Right Programming Language.
• Selection of the Right tools for development.
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
• Functional Requirements define the functionalities of the system.
• Reverse engineering is the process in which when we want to update the software
product, we use reverse engineering journey form document to code the product.
• Programming Language used for the development of software products.
https://www.c-sharpcorner.com/ebooks/ 20

5
Feasibility Study
Overview
In this chapter, we will explore the feasibility explores the feasibility of
the Online Law Firm Android App project. It covers its scope, functional
requirements, and a detailed feasibility analysis including technical,
financial, resource, schedule, and operational aspects. This chapter is
crucial for understanding the project's viability and ensuring successful
development.
https://www.c-sharpcorner.com/ebooks/ 21

Introduction
In this chapter, we will study the feasibility report of the project when an organization is an
approach to the software development company then after the complete analysis of the project a
feasibility report is generated feasibility study is the complete report of the project.
Let us make the feasibility report of the Online Law Firm Android App. First, we will discuss the
introduction of the project.
Online Law Firm Android App is a Real-Time Cloud-Based android application that will provide
judicial assistance to society. We aim to help people solve their judicial problems and guide
them by providing the best possible solution. Another goal of the application is to bring all the
interested parties on a single platform. Notification-based alerts to notify all the parties. Our
system will help the judicial and Judicial Consultant to find new cases. The system will have a
communication system through which users can communicate with each other. Our system will
have a rating system through which clients will rate the users.
Scope of Project
We aim to help people facing different problems by providing expert advice through our multi-
client cloud-based system. The Online Law Firm Android App will provide ease to access and
use online platforms for people seeking legal help. The system will facilitate the Law to their
tasks and keep track of the complete judicial process (cases). The client's Laws and the judicial
consultant will be registered in our system.
• Our system will not register OnlineLawFirm.
• Our system will not register any court.
Functional Requirements
Functional requirements are those requirements in which we specify the project functionalities.
These requirements are also called essential requirements.
Let us discuss the functional requirements of the project (Online Law Firm Android App)
Registration of Law, Patient, Admin:
• Users should sign up to use the system.
Manage Account:
• Admin of the system can suspend and delete any accounts.
Manage Contacts:
• Users of the system can delete any contact.
Submission of Cases from Clients:
• Clients will submit /her Case in our system.
Assign the case to the lawyer:
• Judicial Consultants can assign the cases to lawyers according to their area of the field.
Notification system:
• Law and Judicial Consultant send Notification to patient.
• The law experts will send a notification to a lawyer.
https://www.c-sharpcorner.com/ebooks/ 22

GPS Location
• The system will store the GPS location of the Law and development.
Communication System:
• Lawyers and law experts can communicate with clients.
Lawyers’ availability confirmation:
• After receiving the notification lawyer can confirm their availability for the Case.
Rating System:
• Users can give a rating to Law
Lawyer promotion:
• Performance-based promotion of Law
Sharing of Legal Documents:
• A Law can share a judicial report with the patient
Save Case History:
• Law and patient can save case history in the system
Feasibility Analysis
Feasibility analysis is the complete and comprehensive analysis of the system. It determines the
• Technical feasibility
• Financial feasibility
• Resource’s feasibility
• Schedule feasibility
• Operational feasibility
Let us discuss the feasibility analysis of the project (Online Law Firm Android App)
An overall study of the project has been carried out and the findings have been listed in this
report. The feasibility of the “Online Law Firm Android App” can be ascertained from the
following assessments:
Technical Feasibility
In technical feasibility, we discuss the technologies that will be used in the targeted system in
the first part of the book you have studied that the selection of technology and programming
language is the most important part of software development.
Let us discuss the feasibility analysis of the project (Online Law Firm Android App)
The system will be using different technologies for users. Following technologies will be
used in the development of the system.
• Java
• XML
• Firebase
• Android Studio
https://www.c-sharpcorner.com/ebooks/ 23

Financial Feasibility
In finical feasibility, we discuss how much finance will be used in the targeted system in the first
part of the book you have studied that selection of technology and programming language, and
allocation of time and budget is the most important part of software development.
Let’s discuss the feasibility analysis of the project (Online Law Firm Android App)
Feasibility of financial aspects e.g., pricing and source of availability and financing of tools and
other resources required for the project. As shown in Table 5.1: Financial Feasibility
Table 5.1: Financial Feasibility
| Resource Name  |     Price    |     | Source   |     Sponsor  |
| -------------- | ------------ | --- | -------- | ------------ |
| Android phone  | Rs 18,000/-  |     | Samsung  | Self         |
| Laptop         | Rs 45,000/-  |     | Acer     | Self         |
|                | Rs 63,000/-  |     | HP       | Self         |
Android Studio  Open Source  https://developer.android.com/studio Self

Firebase  2500/10GB-  https://console.firebase.google.com/  Self
Resource Feasibility
In resource feasibility, we discuss what type of resources will be used in the targeted system at
the first part of the book you have studied that selection of technology and programming
language and allocation of time and budget, and selection of resources is the most important
part of software development. As shown in Table 5.2: Resource Feasibility.
Let’s discuss the feasibility analysis of the project (Online Law Firm Android App)

Table 5.2: Resource Feasibility.
| Resource Name        |     | Availability  |     |     |
| -------------------- | --- | ------------- | --- | --- |
|    Laptop            |     | Available     |     |     |
|    Android Phone     |     | Available     |     |     |
|    Software’s        |     | Available     |     |     |
|    Development Team  |     |  3 Members    |     |     |
|    Budget            |     | Available     |     |     |
|    Duration          |     | 10 Months     |     |     |

https://www.c-sharpcorner.com/ebooks/  24

Schedule feasibility
In schedule feasibility, we discussed the time and iteration of the project in this part we make the
schedule of the project in which we study the start and end of the project as shown in table 5.3:
Schedule Feasibility.
As shown in table 5.3: Schedule Feasibility.
Operational Feasibility
In operational feasibility, we discussed how this project will work and what is the outcomes of
this project.
• This project is based on real-world implementation and will be deployed to the online
community
• The Law who handles Judicial Cases can use this project's Online Law Firm Android
app.
• An Online Law can also keep a record of the Cases.
Non-Functional Requirements:
Non-Functional Requirement is those requirements that support the functionalities of the
targeted system. Non-Functional requirement targets the quality assurance of the project.
Performance
• The system will give a response within one second.
https://www.c-sharpcorner.com/ebooks/ 25

Availability
• The system will be available 24/7.
Scalability
• The system is scalable to the next level.
Usability
• Desired results, easy to use.
Maintainability
• Easily maintainable.
Assumptions
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Feasibility Study Document
Download the document for practicing and writing the Feasibility study of the Project.
https://github.com/SardarMudassarAliKhan/Fesibility-Study-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
• Functional Requirements define the functionalities of the system.
• Reverse engineering is the process in which when we want to update the software
product, we use reverse engineering journey form document to code the product.
• Programming Language used for the development of software products.
https://www.c-sharpcorner.com/ebooks/ 26

6
Introduction of
Requirement Elicitation
Overview
In this chapter, we will explore critical process of requirement
elicitation, where techniques to gather, analyze, and document
software requirements are explored. From interviews to
questionnaires, various methods are discussed, along with
challenges, prioritization techniques, and the pivotal role of a
business analyst. Key points and practical examples enrich the
comprehensive coverage
https://www.c-sharpcorner.com/ebooks/ 27

Introduction
In this part of the book, we will discuss the complete process of requirement elicitation. How we
can get requirements about software products by using different techniques in this chapter, we
will study about introduction about the requirement elicitation process.
What is Requirement Elicitation
The process to gather the software requirement from customers and analyze those
requirements to document them is called requirement engineering or requirement elicitation. If
the feasibility report is positive from all aspects, then we start the requirement elicitation process
in this process we start requirement engineering we use different techniques to get requirements
about the project. We discuss the features and functionalities of the system and identify the user
and stakeholders.
Example:
• Let us consider you want to gather the requirement for (Law Firm Android App) from your
client and after completing the requirement elicitation process you analyze them and
finely you write the software requirement specification document of the project is called
Requirement Engineering process.
Process of Requirement Elicitation
Requirement Gathering
• The developer discusses with the client and end-user to know about features and
functionalities of the system and wants to know the customer expectations for the
software product.
Organizing Requirement
• After the requirement engineering process, the developer prioritizes and arranges the
requirement in order of High middle, and low.
Negotiations & Discussion
• If the requirements are ambiguous or there are some conflicts in the requirement of
various stakeholders, the developer negotiated and discussed with stakeholders. These
requirements come from different stakeholders so to remove the ambiguity and conflicts
the developers and stakeholders discussed with each other’s and compromised
reasonably.
Documentation
• All the informal, formal functional non-functional requirements are written in the formal
document called as Software Requirement Specification (SRS) Document.
Importance of Requirement Elicitation
Software requirement elicitation is a very important phase of the software development process
or simply Software development life cycle (SDLC). This phase is used to translate the unclear
and incomplete idea of the customer into complete precise and formal specification. This
document is very important and acts as a bridge between the Customer, User, and Developers.
Therefore, the importance of software requirement engineering is very important for the
development of effective and efficient software products.
• Software requirement elicitation is the basis of every software product.
https://www.c-sharpcorner.com/ebooks/ 28

• Software requirement elicitation identifies the Functional and Non-Functional
Requirements of the system.
• Software requirement elicitation identifies the business requirement of the system.
Level of Requirement
• Business Requirements
• Functional Requirements
• Non-Functional Requirements
Business Requirements
Business Requirements are those types of requirements that describe why an organization
implemented the system. These requirements identify the business logic for the system and
describe the high-level view of the system. Business requirements describe the need and
expectations of the system.
Example:
• To reduce the number of staff members by some limit/percentage (let's say 30%.
• To reduce the paper handwork of the employees of the organization.
User Requirement
User requirement is those type of requirement that describes the task of the user that the user
must be performed with the system
Example:
• Information about courses of the university.
• Information about tickets of the airline.
Functional Requirement
Functional Requirements are those requirements that describe what the developer must be
implemented to enable the user to achieve the desired task we identify the features and
functionalities of the targeted system functional requirements are very important for the system.
Example:
• The user selects the Airline through the kiosk.
• User Select the No of seats.
• Users select the source and destination for travel.
Techniques and Process of Requirement Elicitation
Business Analyst
A business analyst is an individual who has the primary responsibility to gather requirements,
elicit, analyze the document and validate the needs of the stakeholders. BA acts as the bridge
between customers and the developers’ team. BA does bi-directional communication to cover
up the requirements risk. The business analyst communicates with the project manager and
communicates with the development team and with the testers and the project sponsor.
Function and Responsibilities of Business Analyst
• A business analyst plans the required approach for the requirement engineering process.
• The business Analyst identifies the stakeholders who give us the requirement about the
targeted system.
https://www.c-sharpcorner.com/ebooks/ 29

• The business Analyst identifies the elicitation techniques and elicits the requirements.
Business Analyst analyzes the requirement and handles conflict.
• The business Analyst documents the requirement and makes the formal document for
requirements which is an SRS document.
• The business Analyst communicates the requirement between all the stakeholders.
• The business Analyst leads the requirement validation process.
• Business Analyst facilitates requirements prioritization.
• Business Analyst manages requirements and approved requirements.
Who can be a business User?
Former User of the Organization
We can make the former user of the organization or ex-employee of the organization the
business analyst
Pros
Pros of making the former employee of the organization a business analyst.
• Former user of the organization under the working environment of the organization.
• Former users speak the language of the organization.
• Former users know the existing system.
Cons
Cons for making the former employee of the organization a business analyst.
• Former users maybe not be well in software engineering concepts.
• Former users may have less technical knowledge.
• Former users might not consider input from joiner’s staff.
Former developers /testers of the Organization
We can make the former developers and testers of the organization business analysts.
Pros
Pros for making the former developers and testers of the organization business analysts.
• Understand how the system is in development.
• Software engineering concepts may be betters.
• Developers or testers are good at finding errors and bugs in underdeveloped systems.
Cons:
• Developers and testers usually lack communication skills.
• Focus more on the functionality of the system and ignore the customer choice that leads
to the overlooked stakeholder.
Former project manager of the Organization.
We can make the former project manager of the organization a business analyst.
Pros
Pros of becoming a project manager as a business analyst.
• Former project managers have a lot of experience in working with teams.
• Strong organizational skills and strong communication skills.
Cons:
Cons in making project manager as the business analyst.
https://www.c-sharpcorner.com/ebooks/ 30

• Formers project manager lack in software engineering concepts.
• Former project manager lacks modeling skill.
Subject matter expert
We can make the subject matter expert of the organization a business analyst subject matter
expert also known as a domain expert.
Pros:
Pros in making SME as the business analyst.
• SME has a lot of experience.
• SMEs have a lot of understanding of the domain.
Cons:
Cons in making SME as the business analyst.
• SMEs may not give an innovative idea.
• SMEs in old the requirement according to their preference
Rookie
We can make a rookie a business analyst rookie is a fresh graduate.
Pros:
Pros in making Rookie as the business analyst.
• No preconceived notions (No idea) clean about the statement.
• Rookie gives Innovative ideas.
Cons:
• Rookie has no experience in the domain.
Elicitation Techniques
Elicitation techniques are those techniques in which we study how to elicit and gather the
requirements for the targeted system. Some of the elicitation techniques are discussed below.
Interview
In an interview face to face, interaction occurs with the clients and stakeholders. In the interview
we have two types of interviews closed interviews and open interviews. In closed interviews, we
have a pre-defined set of questions and in Open interviews no pre-defined set of questions.
Interviews give us qualitative data, but a questionnaire gives us quantitative data.
Pros:
• From interviews we collect a rich amount of data.
Cons:
• Qualitative data are difficult to analyze.
Questionnaires
Questionnaires give us quantitative data because we give a single paper of multiple statements
to a large audience, and everyone gives us different types of views on those statements. Before
developing any type of questionnaire, we must focus on these precautions which are given
below.
https://www.c-sharpcorner.com/ebooks/ 31

• The purpose of the survey should be defined.
• The sampling group means the targeted group.
• Provide clear instructions on how to complete the questionnaires.
• Keep the questionnaires brief and user-friendly.
• Prepare and develop the questionnaires in such a way that can gather a rich amount of
data.
• conduct the survey and analyze the results.
Types of questionnaires
Closed-ended
Closed-ended means limits the answer of the respondent to the option given.
Dichotomous
• (Yes/No), (True/False), (Agree/Disagree)
Multiple choice questions.
• In multiple choices, we give different types of questions.
like red Scale
• On the red scale, we give the rating scale to the audience.
Example:
• Size Strongly Satisfied Agrees on Disagree.
• Color
• Shape
Open-ended
• No predefined set of options like taking feedback from the users of the system.
Matrix Questions
• Closed-ended questions but arranged in the form of a table. See example no 1.
Contingency
• Questionnaires were answered based on the previous response.
Example:
If you are using iPhone 7 and why you are using it, I phone 7.
Challenges in Requirement Elicitation
The yes-but syndrome
• The yes-but syndrome means requirements are clear to all stakeholders but not
completely clear.
The undiscovered ruins syndrome
• The undiscovered ruins syndrome means the identification of the right stakeholders that
give us the richest data.
https://www.c-sharpcorner.com/ebooks/ 32

The user and developer syndrome
• The user and developer’s syndrome mean a communication gap between users and
developers.
Challenges in Requirement Elicitation
The yes-but syndrome
• The yes-but syndrome means requirements are clear to all stakeholders but not
completely clear.
The undiscovered ruins syndrome
• The undiscovered ruins syndrome means the identification of the right stakeholders that
give us the richest data.
The user and developer syndrome
• The user and developer’s syndrome mean a communication gap between users and
developers.
Classification of the data.
Qualitative data
• The data gives us information about the quality of the software and hardware product.
Example:
Color, text, Appearance.
Quantitative data
• The data gives us information about the quantity of the product, and part of the product
.this data deals with numbers.
Example:
Number, weight, Area, volume.
Structured data
• The data is in the organized form while unstructured data is in the form of unorganized
form.
Five-Step of Problem Analysis
Gain agreement on problems
• Describe the problem.
• Affects Identify stakeholders.
• End Results Describe the input of the problem on stakeholders.
• Benefits of solution Indicate the proposed solutions and key benefits.
Understand the Root cause.
• Too Much scrape customer returns.
• Manufacturing Defects.
• Damage in shipment.
• Obsolete Goals.
• Inaccurate sales Orders.
https://www.c-sharpcorner.com/ebooks/ 33

• Understand the root cause of why loss in benefits occurs.
• Create the Roadmap to understand the root cause and then find the solution to that
problem.
Identify stakeholders
• Identify stakeholders that are directly related to our system and that support our system.
Define system boundaries
• Identify the geographical boundaries of the system and actors that are external to the
other system.
• Define the system boundaries of your system.
• And actors that are external to the other system.
Constraints
• Define the economic constraints.
• Define technical constraints.
• Define schedule.
• Environments.
Background Reading
The elicitation technique gathers requirements by reading the various documents associated
with the organization.
Source of the background reading.
• Company reports, Organization, Charts, Policy manuals, reports, and existing system
documents.
The problem of Background reading.
• Very long and tedious technique.
• Documents might not match with the reality of the organizations.
Benefits of Background reading.
• A good starting point when organizations are unknown
Introspection
In introspection, Business analysts think about the requirements and features that must be
possessed by the system, but these are added by the business analyst itself. This might lead to
gold plating.
Social Analysis
Active Analysis.
• Inactive analysis business analysts physically and practically observe the working of the
customer organization.
Passive Analysis:
• In passive analysis business, analysts are not physically present in the customer
organization but observe the working through the technology.
• Like: CCTV Cameras.
https://www.c-sharpcorner.com/ebooks/ 34

Explanatory:
• In explanatory business, the analyst must present in the customer organization but in a
different form. In explanatory business, analysts interact with the employees of the
organization.
Workshop
Workshop in which key stakeholders gather for a short intensive period, not more than 1 or 2
days for gathering techniques of requirement engineering.
Advantages of Workshop
• Stakeholders are physically present in the organization.
• Face-facing communication between all stakeholders.
• Brainstorming session together techniques for Requirement engineering Process.
Preparing of Workshop
Selling the concept
• All stakeholders share ideas with each other and find a general objective.
Ensuring the participation of the right stakeholders
• All Right stakeholders collect the rich data for Requirement Engineering.
Attending the Logistics
• Logistics means Resources requirement to support the Workshop Process.
Project-Specific Information
• A document that is related to the system you are going to develop is called project-
specific information
Out of Box thinking
• Will help all participants to find the process of creativity rule of Brainstorming.
Facilitators
Facilitators or mostly the management people can be outside of the organization.
Roles of Facilitators
• The person who is responsible for the workshop.
• Establish the professional tone for the workshop.
• Start and stop the meeting on time.
• Establish and enforce the rules for meetings.
• Introduce the agenda.
• Facilitate the decision-making process without participating in context.
• Control descriptive behavior.
Brainstorming and Techniques of Brainstorming
Brainstorming is the process of generating ideas to solve a requirement engineering problem. It
is a group activity in which efforts are made to reach a conclusion.
https://www.c-sharpcorner.com/ebooks/ 35

Rules of Brainstorming
Idea Generation
Do not allow criticism.
• During the idea, the generation does not criticize any participants.
Let your imagination soar.
• Listen to all stakeholder statements in a flow during the idea generation process.
Generate ideas as many as possible.
• During the idea generation, all stakeholders come up with new ideas.
Mutate and combine.
• Change the ideas and combine similar ideas during the idea generation process.
Idea Reduction
Pruning
• To remove the invalid ideas from all ideas that are generated during the idea generation.
Grouping
• Merging similar ideas that are generated during the idea generation.
Feature Definition
• Feature definition to summarize idea into 2 and 3 lines.
Prioritization
• Give the priority to the rest of the ideas.
Hundred Dollar Test
In this test, every stakeholder has 100 dollars, and when the test starts then every stakeholder
gives money against each idea this process repeats every idea in the last step, we make a
prioritization list and decide which idea should be taken first based on the priority list.
Critical Important and Use Test
Critical:
• Means Indispensable Feature.
Important:
• Means important to some features but not all.
Useful:
• Useful means are nice if we take the idea then it’s nice to our system
Story Boarding and his Types and techniques
Introduction
Story Boarding describes the system's functionality by telling the story. In story Boarding, we
make a story about all system features and functionalities in the form of a story.
https://www.c-sharpcorner.com/ebooks/ 36

Types of Storyboarding
Passive Story Boarding
• In a passive story, the Boarding Business Analyst tells a story to the user with photo
sketches and Screen Shorts.
Active Story Boarding
• Inactive story Boarding Bossiness Analyst tells a story with the help of animation
presentation and with videos.
Interact Story Boarding
• In the interact story Boarding, a user interacts with mockup prototypes and asks the user
to get involved in the prototyping process.
Advantages of Storyboarding
Provides an early review of user interfaces.
• Inexpensive.
• Easy and modify.
• Overcome yes but syndrome and Blank Syndrome.
Blank Syndrome
• Users have no idea what they want.
Prioritization techniques
In or Out
• Refer Requirement to Bossiness Objectives (High-Level Objective) based on the size of
iteration (time resource). In this technique, we can go back to the requirements and
repeat the process.
Drawback
• If we have more requirements, then we repeat or out process that’s the drawback.
Three Level Scale
• In three-level scales, we have three categories High, Medium, Low, and three
Dimensions important Urgent and Not so important.
• If the size of chunks is greater than the size of the iteration, we split again the iteration
into categories of high medium low.
Moscow Techniques
Moscow techniques are divided into four parts.
• Must: The Requirements must be satisfied by the system to consider it successful.
• Should: The requirements are important but not mandatory.
• Could: The requirement should be implemented only if the time and resources are
present.
• Want: The requirement will not be implemented.
Drawback.
• Want is unclear and ambiguous.
• No dimensions.
https://www.c-sharpcorner.com/ebooks/ 37

Quality Function Development
Customer: → Relative Benefits
Scale: 1→9
Relative Penalty
Scale: 1→9
Development: → Relative Cost Scale
Scale: 1→9
Relative Risk Scale.
Scale: 1→9
Description of Quality Function Analysis
Relative Benefits
Every new feature would be provided to customers and Bossiness.
Scale: 1→9
1: This means No one finds it to use the full feature of the system.
9: This means No one Extremely values able and useful features for the system.
Relative Penalty
How customers and Bossiness will suffer if the feature is not added.
Scale: 1→9
1: No one will be upset if the feature is not added.
9: Indicate serious downsides.
Relative Cost Scale
Cost of implementation on each feature.
Scale: 1→9
1: Quick and Easy.
9: Time-consuming.
Relative Risk Scale
The probability of not getting the right feature.
Scale: 1→9
1: Program it easily.
9: Serious concerns about feasibility.
Software Requirement Engineering Document
Download the document for practicing and writing the SRE document of the Project.
https://github.com/SardarMudassarAliKhan/Software-Requirement-Engineering-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
https://www.c-sharpcorner.com/ebooks/ 38

• Functional Requirements define the functionalities of the system.
• Reverse engineering is the process in which when we want to update the software
product, we use reverse engineering journey form document to code the product.
• Programming Language used for the development of software products.
• Moscow Techniques tell us which requirement IOS must be in the system and which
requirement it should be in the system.
• Storyboarding is the requirement for elicitation techniques
• Interviews and Questioners are the two requirement elicitation techniques
• Brainstorming is the process of generating ideas to resolve conflicts in the requirement
elicitation.
• Background Reading
The elicitation technique gathers requirements by reading the various document
associated with the organization.
• Business Analyst
• A business analyst is an individual who has the primary responsibility to gather
requirements elicit analyze the document and validate the needs of the stakeholders. BA
acts as the bridge between customers and the developers’ team. BA does the bi-
directional communication to cover up the requirements risk. The business analyst
communicates with the project manager and communicates with the development team
and with the testers and with project sponsor.
• Pre-Condition are those requirements that must be true.
• Post- Conditions are those requirements that must be true after the pre-condition.
https://www.c-sharpcorner.com/ebooks/ 39

7
Requirement Validation
and Verification
Overview
In this chapter Validation and Verification, we will explore
requirement validation and verification in software engineering. It
elucidates the importance of clear, complete, correct, coherent, and
feasible requirements, outlining methods for verification, including
model creation, logical argumentation, inspection, analysis, and
expert review, ensuring adherence to quality criteria.
https://www.c-sharpcorner.com/ebooks/ 40

Introduction
In this chapter, we will study how we can validate and verify the requirements that are gathered
for the software product. In this chapter, we will study the characteristics of requirements and
discuss a different type of requirement test that helps us to verify and validate the requirements.
What is Requirement Validation
Requirement validation is the process of confirming the completeness and correctness of the
requirement. Validation also ensures the requirement.
• Clearly define the business objective.
• Clearly define the idea of the object.
• Clearly define the scope of the project.
• Verify that requirements meet the needs of customers.
• Verify that requirements are clearly understood by the developer
Objective:
The objective of the validation is essential to the identification of the missing requirements and to
ensure that requirements meet the quality criteria. Validation targets the individual requirement.
Characteristics of Requirement
Clear
• The requirement should be clear and crystal and should not be ambiguous.
Complete
• The requirement should be complete means not more and not less.
Correct
• Accurately define the customer external needs
Coherent
• The requirement should be coherent according to all aspects.
Valid
• Validation is essential to the identification of the missing requirements and ensures that
requirements meet the quality criteria
Feasible
• The requirement should be feasible and implementable with known constraints
Modifiable
• Can easily be changed when necessary.
Necessary
• The important requirement should be documented according to customer need
Prioritized
• Prioritized requirements according to rank.
https://www.c-sharpcorner.com/ebooks/ 41

Traceable
• Can be linked with the system requirements and design code and testing.
Verifiable
• Correct implementation of requirements can be determined by testing and analysis.
What is Requirement Verification
Software requirement verification is the process of checking the designed and fully developed
software product according to our requirements that are collected in the first phase of
development. Verification involves various inspection tests and analysis of thoughts and product
life cycle. The requirement must be verified before designing and developing the software
product.
How to verify Software Requirements
We can verify requirements by following ways
Create a Model
• Create the authentic Model and best describe the software system and verify the
required form that model requirement must be verified before designing and developing
the software product.
Verify Requirements form Customers
• Verify requirements from customers and all stakeholders. The requirement must be
verified before designing and developing the software product.
Verify requirement from Document
• Verify requirement from documents that truly represents the software system like
software requirement specification (SRS) and design document.
Logical Argument
• Logical Argument is the process of generating a statement from the existing requirement
Inspection
• Inspection is the most efferent and organized way of verifying requirements. In this
process, two to three team members work to gather for the verification of software
requirements for the software product.
Analysis
• The analysis is the process in which we analyze the requirement after the elicitation
process. In this process we use conduct different tests for checking our requirements is
fully describe the software product.
Expert Review.
• Expert review means verifying requirements from business Analysts, Domain Experts,
and Senior Software developers.
Key Points
• SRE stands for Software requirement Engineering.
• Software Requirement is a Condition and Capability that must be possessed by a system
according to some standards.
https://www.c-sharpcorner.com/ebooks/ 42

• The process to gather the software requirement from customers and analyze those
requirements, and documenting those requirements is called requirement engineering.
• Metaphors help us to define hidden similarities of the system.
• Functional Requirements define the functionalities of the system.
• Reverse engineering is the process in which when we want to update the software
product, we use reverse engineering journey form document to code the product.
• Programming Language used for the development of software products.
• Moscow Techniques tell us which requirement IOS must be in the system and which
requirement it should be in the system.
• Storyboarding is the requirement for elicitation techniques
• Interviews and Questioners are the two requirement elicitation techniques
• Brainstorming is the process of generating ideas to resolve conflicts in the requirement
elicitation.
• Background Reading
The elicitation technique gathers requirements by reading the various document
associated with the organization.
• Business Analyst
• A business analyst is an individual who has the primary responsibility to gather
requirements elicit analyze the document and validate the needs of the stakeholders. BA
acts as the bridge between customers and the developers’ team. BA does the bi-
directional communication to cover up the requirements risk. The business analyst
communicates with the project manager and communicates with the development team
and with the testers and with project sponsor.
• Pre-Condition are those requirements that must be true.
• Post- Conditions are those requirements that must be true after the pre-condition.
• Verification means building the product right.
• Validation means building the right product.
https://www.c-sharpcorner.com/ebooks/ 43

8
Requirement Management
Overview
In this chapter, we delve into managing software requirements,
emphasizing the significance of continuous requirement
management throughout the project. It discusses requirement
characteristics, the importance of setting requirement baselines,
reasons for project failures, and strategies for successful
requirement management, including meticulous planning, effective
leadership, and accurate tracking.
https://www.c-sharpcorner.com/ebooks/ 44

Introduction
In this chapter, we will study how we can manage and the requirements that are gathered for the
software product. In this chapter, we will study the characteristics of requirements management
which is continuous throughout the project. We will study why requirement engineering is
important.
What is Requirement Management
Requirement management is the process of documenting analyzing tracing and reviewing and
then agreeing on the valid requirements and then applying the requirement change process and
communicating to all relevant stakeholders requirement change process in which users can
change the requirement technology can change the requirement environment can change the
requirement (Here we have requirement baseline which has two parts correct baseline and
review baseline) Requirement baseline is the process in which when we do work on iteration
and that step we work on set of approved requirement that makes requirement baseline. The
requirement baseline provides ease in changing the requirement.
Why set a requirement baseline?
Answer: Requirement baseline specifies the set of requirements approved by all the
stakeholders for the specification iteration.
The requirement baseline evaluates the impact of change on the system.
The requirement baseline reflects change throughout the requirement process.
Importance of Requirement Management
The importance of requirement management is to ensure that an organization's document
verifies and validates the requirement and expectations of its customers and all stakeholders.
Requirement management begins with analysis and elicitation of the objectives and constraints
of the organization.
• The requirement management process supports the traceability of the requirements
which is very important to meet the customer expectations.
• The traceability also supports the requirement change process.
• The requirement management process includes planning for requirements, integrating
requirements, and organizing for working with them.
• Requirement management involves communication between the project team and
stakeholders of a software project.
Why Project Fails
If the organization's concerns are not clear about the requirement management process, then
software product/project leads to failing reason of project failures are.
In Complete Planning
A big project requires more efficient planning for making the project successful likewise a small
project also requires planning but if at the start of the project you made a mistake and miss any
prerequisites then your project will require two to three times revision this is the worst part of
development.
https://www.c-sharpcorner.com/ebooks/ 45

Inefficiently define the project scope
In the Requirement Engineering process defining the project, scope is very important because if
you define the scope of the project poorly or incompletely scope your project led to
unsuccessful.
Ineffective leadership
In software development, the if project leader is ineffective and poorly manages the project
improperly defines the iteration of completion of the project is unsuccessful and useless at the
end of the project.
Not Successfully identifying the assumptions
In software development, if you failed to define the assumption about the project then your
project in the end will be useless.
Example:
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Not Tracking the project progress.
In software development, if you failed to track the full progress of the project then your project, in
the end, will be useless.
No Detailed documentation.
In software development, documentation is a very important phase in which we write software
documents like SRS document Design Document in later stages of development we use reverse
engineering techniques then we use these documents for the updating the software product.
No track requirements
Software requirement engineering is a very important phase of the software development
process or simply Software development life cycle (SDLC). This phase is used to translate the
unclear and incomplete idea of the customer into complete precise and formal specification. This
document is very important and acts as a bridge between the Customer, User, and Developers.
Therefore, the importance of software requirement engineering is very important for the
development of effective and efficient software products.
Not Selection of the right technology.
In software development, if you fail in the selection of technology which technology is best for
the development of the project then it may also lead to the project being unsuccessful.
Not Accurate measurement of time and budget.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
https://www.c-sharpcorner.com/ebooks/ 46

Not Detailed project planning.
• A big project requires more efficient planning for making the project successful likewise a
small project also requires planning but if at the start of the project you made a mistake
and miss any prerequisites then your project will require two to three times revision this
is the worst part of development.
• Incomplete Requirements may lead a project to be Unsuccessful.
• Before the Beginning of any project, we must be sure about prerequisites and after
checking that all the permits have been obtained and make sure that all the requirements
are obtained then move to the next step of the software development life cycle (SDLC) if
you forget something in the first stage of software development then your project may
lead to an unsuccessful project.
How we can Manage Software Requirements
We can manage requirements in the following ways.
• By Documenting all the project progress
• By Detailed Documentation.
• Software Requirement Specification (SRS) Documentation.
• By Writing Design Documentation
• By Writing All project reports from the project proposal to the end of the project.
Software Requirements Management Document
Download the document for practicing and writing the Requirement Management of the Project.
https://github.com/SardarMudassarAliKhan/Software-Requirement-Management-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Key Points
• Programming Language used for the development of software products.
• Moscow Techniques tell us which requirement IOS must be in the system and which
requirement it should be in the system.
• Storyboarding is the requirement for elicitation techniques
• Interviews and Questioners are the two requirement elicitation techniques
• Brainstorming is the process of generating ideas to resolve conflicts in the requirement
elicitation.
• Background Reading
The elicitation technique gathers requirements by reading the various document
associated with the organization.
• Business Analyst
• A business analyst is an individual who has the primary responsibility to gather
requirements elicit analyze the document and validate the needs of the stakeholders. BA
acts as the bridge between customers and the developers’ team. BA does the bi-
directional communication to cover up the requirements risk. The business analyst
communicates with the project manager and communicates with the development team
and with the testers and with project sponsor.
• Pre-Condition are those requirements that must be true.
• Post- Conditions are those requirements that must be true after the pre-condition.
• Verification means building the product right.
• Validation means building the right product.
https://www.c-sharpcorner.com/ebooks/ 47

9
Introduction of Software
Process Models
Overview
In this chapter, we will see software process models, defining their
significance in software development. It covers activities like
software specifications, design, implementation, verification,
validation, and evolution. These models ensure efficient
development, quality assurance, adaptability to modern trends, and
overall project success, emphasized through key points and
examples.
https://www.c-sharpcorner.com/ebooks/ 48

Introduction
In this chapter, we will discuss software process models, why software models are important for
the development of software processes, and how they can help the development team as well
as all stakeholders of the software product.
What are Software Process Models?
The software model is the set of related activities that leads to the software products of the
software product. These activities involve the software development process from scratch or
modeling existing systems. Every software model provides the speedy development of any
software product and supports every activity of software development from scratch to the end of
development. Every software model is a simplified representation of the software process. Every
software model represents the process from a different perspective.Every software development
model must include the following activities.
Software specifications
This activity defines the product functionalities of the targeted system and the constraints
involved in software development.
• Functionalities can be functional or non-functional of the targeted system.
• In Functional Requirement we discuss the essential properties of the system without
these properties system can’t be functional
• In non-functional requirements, we discuss the properties of the system which can
support the essential requirements of the system.
Software Design and implementation
This activity involves the implementation of the software product, this is the second step of
software development.
• This step involves the implementation of the essential requirements of the system.
• This step involves the assurance of quality attributes.
Software Verification and Validation
This activity involves the verification of the customer's needs and expectations. This step
involves the validation and verification process of the first two-phase software specification and
software design and implementation likewise we check the system meets the customer
requirement that we gather in the first phase of the requirement elicitation process.
Software Evolution
This activity involves the modification of software to meet the customer and market new trends.
Modification means improving the system to such standards that can support today's
technologies and meets the customer requirement efficiently.
Importance of Software Process Models
Software Process models have great importance in the development of software products.
Every software model controls, manages, guides, and monitors the software development
process. Software process models give a clear way for the development process. We discussed
some important reasons why software process models are important.
https://www.c-sharpcorner.com/ebooks/ 49

• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for the high computer system.
• Guides the software development teams to make new methodology for the development
and construction of software products.
• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Key Points
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Moscow Techniques tell us which requirement IOS must be in the system and which
requirement it should be in the system.
• Storyboarding is the requirement for elicitation techniques
• Interviews and Questioners are the two requirement elicitation techniques
• Brainstorming is the process of generating ideas to resolve conflicts in the requirement
elicitation.
• Background Reading
The elicitation technique gathers requirements by reading the various document
associated with the organization.
• Business Analyst business analyst is an individual who has the primary responsibility to
gather requirements elicit analyze the document and validate the needs of the
stakeholders. BA acts as the bridge between customers and the developers’ team. BA
does the bi-directional communication to cover up the requirements risk. The business
analyst communicates with the project manager and communicates with the
development team and with the testers and with project sponsor.
• Pre-Condition are those requirements that must be true.
• Post- Conditions are those requirements that must be true after the pre-condition.
• Verification means building the product right.
• Validation means building the right product.
https://www.c-sharpcorner.com/ebooks/ 50

10
Software Process Models
Overview
In this chapter, we will see software process models' significance in
software development, exploring the Software Development Life
Cycle (SDLC) and its phases like Project Planning, Requirements
Definition, Design, Development, Testing, and Deployment. Various
models such as Waterfall, Iterative, Spiral, V-Model, Agile, and RAD
are discussed, emphasizing their applications and advantages. The
chapter underscores the importance of efficient planning,
requirement gathering, design, and testing methodologies to ensure
the successful development and deployment of software products,
catering to stakeholders' needs and enhancing product quality.
https://www.c-sharpcorner.com/ebooks/ 51

Introduction
In this chapter, we will discuss software process models, why software models are important for
the development of software processes, and how they can help the development team as well
as all stakeholders of the software product. In the software development life cycle, SDLC
consists of a series of planned activities to develop the software product.
What is SDLC?
The software development life cycle is the process followed within a Software Organization. It is
a detailed process that describes how to develop, maintain and replace the software product.
The following figure describes the graphical representation of a process of SDLC.
https://www.c-sharpcorner.com/ebooks/ 52
R e q u ire m e n t A n a ly sis
S y ste m D e sig n
Im p le m e n ta tio n
T e stin g
D eploym ent
M aintenance
Figure 10.1: Software Development Life Cycle
Step 1: Project Planning
This step is the most important step of the software development life cycle (SDLC). This step is
performed by senior members of the team because a big project requires more efficient planning
for making the project successful likewise small project also requires planning but if at the start
of the project you made a mistake and miss any prerequisites then your project will require two
to three times of revision this is the worst part of development. In this step, we identify quality
assurance procedures and risks associated with the project. The outcome of this step is used in

the feasibility study of the project. Project feasibility defines the various procedures that can be
followed for the successful delivery of a project with minimum risks.
Step 2: Defining Requirements
Defining requirements is the most important part of the software development life cycle. The
process to gather the software requirement from customers and then analyze those
requirements and document them is called requirement engineering or requirement elicitation. If
the feasibility report is positive from all aspects, then we start the requirement elicitation process
in this process we start requirement engineering we use different techniques to get requirements
about the project. We discuss the features and functionalities of the system and identify the user
and stakeholders.
Step 3: Designing and Architecture
The designing and product architecture means clearly defining the structure of modules along
with communication among modules and data flow representation with the external third-party
module. The internal structure of the module should be clearly defined. This step of the software
development life cycle is reviewed by all the stakeholders based on various parameters such as
risk assessment, product robustness, time and budget, etc.
Step 4: Building and Developing the product
After defining the clear and rich requirements the fourth step is building and developing the
software product according to the defined standards. Software organizations start coding and
designing products this step involves the implementation of all the pre-and post-condition of a
project like the development of complete functionalities of the software product according to the
requirement verified by senior members of teams and all the stakeholders of the project.
Step 5: Testing the product.
In this step of the software development life cycle, we define the testing strategies in which we
do the testing of different modules, and we check that either every module is behaving and
functioning according to the standard definition or according to the requirements define in the
first phase of the SDLC process.
Step 6: Deployment
After the complete testing of the product and the product is formally ready for deployment then
some of the time the product is released in the stages according to the deployment plans of the
organization. And some time product deployment is dependent on the feedback of the
customers.
Waterfall Model
The waterfall model is the first model in software development history. It is also referred to as
the (Linear sequential life cycle model) this model is simple to understand and use. In the
waterfall model, each phase is completed before moving to the next phase. The waterfall model
is the first and earliest approach used in SDLC for the development of software products in this
model do not overlap.
https://www.c-sharpcorner.com/ebooks/ 53

Waterfall Model Design
The waterfall approach was the first approach in the software development life cycle and was
widely used in the development of software products and for the success of the project.
Requirement Analysis
System Design
Implementation
Testing
Deployment
Maintenance
The sequential phases of waterfall models are.
Requirement Analysis.
• All the key requirements of the system development and captured in this phase and we
document them in the software requirement specification document.
System Design.
• The requirement specification from the first phase is studied in this phase and these
requirements help us to define the overall system design and architecture of the system.
Implementation.
• After defining the clear and rich requirements the fourth step is building and developing
the software product according to the defined standards. Software organizations start
coding and designing products this step involves the implementation of all the pre-and
post-condition of a project like the development of complete functionalities of the
software product according to the requirement verified by senior members of teams and
all the stakeholders of the project.
Integration and testing
• In this step of the software development life cycle, we define the testing strategies in
which we do the testing of different modules, and we check that either every module is
https://www.c-sharpcorner.com/ebooks/ 54

behaving and functioning according to the standard definition or according to the
requirements define in the first phase of the SDLC process.
Deployment
• After the complete testing of the product and the product is formally ready for
deployment then the of time product is released in the stages according to the
deployment plains of the organization. And some time product deployment is dependent
on the feedback of the customers.
Maintenance
• This activity is involving the modification of software to meet the customer and market
new trends. Modification means that improve the system to such standards that can
support today's technologies and meets the customer requirement efficiently.
Applications
The waterfall model is widely and extensively used in the software industry some given below
point explains the usage of the Waterfall model.
• The requirement is very well clear and fixed
• Product Definition is stable and well defined
• No ambiguity in the requirements
• Due to the rigidity of the model projects are short
Advantages of Waterfall models
• Simple and Easy to understand
• Clearly and defined stages
• Easy to arrange tasks
• Process and results are well documented
• Works well when the project is small
• Easy to manage due to the rigidity of the model
Dis-Advantages of Waterfall models
• The high number of risks and uncertainty
• Poor model for long and ongoing projects
• Not suitable for life-critical systems because of the rigidity
• Difficult to manage projects progress within stages
• Not suitable for the project that they are following an Object-oriented approach.
• Cannot accommodate the requirement change process.
Iterative Model
The iterative model starts the process with a simple implementation of a small set of
requirements and iteratively enhances the evolving versions of the system that is complete and
ready to be deployed. The iterative model does not attempt to start the development after the
complete specification of the system instead development starts with just part of the software
product.
Iterative Model Design
The iterative process starts with a small representation of the software product. In this model,
we start working on a project with a small chunk of requirements. In this model, we repeat
https://www.c-sharpcorner.com/ebooks/ 55

certain steps like design and development testing and implementation in each iteration. Iterative
enhance the evolving versions of the system are complete and ready to be deployed.
The following picture illustrates the Iterative Model
https://www.c-sharpcorner.com/ebooks/ 56
R e q u ire m e n ts
B u
B
B
ild 1
u ild 2
u ild 3
D
D
D
De
De
De
ev
ev
ev
se
se
se
iglo
iglo
iglo
np
np
np
am
am
am
ne
ne
ne
dn
dn
dn
t
t
t
T e s tin g
T e s tin g
T e s tin g
Im
Im
Im
p le m
p le m
p le m
e n
e n
e n
ta tio n
ta tio n
ta tio n
Applications
The iterative model is widely and extensively used in the software industry some given below
point explains the usage of the iterative model.
• The requirement of the complete system is clearly defined.
• Major requirements must be defined however some requirements and functional may
need modification and upgrading with time
• There are some high-level risks, features, and goals involved that may be changed in the
future.
Advantages of Iterative Model
• Some working functionality can be developed quickly at the early stages of the Iterative
project
• Clearly and defined stages
• Easy to arrange tasks
• Progress can be measured
• Results are obtained at the early stages
• Easy to manage due to the rigidity of the model
• Less costly to change the requirements at any stage
• Easier to manage high risks
• Parallel development can be planed.

Dis-Advantages of Iterative Model
• More resources may be required.
• More Management attention is required.
• The cost of change is less but it is not suitable for changing requirements again and
again.
• Not suitable for smaller projects
• Management Complexity is more.
• A highly skilled resource is required.
• Project progress is highly dependent on the risk analysis phase.
Spiral Model
The spiral model combines the idea of iterative development with the controlled and systematic
aspects of the first model waterfall.
Spiral Model Design
The Spiral Model has four phases. The software development process has repeatedly passed
from these phases called iterations. It allows us to release the product in iteration.
First Step: Identification
This phase includes the identification of system requirements by continuously communicating
with customers and developers and Business analysts (BA). This phase begins with the
gathering of business requirements of the system in the baseline of the spiral. In the subsequent
spiral when the product grows up the subsystem requirement and unit requirements gather in
this phase.
Second Step: Design
The design phase begins with the conceptual design in the baseline of the spiral model and
involves the architectural and logical design of the module physical design and final product in
the subsequent spiral.
Third Step: Build
The constructed phase refers to the production of the actual product in the baseline we just
construct the conceptual design of the product from customer feedback. Then the subsequent
spiral of the clarity of requirement and design details a working model of software is called build
with versions number.
Fourth Step: Evaluation of Risks
Risk Analysis involves identifying and estimating and monitoring the technical feasibility and
management risks. At the end of the software development, process testers test the build and
give it to the customer for evaluation and the customer provides feedback.
Applications
Spiral Model is widely used in the software development industry given below points explains
the usage of the spiral model in the industry.
• For medium to high-risk software projects.
• Major changes are expected during the development phase
https://www.c-sharpcorner.com/ebooks/ 57

• Requirements are complex and need evaluation to get more clarity
Advantages of Iterative Model
• Changing requirements at any stage can be accommodated
• The spiral model allows us to extensive use of the prototype.
• Users see the actual outcomes early due to the stage of the spiral
• Development is divided into smaller tasks and risky parts this makes the development
easy and better for risk management
• The requirement can be gathered more accurately
Dis-Advantages of Iterative Model
• Management of all activities of the software product is more complex
• Software development is more complex
• Many stages of the spiral model need more and excessive documentation
• Not Suitable for small and less risky projects.
V-Model
The V model is the SDLC Model where execution of the process happens sequentially. V model
is also known as validation and verification. The V model is the extension of the Waterfall model
based on the associated testing phase and development stages. This means that every phase
in the V model is directly associated with the testing phase this is a highly disciplined phase.
V Model Design
The V-model is the testing phase of the development phase is designed in parallel, so the
validation is one side of the V-Model and Verification is Another side of the V-Model, and the
coding phase joins these two phases.
Acceptance test
Design
Requirement Acceptance
Analysis Testing
System test
Design
System design System Testing
Integration test
Design
Architectural Integration
Design Testing
Unit test Design
Unit Testing
Module Design
Coding
https://www.c-sharpcorner.com/ebooks/ 58

Business Requirement Analysis
This phase includes the identification of system requirements by continuously communicating
with customers and developers and Business Analysts (BA). This phase begins with the
gathering of business requirements of the system this is the most important activity and need to
be managed well most of the customer is not sure about what exactly they need. The system
test plan is based on the system design.
System Design
Once you have clear and crystal requirements then it’s time to design the complete system. The
system design is the understanding of the complete product under development.
Architectural Design
In architectural design, one technical approach is proposed which based on this technical and
financial decisions will be taken. In architectural design, the system design is divided into more
modules taking up different functionality. This is also called high-level design. In this phase, we
study how the communication occurs between the modules and with the other software system
is understood clearly in this stage of the V-Model.
Module design
In this phase, the detailed internal design for all the systems modules is specified referred to as
low-level design. It is very important that the design is compatible with other module designs in
system architecture as well as other external system designs. The unit test is an important part
of the development phase. This helps us to find the maximum error and faults in the early stage
of the development process. These unit tests can be designed based on internal module design.
Coding Phase
The actual coding of a module is designed in the design phase is taken up to the coding phase
the most suitable programming language is decided based on architectural design. The coding
is based on coding standards. The code is going through different code reviews and code
optimization tests so that performance of the code is checked for the final build and external
delivery.
Validation Phase
The different phases of the validation of the V model are explained below.
Module testing:
Unit testing is associated with the testing of modules. In module testing, we will test each
module and ensure that every module and check whether the functionalities work properly in the
way that we want. We created a separate and small testing procedure for every single module
and tried to test each module of the application separately. Testing is done on the module level
by dividing the module into chunks and checking the quality of the module separately. The
following module is being tested under the umbrella of Module testing.
Example:
• Accounts Module
https://www.c-sharpcorner.com/ebooks/ 59

• Manage Account Module
• Manage Contact Module
Integration testing:
Integration testing is associated with Architectural design. After we tested each module
separately then we tried the fundamental principle of integration testing in which we combine
individual units are combined and tested as a group to identify the faults and bugs from the
result of integration testing. We used test drivers and test stubs to identify the faults and bugs
from the group of units and clarify how individual units interact with each other and work as
expected.
System Testing:
System testing is directly associated with the system design phase. After Integration testing then
we tried the fundamental principle of system testing in which we test complete software
systems. The purpose of this testing is to evaluate the compliance of the software product with
the given software requirements.
Acceptance testing:
Acceptance testing is directly associated with the requirement analysis phase. After Integration
testing then we tried the fundamental principle of acceptance testing in which we test the system
for acceptability and test the complete software system the purpose of this testing is to evaluate
the compliance of the software product with the given business requirements and assess that
whether this system or product is acceptable for delivery.
Applications
V model is the same as the waterfall model, both are sequential models and requirements are
very clear before the start of the project. V-Model is widely used in the software development
industry given below points explains the usage of the spiral model in the industry.
• Requirements are well defined and clearly defined in the document.
• Product definition is stable.
• There is no ambiguity in the requirements.
• V model is suitable for short projects.
Advantages of V-Model
• This is a high declined model so stages are completed one at a time.
• V-Model works well in small projects where requirements are well defined.
• Simple to understand and easy to use
• Easy to manage due to the rigidity of the model each phase has a specific deliverable
and review process.
Dis-Advantages of V-Model
• High risks and uncertainty.
• Not a good model for complex and object-oriented projects.
• Poor model for ongoing and long projects.
• No working software is produced until late during the life cycle.
https://www.c-sharpcorner.com/ebooks/ 60

Big-Bang Model
The Big-Bang model is the Software development life cycle model where the development team
does not follow any specific process. The development of the software product just starts when
finance and efforts are available the input and output of the software may not be as per
customer requirements. The Big-Bang model does not follow any specific process/procedure
and very little planning is required for the development process so in this model, very little
planning is required. The big bang model is best for small types of projects.
Big-Bang Model Design and Application
The Big-Bang model is focused on all possible resources in software development and coding
with very little planning or with no planning. The requirement understood and implemented as
they come. Any change may or may not affect the whole product. The big bang model is suitable
for a small project or two developers working together on a small project. This model is useful
for academic projects and practice projects. The big bang model is very best for those projects
where requirements are not understood, and the project's final date is not given.
Advantages of the Big-Bang Model
• The big advantage of the Big-Bang model is it focuses on all possible resources in
software development and coding with very little planning or with no planning.
• A very simple model to understand and use.
• Very few resources are required.
• The big-Bang model provides flexibility to developers.
• This model is good for academic and practice projects.
• Big Bang Model provides flexible management of the software development process.
Dis-Advantages of Big-Bang Model
• Management of all activities of the software product is more complex.
• Software development is more complex.
• Many stages of the spiral model need more and excessive documentation.
• Not Suitable for small and less risky projects
Agile Model
The agile model is the combination of the incremental and iterative model that focuses on
product quality and adaptability and customer satisfaction by rapid delivery of working and fully
functional software products. The agile process breaks the software product into small builds
this build provides in iteration. Each iteration life cycle is two to three weeks, and every iteration
involves the core functionalities of the system and a complete team working on these iterations
in various areas.
• Planning
• Requirement Analysis
• Design
• Coding
• Unit Testing
• Acceptance Testing
https://www.c-sharpcorner.com/ebooks/ 61

Agile Model Design
The agile model believes that every project needs to be handled differently and existing
methods need to be checked to see that best suit software requirements. In agile development,
each task is divided into chunks with a time frame for the successful delivery of a specific
feature. An iterative approach is taken, and a working software build is delivered after each
iteration each build is incremental and the final build holds the features of the whole product
according to the customer requirements.
Agile Manifesto
Individual and Interactions
• In agile development, self-organization and motivations are very important areas of
interactions like co-location and pair programming.
Working Software
• The demos of the working software are the best way of communication in the software
development with stakeholders of the software product instead of just describing the
documentation with all stakeholders.
Customer Collaborations
• In software development, the requirements are very important for the development of the
software product to gather complete, clear, and rich requirements for software to interact
with customers.
Responding to change
• In software development responding to change is a challenge and the agile model is
focused on quick changes in continuous development.
Agile vs traditional development of SDLC
Agile is based on adaptive software development methods and whereas the other model follows
the traditional approach based on the predictive approach.
Predictive approach
In the Predictive approach development of the software product only depends on the
requirements and analysis that’s done at the beginning of the software.
Adaptive Approach
But in the Adaptive Approach to software development, there is no need for detailed planning is
required. But we focus on clarity of the features that we want to develop. There are feature
development planning and product requirement changes dynamically. The product is tested
repeatedly in the iteration so in the end quality product is produced.
Customer Interaction
Interaction in software development is the backbone of the agile methodology open
communication and less documentation is the best and most typical feature of agile
development.
https://www.c-sharpcorner.com/ebooks/ 62

Applications
The agile model is widely used in the software development industry given below points explains
the usage of the spiral model in the industry.
Advantages of Agile Model
• A very realistic approach for software development.
• Promotes teamwork and cross-training.
• Resource requirements are limited.
• The requirement can be gathered more accurately.
• Good software process model for the environment that changes steadily.
• Little or no planning is required.
• Easy to manage.
• Gives flexibility to developers.
Dis-Advantages of Agile Model
• Not suitable for handling complex dependencies.
• More risk of sustainability, maintainability, and extensibility
• Depends heavily on customer interaction.
• Transfer of technology to a new team member or another team may be quite challenging
due to a lack of documentation.
• Very minimum documentation is generated during the development of software.
RAD Model
The RAD (Rapid Application Development) is based on prototyping and iterative development
with no specific planning required. The process of writing the software itself involves planning for
the development of software products. RAD (Rapid Application Development) is focusing
gathering requirements through workshops and focus groups during the early stage of the
testing. Rap uses the iterative approach for software development and reuses the prototype in
later stages of development.
What is RAD (Rapid Application Development)
Rapid Application development is the software development methodology that uses minimal
planning in favor of rapid prototyping a prototyping is the working model of the software in the
rad functionalities of the system is developed in parallel as a prototype and integrated at the end
for the complete product for faster product delivery. RAD uses the incremental and iterative
approach for the development of software products for this purpose we have small teams and
domain experts, and IT experts working to gather on software prototyping for faster and quality
products the most important part of the software is to develop the best and reusable prototype.
RAD Model Design
The Rad model distributes the analysis, Design, Build, and test phase into the short and iterative
development cycle. Like
First Step: Business Modeling
The business modeling for the software product under development is designed in terms of the
flow of information and distribution of information between the different business channels. In
https://www.c-sharpcorner.com/ebooks/ 63

this stage, complete business analysis for vital information for business but this information can
be gotten from the successful flow of the information between different distribution channels.
Second Step: Data Modeling
The information gathered from different distribution channels in the business modeling phase is
analyzed in the data modeling phase in the form of sets. The attributes of all data sets. In this
phase, we defined and identified all the data sets and the relation between these data objects
established and defined in detail in the business model.
Third Step: Process Modeling
The data object defined and identified in the data modeling is converted to establish the
business information flow needed to establish the business objectives as per the business
model designed in the first phase of the RAD Model. The process modeling describes any
change and enhancement to the data sets adding deleting updating and modifying the data
objects described by process modeling.
Fourth Step: Application Generation
The actual product is built-in in the coding phase using the automation phase to convert the
process data into an actual prototype.
Fifth Step: Testing and Turnover
The overall testing time in the RAD model is reduced because RAD us prototypes so the testing
process is continuous, and prototypes are tested in every iteration. But the data flow and the
interface between the components are thoroughly tested with complete test coverage. So, most
of the components of the software product are tested already so the issues and risks are
minimal.
Applications
RAD Model is widely used in the software development industry given below points explains the
usage of the RAD model in the industry.
• Rad Model is used when the project can be modularized and delivered in an incremental
manner
• It should be used with the high availability of the designer for design modeling.
• It should be used when the domain experts are available with maximum business
knowledge.
• Should be used when the requirements change during the project and prototypes are
presented to the customer in every iteration.
Advantages of Rad Model
• Changing requirements at any stage can be accommodated.
• Progress can be measured.
• Reduce development time.
• Encourage customer feedback
• A quick review of the initial software product
Dis-Advantages of Rad Model
• Management of all activities of the software product is more complex
https://www.c-sharpcorner.com/ebooks/ 64

• Highly depend on the effective and efficient team members for describing system
requirements
• Suitable for the system that is components based and scalable
• Suitable for a project that takes short development time
• Management complexity is more
Software Prototype
Software Prototypes is the process of building the working model of software that is under
development. But the prototype may not be holding the exact functionality of the real software
product. Software prototyping is most of the most popular techniques in software development.
It enables the development team to understand the customer requirements. It helps us to get
valuable feedback from customers and helps the development team’s designers of the product
about what is the actual scope of the product and what we are going to develop.
What is Software Prototyping?
Prototyping is the working model of software with limited functionality. The prototype of the
software product always does not hold the exact logic of the software. Software prototyping is
most of the most popular techniques in software development. It enables the development team
to understand the customer requirements. It helps us to get valuable feedback from customers
and helps the development team’s designers of the product about what is the actual scope of
the product and what we are going to develop. It will help us to develop the initial product that is
described in the proposal.
Some of the important steps are given below.
Basic Requirement Identification
This phase includes the identification of system requirements by continuously communicating
with customers and developers and Business Analysts (BA). This phase begins with the
gathering of business requirements of the system this is the most important activity and need to
be managed well most of the customer is not sure about what exactly they need. The system
test plan is based on the system design.
Developing the initial prototype
After defining the basic requirements of the system, design the showcase the requirement into
the initial user interface of the system.
Review the prototype
After defining the initial interface present it to the customer and other all stakeholders and collect
the feedback from the customer then review the prototype and then redesign the prototype and
then use feedback for the product under development.
Revise and enhance the prototype
The feedback of customers and comments are discussed during the Review of the prototype
stage some negotiations happen with the customer on some factors. Time and budget
constraints, feasibility constraints, and technical feasibility constraints of the actual product
implementation. So, the prototype cycle is changed again and again until the customer's
expectation is met.
https://www.c-sharpcorner.com/ebooks/ 65

Software Prototype Types
We discuss the following types of software prototypes.
Through Away/ Rapid Prototyping
Through away prototyping is rapid prototyping or close-ended prototyping. This type of prototype
uses little effort and minimum requirement analysis. Once the actual requirements are
understood then a prototype is discarded, and the actual product is developed based on clear
and understood requirements.
Evolutionary Prototyping
Evolutionary development is called breadboard prototyping which means building the functional
prototype with minimal functionality at the beginning of the software development process. By
using evolutionary prototypes, we use the prototype in later stages, and in this type of prototype
the requirements are well-understood are included in the prototype and other requirements are
added when they are well understood.
Incremental Prototyping
Incremental prototyping refers to incrementally building multiple fully functional prototypes
integrating all the prototypes at the end of the system development.
Extreme Prototyping
The extreme prototype is used when in the website development domain. It consists of three
sequential phases. First, the prototype is made with all existing resources and presented in
HTML pages then data is simulated using prototypes. In the final phase, the services are
implemented with final prototypes.
Applications of prototyping
Prototyping has great importance in software development. It increases the user involvement in
the system, so the quality and user expectations are met very efficiently. Software prototype
provides an initial preview of the system so that is why it is widely used in the modern software
development industry.
Advantages of Software Prototyping
• It increases the user interaction with software development teams before and in the
middle of the system development.
• It helps the user to understand the system well before it is developed the system.
• Reduce development time and cost because the defects can be detected much earlier.
• Encourage customer feedback.
• Missing functionality can be identified early.
• A quick review of the initial software product
• Confuse and hidden functions can be identified.
Dis-Advantages of Software Prototyping
• Risk is insufficient requirement analysis on the dependency of the prototype.
• Users may get confused about the prototype and actual system.
• Developers may use the existing prototype but technically it is not feasible.
https://www.c-sharpcorner.com/ebooks/ 66

Conclusion.
We conclude in this chapter that software process models play a key role in software
development. Software process modes increase the efficiency of a software system and
decrease the development time. Software Process models have great importance in the
development of software products. Every software model controls, manages, guides, and
monitors the software development process. Software process models give a clear way for the
development process. We discussed some important reasons why software process models are
important.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for high computer systems.
• Guides the software development teams to make new methodology for the development
and construction of software products.
• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Key Points
• The software model is the set of related activities that leads to the software products of
the software products.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Prototyping is the working model of the software
• RAD is a Rapid Application Development Software Model
• The software model is the set of related activities that leads to the software products of
the software products.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
https://www.c-sharpcorner.com/ebooks/ 67

• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
https://www.c-sharpcorner.com/ebooks/ 68

11
Importance of Software
Models
Overview
In this chapter, we will see the pivotal role of software process
models in modern software development, emphasizing efficient
planning, requirement management, iterative development, testing
environments, effective communication, and predictive and adaptive
approaches for successful project delivery.
https://www.c-sharpcorner.com/ebooks/ 69

Introduction
In this chapter, we will discuss the importance of software products and why the software
process model is important for the development of software products. How software process
model plays a key role in the software product. How modern software is more efficient using the
process model. We will study all these points in this chapter.
Why the software process Model is important.
Software Process models have great importance in the development of software products.
Every software model controls, manages, guides, and monitors the software development
process. Software process models give a clear way for the development process.
We discuss some important reasons why software process models are
important given below.
• Every Software model provides the software development cycle that helps us to efficient
and effective development.
• By using the Software development process model, we can get the requirements from
the customer very effectively.
• The software process model provides an effective way of requirement management.
• The software Process model defines the product business modeling.
• It provides the testing environment throughout the development cycle.
• It provides the complete details of the project by documenting all the processes during
development.
Like: SRS, Design Document, Feasibility Reports, Testing Reports
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• The software process Model Provides quick and early delivery of software products by
reducing development.
• The software process model provides the Architectural Design and System design of the
software systems.
• In the Software process model, the development of self-organization and motivations are
very important areas of interactions like co-location and pair programming.
• In the Software process model, the development of the demos of the working software is
the best way of communicating in the software development with stakeholders of the
software product instead of just describing the documentation to all stakeholders.
• In software development, the requirements are very important for the development of the
software product to gather complete, clear, and rich requirements for software to interact
with customers.
https://www.c-sharpcorner.com/ebooks/ 70

• In software development responding to change is a challenge and the agile model is
focused on quick changes in continuous development.
Why Process Model important for the Modern Software Development
Here we are discussing some important points in which we identify why the software process
model is important for software development.
Efficient Software Development
Software process models provide an efficient software development environment in which
different team members work on different tasks that are mentioned in software documentation.
Modern software products are faster and more efficient because they were built using certain
engineered techniques these techniques and by using software process models.
• The software process model provides incremental and iterative development for a
software project.
• Software Process
Provides Effective Way of Requirements Elicitation
The software process model provides an effective way of software requirement elicitation and
elicitation techniques. Software requirement elicitation is a very important phase of the software
development process or simply Software development life cycle (SDLC). This phase is used to
translate the unclear and incomplete idea of the customer into complete precise and formal
specification. This document is very must important and acts as a bridge between the Customer,
User, and Developers. Therefore, the importance of software requirement engineering is very
important for the development of effective and efficient software products.
• Software requirement elicitation is the basis of every software product.
• Software requirement elicitation identifies the Functional and Non-Functional
Requirements of the system.
• Software requirement elicitation identifies the business requirement of the system.
Provides Effective Way of Requirements Management
The software process model provides an effective way of requirement management.
Requirement management is the process of documenting analyzing tracing and reviewing and
then agreeing on the valid requirements and then applying the requirement change process and
communicating to all relevant stakeholders requirement change process in which users can
change the requirement technology can change the requirement environment can change the
requirement (Here we have requirement baseline which has two parts correct baseline and
review baseline) Requirement baseline is the process in which when we do work on iteration
and that step we work on set of approved requirement that makes requirement baseline. The
requirement baseline provides ease in changing the requirement.
Why set a requirement baseline?
Answer: Requirement baseline specifies the set of requirements approved by all the
stakeholders for the specification iteration. The requirement baseline evaluates the impact of
change on the system. The requirement baseline reflects change throughout the requirement
process. The importance of requirement management is to ensure that an organization's
document verifies and validates the requirement and expectations of its customers and all
stakeholders. Requirement management begins with analysis and elicitation of the objectives
and constraints of the organization.
https://www.c-sharpcorner.com/ebooks/ 71

• The requirement management process supports the traceability of the requirements
which is very important to meet the customer expectations.
• The traceability also supports the requirement change process.
• The requirement management process includes planning for requirements, integrating
requirements, and organizing for working with them.
• Requirement management involves communication between the project team and
stakeholders of a software project.
Provides Incremental and Iterative Development Environment
Software process models provide the iterative and Incremental development environment In
which we divide the whole project into modules and design and development the whole project
concerning customer requirements and this process increases the efficiency of the project and
reduces the workload from development teams.
Provides Testing Environment
The software process model provides the testing environment throughout the project life cycle.
Some of the testing techniques we do in the development period are given below.
Module testing:
Unit testing is associated with the testing of modules. In module testing, we will test each
module and ensure that every module and check whether the functionalities work properly in the
way that we want. We created a separate and small testing procedure for every single module
and tried to test each module of the application separately. Testing is done on the module level
by dividing the module into chunks and checking the quality of the module separately. The
following module is being tested under the umbrella of Module testing.
Example:
• Accounts Module
• Manage Account Module
• Manage Contact Module
• Add to Cart Module
• Online Billing Module
Integration testing:
Integration testing is associated with Architectural design. After we tested each module
separately then we tried the fundamental principle of integration testing in which we combine
individual units are combined and tested as a group to identify the faults and bugs because of
integration testing. We used test drivers and test stubs to identify the faults and bugs from the
group of units and clarify how individual units interact with each other and work as expected.
System Testing:
System testing is directly associated with the system design phase. After Integration testing then
we tried the fundamental principle of system testing in which we test complete software
systems. The purpose of this testing is to evaluate the compliance of the software product with
the given software requirements.
https://www.c-sharpcorner.com/ebooks/ 72

Acceptance testing:
Acceptance testing is directly associated with the requirement analysis phase. After Integration
testing then we tried the fundamental principle of acceptance testing in which we test the system
for acceptability and test the complete software system the purpose of this testing is to evaluate
the compliance of the software product with the given business requirements and assess that
whether this system or product is acceptable for delivery.
Provides Effective Way of Communication
In Software development, communication is very important for efficient software development.
The software process model provides an effective and efficient way of the communication
channel between the customer and the development team Interaction in software development
is the backbone of the agile methodology open communication and less documentation is the
best and typical feature of agile development.
Customer Collaborations
In software development, the requirements are very important for the development of the
software product to gather complete, clear, and rich requirements for software to interact with
customers.
Quality Product
Modern software products are quality products because they were built using certain formal
techniques during the development phase production house follows the software process
models and test each step again and again to improve the quality of the product.
Effective Planning
Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to complete such
types of software systems.
Reduce Workload
The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers and if
the software product failed to satisfy the needs of customers, then this type of software
development is worse because this process had not used the software process models and
leads to business failure.
Provide Effective Logic
Software process models create new logic for problem-solving based on open-ended
programming environments for the high computer system. Guides the software development
teams to make new methodology for the development and construction of software products.
Flexible Supportive Development Environment
Software process models provide a flexible and supportive development environment. Using
Software process models every organization can run more than one task at a time.
https://www.c-sharpcorner.com/ebooks/ 73

Predictive approach
In the Predictive approach development of the software product only depends on the
requirements and analysis that’s done at the beginning of the software.
Adaptive Approach
But in the Adaptive Approach to software development, there is no need for detailed planning is
required. But we focus on clarity of the features that we want to develop. There are feature
development planning and product requirement changes dynamically. The product is tested
repeatedly in the iteration so in the end quality product is produced.
Customer Interaction
Interaction in software development is the backbone of the software model’s methodology. Open
communication is the best and typical feature of the software process model in software
development.
How Process Models play a key role in Software Development
The software process model plays a key role in software development some of the key roles are
given below.
Complete Planning
Software process models provide the complete planning for the software project. A big project
requires more efficient planning for making the project successful likewise small projects also
require planning but if at the start of the project you made a mistake and miss any prerequisites
then your project will require two to three times of revisions the worst part of development.
Define complete the project scope
The software process model defines the complete project scope. In the Requirement
Engineering process defining the project, scope is very important because if you define the
scope of the project poorly or incompletely scope your project led to unsuccessful.
Effective Team leadership
The software process model defines the different steps of the software development process in
each step different teams work to gather for the successful delivery of the project. In software
development, the if project leader is ineffective and poorly manages the project improperly
defines the iteration of completion of the project is unsuccessful and useless at the end of the
project.
Successfully identify the assumptions
In software development, if you failed to define the assumption about the project then your
project in the end will be useless.
Example:
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Tracking the project progress.
Software process models provide the complete project process trail. In software development, if
you failed to track the full progress of the project then your project, in the end, will be useless.
https://www.c-sharpcorner.com/ebooks/ 74

Detailed documentation.
The software process model provides the complete documentation of the project from start to
end. In software development, documentation is a very important phase in which we write
software documents like SRS document Design Document in later stages of development we
use reverse engineering techniques then we use these documents for the updating the software
product.
Track requirements
In every software project model Software requirement engineering is the very important phase of
the software development process or simply Software development life cycle (SDLC). This
phase is used to translate the unclear and incomplete idea of the customer into complete
precise and formal specification. This document is very must important and acts as a bridge
between the Customer, User, and Developers. Therefore, the importance of software
requirement engineering is very important for the development of effective and efficient software
products.
Selection of the right technology.
The software process model at the start of the project guides us that which technology is best
for our project. In software development, if you fail in the selection of technology which
technology is best for the development of the project then it may also lead to the project being
unsuccessful.
Accurate measurement of time and budget.
The software project model provides the exact time frame and information about finance
required for the development.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
Conclusion
We conclude in this chapter that software process models play a key role in software
development. Software process modes increase the efficiency of a software system and
decrease the development time. Software Process models have great importance in the
development of software products. Every software model controls, manages, guides, and
monitors the software development process. Software process models give a clear way for the
development process. We discussed some important reasons why software process models are
important.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
https://www.c-sharpcorner.com/ebooks/ 75

and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for the high computer system.
• Guides the software development teams to make new methodology for the development
and construction of software products.
• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Key Points
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Prototyping is the working model of the software
• RAD is a Rapid Application Development Software Model
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
https://www.c-sharpcorner.com/ebooks/ 76

12
Selection of Process Models
Overview
In this chapter, we will explore the vital role of software process models
in development, detailing their importance in planning, scope definition,
leadership, assumption identification, progress tracking,
documentation, technology selection, budgeting, and programming
language choice. The chapter elucidates why and when software
models are essential, how to select the right one, and the optimization
possibilities. Key points highlight the impact of software models on
product efficiency, quality, and development methodology.
https://www.c-sharpcorner.com/ebooks/ 77

Introduction
In this chapter, we will discuss a selection of process models and the importance of software
process models why software models are important for the development of software processes,
and how they can help the development team as well all stakeholders of the software product. In
the software development life cycle, SDLC consists of a series of planned activities to develop
the software product.
Why we use software Model.
We use the software process model because Models give us a way of development to define
each activity of software development.
Complete Planning
Software process models provide the complete planning for the software project. A big project
requires more efficient planning for making the project successful likewise a small project also
requires planning but if at the start of the project you made a mistake and miss any prerequisites
then your project will require two to three times revision this is the worst part of development.
Define complete the project scope
The software process model defines the complete project scope. In the Requirement
Engineering process defining the project, scope is very important because if you define the
scope of the project poorly or incompletely scope your project led to unsuccessful.
Effective Team leadership
The software process model defines the different steps of the software development process in
each step different teams work to gather for the successful delivery of the project. In software
development, the if project leader is ineffective and poorly manages the project improperly
defines the iteration of completion of the project is unsuccessful and useless at the end of the
project.
Successfully identify the assumptions
In software development, if you failed to define the assumption about the project then your
project in the end will be useless.
Example:
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Tracking the project progress.
Software process models provide the complete project process trail. In software development, if
you failed to track the full progress of the project then your project, in the end, will be useless.
Detailed documentation.
The software process model provides the complete documentation of the project from start to
end. In software development, documentation is a very important phase in which we write
software documents like SRS document Design Document in later stages of development we
use reverse engineering techniques then we use these documents for the updating the software
product.
https://www.c-sharpcorner.com/ebooks/ 78

Track requirements
In every software project model Software requirement engineering is the very important phase of
the software development process or simply Software development life cycle (SDLC). This
phase is used to translate the unclear and incomplete idea of the customer into complete
precise and formal specification. This document is very must important and acts as a bridge
between the Customer, User, and Developers. Therefore, the importance of software
requirement engineering is very important for the development of effective and efficient software
products.
Selection of the right technology.
The software process model at the start of the project guides us that which technology is best
for our project. In software development, if you fail in the selection of technology which
technology is best for the development of the project then it may also lead to the project being
unsuccessful.
Accurate measurement of time and budget.
The software project model provides the exact time frame and information about finance
required for the development.
• If the time exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
• If the budget exceeds the completion of the project, then your project and development
process lead to an unsuccessful project.
When to use the Software Model
In software engineering as well as in software requirement engineering software process model
clearly define similarities of the system and defines the clear picture of the software system from
idea to the requirement of the system software development is the same as developing the
house in which we first define requirement then we arrange the finance for that then we go to
another step like construction same in software system we need at first stage idea then we
gather requirement for that idea to become a real software system for this process we use some
techniques and follow some procedure for the requirement engineering process.
But the question is when to use the software process model.
• When we cannot estimate the correct budget for the targeted system.
• When we cannot estimate the exact time and budget of the system.
• When the system is big and can’t be manageable without proper management.
• When we cannot select the right technology for the system at the early stages of
development.
• When we cannot define the exact scope of the project.
• When we cannot the requirement engineering process of the system.
• When we cannot manage the complete requirement track of the system requirement.
How to use Software Model
Step 1: Project Planning
This step is the most important step of the software development life cycle (SDLC). This step is
performed by senior members of the team because a big project requires more efficient planning
for making the project successful likewise small projects also require planning but if at the start
of the project you made a mistake and miss any prerequisites then your project will require two
https://www.c-sharpcorner.com/ebooks/ 79

to three times of revision this is the worst part of development. In this step, we identify quality
assurance procedures and risks associated with the project. The outcome of this step is used in
the feasibility study of the project. Project feasibility defines the various procedures that can be
followed for the successful delivery of a project with minimum risks.
Step 2: Defining Requirements
Defining requirements is the most important part of the software development life cycle. The
process to gather the software requirement from customers and then analyze those
requirements and document them is called requirement engineering or requirement elicitation. If
the feasibility report is positive from all aspects, then we start the requirement elicitation process
in this process we start requirement engineering we use different techniques to get requirements
about the project. We discuss the features and functionalities of the system and identify the user
and stakeholders.
Step 3: Designing and Architecture
The designing and product architecture means clearly defining the structure of modules along
with communication among modules and data flow representation with the external third-party
module. The internal structure of the module should be clearly defined. This step of the software
development life cycle is reviewed by all the stakeholders based on various parameters such as
risk assessment, product robustness, time and budget, etc.
Step 4: Building and Developing the product
After defining the clear and rich requirements the fourth step is building and developing the
software product according to the defined standards. Software organizations start coding and
designing products this step involves the implementation of all the pre- and post-condition of a
project like the development of complete functionalities of the software product according to the
requirement verified by senior members of teams and all the stakeholders of the project.
Step 5: Testing the product.
In this step of the software development life cycle, we define the testing strategies in which we
do the testing of different modules, and we check that either every module is behaving and
functioning according to the standard definition or according to the requirements define in the
first phase of the SDLC process.
Step 6: Deployment
After the complete testing of the product and the product is formally ready for deployment then
some of the time the product is released in the stages according to the deployment plans of the
organization. And some time product deployment is dependent on the feedback of the
customers.
How to select the Software Model for the Software project.
Every Software model provides the software development cycle that helps us to efficient and
effective development. By using the Software development process model, we can get the
requirements to form the customer very effectively. The software process model provides an
effective way of requirement management. The software Process model defines the product
business modeling. It provides the testing environment throughout the development cycle. It
provides the complete details of the project by documenting all the processes during
https://www.c-sharpcorner.com/ebooks/ 80

development. Selecting the software product is a challenging task in the software development
process. Select the process model according to the nature of the software product given below.
We will discuss how we can select the right software process model in the right way.
But the question is when to use the software process model. The answer to this question is
given below.
STEP 1: Learn about SDLC Models
The software development life cycle is the process followed within a Software Organization. It is
a detailed process that describes how to develop, maintain and replace the software product.
Before Using the SDLC Process you should have a clear understanding of the SDLC Model and
experience in how to use the SDLC Modes in software development.
STEP 2: Assess the needs of Stakeholders
Defining requirements is the most important part of the software development life cycle. The
process to gather the software requirement from customers and then analyze those
requirements and document them is called requirement engineering or requirement elicitation. If
the feasibility report is positive from all aspects, then we start the requirement elicitation process
in this process we start requirement engineering we use different techniques to get requirements
about the project. We discuss the features and functionalities of the system and identify the user
and stakeholders. We must study the business domain, stakeholders' concerns, and
requirements business priorities, our technical capability and ability, and technology constraints
to be able to choose the right SDLC against their selection criteria.
STEP 3: Define the criteria
Some of the selection criteria or arguments that you may use to select an SDLC.
• Is the SDLC suitable for the size of our team and their skills?
• Is the SDLC suitable for the selected technology we are using and implementing a
solution?
• Is the SDLC suitable for clients' and stakeholders' concerns and priorities?
• Is the SDLC suitable for the geographical situation (Distributed Team)?
• Is the SDLC suitable for the size and complexity of our software?
• Is the SDLC suitable for the type of projects we do?
• Is the SDLC suitable for the software engineering capability?
• Is the SDLC suitable for the project risk and quality insurance?
STEP 4: Decide
When you define the criteria and the arguments you need to discuss with the team you will need
to have a decision matrix and give each criterion a defined weight and score to each option.
After analyzing the results, you should document this decision in the project artifacts and be
aware of it with related stakeholders.
STEP 5: Optimize
You can always optimize the SDLC during the project execution. You may notice upcoming
changes do not fit with the selected SDLC, it is okay to align and cope with the changes. You
can even make your own SDLC Models which optimize your organization to the type of project
you are involved in.
https://www.c-sharpcorner.com/ebooks/ 81

Conclusion
We conclude in this chapter that software process models play a key role in software
development. Software process modes increase the efficiency of a software system and
decrease the development time. Software Process models have great importance in the
development of software products. Every software model controls, manages, guides, and
monitors the software development process. Software process models give a clear way for the
development process. We discussed some important reasons why software process models are
important.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for the high computer system.
• Guides the software development teams to make new methodology for the development
and construction of software products.
• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Key Points
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Prototyping is the working model of the software
• RAD is a Rapid Application Development Software Model
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
https://www.c-sharpcorner.com/ebooks/ 82

13
Essential and Accidental
Requirements
Overview
In this chapter, we will explore software process models, highlighting
their significance in guiding software development. It categorizes
requirements into essential and accidental, emphasizing their pivotal
roles. The chapter concludes with key insights on modern software
development practices and offers resources for practicing
requirements engineering.
https://www.c-sharpcorner.com/ebooks/ 83

Introduction
In this chapter, we will discuss a selection of process models and the importance of software
process models why software models are important for the development of software processes,
and how they can help the development team as well all stakeholders of the software product. In
the software development life cycle, SDLC is consists of a series of planned activities to develop
the software product.
What are Essential Requirements
Essentials Requirements are those requirements that are a critical part of the system. Without
these requirements we even can’t combine the overall functionality of the system.
Example:
• Auth functionality of the system.
• Account management in a multi-client system.
What are Accidental Requirements
Accentual Requirements are those requirements that can be changed during the development
process OR the Design Phase OR Requirement analysis phase simply at any stage of software
development.
Example:
• The government laws changed for the payments process.
Conclusion
We conclude that essential and accentual play an important role in software development.
Essential Requirements are the lifeline of a software product without these requirements we
can’t build a functional system at any cost. Accentual Requirements are those requirements that
can be changed during the development process OR the Design Phase OR Requirement
analysis phase simply at any stage of software development.
Some of the important points about software development are given below.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for the high computer system.
• Guides the software development teams to make new methodology for the development
and construction of software products.
https://www.c-sharpcorner.com/ebooks/ 84

• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Essential and Accidental Requirements
Download the document for practicing and writing the Essential and Accidental Requirements of
the Project.
https://github.com/SardarMudassarAliKhan/Essential-and-Accidental-Requirements-.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Key Points
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Prototyping is the working model of the software
• RAD is a Rapid Application Development Software Model
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Essential Requirements are the lifeline of a software product without these requirements
we cannot build a functional system at anycast.
• Accentual Requirements are those requirements that can be changed during the
development process OR the Design Phase OR Requirement analysis phase simply at
any stage of software development.
https://www.c-sharpcorner.com/ebooks/ 85

14
System Functional
Requirements
Overview
In this chapter, we will explore system functional requirements,
distinguishing between functional and non-functional requirements.
It explores gathering methods such as studying existing systems,
meetings, and analysing organizational documents, highlighting their
importance in software development. Key points and resources for
practicing functional requirements are also provided.
https://www.c-sharpcorner.com/ebooks/ 86

Introduction
In this chapter, we will study functional and non-functional requirements of the system.
Functional Requirements define the behavior of the system means what the system should do
Like, and Code Compiler should complete the Machine Code.
What are Functional Requirements?
Functional Requirements of the system are a very critical part of the system in which we defined
the overall functionality of the system. Functional Requirements define the behavior of the
system means what the system should do Like, and Code Compiler should complete the
Machine Code.
Some of the Functional Requirement’s examples are listed below.
• Business Rules.
• Transaction corrections, adjustments, and cancellations.
• Admin Functionality of the system.
• Authentication rule.
• Payment Functionality of the system.
• Log in and Log out Functionality.
How are Functional Requirements Gathered?
Functional Requirements of any system can be gathered in the following ways.
Study the existing system.
• Functional Requirements of the system can be extracted by studying the existing
system. Study the existing module and test every functionality of the system for
extracting the functional Requirements of the system.
Meetings
We can gather the functional requirements of the system by arranging back-to-back meetings
with clients and discussing every functionality of the system.
• Study the Organizational Documents
• Study the User Manual of the Existing system.
Conclusion.
After studying this chapter, we concluded that Functional Requirements and gathering functional
requirements is a very important part of software development. Functional Requirements define
the behavior of the system means what the system should do Like, and Code Compiler should
complete the Machine Code.
System Functional Requirements
Download the document for practicing and writing the Essential and Accidental Requirements of
the Project.
https://github.com/SardarMudassarAliKhan/Essential-and-Accidental-Requirements-.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
https://www.c-sharpcorner.com/ebooks/ 87

Key Points
Study the existing system.
• Functional Requirements of the system can be extracted by studying the existing
system. Study the existing module and test every functionality of the system for
extracting the functional Requirements of the system.
Meetings
We can gather the functional requirements of the system by arranging back-to-back meetings
with clients and discussing every functionality of the system.
• Study the Organizational Documents
• Study the User Manual of the Existing system.
https://www.c-sharpcorner.com/ebooks/ 88

15
System Non-Functional
Requirements
Overview
In this chapter, we will explore significance of Non-Functional
Requirements (NFRs) in software systems, covering aspects like
availability, interoperability, performance, reliability, usability,
maintainability, portability, scalability, and reusability, crucial for
project success and user satisfaction. Download and submit your
NFR document for expert feedback.
https://www.c-sharpcorner.com/ebooks/ 89

Introduction
In this chapter, we will study how and why the Non-functional requirements of the system are
important for the development of any software system. We will study how Non-Functional
requirements support the overall functional requirements of the system.
What is a Non-Functional Requirement?
Nonfunctional Requirements define how the system works. Non-Functional requirements
describe the overall behavior of the system like robustness scalability and maintainability of the
system.
A simple definition of a Non-functional requirement is any requirement that specifies the overall
behavior of the system is called a non-functional requirement.
Non-functional requirements are significant because they have the power to make or break the
success of a software system or a product.
Even if a system satisfies all expected functional requirements, users will not hesitate to outright
reject it if it fails to produce the desired quality results.
Many functional needs that are extremely important and need to be expressed in the proper
amount of detail in the requirements papers are derived from non-functional requirements.
Additionally, they play a crucial role in several important architectural decisions and ensure that
important design considerations are made early on rather than when costs and the risk of
modification are higher.
Some of the Non-Functional Requirements are
• Performance
• Scalability
• Capacity
• Availability
• Reliability
• Recoverability
• Maintainability
• Serviceability
• Security
• Regulatory
• Data Integrity
• Usability
• Interoperability.
Availability
The degree of a solution's operability and accessibility at a given time is referred to as
availability. It is a time during which the system is completely operational, i.e., accessible for
usage, and it is occasionally included as a service level agreement due to the importance of the
system to the company.
Aspects of availability that need to be considered during elicitation include—but are not limited
to periods during which availability is essential to achieve business objectives, the effects of a
system's downtime, scheduled maintenance windows, and notifications during a system outage.
https://www.c-sharpcorner.com/ebooks/ 90

Interoperability/Compatibility
The level of interoperability indicates how well the solution works with other parts. It is a gauge
of how well the system works with other software programmers and how simple it is to interact
with other hardware.
Performance
Performance is the degree to which a solution or a part of it carries out its functions while using
the fewest resources possible. Due to its significant design consequences and influence on
hardware device selection, it is a very significant quality attribute.
Reliability
A solution or one of its components must be reliable if it is to carry out its intended functions
under predetermined circumstances for a predetermined amount of time.
Reliability may be defined in terms of the average number of cycles a system runs before failing,
the percentage of successfully performed operations over time, the maximum allowable failure
probability, or the total number of failures over time.
During elicitation, reliability-related topics will be covered, including but not limited to evaluation
of the system to be regarded as reliable, reliability categorization that distinguishes between
occasional failures and regular failures, and the effect of failure on business activities.
Usability
Usability refers to how easily a user can pick up utilizing the solution and how easily he or she
can use the system. Usability encompasses a variety of factors in addition to ease of learning
and usage, such as memory ease, error avoidance & handling, and accessibility, among others.
The number of human-system touchpoints necessary to complete a task, the average time
required to complete a task, the average number of errors made during task completion, the
average number of attempts before a task is completed, and other factors related to usability will
all be discussed during the elicitation process.
Maintainability/Modifiability
The term "maintenance-friendliness" describes how easily a solution or a part of it may be
mended, improved to suit business needs or boost productivity, or adjusted to a changing
environment.
It represents how simple it is to comprehend, modify, and extend the software architecture and
code. Maintainability is crucial for systems that must be routinely modified or improved. The
percentage of patches that are made right the first time, the percentage of changes that are
deployed correctly the first time, and the typical amount of time needed to repair a problem
correctly are among the maintainability aspects to be reviewed during elicitation.
Portability
The capacity to move a system or one of its components from one operating environment to
another is known as portability. Its significance has grown over time as a result of the need for
apps to function across several environments, including Windows, Mac, and Linux, as well as
mobile operating systems like Android and iOS.
During elicitation, portability issues will be raised concerning, but not limited to, various platforms
on which the system must run, system components, and/or data pieces that must be explicitly
developed for greater portability.
https://www.c-sharpcorner.com/ebooks/ 91

Scalability
Scalability is a term used to describe how well a solution can change over time to accommodate
growing workloads. The user base, transactions, data, network traffic, or other reasons may
have increased the workload.
The system should be able to scale up, which may entail adding more servers, faster
processors, more disc space, or more network capacity to the hardware or utilizing software-
specific techniques like data compression, code and performance optimization, and other similar
methods.
Reusability
The ability of software or a software component to be reused in various applications is referred
to as reusability. Which system elements/components should be developed in a way that
enables their reuse across different applications must be defined?
Aspects of reuse that will be discussed during elicitation include but are not limited to
functionality or artifacts from other applications that can be used across applications that are
being built, as well as functionality or artifacts from the application that is being built that can be
used across other applications, either current or future.
Importance Non-Functional Requirements
Non-functional requirements are significant because they have the power to make or break the
success of a software system or a product. Even when a system satisfies all expected functional
criteria but fails to produce the desired quality results, users will not hesitate to outright reject it.
Conclusion
Users frequently have expectations for how well a software system should function in terms of
availability, usability, speed of functional execution, the likelihood of failure, security against
unauthorized access, and effectiveness in handling unforeseen circumstances when they do
arise.
Software Non-Functional Requirements
Download the document for practicing and writing the Software Non-Functional Requirement of
the Project.
https://github.com/SardarMudassarAliKhan/Software-System-Non-Functional-Requirements-
Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
https://www.c-sharpcorner.com/ebooks/ 92

16
Introduction of System
Overview
In this chapter, we will explore the creation of Online LawFirm, a
cloud-based Android app offering real-time legal assistance. It
covers project objectives, motivations, feasibility, technical aspects,
financial considerations, and operational aspects essential for
success. The chapter provides a comprehensive overview of the
development process, emphasizing key decisions and feasibility
assessments.
https://www.c-sharpcorner.com/ebooks/ 93

Introduction
Online LawFirm is a Real-Time Cloud-Based android application that will assist society. We aim
to help people solve their problems and guide them by providing the best possible solution.
Another goal of the application is to bring all the interested parties on a single platform.
Notification-based alerts to notify all the parties. Our system will help lawyers and Law Experts
to find new cases. The system will have a communication system through which users can
communicate with each other. Our system will have a rating system through which the client will
rate the users.
Objective
The objective of this project is to develop a Multi-Client Cloud-based law Firm Android
application to provide law assistance services. Different Problems occur in daily life, which
require expert advice. Our system will have experts that will advise the people that are facing
the problems. If a problem exceeds to such an extent that assistance is required, then the case
will be forwarded to a law expert or lawyer. The different lawyers will be a part of the system.
Motivation
The Problem has become an integral part of our society. Society has been struck with many
Problems like Domestic Problems, Relationship issues, Property Issues, Robbery Cases,
Murder Cases, Terrorism, Finical Issues, Human rights violation cases, Fraud Cases, Cyber
Crime Problems, and Other daily life Issues. We aim to provide a platform that can efficiently
manage work against such Problems. Our system will help people to find a lawyer on a single
platform.
Feasibility Report
An overall study of the project has been carried out and the findings are listed in this report. The
feasibility of “ONLINELAWFIRM” can be ascertained from the following assessments.
• Technical feasibility
• Financial feasibility
• Resource’s feasibility
• Schedule feasibility
• Operational feasibility
Technical Feasibility:
The system is technically feasible, and it successfully satisfies the user's basic needs. The
system will be using different technologies for users. Following technologies will be used
in the development of the system.
• Java
• XML
• Firebase
• Android Studio
• Google Maps
• Google Services
• Marshmallow 6.0.1
• Android APIs
https://www.c-sharpcorner.com/ebooks/ 94

Financials Feasibility:
Feasibility of financial aspects e.g., pricing and availability of resources financing of tools, and
other resources that are required for the development of the project. Provide tabulated
information in the given format as shown in table 1.1 (Financial Feasibility).
Table 1.1: Financial Feasibility
Resource Name Price Source Sponsor
[Hardware/software] [Monitory [Website/Dealer Address etc.]
price]
Laptop Acer 45000 Hp, Acer Self
Hp 50000
Android Studio Open source https://developer.android.com/studio Self
Mobile 18000 Samsung Self
GPS Free https://google.gps.com/Location Self
Firebase 2500/10GB https://console.firebase.google.com/ Self
Resource Feasibility:
Software
• Android Studio
• Google Map (API)
• Firebase
• GPS
Hardware
• Laptop
• Mobile
Development Team
• 3 Member
Duration
• 10 Months
Schedule Feasibility
A giant chart that shows all the sequence of activities concerning time and duration. Schedule
Feasibility includes the sequence of iteration and details of alliteration and their sub-tasks and
duration of subtasks. Details of Milestone and detail of Final iteration in which complete system
will have given to stakeholder as a shown in Figure 1.1 (Schedule Feasibility).
https://www.c-sharpcorner.com/ebooks/ 95

Figure 1.1: Schedule Feasibility
The tool Used for making the project plan is Microsoft Project
Link: https://www.microsoft.com/en-us/microsoft-365/project/project-management-software
Operational Feasibility
The operational Feasibility of the project is based on real-world implementation and will be
deployed to the online community.
• The lawyer who handles Law Cases can use this project ‘OnlineLawFirm’
• Lawyers can also keep a record of the Cases, which are heard by the Court
• The product will be deployed on the Google Play store
Assumptions
• The project will work on Android Based Mobile Technology
• The project will work in presence of Wi-Fi, 3G, or 4G technology.
Conclusion
Some of the important points about software development are given below.
• Modern software products are faster and more efficient because they were built using
certain engineered techniques these techniques are software process models.
• Modern software products are quality products because they were built using certain
formal techniques during the development phase production house follows the software
process models and test each step again and again to improve the quality of the product.
• Life Critical systems need more effective and efficient planning to complete the software
product. In this situation, software process models give us the way of planning to
complete such types of software systems.
• The modern software product is used to reduce the workload of a company and some
origination needs software systems because they want the exact statistics of customers
https://www.c-sharpcorner.com/ebooks/ 96

and if the software product failed to satisfy the needs of customers, then this type of
software development is worse because this process had not used the software process
models and leads to business failure.
• Software process models create the new logic for problem-solving based on open-ended
programming environments for the high computer system.
• Guides the software development teams to make new methodology for the development
and construction of software products.
• Software process models provide a flexible and supportive development environment.
• Using Software process models every organization can run more than one task at a time.
Project Proposal Document
Download the document for practicing and writing the Software Project Proposal document of
the Project.
https://github.com/SardarMudassarAliKhan/Project-Proposal-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Key Points
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Programming Language used for the development of software products.
• Prototyping is the working model of the software
• RAD is a Rapid Application Development Software Model
• The software model is the set of related activities that leads to the software products of
the software product.
• Software Specification defines the functionalities of the targeted system.
• Software Design and Implementation this activity involves the implementation of the
software product this is the second step of software development.
• Essential Requirements are the lifeline of a software product without these requirements
we can’t build a functional system at anycast.
• Accentual Requirements are those requirements that can be changed during the
development process OR the Design Phase OR Requirement analysis phase simply at
any stage of software development.
https://www.c-sharpcorner.com/ebooks/ 97

17
Requirement Analysis
Overview
In this chapter, we will explore the requirements analysis phase for
OnlineLawFirm, emphasizing product scope, functionalities, and
specific needs. It defines user classes, interfaces, operating
environment, constraints, assumptions, and dependencies. Detailed
descriptions of functional and non-functional requirements ensure
clarity and precision in system development for optimal performance
and user satisfaction.
https://www.c-sharpcorner.com/ebooks/ 98

Introduction:
This chapter includes and focuses on a brief introduction of the requirements analysis phase
and focuses on the product scope and functionalities of the system. This chapter covers the
functional and non-functional requirements of the system and specific requirements of
OnlineLawFirm.
Product Scope:
We aim to help people facing different problems by providing expert advice through our multi-
client cloud-based system. The online law firm will provide ease to access and use of online
platforms for people seeking legal help. The system will facilitate the law firm to handle these
clients and allocate lawyers to their tasks and keep track of the complete legal process (cases).
The client, lawyer, and law experts will be registered in our system.
This system will perform the following functions.
• Users should sign up to use the system.
• Admin of the system can suspend and delete any accounts.
• Users of the system can delete any contact.
• Clients can submit /her Case in our system.
• Law Experts will receive the case according to their area of the field and then verifies
each case after verification law expert will proceed and reject the case.
• Notification-based alerts to notify all the parties.
• The system will store the GPS location of the Lawyer and expert.
• The system will have a communication system for legal discussion and sending legal
documents.
• A lawyer can confirm their availability for the Case
• The client can give a rating to a lawyer and law expert.
• Performance and rating-based promotion of lawyer.
• Lawyers and Law Experts can save case history in the system.
• The system will categorize the lawyer based on results and ratings.
Definitions, Acronyms, Abbreviations:
An acronym is a word or name formed as an abbreviation from the initial’s components of a
phrase or a word discussed in this Table 2.1 (Definitions, Acronyms, Abbreviations)
Table 2.1: Definitions, Acronyms, Abbreviations
Term Acronyms Abbreviation Definitions
1 Android It is an app development platform
Studio
2 Internet It is used to get global data
3 Constraints Limitations or Restrictions
4 XML Language for Designing UI
5 Firebase Cloud Database for storing Data
6 Java High-level Programming language for
backend Coding
7 Configuration It means a product, which is available
8 I/O Input /Output Input and out operation with the
communication device
https://www.c-sharpcorner.com/ebooks/ 99

9 UI User Interfaces Standard way for positioning the usability
options
10 SDK Software Used for developing the software product
Development kit
11 GUI Graphical User A standard way of using system control in
Interface It is an the form of View in the system
interface provided to
the user.
12 OLF OnlineLawFirm An android-based application used for
assistance
13 SRS Software SRS is a standard way of mentioning
Requirements techniques for gathering software
standards requirement
14 PC Personal Computer A platform for communication
15 App Android Application Mobile-based Application
16 DB Database It is an organized collection of data
17 API Application A set of functions and procedures that allow
Programming for the creation of an application
Interfaces
18 GPS Global positioning GPS used to identify the location
system
19 APK Android package kit Extensions of Android Applications
Document Convention:
This document uses the following conventions. Throughout the document, the same convention
will be used in this document. Set of rules choose for character sequence to be used for
identifier, which donates variables, words, functions, types, and other entities.
Formatting Convention:
This section includes the detail of the convention used in this document overview of the texture
format written in a standardized way. The font style must be Time New Roman heading will be
bold with standard font size. The details of the standard format are mentioned in given Table 2.2
(Formatting Convention).
Typographical conventions used in this document are as follows:
• Bolding is used to emphasize headings and subheadings.
• The theme font is Times New Roman (Headings CS)
• Font size is 18 and 14 for headings and subheadings respectively.
• Font size for text is 12.
• High level requirements are numbered continuously as 1,2,3,4,5,6
• Inherited detailed requirements are numbered in a float as 1.1,1.2,1.3 and so on for each
high-level requirement.
• Double inverted commas are used for pre-known words or words which can conflict
depending on the audience.
• Bullet points are used for defining a single topic of a whole description.
• Underlined Words with blue font color are used to identify the web addresses.
https://www.c-sharpcorner.com/ebooks/ 100

Table 2.2: Formatting Convention
Name Convention
Font Time New Roman 12 point
Heading 1 Bold 16-point size
Heading 2 Bold 14-point size
Heading 3 Bold 12-point size
Sections Number 1-5
Sub Sections Section No and subsection No
Copied Italics
Line space 1 space
Justified Yes
Naming Convention:
The naming convention is the set of rules for choosing the character sequence to be used for
identifiers, which denote variables, types, functions, and other entities.
• Terms requiring explanations are explained in “()” in front of the term.
• Abbreviations are worried in the upper-case latter
• References Definitions, statements, or numbered as “[1]” subscripts
Overall Description:
This section will give an overview of the whole system. The system will be explained in its
context to show how the user will interact with the system and perform its basic functionality. It
will also explain how the user will use the features of the system and what functionality is
available next. Finally, the constraints and assumptions will be presented. Product perspective
includes the figure that will show the working of the system. Product functionality includes the
functionalities of “ONLINELAWFIRM” concerning all users. User characteristics include details
regarding the interfaces of the system operating environment and explaining the specification
and requirements of the system. Design and implementation portions will cover the possible
constraints of “ONLINELAWFIRM “assumptions and dependencies of the system will be
covered.
Product perspective:
This App is not dependent on any existing system it is the first step of introducing android base
technology for the registration of problems and the system will facilitate the law firm to handle
these clients and allocate lawyers to their tasks and keep track of the complete legal process
(cases). The client, lawyer, and law experts will be registered in our system. This system will be
user-friendly and available 27/7so that users can access the data at any time from cloud
storage. The product perspective is clearly defined in Figure 2.1 (Product Prospective)
https://www.c-sharpcorner.com/ebooks/ 101

https://www.c-sharpcorner.com/ebooks/ 102
F i
U
r e
s
b
e
a
r
s e
A n d r o i d
S
A
e
p
v
p
e r
l i c a t i o n
Figure 2.1: Product Prospective
Product Functionality:
This project will include the following functionalities.
• Registration of Clients, Experts, and lawyers on the cloud base system
• Submission of the problem by the client
• Multi-Client System
• Generation of a list of experts that can give assistance
• Request Analyzer to analyze the case to suggest a lawyer accordingly
• Ability to edit the saved profile information
• Contact Management
• Status Management
• Legal Document Management
• Court hearing Calendar
• Location Expert to save, and show the GPS location of users
• A notification system that can send a notification to the users
• Lawyer’s availability confirmation.
• Case allocation to experts and Lawyer
• Ratings and Feedback system
• Communication between Expert and client
• History Saver to save Case History
• Successful and unsuccessful cases will be shown on the lawyer's Profile
• Categories of a lawyer based on the previous history
Users and Characteristics
The following are the user classes:
• Admin Class
• Client Class
• Lawyer Class
• Law Expert Class
ADMIN Characteristics: The user of this class will have the rights to all the elements of the
product
CLIENT Characteristics: The user of this class will be able to Register his/her case and can
communicate with a lawyer and law Expert and use the specified functionalities of the product
LAWYER Characteristics: The user of this class will be able to Receive Requests from the
Client and will send the availability notifications on that Request and use the specified
functionalities of the product.

LAW EXPERT Characteristics: The user of this class will be able to Receive Requests from
Clients Receive Case Registration Requests, send the notifications on that Request and use the
specified functionalities of the product.
The interfaces of the “ONLINELAWFIRM” are user-friendly and easy to use a normal user who
has basic knowledge of mobile can easily interact with the system
Operating Environment:
The product will operate on the following platform.
• Mobile
• Tablet
The operating environment detail of the system is as shown in the given below Table 2.3
(Operating Environment)
Table 2.3: Product perspective
Requirements Specifications
Hardware platform Mobile, Tablets
Operation Environment Android Technology
Versions 6.0.1
Design and Implementation Constraints:
This section includes the details of constraints for design and implementations are declared
under which this application will be developed. An example of what the constraints are where
the hardware is concerned. What are the constraints when the database and software are
concerned?
The detail is as given below
• The Product requires Google Play Geo APIs Embedded in the App and there is an
internet access.
• The Product requires Google Play Auth APIs will be used in the App and there is an
internet access.
• It requires the service of a Firebase server.
• It requires the language support of Java, XML, Firebase other android technologies.
• It will follow the Patterns of Software Engineering
• It will follow the principles and standards of Software Engineering
User Documents:
A textual document for the help of the user is provided which gives the starting tutorial for the
use of the Product modules.
Manuals of two pages will provide that contain the following details.
• How to install the application from the Google play store?
• How to use the application according to the desired status?
• How do find the desired lawyer and law experts?
• How to be registered according to the status?
• How to get benefits from “ONLINELAWFIRM”?
• How to send a Case to lawyer and Law Experts?
• How to Use the communication system of application?
https://www.c-sharpcorner.com/ebooks/ 103

• How to Use GPS (API) to send location to the user?
• How do give a rating to Lawyers and law experts?
Assumption and Dependencies:
Here are some limitations and dependencies of the system as given below.
• The product is dependent on the services of Google maps (APIs), the internet, and
Firebase.
• Response time of the system will be in seconds.
• To get better results users must have better internet connections
• Google Play services must be up to date
• Time delay occurs during the fetching of the data from firebase depending on the internet
connection
Specific Requirements:
This Section will include a detailed and point-to-point description of essential requirements of
“ONLINELAWFIRM” like inputs and outputs of the system and also the detail of tools used in the
designing of the interfaces.
User Interfaces:
• The GUI will include the home screen.
• The home screen will include the Signup module and login Module
• When Users register their account in the system then the system will show options to
select their status
• The home screen will include Menu options that will change their behavior according to
the status of users
• Menu Option will include My-Profile Connects, Communication, History, Logout
• My-Profile will show the profile Information of the Signed in User and there will be an
option to edit his/her profile.
• The Connects Screen will show all related contacts.
• The Communication option will have the ability to send Messages and Show received
messages. Legal documents will share through this system. Notifications will also be
shown here
• The History Option will contain a record of cases
• Case-Handler Module will have options. This module will change its behavior according
to the status of the users
• To Register a new case the client will go to the case handler and state his problem
• The law-Expert module will receive all client Requests.
• The lawyer Module will receive all case requests from the law-expert module.
• Admin Module will have the different Interface from others and have the authority to
delete and suspend any account
Hardware Interfaces:
• Android Technology Mobile device
Software Interfaces:
• Java
• Firebase
• XML
• Android Studio
https://www.c-sharpcorner.com/ebooks/ 104

Communications Interfaces:
• We will only use the android firebase library to communicate with the server
The details of the requirements of the software are shown in the given below table 2.4
(Requirements of software).
Table 2.4: Requirements for Software
Requirements Specifications
OS Android, Tablets
OS Versions Android 6.0.1
Database Firebase
Functional Requirements:
This section includes the details of the Functional Requirements of the system, without these
requirements the system will not perform the basic functionalities. The essential requirements of
the system are as given below.
Registration of Client/Lawyer, Experts, Admin:
• Users should sign up to use the system
Manage Account:
• Admin of the system can suspend and delete any accounts
Manage Contacts:
• Users of the system can delete any contact
Submission of Cases from Clients:
• Clients will submit /her Case in our system
Verification of Cases:
• Law Expert will receive the case according to their area of the field and then verifies
each case after verification law expert will proceed and reject the case
Assign the case to the lawyer:
• Law Expert can assign the cases to law according to their area of the field
Notification system:
• Law expert and Lawyer send Notification to Client
• A law expert will send a notification to a lawyer
GPS Location
• The system will store the GPS location of the Lawyer and expert
Communication System:
• Lawyers and law experts can communicate with clients
Lawyers’ availability confirmation:
https://www.c-sharpcorner.com/ebooks/ 105

• After receiving the notification lawyer can confirm their availability for the Case
Rating System:
• Users can give a rating to lawyers and law expert
Lawyer promotion:
• Performance-based promotion of lawyer
Sharing of Legal Documents:
• A lawyer can share the legal document with clients
Save Case History:
• Lawyers and Law Expert can save case history in the system
Non-Functional Requirements:
For the betterment of the system, we need to add some non-functional requirements that
support the functionalities of the system.
Performance Requirements:
• The product will perform well if the software and hardware requirements are following the
assumed hardware and software requirements mentioned in the external interface
requirements section.
• The system will send, Receive, or exchange data within 1 second
Start uptime.
The app starts with the reality of the situations that will become obvious eventually somewhat
more. Due to interacting and logging in to firebase to authenticate the user and get the data from
firebase. The time taking of the application will be three to five sec.
Safety Requirements:
• Application is not creating any safety hazards for the user because it will not be critical in
the operating environment, and it will be not harmful to anyone
Security Requirements:
• The Product back-end server should authenticate all users 100% correctly
• The Product will provide security on the data of all users
Software Quality Attributes:
Reliability:
• Provides the best solution to the users on every problem.
• Error-free data availability
• Update data instead of updating the database.
• The system will be reliable and will perform its intended functions.
• It does not meet any failure or system crash.
Availability:
• This product will perform without 1 second of delay.
• The Product will give a response with desired time on every action of the users.
• The Product will be available to the users 24/7
https://www.c-sharpcorner.com/ebooks/ 106

Usability:
• As the product will be easy to handle and works most expectedly with no failure
• This application will be built on the latest GUI and design patterns, e.g., Minimum taps to
achieve a function.
• This application will give accurate and desired results.
• This application follows Software Engineering Standards, so users will enjoy using this
app
Maintainability:
• As the admin team, we will be providing our services as required like updating and
keeping a record of the system.
• This system is easy to maintain all data of users on the server.
• Easy to maintain the entire database.
Reusability:
• Re-use this product in any domain having the required specifications.
Portability:
• This application will work on all android technology.
• This application will be effective the android versions 6.0.1
Adaptability:
• Since it is simple to use for any android mobile user
• This software product shall not require an acute knowledge of android and it will be user-
friendly.
Testability:
• The system can easily have tested using standard software techniques including quality
testing and usability testing.
Robustness:
The app should be more powerful by placing the coding expense of every capacity at least.
Correspondence effectiveness and reaction time will be inside as for as possible as how and
how must time the application will take and will be recovered from any failure.
Extendibility
This application can easily be extended because of the modular approach used in the
development process. This application built using android allows us to separate the business
logic and User interfaces easily.
https://www.c-sharpcorner.com/ebooks/ 107

Software Requirement Analysis Document
Download the document for practicing and writing the Software Requirements engineering
document of the Project.
https://github.com/SardarMudassarAliKhan/Software-Requirement-Engineering-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
https://www.c-sharpcorner.com/ebooks/ 108

18
System Design
Overview
In this chapter, we will explore explores detailed design's theoretical
framework, emphasizing system architecture and its components. It
addresses the Use Case View, Primary Actors, Fully Dressed Use
Cases, and Operation Contracts, offering practical examples and
diagrams for clarity. Additionally, Composition Viewpoints are
discussed, detailing system structure and elements interaction.
Supplementary resources, such as package diagrams, class
diagrams, and system sequence diagrams, are provided to facilitate
understanding. Readers can access downloadable documents for
practicing and receive feedback from a requirement engineer via
email for enhanced learning.
https://www.c-sharpcorner.com/ebooks/ 109

Introduction:
Here in this section, we will briefly discuss the framework of theoretical account in detailed
design. We discuss the working model of the system in detail and the complete architecture of
the system and every one of its constituents and capacities is discussed in this chapter.
Use Case View:
A method through which we analyze, Clarify, Identify, and organize the system requirements
User Complete Operating Process is defined in Figure 3.1 (Use Case Diagram).
Primary Actors:
• Admin
• Law Expert
• Lawyer
• Client
Use Case Diagram:
https://www.c-sharpcorner.com/ebooks/ 110
L
C lie n t
a w E x p e rt
L a w y e r
O n lin e L a w F ir m
S ig n U p
< < in clud e> > < < in clud e> >
V alid a te V erify
S ig n in
MA
S u b m it C a se
R a te L a w y e r
L a w E x p e rt
M a n a g e
C o n ta c ts
R e cie v e C a s e
< < in clud e> >< < in clud e> >
R e je c t P ro c e e d
S e n d
N o tific a tio n s
C o m m u n ic a te
to C o n n e c ts
S e n d L o c a tio n
S a v e C a s e
H is to ry
C o n firm
A v a ila b ility
S h a re L e g a l
D o c u m e n t
a n a g e
c co u n t
A d m in istra tio n
Figure 3.1: Use Case Diagram
The tool used for making the diagrams of the project during this book writing.
Link: https://www.microsoft.com/en-ww/microsoft-365/visio/flowchart-software

Fully Dressed Use Cases:
The use case is the list of actions or event steps typically defining a role and interaction between
a system and user to achieve the desired goal.
Use case: Sign up:
Table 3.1: Sign up
Name: Signup
Scope: OnlineLawFirm
Level: Primary
Primary Actors: Client, Lawyer, Law Expert, Admin
Pre-Condition: None
Post-Condition: a. The user will have registered to the system
Main Success Scenario:
User System
1) Use the signup Option
2) A form will be shown to the user
3) Fill out the account registration
Form
4) Press the form submission
Option
5) Validate the form
6) Create a user in the database
7) Success Message Will be Shown
Extensions: 5a) if the Inputs are not valid then the system will show a
message to the user to fill in the form again and then
resubmit.
5b) if any input field is empty a message will be shown to
fill in data properly and submit the form
Special Requirements: The list of experts will be shown within 1 second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of sign up
https://www.c-sharpcorner.com/ebooks/ 111

Software System Use Case Document
Download the document for practicing and writing the Software system use case document of
the Project.
https://github.com/SardarMudassarAliKhan/Software-System-Use-Case-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Operation Contract:
Table 3.2: Operation Contract Sign Up
Id Olf1
Operation create Account ()
Cross Reference Fill the Form
Pre-Condition None
Use Case: Sign Up:
Table 3.3: Sign In
Name: Sign in
Scope: OnlineLawFirm
Level: Primary
Primary Actors: Client, Lawyer, Law Expert, Admin
Pre-Condition: a) The User must have an account
Post-Condition: b) The User gets access to the Application
Main Success Scenario:
User System
1) Use the Sign in Option
2) Show the pop-up for account selection
3) Select the Account
4) Press sign-in button
5) Validate the Account
6) Sign in Successfully
7) Success Message Will be Shown
Extensions: 5a) if the account is not present in the system, then Message will
be shown you are not registered.
https://www.c-sharpcorner.com/ebooks/ 112

Special Requirements: The User will be signed in within 1-3 seconds.
Technology: None
Miscellaneous Issue: None
Frequency of use: Every Time
Operation Contract:
Table 3.4: Operation Contract Sign In
Id Olf2
Operation sign in ()
Cross Reference Choose the Account for access to the system
Pre-Condition a. The user Must have an account
b. The user must have Google Account
Post-Condition The User has been granted access to the Application
Use Case Manage Account:
Table 3.5: Manage Account
Name: Manage Contact
Scope: Online LawFirm
Level: Secondary
Primary Actors: Administration
Pre-Condition: a) The Administration Member Must have an account of
Admin status
b) The admin must be signed In
Post-Condition: a) The Requested account is suspended.
Main Success Scenario:
User System
1) Use the Delete and Suspend
option
2) Show a form asking the user to enter the name or
email of the account
3) Enters the Email of the account
4) Click the desired option
5) Account will be deleted or suspended
6) A message will be shown
https://www.c-sharpcorner.com/ebooks/ 113

Extensions: 5a) if the Entered email does not exist in the system, then a
message will be shown.
5b) if the input field is empty a message will be shown to
fill in data properly and resubmit
Special Requirements: None
Technology: None
Miscellaneous Issue: None
Frequency of use: Only when the suspicious activity is detected
Operation Contract:
Table 3.6: Operation Contract Manage Account
Id OLF3
Operation manage Account ()
Cross Reference Fill the Email Fields
Pre-Condition a) The account of the user must exist in our database
The entered Email must be existing in the system
Post-Condition The entered account is suspended
Use Case: Manage Contacts:
Table 3.7: Manage Contacts
Name: Manage Contacts
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Client, Lawyer, Law Expert
Pre-Condition: a) The desired contact must be connected to the
user
b) The user must be signed In
Post-Condition: a) A selected account was deleted from the Connects
list.
https://www.c-sharpcorner.com/ebooks/ 114

Main Success Scenario:
User System
1) Use the Case Menu Option
2) a) show the case menu if the client sends the
case, then he will be chosen the case send
option
b) show the case menu if the lawyer and law
expert use the case menu then they both
use the case
3) a) Client sends the case
c) Lawyers and law Expert
use the case Request and
ongoing option
4) a) Client clicks the case send
option
c) Lawyers and law experts
use the request
accept/reject option
5) The system added the contact according to
the decision of the user
6) Success Message Will be Shown
Extensions: 5a if the selected contact does not exist in the user
connects then a message will be shown.
Special Requirements: a) The account deleted within 1 second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only Time of managing contact
Operation Contract:
Table 3.8: Operation Contract Manage Contact
Id OLF4
Operation manage Contacts ()
Cross Reference Select the contacts
Pre-Condition
a) The Client must be signed In
Post-Condition The selected account was deleted from the user's connects list.
https://www.c-sharpcorner.com/ebooks/ 115

Use Case: Submit Case:
Table 3.9: Submit Case
Name: Submit Case
Scope: OnlineLawFirm
Level: Primary
Primary Actors: Client
Pre-Condition: a) The Client Must have an account
b) The Client must be signed In
Post-Condition: a) A list of relevant experts will be shown to the users
Main Success Scenario:
User System
1) Select the submission of use
case option to submit
his/her problem
2) Shows the case submission form
3) Fill out the Case Submission
Form
4) Select the lawyer or law
expert
5) Validate the form
6) The case sends to a particular user
7) Success Message Will be Shown
Extensions: 5a) if the Inputs are not valid then the system will show a
message to the user to fill in the form again and then
resubmit.
5b) if any input field is empty a message will be shown to
fill in data properly and submit the form
Special Requirements: The list of experts and lawyers will be shown within 1 second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of case submission
https://www.c-sharpcorner.com/ebooks/ 116

Operation Contract:
Table 3.10: Operation Contract Submit case
Id OLF5
Operation submit Case ()
Cross Reference Fill the Form
Pre-Condition a) The Client Must have an account
b) The Client must be signed In
Post-Condition A list of relevant experts has been shown to the users
Use Case: Set Rating:
Table 3.11: Set Rating
Name: Set Rating
Scope: OnlineLawFirm
Level: Primary
Primary Actors: Client
Pre-Condition: a) The user must be logged in to the system.
b) The case showed be completed
Post-Condition: a) The given rating added to the target profile
Main Success Scenario:
User System
1) The input rating screen is shown to the user just
after the completion of the case.
2) Fill in the stars input to give a
rating to the user.
3) Convert rating into numeric form.
4) Add the rating to the target profile.
5) Show Success Message
Special Requirements: The list of experts will be shown within 1 second
Technology: None
Miscellaneous Issue: None
Frequency of use: After the completion of the Case
https://www.c-sharpcorner.com/ebooks/ 117

Operation Contract:
Table 3.12: Operation Contract Set Rating
Id Olf6
Operation set Rating ()
Cross Reference Fill in the star rating
Pre-Condition a) The Client Must have an account
b) The Client must be signed In
c) The case was completed
Post-Condition The user was registered to the system
Use Case: Verify Case:
Table 3.13: Verify Case
Name: Verify Case
Scope: OnlineLawFirm
Level: Primary
Primary Actors: Client, Lawyer, Law Expert
Pre-Condition: a) The user must have logged in to the system.
b) The case was submitted to the system.
Post-Condition: b. The case status and information changed to verified.
Main Success Scenario:
User System
1) Show the complete information on each user
profile
2) Check the case description and
documents
3) Fill out the case description
form
4) Check the case information and
verify each case and update the
status
5) Validate the new information
6) Change the case status
7) Submit the new case information
8) Success Message Will be Shown
https://www.c-sharpcorner.com/ebooks/ 118

Extensions: None
Special Requirements: None
Technology: None
Miscellaneous Issue: None
Frequency of use: Whenever the case is submitted
Operation Contract:
Table 3.14: Operation Contract Verify case
Id Olf1
Operation create Account ()
Cross Reference Fill the Form
Pre-Condition None
Post-Condition The user was registered to the system
Use Case: Send Location:
Table 3.15: Send Location
Name: Send Location
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Lawyer, Law Expert
Pre-Condition: The user must be logged in to the system.
Post-Condition: The current expert location sent to the selected client
https://www.c-sharpcorner.com/ebooks/ 119

Main Success Scenario:
User System
1) Uses the send current location
option
2) A list of connected clients is shown to the Expert.
3) Selects the client from the list to
send the location
4) Press the send location button
5) The current location longitude and latitude
fetched
6) The location values send to the selected client
7) Success Message Will be Shown
Extensions: If the GPS of an android device is turned off first, turn the
device GPS and get the location again.
Special Requirements: Device GPS Should be on
Technology: None
Miscellaneous Issue: None
Frequency of use: Every time a face-to-face meeting is held
Operation Contract:
Table 3.16: Operation Contract Send Location
Id OLF8
Operation send Location ()
Cross Reference Press the send Current Location option
Pre-Condition a) The Client Must have an account
b) The Client must be signed in
Post-Condition The location was sent to the correct targeted profile
Use Case: Send Notification:
Table 3.17: Send Notification
Name: Send Notification
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Lawyer, Law Expert
Pre-Condition: a) The Users Must have an account
b) The Users must be signed In
https://www.c-sharpcorner.com/ebooks/ 120

Post-Condition: a) The Notification Box will be shown to the relevant
users
Main Success Scenario:
User System
1) Accept the case
2) Send the notification to the user
3) Reject the Case
4) Send the notification to the user
5) Reject the Request or accept the
request
6) The system sends the Notification
7) Add the New Information
8) Send the notification to the user
9) Success Message will be shown
Extensions: 5a) if the notification is not sent then the system asks
the user to send the notification again
Special Requirements: a) The Notification will be sent within one second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of sending notification
Operation Contract:
Table 3.18: Operation Contract sends Notification
Id OLF9
Operation send Notification ()
Cross Reference Fill out the Notification Form
Pre-Condition c) The Client Must have an account
d) The Client must be signed In
Post-Condition The Notification form has been shown to the relevant users
https://www.c-sharpcorner.com/ebooks/ 121

Use Case: Communicate to Connect:
Table 3.19: Communicate to connect
Name: Communicate to connects
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Client, Lawyer, Law Expert
Pre-Condition: a) The Users Must have an account
b) The Users must be signed In
Post-Condition: a) The Chat Box will be shown to the relevant users
Main Success Scenario:
User System
1) Use the Chat option
2) Show the chat box
3) Fill the desired fields
4) Press the send chat option
5) Show the message in the chat box
6) Save the chat history in the database
7) Success Message Will be Shown
Extensions: 3a) if the message field is empty then a message warning
will be shown select the file again
Special Requirements: The message will be sent within one second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of sending a message
Operation Contract:
Table 3.20: Operation Contract Communicate to Connect
Id OLF10
Operation send Message ()
Cross Reference Fill the Message Field
https://www.c-sharpcorner.com/ebooks/ 122

Pre-Condition a) The Client Must have an account
b) The Client must be signed in
Post-Condition The Chat Box has shown to the relevant users
Use Case Saves Case History:
Table 3.21: Save case history
Name: Save case history
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Lawyer, Law Expert
Pre-Condition: a) The Users Must have an account
b) The Users must be signed in
Post-Condition: a) The user will have registered to the system
Main Success Scenario:
User System
1) Use the case menu option
2) Click the case requests option
3) Open the case
4) Use the case history option
5) Add/delete the information 6) Validate the form
7) A success message will be shown
Extensions: 5a) if the form will not fill properly then a warning message will
be shown
Special Requirements: None
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of sign Up
https://www.c-sharpcorner.com/ebooks/ 123

Operation Contract:
Table 3.22: Operation contracts save case history
Id OLF11
Operation Save case History ()
Cross Reference Generate the Notification
Pre-Condition a) The Client Must have an account
b) The Client must be signed In
Post-Condition a) Save case history option has shown to the user
Use Case: Send Availability:
Table 2.23: Send Availability
Name: Send availability
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Lawyer, Law Expert
Pre-Condition: a) The Users Must have an account
b) The Users must be signed in
Post-Condition: a) A notification option will be shown to the user
b) Notification will be sent to a law expert
Main Success Scenario:
User System
1) Use the send availability option
2) Show the desired option
3) Check the check box
4) Validate the decision
5) Change the status
6) Success Message Will be Shown
Extensions: None
Special Requirements: The availability sent within 1 second
Technology: None
https://www.c-sharpcorner.com/ebooks/ 124

Miscellaneous Issue: None
Frequency of use: Only the Time of send availability
Operation Contract:
Table 3.24: Operation Contract Send Availability
Id OLF12
Operation send Availability ()
Cross Reference Generate the Notification
Pre-Condition a) The Client Must have an account
b) The Client must be signed in
Post-Condition a) Case history save and shown on user profile
Use Case: Send Documents:
Table 3.25: Send Document
Name: Send Document
Scope: OnlineLawFirm
Level: Secondary
Primary Actors: Client, Lawyer, Law Expert
Pre-Condition: a) The Users Must have an account
b) The Users must be signed In
Post-Condition: a) The Chat Box will be shown to the relevant users
Main Success Scenario:
User System
1) Use the chat option
2) The system shows the chat option
3) Select the File from the system
4) Press the send button
5) Validate the file attachment
6) Show in the chat box
7) Success Message Will be Shown
https://www.c-sharpcorner.com/ebooks/ 125

Extensions: 5a) If the input file attached is not compatible then the
system will show a message to the user to fill the form
again and then re-submit.
5b) If any input file attach is not compatible will be shown
to fill data properly and submit the form
Special Requirements: The file will be sent within one second
Technology: None
Miscellaneous Issue: None
Frequency of use: Only the time of sending an attachment
Operation Contract:
Table 2.26: Operation Contract Send Legal Document
Id OLF13
Operation Send legal Document ()
Cross Reference Select the attachment from the system
Pre-Condition The user must be signed in
Post-Condition Attach box shown to the user
Composition Viewpoints:
The composition shows the structure of the system and its elements. In the section design
elements are explained briefly how the system structure and its elements interact with each
other, and which software engineering principle is used in the system.
Package Diagram:
This diagram is based on the “Unified Modeling Language” this section shows the structure of
the system, how system elements depend on each other and how the system elements interact
with each other as shown in figure 3.2 (Package Diagram).
Logical Viewpoint:
This diagram is based on the “Unified Modeling Language” this section shows the functionality
of the system how system classes depend on each other and how the system classes interact
with each other and how the system calls the methods from another class and how the system
will use the server for CRUD operation in database.
Class Diagram:
The purpose of this diagram is to show the functionalities of the system as shown in figure 3.2
(Package Diagram) and how the system performs the functionality for the user when the user
interacts with the system.
https://www.c-sharpcorner.com/ebooks/ 126

https://www.c-sharpcorner.com/ebooks/ 127
AdapterConnects
Tab Connects
Tab Notification
UserlistAdapter
AdapterItem user
Tab List All
TabOngoingCaseEl
tab Chat
Tab list Suggesstion
TabRequestEL
OlfAccount Adminstration
Client Case
Communicati MangeAccount
onManager
VerifyCase
CaseAssigner
Case Menu
Case Editor
Case Describer
Complete
Main Activity Ongoing Cases
Sign Up Client Sign Up Law
Expert
List Selection
lawexpert Lawyer
CaeHistorySaver CaseSubmitter
Documents
ManageContact
AccountCred Rating
entials
Case Describer Case System
Case system EL Case Editor
Chat Activity
Communication
system complete
-memberName
Sign Up Lawyer Section page
editor
Profile Target
Profile
Diagram 3.2: Package Diagram

this class validate data
of different class
Validator
uses
+issignUpValid(string n ,string e,string d,string c):boolean
+validateCase(Case c):boolean +validateNewInfromation(Array list):list
sesu
uses
This Interface will
|     |     | provide the basic  |     | sesu | Account Credentials OF  |     |
| --- | --- | ------------------ | --- | ---- | ----------------------- | --- |
|     |     | funcionlities of   |     |      | Client                  |     |
Account Credential
<<Interface>>
AccountCredential
|     | +signUp():Void +signIn():Void |     |     | Client | uses |     |
| --- | ----------------------------- | --- | --- | ------ | ---- | --- |
mI
|     | melp |     |     | +signUp():Void |     |     |
| --- | ---- | --- | --- | -------------- | --- | --- |
+signIn():Void
stne
uses
uses
OlfAccount
|     | -olfId:String | sdnetxE |     |     |     |     |
| --- | ------------- | ------- | --- | --- | --- | --- |
-email:String
-dateOfBirth:Date
-status:String
|     | -cnic:String    |     |         |     | uses      |     |
| --- | --------------- | --- | ------- | --- | --------- | --- |
|     | -country:String |     | Extends |     | Location  |     |
-phoneNo:String
|     | -address:String               |                              |                   |                       | -Longititude:Int              |               |
| --- | ----------------------------- | ---------------------------- | ----------------- | --------------------- | ----------------------------- | ------------- |
|     | +signUp():Void +signIn():Void |                              |                   | Lawyer                | -latitude:int                 |               |
|     | +verifiesAccount():Void       | CaseSubmitter                | Rating            |                       | -countryCofe:Int -city:String |               |
|     |                               |                              |                   | -education:String     | -country:String               | LocalFirebase |
|     |                               | -status:String               | -ratingValue:Int  | -availability:boolean |                               |               |
|     |                               | +submitCase(Case c): boolean | -senderKey:string | -profession:String    |                               |               |
+submitCaseToExpert(Case c):  boolean -recieverKey:string -timeStamp:long -experience:String -noOfClient:Int +saveCaseHistory():void
Account  sdnetxE -rating:double sesU +savelocation(location c,String
Credentials  sdnerxE + setRating ():Void +signUp():Void Sender Key,String Reciever Key)
OF  Uses +signIn():Void +saveAttachment(Document d):void +sendMessage(Message m):void
| Administration |     | sesU |     |     |                  | +saveNotification(Notification n):void |
| -------------- | --- | ---- | --- | --- | ---------------- | -------------------------------------- |
|                |     |      |     |     | Location Manager | +saveContact():void                    |
+getUserStatus():void
Administration Case sesU +sendLocation(location c ,String  +sendMessageFirstTime():void
|     |                       |               | Uses CaseHistorySaver |     | senderkey ,String RecieverKey ) | +rejectCase():void |
| --- | --------------------- | ------------- | --------------------- | --- | ------------------------------- | ------------------ |
|     | -qualifucation:String | -title:String |                       |     |                                 | +startCase():void  |
-Experience:String -type:String -FirebaseKey:String +saveCase():void +saveChangeToExpert():void
+signUp():Void +signIn():Void -description:String +saveChangeToLawyer():void
-City:String -Distric:String +saveCaseHistory(string  +saveChangeToClient():void
|     |     | -NearPolicesStation:String | Firbasekey):Void               |     |     | +signUpClient():void |
| --- | --- | -------------------------- | ------------------------------ | --- | --- | -------------------- |
|     |     | -country:String            | +getFirebaseCaseKey(Arraylist  |     |     | +signUpLawyer():void |
-senderKey:String l,Case Data,String UserName):Void +signUpLawExpert():void
-recieverKey:String
|     |     | -timeStamp:Long |     |     |     | uses |
| --- | --- | --------------- | --- | --- | --- | ---- |
Uses uses
AccountManager
ContactManager
+suspendAccount():Void
| Account      |     | +deleteAccount():Void |                       |      |     |                |
| ------------ | --- | --------------------- | --------------------- | ---- | --- | -------------- |
| Credentials  |     |                       | -email:String         |      |     | sesu           |
| OF           |     |                       | -phoneNo:String       |      |     |                |
| LawExpert    |     |                       | +manageAccount():Void |      |     |                |
|              |     | uses                  |                       | uses |     | History Entity |
LawExpert
-value:String -key:String
|     | -education:String |     |     |     |     | -timeStamp:Long |
| --- | ----------------- | --- | --- | --- | --- | --------------- |
-profession:String
-experiance:String
-availability:boolean -noOfClient:Int
-rating:double
-successRate:douvle
+signUp():Void
+signIn():Void
|     |     | VerifyCase |     | sesu |     |     |
| --- | --- | ---------- | --- | ---- | --- | --- |
+verifyCase(Case c, boolean isVerified):Void
CommunicationManger
|     |     |     | Uses +sendAttachment(Document  d):Boolean |     |     |     |
| --- | --- | --- | ----------------------------------------- | --- | --- | --- |
+sengNotification(Notification n):Boolean
+sendMessage(Message m):Boolean
Uses
Document
|     |     | Notification    | MessageEntity   | -name:String    |     |     |
| --- | --- | --------------- | --------------- | --------------- | --- | --- |
|     |     | -title:String   | -title:String   | -caption:String |     |     |
|     |     | -body:String    | -body:String    | -timeStamp:Long |     |     |
|     |     | -timeStamp:Long | -timeStamp:Long |                 |     |     |
-senderUName:String
-sendeFullName:String
-targetUName:String
-targetFullName:Long

Diagram 3.3: Class Diagram
|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |

https://www.c-sharpcorner.com/ebooks/  128

System Sequence Diagram:
The system sequence diagrams are based on the “Unified Modeling Language” this diagram
visualizes the use case against the canaries.
System Sequence Diagram Sign Up:
https://www.c-sharpcorner.com/ebooks/ 129
U s e r
5 :s y s t e m
6
7
S ig n U p
1 :s ig n U p ( )
2 :S h o w S ig n U p f o r m
3 :F ill R e g is tr a tio n F o r m
4 :P r e s s R e g is t e r B u tt o n
s h o w th e P o p u p fo r A c c o u n
6 :S e le c t th e G m a il A c c o u n t
:V e r ify T h e A c c o u n t fr o m F ir
:C r e a te u s e r in t h e d a ta b a s e
8 : S h o w S u c c e s s M e s s a g e
t
e
S
b
e
a
le
s e
c t
; S
io
y
n
s t e m
Diagram 3.4: SSD-Sign up
System Sequence Diagram Sign In:
UU ss ee rr
4
2
:V
:o p
a lid
e
3
a
S ig n in
1 :s ig n I n ( )
n t h e s ig n in p o p u p o p t io
:S e le c t t h e G o o g le A c c o u
4 :C lic k t h e A c c o u n t
t e T h e E m a il A d d r e s s f r o m
5 :A u t h in c a t e T h e U s e r
n
n t
F ir e b a
;S
s e
y s t e m
Diagram 3.5: SSD-Sign In

System Sequence Diagram Manage Account:
|         | M a             | n a g e  A c c o u n  | t              |
| ------- | --------------- | --------------------- | -------------- |
| U s e r |                 |                       | ; S y s t e m  |
|         | 1 :m a n        | a g e A c c o u n t   | ( )            |
|         | 2 :S h o        | w  t h e  F o r m     |                |
|         | 3 :E n t e r  T | h e  E m a il o f  A  | c c o u n t    |
|         | 4 :P r e s s    |  t h e  D e s ir e d  |  O p t io n    |
|         | 5 :D e le t e   |  o r  S u s p e n d   |  A c c o u n t |
|         | 6 :S h o w  T   | h e  S u c c e s s  M | e s s a g e    |

Diagram 3.6: SSD-Manage Account
System Sequence Diagram Manage Contacts:
| User | Manage contact |     | ;System |
| ---- | -------------- | --- | ------- |

1:manageContacts()
2:use the send case option
3:Fill the Form
4:Select the lawyer
5:Select the confirmation option
5:system add the Contact in connects
5:Success Message

Diagram 3.7: SSD-Manage Contacts

https://www.c-sharpcorner.com/ebooks/  130

System Sequence Diagram Submit Case:
UUsseerr Submit Case ;System
1:submitCase()
2:Use the case Menu Option
3:select the Case submission option
4:Fill the form
5:Validate The Form
6:select the lawyer
7:select the confirmation option
8:click the yes/No option
9:show the message
Diagram 3.8: SSD-Submit Case
System Sequence Diagram Set Rating:
User Set Rating ;;SSyysstteemm
1:setRating()
2:show the rating box
3:Fill the input form
4:Convert Rating into numeric form
5:Add the rating to Profile
6:Show success Message
Diagram 3.9: SSD-Set Rating
https://www.c-sharpcorner.com/ebooks/ 131

System Sequence Diagram Share Legal Document:
|     | S h a r e   L e | g a l   |
| --- | --------------- | ------- |
U s e r ; ;S S y y ss t t e e mm
|             | D o c u m e           | n t                        |
| ----------- | --------------------- | -------------------------- |
| 1 : s h     | a r e le g a lD o c u | m e n t ( )                |
| 2 : s h o w |  t h e  d o c u m e   | n t  s h a r in g  b o x   |
| 3 : U s e   |  t h e  F ile  S h a  | r in g  o p t io n         |
|             | 4 : S e le c t        |  T h e  F ile              |
| 5 : C       | lic k  T h e  S e n   | d  B u t t o n             |
| 6 : S h o w |  t h e  s u c c e s   | s  M e s s a g e           |

Diagram 3.10: Share Legal Document
System Sequence Diagram Confirm Availability:
| C o | n f i r m  A v a | il a b i li t y |
| --- | ---------------- | --------------- |
U s e r ; S;S yy ss t t e e mm
| 1 : c o        | n f ir m A v a ila  | b ilit y ( )             |
| -------------- | ------------------- | ------------------------ |
| 2 : U s e  t   | h e  S e n t  A v a | ila b ilit y  o p t io n |
| 4 : C h e c    | k  t h e  c h e c k | b o x  b u t t o n       |
| 5 : t r u e  o | f  f a ls e  t h e  |  A v a ila b ilit y      |
| 6 : S h o w    |  t h e  s u c c e   | s s  M e s s a g e       |

Diagram 3.11: SSD-Confirm Availability

https://www.c-sharpcorner.com/ebooks/  132

System Sequence Diagram Send Location:
| U s | e r        |              | S e n d  lo c    | a t io n                 | ;S ;S y y s s te te m m |
| --- | ---------- | ------------ | ---------------- | ------------------------ | ----------------------- |
|     |            | 1 : s e      | n d L o c a      | t io n ( )               |                         |
|     | 2          | :S h o w     |  t h e  lis t  o | f c o n n e c t  C lie n | t s                     |
|     | 3 :S       | e le c t  th | e  C lie n t     |  fr o m  lis t           |                         |
|     | 4 :fe tc h | e t  th e  c | u rr e n t  lo   | n g it u d e  a n d  la  | t it u d e              |
|     | 5 :C       | lic k  t h   | e  s e n d  lo   | c a tio n  b u t t o n   |                         |
|     |            | 6 :lo        | c a tio n  s e   | n d                      |                         |
|     |            | 7 :S         | u c c e s s  M e | s s a g e                |                         |

Diagram 3.12: SSD-Send Location
System Sequence Diagram Send Notification:
| user |     | Send Notification |     |     | ;;SSyysstteemm |
| ---- | --- | ----------------- | --- | --- | -------------- |
1:sendNotification()
2:Accept the case
3:send the Accept request Notification
particular user
4:Reject the case
5:send the Reject request Notification to
particular user
6:Add the new information
7:send the new information
Notification
8:send the message
9:system send the notification to particular user
10:send the attachment
10:system send the notification to particular user

Diagram 3.13: SSD-Send Notification

https://www.c-sharpcorner.com/ebooks/  133

System Sequence Diagram Verify Case:
| U s e r |          | V e r if y  C a s            | e                      | ;S ;S y y ss te te m m |
| ------- | -------- | ---------------------------- | ---------------------- | ---------------------- |
|         |          | 1 : v e r if y C a s         | e ( )                  |                        |
|         | 2        | :U s e  t h e  c a s e  M e  | n u  o p tio n         |                        |
|         | 3 :c lic | k  t h e  c a s e  r e q u   | e s t  o p t io n      |                        |
|         | 4 :o p e | n  t h e  c a s e  d e s c r | ip t io n              |                        |
|         | 5 :c     | h e c k  t h e  c a s e  in  | fo rm a t io n         |                        |
|         | 6 :V e   | r ify  t h e  I n fo r m a   | t io n                 |                        |
|         | 7 :C o n | ta c t  w it h  C lie n t fo | r  f u r th e r  in fo |                        |

Diagram 3.14: SSD-Verify Case
System Sequence Diagram Save Case History:
| User |     | Save case hsistory |     | ;;SSyysstteemm |
| ---- | --- | ------------------ | --- | -------------- |
1:savecaseHitory()
2:show the availability
3:Check the CheckBox
4:Click the Send availability option
5:Show the success Message

Diagram 3.15: SSD-Save Case History

https://www.c-sharpcorner.com/ebooks/  134

System Sequence Diagram Communicate with connects:
| U s e r | C o m         | m u in c a t e  W     | it h  C o n n e c t s    | ;S ;S y y ss t t e e mm |
| ------- | ------------- | --------------------- | ------------------------ | ----------------------- |
|         | 1             | :s e n d M e s s a g  | e ( )                    |                         |
|         | 2 :U          | s e  t h e  c o n n e | c t  o p t io n          |                         |
|         | 3 :o p e n  t | h e  c o m m u n ic   | a t io n  s y s t e m    |                         |
|         |               | 4 :u s e  t h e  c h  | a t  o p t io n          |                         |
|         |               | 5 :f ill t h e  m e   | s s a g e  b o x         |                         |
|         | 6 :C lic      | k  t h e  S e n d  M  | e s s a g e  b u t t o n |                         |
|         | 7 :S          | h o w  m e s s a g    | e  in  C h a t  b o x    |                         |
|         | 8 :S          | h o w  t h e  s u c c | e s s  M e s s a g e     |                         |

Diagram 3.16: Communicate with Connects
State Dynamic:
The dynamic state is the part of the information state which can change during the use of the
application while the static states remain the same. The operation state will be staying remain
the same. Otherwise updating the dynamic information state and selecting furthermore. When
the dynamic state changes the information as well as operation state will also be changed.
Activity Diagrams:
The system sequence diagram is based on the “Unified Modeling Language” this diagram
visualizes the operation of the user with the system against every use case. How the user will
operate the system and how the system will respond to the user.

https://www.c-sharpcorner.com/ebooks/  135

Activity Sign Up:
I n it ia l
N o d e
S ig n  U p  O p t io n
F ill T h e  F o r m
if t h e  in p u t s
| S e le c t  t         | h e  G o o g le  A | c c o u n t | is  in v a lid       |
| --------------------- | ------------------ | ----------- | -------------------- |
| If th e  In p u ts    |                    |             | th e n  s y s te m   |
| is  v a lid  th e n   |                    |             | v a lid te  th e     |
| s y s te m  w il      |                    |             | in p u s  a n d      |
| g o  to  n e x t      |                    |             | th e n  g iv e       |
| s t a g e             |                    |             | th e  e r ro r       |
m e s s a g e
| P r e s s  T         | h e  R e g is t e r  B | u t t o n               |     |
| -------------------- | ---------------------- | ----------------------- | --- |
| V a lid a te  D a ta | D a t a                |  N o t  V a lid a t e d |     |
R e g is t e r  I n
S y s t e m
|     | S u c c e s s   | E nN d in d in g   |     |
| --- | --------------- | ------------------ | --- |
|     | M e s s a g e   | o d e  O f         |     |
|     |                 | A c tiv ity  o f   |     |
|     |                 | th e  S ig n  U p  |     |

Diagram 3.17: Activity-Sign up

https://www.c-sharpcorner.com/ebooks/  136

Activity Sign In:
In it ia l N o d e
|     | C l ic k   T h e  S i g n   |     |     |
| --- | --------------------------- | --- | --- |
I n   O p t i o n
|     | U s e  T h e  G o o g l e   |     |     |
| --- | --------------------------- | --- | --- |
A c c o u n t
D e c is o n
|     | P r e s s   T h e  S i g n   |                |     |
| --- | ---------------------------- | -------------- | --- |
|     |                              | N o d e  T h a | t   |
B u t t o n
|     |     | V a lid a t e  T | h e   |
| --- | --- | ---------------- | ----- |
F o r m
| A u t h i n | c a t e d | N o t   A u t | h in c a t e d |
| ----------- | --------- | ------------- | -------------- |
A u t h i n c a t e   T h e
U s e r
E n d s  t h e   f
|     |     |     | s ig n e d  in   |
| --- | --- | --- | ---------------- |
|     |     |     | A c t iv it y  o |
u s e r
S i g n e d   I n

Diagram 3.18: Activity -Sign In

https://www.c-sharpcorner.com/ebooks/  137

Activity Submit case:
https://www.c-sharpcorner.com/ebooks/ 138
V a l i d a t e D a t
C
a
C l ic k T h e C a s
M e n u
l ic k t h e s u b m
c a s e O p t i o n
F i l l t h e F o r m
s e l e c t t h e
l a w y e r
s e l e c t t h e
l a w y e r
s e l e c t t h e
l a w y e r
F o r m S e n t
S u c c e s s
M e s s a g e
e
i t
D a t a N o t V
In it ia l N o d e
o f A c t iv it y
D e c is io n
N o d e t h a t
v a lid a t e t h e
F o r m
a li d a t e d
E n d in g
O f A c
S u b m
O f C
N
t iv
is s
A S
o d
it y
io n
E
e
Diagram 3.19: Activity –Submit case

Activity Verify Case:
initial node
of the
activity
verify case
use the case
menu option
Click the
Request Option
Open the case
Description
Check the
Information
Verify the Verify the
Information Information
Ending Node
Of the
Activity Set
rating
Contact with client
for further info
Diagram 3.20: Activity –Verify Case
https://www.c-sharpcorner.com/ebooks/ 139

Activity Manage Account:
Initial Node
of the
Activity of
User
Manage
Account
Click Manage
Account Button
Suspend
Delete Account
Account
this node
merge the
decision of
user
Fill The Form
Click The
Desired Option
Validate Data Data Not Validated
Account Deleted/
Ending Node
Suspended
of Activity
Manage
Account
Success
Message
Diagram 3.21: Activity –Manage Account
https://www.c-sharpcorner.com/ebooks/ 140

Activity Manage Contacts:
use the case
Menu Option
Click the case
send option
Fill the Form
Validated Not Validated
Select the lawyer
Ending Node
Of Activity
Mange
cONTACT
Select the confirmation
option
Contact Added
Success Message
Diagram 3.22: Activity –Manage Contacts
https://www.c-sharpcorner.com/ebooks/ 141

Activity Send Location:
initial node
of the
activity send
location
Open The
Contact List
Select the
Contact
Click the send
Send Location
Button
Decision
Node that
Take
decision if
the
condation is
true
Location Not Fetched
Location Fetched
Location Sent
Ending Node
Of the
Success Activity Set
Message rating
Diagram 3.23: Activity –Send Location
https://www.c-sharpcorner.com/ebooks/ 142

Activity Send Notification:
S ta rt th e
A c tiv ity  o f
th e  S e n d
|     |     |     | N o tific a | tio n   |     |
| --- | --- | --- | ----------- | ------- | --- |
M o d u le
| sm e n d  th ee   | s e n dh  th     | e                            |                |                        | A d d  n e w  n |
| ----------------- | ---------------- | ---------------------------- | -------------- | ---------------------- | --------------- |
|                   |                  | A c c e p t  th              | e  c a s e R e | je c t  t h e  c a s e |                 |
| e s s a g         | A t ta c m       | e n t                        |                |                        | in fo r m a tio |
|                   |                  |                              | I n fo r       | m a tio n  n o t       |                 |
|                   | I n fo r m a tio | n  V a lid a te d            | v a            | lid a t e d            |                 |
|                   |                  | N o t ifiv c a t io          | n  s e n d     |                        |                 |
|                   |                  | S u c c e s s  M e s s a g e |                |                        |                 |

Diagram 3.24: Activity –Send Notification

https://www.c-sharpcorner.com/ebooks/  143

Activity saves Case History:
https://www.c-sharpcorner.com/ebooks/ 144
V a lid a t e d D
H
a t
i s
a
t
u s e t h e c a s e
m e n u o p t io n
C l ic k t h e
R e q u e s t o p t i o n
O p e n t h e C a s e
U s e t h e C a s e
h i s t o r y o p t i o n
A d d t h e
i n f r o m a t i o n
F ie ld s F ile d
C l ic k t h e s a v e
O p t i o n
H i s t o r y s a v e d
o r y s a v e d
N o t V a lid a t e
IoACI
d
n i t i a
f t h
c t i v
a s e
n f o r
l N
e
i t y
m a
o
S
t
d
a
i o
e
v
n
e
E n d
A
D e c
N o d
in g N
o f t h e
c t iv it
is io
e
o d e
y
n
Diagram 3.25: Activity –Save Case History

Activity Send Legal Document:
Initial Node
of the
Activity
Share Legal
Documrnt
Use The
document
sharing option
select the file
send the
Attachment
Selected Not Selected
File Attachment
send
Success
Message
File is Visible in
the List
Diagram 3.26: Activity –Send Legal Document
https://www.c-sharpcorner.com/ebooks/ 145

Activity Send Availability:
Initial Node
of the
Activity
Click the
Availability
Option
Check The Box
True/False the
Availability
Availability
Changed
Ending Node
of the
Activity
Success
Message
Diagram 3.27: Activity –Send Availability
https://www.c-sharpcorner.com/ebooks/ 146

Activity Set Rating:
|     |     |     | in it ia l n  | o d e    |
| --- | --- | --- | ------------- | -------- |
|     |     |     | o f  t h e    |          |
|     |     |     | a c t iv it y |  s e t   |
r a t in g
|     | Ca l i c k   t h | e   s e t   |     |     |
| --- | ---------------- | ----------- | --- | --- |
|     | r t i n g   b    | u t t o n   |     |     |
|     | F i l l  T h e   |   s t a r   |     |     |
i n p u t
| V a lid a t e | d  In p u t | In p u t  N | o t  v a lid a t e | DNcrws e c is io n   |
| ------------- | ----------- | ----------- | ------------------ | -------------------- |
o d e  t h a t
h e c k  if
a t in g  w a s
r o n g ly
e l e c t e d
|     | R a t i n g |   s e t |     |     |
| --- | ----------- | ------- | --- | --- |
E n d in g   N o d e
O f t h e
A c t iv it y  S e t
S u c c e s s
r a t in g
M e s s a g e

Diagram 3.28: Activity –Set Rating

https://www.c-sharpcorner.com/ebooks/  147

Sequence Diagrams
The sequence diagram shows the operation of the method how the system calls the methods
and how the data flow from one method to others and how the data is loaded from the server
using methods as shown below diagrams:
Sequence Diagram Manage Account:
https://www.c-sharpcorner.com/ebooks/ 148
A c t o r
1 : M a n a g e C o n t a c t ( )
M a n a g e A c c o u n t
2 : S a v e C o n t a c t ( )
L o c a lF ir e b a s e
Diagram 3.29: Manage Account

Sequence Diagram Manage Contacts:
https://www.c-sharpcorner.com/ebooks/ 149
A c t o r
1 : o l f A c c o u n t ( )
O lf A c c o u n t
2
3
: d
: s
e
u
le
s
t
p
e
e
A
n
c
d
c
A
o
c
u
c
n
o
t
u
( )
n t ( )
A c c o u n t M a n g e r
Diagram 3.30: Manage Contacts
Sequence Diagram Save Case History:
Actor Case CaseHistorySaver Local Firebase
1:case()
2:saveCaseHistory(Case c)
3:savecase(Case c)
Diagram 3.31: Save Case History

Sequence Diagram Send location:
A cto r L o c a tio n L o c a tio n () L o c a l F ire b a se
1 :lo c a tio n ( )
|     | 2 :s es ne dn Ld oe | c a t io n ( L o cg a t ioe | nc  c ,S tr rin g   |               |                           |                            |
| --- | ------------------- | --------------------------- | ------------------- | ------------- | ------------------------- | -------------------------- |
|     |                     | rk e y ,S t r in  R         | ie v e )            |               |                           |                            |
|     |                     |                             |                     | 3 :s a v e lo | c a te ioy n,S ( Lt o c a | t io nc  cie ,S t r in g   |
|     |                     |                             |                     | s e n d e     | rk r in g  R              | e v e r )                  |

Diagram 3.32: Send Location
Sequence Diagram verifies case:
| Actor | case |     | VerifyCase |     |     | CaseAssigner |
| ----- | ---- | --- | ---------- | --- | --- | ------------ |
1:case()
2:verifyCase(case c,boolean
isVarified)
3:setSystemSuggestedList(list l):list
4:setExpertSuggestedList(list l):list

Diagram 3.33: Verify Case
|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |

https://www.c-sharpcorner.com/ebooks/  150

Sequence Diagram Communication Manager:
Communication
| Actor | Message | Document | Notification |     |     | local Firebase |
| ----- | ------- | -------- | ------------ | --- | --- | -------------- |
Manager
1:Message()
2:Document()
3:Notification()
4:sendAttachment(Document d)
5:sendMessage(Message m)
|     |     |     |     | 6:sendNotification(Notification c) | 7:saveAttachment(Document d) |     |
| --- | --- | --- | --- | ---------------------------------- | ---------------------------- | --- |
8:saveMessage(Message m)
9:saveNotification(Notification n)

Diagram 3.34: Communication Manager
Sequence Diagram Set Rating:
|             |                           |       |             |                 | L o cb aa ls Fe i r e |     |
| ----------- | ------------------------- | ----- | ----------- | --------------- | --------------------- | --- |
| C l i e n t |                           | R a t | i n g       |                 |                       |     |
|             | 1 : s e t R a t i n g ( ) |       |             |                 |                       |     |
|             |                           |       | 2 : s a v e | R a t i n g ( R | a t i n g  r )        |     |

Diagram 3.35: Set Rating

https://www.c-sharpcorner.com/ebooks/  151

Sequence Diagram Submit Case:
https://www.c-sharpcorner.com/ebooks/ 152
A c t o r
1 : c a s e ( )
C a s e
3
2
:
:
s
s
u
u
b
b
m
m i
i tC
t C a
c a s
a s e
s e
e T
c
(
o)
C
E
a
x
s
p
e
e
C
c
r
a
)
t
s
(
e S u b m
4
it t e
: s a,
s
r
vt er
i
cn ag s ea (c c a
t o
L
s e
r )
o c
c
a l F ir e b a s e
Diagram 3.36: Submit Case
Software System Design Document
Download the document for practicing and writing the Software system Design document of the
Project.
https://github.com/SardarMudassarAliKhan/Software-Design-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com

19
Development and
Configuration Management
Overview
In this chapter, we will explore explores development and
configuration management, emphasizing Android Studio's versatility,
coding standards, object-oriented principles, and comprehensive
development planning for project organization and execution.
https://www.c-sharpcorner.com/ebooks/ 153

Introduction:
In this chapter, we will discuss the development and configuration management and the
elements where this production is perfectly useful. And this production is important for
comprehension. We discuss on the other hand if any change occurs in the future to improve the
efficiency of the system. Some of the following development standards and development used in
this product are given below.
• Which tools and framework APIs are used during the development of the system?
• Which libraries are used during the development of the system?
• What are the coding style and standards being followed in the development of the
product?
Android studio:
Android Studio is used during the development of the system. Android studio is the most
advanced and open-source platform for the development of android systems. Android studio has
more the 26 APIs with the most advanced programming features that will help the software
engineers to build efferent and best products using the android platform.
Coding standard:
Different types of coding standards are used during the development of software systems. Every
programing language provides coding standards and the programmer’s engineers must follow
that standard during the development of the system. If every programmer wants to use its
coding standards, then it is difficult to maintain the code in the future and difficult to manage
some are the coding standards used during the development of this system.
Model View Presenter:
Model-View-Presenter is the Software engineering principle used during the development of the
system. MVP provides the standard for the development of software products. This principle
helps the software engineers to separate the business logic and separate the software product
interfaces.
Function Call:
Function Calls are used in the following ways:
• There are no spaces used between the function name, parenthesis is used for
parameters, and curly brackets are used for declaring the body of the project.
• Spaces and Commas are used between the parameters of the function.
• There is no space is used between the last parameters and at the end of the
parenthesis.
Class definition:
There are opening braces used for the declaration of the class underscore are used for the
separation of words for the name of class like (University Employee) for the making of the class
meaningful. Capital letters are used for the name class, and we avoid underscore at the start of
the class.
Object-Oriented Programming:
An object-oriented programming style is used in the development of this project. Object-oriented
programming provides a modular structure that will help the Engineers and users to understand
https://www.c-sharpcorner.com/ebooks/ 154

the structure of the system. The modular structure provides a better understandability of the
code and code reusability is high in this style of cladding.
Code Comments:
Java style and C# Razor type comments are used e.g. (@****@ or /* */).
Line length and Control Structure:
• For the batter understanding and readability of the code range of the character is 70-90
characters per line.
• There is no Tab used but intended of the 4 spaces are used
• In the control statements, one-line space is used between control statements, and
parenthesis are used
Development Plane:
In the development plane, the overall strategies of the project have been placed full-time spam
of the project is placed in this development plane. The giant chart shows all the sequence of
activities concerning time and duration. The development plan includes the sequence of iteration
and details of alliteration and their sub-tasks and the duration of subtasks. Details of Milestone
and detail of Final iteration in which complete system will have given to stakeholder as a shown
in Figure 4.1 (Development Plane).
Figure 4.1 (Development Plane)
https://www.c-sharpcorner.com/ebooks/ 155

Text Editor (Android Studio):
Android studio is the official Integrated development environment used for the development of
the android operating system. Android studio is the most advanced and open-source platform
for the development of android systems. Android studio has more the 26 APIs with the most
advanced programming features that will help the software engineers to build efferent and best
products using the android platform. Android Studio provides an easy way of coding for the
development of android operating systems.
https://www.c-sharpcorner.com/ebooks/ 156

20
Quality Assurance
Overview
In this chapter, we will explore the introduction emphasizes the
critical role of quality assurance in software development. The test
plan outlines testing levels from module to post-execution. Test
cases detail scenarios for various functionalities, including managing
contacts, submitting cases, confirming availability, sending
notifications, setting ratings, communicating with contacts, and
saving case history. A link is provided for the Software Quality
Assurance Document for feedback submission.
https://www.c-sharpcorner.com/ebooks/ 157

Introduction:
Testing the functionalities is the most impotent part of the testing also for the development of the
product because with quality assurance we check whether the functionalities work properly in
the way that we want. Quality assurance is very important for finding errors in the application
and to deal with bugs in the product. Quality assurance helps the software engineers to find fix
and remove errors and bugs very efficiently and make the product more efficient and flexible. In
quality assurance, we check which tools are best for the development of the product and how
the software engineer will find and fix the bugs from the application using that tool.
Test Plan:
In the test plan, we plan that we define the objective and task we define the scope of the testing,
and check which testing strategy is best for the quality assurance in the development of the
product. Here in the test plan following the testing level, we will cover quality assurance for
“Online LawFirm” in the testing level we will assure the modeling testing to post-execution
testing.
• Module testing
• Integration testing
• System testing
• Acceptance testing
• Deployment testing
• Post execution testing
Module testing:
In module testing, we will test each module and ensure that every module and check whether
the functionalities work properly in the way that we want. We created a separate and small
testing procedure for every single module and tried to test each module of the application
separately. Testing is done on the module level by dividing the module into chunks and checking
the quality of the module separately. The following module is being tested under the umbrella of
Module testing.
• Accounts Module
• Manage Account Module
• Manage Contact Module
• Case Manager Module
• Set Rating Manager Module
• Send Notification Manager Module
• Communication Manger Module
• Send Location Manager Module
• Confirm Availability Module
• Case History Saver Module
• Share Legal Documents Module
Integration testing:
After we tested each module separately then we tried the fundamental principle of integration
testing in which we combine individual units are combined and tested as a group to identify the
faults and bugs from the result of integration testing. We used test drivers and test stubs to
identify the faults and bugs from the group of units and clarify how individual units interact with
each other and work as expected.
https://www.c-sharpcorner.com/ebooks/ 158

System Testing:
After Integration testing then we tried the fundamental principle of system testing in which we
test a complete software system (OnlineLawFirm) the purpose of this testing is to evaluate the
compliance of the software product with the given software requirements.
Acceptance testing:
After Integration testing then we tried the fundamental principle of acceptance testing in which
we test the system for acceptability and test the complete software system (OnlineLawFirm) the
purpose of this testing is to evaluate the compliance of the software product with the given
business requirements and assess that whether this system or product is acceptable for
delivery.
Deployment testing:
After acceptance testing then we tried the fundamental principle of deployment testing in which
we cover two-phase of deployment testing pre-deployment testing and post-deployment testing
in pre-deployment testing we test the individual unit of the software product and overall system
testing to find errors and bugs and then fix them after pre-execution testing we will try post-
deployment testing we deployed the software product in a real-world environment and test the
system working component by component and check that data travel between software and
server software system (OnlineLawFirm) the purpose of this testing to evaluate the compliance
of the software product with the real work deployment with given software requirements. We will
deploy this system on the Google play store and an android system will be used.
https://www.c-sharpcorner.com/ebooks/ 159
A n
F
d
i r e B a
S e r v e
O n lin eL a w
r o i d M
s e
r
F ir m
o b i l e
O n
G
lin e
oS
L a
o g l
e r v
w F irm
U s
ei
e
P
c e
r s
l as y
Figure 5.1: Deployment Diagram
Test Cases:
A test case is the set of conditions or variable under which we quality engineer test the software
product and determine whether the system works as expected and satisfies the given
requirements. Test Cases also help the quality engineer to find the problem in requirements or
the design of the application.

Sign Up:
5.1: Sign Up (Success)
ID  Test  Test Case  Test Case  Test case  Test case Data  Expected  Status
| Case        | Summary       | Steps       | Description  |     | Results  |     |
| ----------- | ------------- | ----------- | ------------ | --- | -------- | --- |
| OLF1  Sign  | objective:    | Pre-        | The user     |     |          |     |
| Up          | The           | condition:  | Must have a  |     |          |     |
|             | objective     |             | valid Email  |     |          |     |
|             | of this test  |             | Address      |     |          |     |
case is to
evaluate
the Sign-
up
Activity
|     |     | Step-1  | User Enter  | Mudassar   | The first  | Pass  |
| --- | --- | ------- | ----------- | ---------- | ---------- | ----- |
|     |     |         | his First   |            | Name       |       |
|     |     |         | Name        |            | Entered    |       |
Successfully
|     |     | Step-2  | User Enter  | Ali  | The last  | Pass  |
| --- | --- | ------- | ----------- | ---- | --------- | ----- |
|     |     |         | his Last    |      | Name      |       |
|     |     |         | Name        |      | Entered   |       |
Successfully
|     |     | Step-2  | User Select  | Client  | Status   | Pass  |
| --- | --- | ------- | ------------ | ------- | -------- | ----- |
|     |     |         | the status   |         | Entered  |       |
Successfully
      Step-3  Select the  Osamajechangir3131  System show  Pass
|     |     |     | Email    | @gmail.com  | Email and  |     |
| --- | --- | --- | -------- | ----------- | ---------- | --- |
|     |     |     | Address  |             | Email      |     |
Entered
Successfully
      Step-4  User Enter  13101-5968677-1  CNIC Entered  Pass
|     |     |     | the CNIC  |     | Successfully  |     |
| --- | --- | --- | --------- | --- | ------------- | --- |
Number
|     |     | Step-5  | The user      | +92                   | Country Code  | Pass  |
| --- | --- | ------- | ------------- | --------------------- | ------------- | ----- |
|     |     |         | selects his   |                       | Entered       |       |
|     |     |         | country code  |                       | Successfully  |       |
|     |     | Step-6  | Users enter   | CB-21Street No 7-     | Postal        | Pass  |
|     |     |         | the postal    | link road Abbottabad  | Address       |       |
|     |     |         | address       | Pakistan              | Entered       |       |
Successfully
|     |     | Step-7  | Users enter  | LLB, BS IN LAW,  | Education  | Pass  |
| --- | --- | ------- | ------------ | ---------------- | ---------- | ----- |
|     |     |         | education    |                  | Entered    |       |
Successfully
|     |     | Step-8  | Users enter     | Terrorism  | Specialization  | Pass  |
| --- | --- | ------- | --------------- | ---------- | --------------- | ----- |
|     |     |         | Specialization  |            | Entered         |       |
Successfully
      Step-9  Users enter  Al-Sayed Law Firm  Specialization  Pass
|     |     |          | the Firm     |              | Entered       |       |
| --- | --- | -------- | ------------ | ------------ | ------------- | ----- |
|     |     |          | Name         |              | Successfully  |       |
|     |     | Step-10  | Users enter  | 03587895698  | Phone No      | Pass  |
|     |     |          | the Phone    |              | Entered       |       |
|     |     |          | Number       |              | Successfully  |       |

https://www.c-sharpcorner.com/ebooks/  160

5.2: Sign Up (Failure)
ID  Test  Test Case  Test Case  Test case  Test case Data  Expected  Status
| Case     | Summary       | Steps       | Description  |     | Results  |     |
| -------- | ------------- | ----------- | ------------ | --- | -------- | --- |
| OL Sign  | objective:    | Pre-        | The user     |     |          |     |
| F2  Up   | The           | condition:  | Must have a  |     |          |     |
|          | objective     |             | valid Email  |     |          |     |
|          | of this test  |             | Address      |     |          |     |
case is to
evaluate
the Sign-up
Activity
|     |     | Step-1  | User Enter  | Mudassar   | The first  | Pass  |
| --- | --- | ------- | ----------- | ---------- | ---------- | ----- |
|     |     |         | his First   |            | Name       |       |
|     |     |         | Name        |            | Entered    |       |
Successfully
|     |     | Step-2  | User Enter  | Ali  | The last  | Pass  |
| --- | --- | ------- | ----------- | ---- | --------- | ----- |
|     |     |         | his Last    |      | Name      |       |
|     |     |         | Name        |      | Entered   |       |
Successfully
|     |     | Step-2  | User Select  | Client  | Status       | Fail  |
| --- | --- | ------- | ------------ | ------- | ------------ | ----- |
|     |     |         | Invalid the  |         | Entered Not  |       |
|     |     |         | status       |         | Successful   |       |
      Step-3  Select the  Osamajechangir3131  System show  Fail
|     |     |     | Email Invalid  | @gmail.com  | Email and    |     |
| --- | --- | --- | -------------- | ----------- | ------------ | --- |
|     |     |     | Address or     |             | Email        |     |
|     |     |     | Already        |             | Entered Not  |     |
|     |     |     | Registered     |             | Successful   |     |
Email
      Step-4  User Enter  13101-5968677-1  CNIC Entered  Fail
|     |     |     | the CNIC  |     | Not         |     |
| --- | --- | --- | --------- | --- | ----------- | --- |
|     |     |     | Invalid   |     | Successful  |     |
Number
|     |     | Step-5  | The user      | +92                   | Country Code  | Pass  |
| --- | --- | ------- | ------------- | --------------------- | ------------- | ----- |
|     |     |         | selects his   |                       | Entered Not   |       |
|     |     |         | country code  |                       | Successful    |       |
|     |     | Step-6  | Users enter   | CB-21Street No 7-     | Postal        | Pass  |
|     |     |         | the postal    | link road Abbottabad  | Address       |       |
|     |     |         | address       | Pakistan              | Entered       |       |
Successfully
|     |     | Step-7  | Users enter  | LLB, BS IN LAW,  | Education  | Pass  |
| --- | --- | ------- | ------------ | ---------------- | ---------- | ----- |
|     |     |         | education    |                  | Entered    |       |
Successfully
|     |     | Step-8  | Users enter     | Terrorism  | Specialization  | Pass  |
| --- | --- | ------- | --------------- | ---------- | --------------- | ----- |
|     |     |         | Specialization  |            | Entered         |       |
Successfully
      Step-9  Users enter  Al-Sayed Law Firm  Specialization  Pass
|     |     |          | the Firm       |              | Entered       |       |
| --- | --- | -------- | -------------- | ------------ | ------------- | ----- |
|     |     |          | Name           |              | Successfully  |       |
|     |     | Step-10  | The user       | 03587895698  | Phone No      | Fail  |
|     |     |          | enters the     |              | Entered Not   |       |
|     |     |          | Phone Invalid  |              | Successful    |       |
Number

| https://www.c-sharpcorner.com/ebooks/  |     |     |     |     |     | 161  |
| -------------------------------------- | --- | --- | --- | --- | --- | ---- |

Sign In:
5.3: Sign in (Success)
ID  Test  Test Case  Test Case  Test case  Test case Data  Expected  Status
| Case        | Summary     | Steps  | Description  |     | Results  |     |
| ----------- | ----------- | ------ | ------------ | --- | -------- | --- |
| OLF3  Sign  | Objective:  | Pre-   | The User     |     |          |     |
must have
| In  | The        | condition:  |             |     |     |     |
| --- | ---------- | ----------- | ----------- | --- | --- | --- |
|     | objective  |             | an account  |     |     |     |

of this test
case is to
evaluate
the Sign-in
Activity
|     |     | Step-1  | User Select  | Mudassarali2395  | System    | Pass  |
| --- | --- | ------- | ------------ | ---------------- | --------- | ----- |
|     |     |         | the Email    | @gmail.com       | Show the  |       |
|     |     |         | Address      |                  | Email     |       |
Address
and Email is
selected
Successfully
5.4: Sign in (Failure)
ID  Test  Test Case  Test Case  Test case  Test case Data  Expected  Status
| Case        | Summary     | Steps  | Description  |     | Results  |     |
| ----------- | ----------- | ------ | ------------ | --- | -------- | --- |
| OLF4  Sign  | Objective:  | Pre-   | The User     |     |          |     |
must have an
| In  | The        | condition:  |          |     |     |     |
| --- | ---------- | ----------- | -------- | --- | --- | --- |
|     | objective  |             | account  |     |     |     |

of this test
case is to
evaluate
the Sign-in
Activity
|     |     | Step-1  | User Select    | Osamajechangir3  | System    | Fail  |
| --- | --- | ------- | -------------- | ---------------- | --------- | ----- |
|     |     |         | Invalid Email  | @gmail.com       | Show the  |       |
|     |     |         | Address        |                  | Email     |       |
Address
and Email
is selected
Not
Successful
5.5: Sign in (Failure)
ID  Test  Test Case  Test Case  Test case  Test case Data  Expected  Status
| Case   | Summary  | Steps  | Description  |     | Results  |     |
| ------ | -------- | ------ | ------------ | --- | -------- | --- |
The User
| OLF5  Sign  | Objective:  | Pre-        |            |     |     |     |
| ----------- | ----------- | ----------- | ---------- | --- | --- | --- |
| In          | The         | condition:  | must have  |     |     |     |
an account
objective
|     | of this test  |     |     |     |     |     |
| --- | ------------- | --- | --- | --- | --- | --- |
case is to
evaluate

https://www.c-sharpcorner.com/ebooks/  162

the Sign-up
Activity
|     |     | Step-1  | User Select    | Mudassarali2395  |     | System       | Fail  |
| --- | --- | ------- | -------------- | ---------------- | --- | ------------ | ----- |
|     |     |         | Other Email    | @gmail.com       |     | Show the     |       |
|     |     |         | Address that   |                  |     | Email        |       |
|     |     |         | is not         |                  |     | Address      |       |
|     |     |         | registered in  |                  |     | and Email    |       |
|     |     |         | the system     |                  |     | is selected  |       |
Not
Successful
Manage Contacts:
5.6: Manage Contacts (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case   | Summary  | Steps  | Description  |     | Data  | Results  |     |
| ------ | -------- | ------ | ------------ | --- | ----- | -------- | --- |
•
| OLF6  Manage  | Objective:   | Pre-        |     | The      |     |     |     |
| ------------- | ------------ | ----------- | --- | -------- | --- | --- | --- |
| Contact       | To Evaluate  | Condition:  |     | desired  |     |     |     |
contact
|     | the            |     |     |          |     |     |     |
| --- | -------------- | --- | --- | -------- | --- | --- | --- |
|     | Functionality  |     |     | must be  |     |     |     |
connected
of Manage
to the
Contact
user
Activity
|     |     |     |     | •  The user  |     |     |     |
| --- | --- | --- | --- | ------------ | --- | --- | --- |
must be
signed In
|     |     | Steps 1  | User Select the  |     | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | --- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        |     | Option     | will be    |       |
shown to
the system
Successfully
|     |     | Steps 2  | User Select the  |     | Case      | Case Menu    | Pass  |
| --- | --- | -------- | ---------------- | --- | --------- | ------------ | ----- |
|     |     |          | case Requests    |     | Requests  | Requests     |       |
|     |     |          | Option           |     | Option    | option will  |       |
be shown
to the
system
Successfully
|     |     | Steps 3  | User Select the   |     | Case         | Case          | Pass  |
| --- | --- | -------- | ----------------- | --- | ------------ | ------------- | ----- |
|     |     |          | case Requests to  |     | Description  | Description   |       |
|     |     |          | accept Option     |     | option       | option open   |       |
|     |     |          |                   |     | open to the  | successfully  |       |
user
|     |     | Step 4  | User Select the   |     | case      | Contact       | Pass  |
| --- | --- | ------- | ----------------- | --- | --------- | ------------- | ----- |
|     |     |         | case Requests to  |     | Requests  | Added to      |       |
|     |     |         | accept Option     |     | accept    | Connects      |       |
|     |     |         |                   |     | Option    | To system     |       |
|     |     |         |                   |     | selected  | successfully  |       |

5.7: Manage Contacts (Failure)

https://www.c-sharpcorner.com/ebooks/  163

ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case          | Summary     | Steps  | Description  | Data  | Results  |     |
| ------------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF7  Manage  | Objective:  | Pre-   | •  The       |       |          |     |
desired
| Contact  | To Evaluate  | Condition:  |          |     |     |     |
| -------- | ------------ | ----------- | -------- | --- | --- | --- |
|          | the          |             | contact  |     |     |     |
must be
Functionality
|     | of Manage  |     | connected  |     |     |     |
| --- | ---------- | --- | ---------- | --- | --- | --- |
to the
Contact
user
Activity
•  The user
must be
signed In
|     |     | Steps 1  | User Select the  | Case Menu    | Case Menu   | Pass  |
| --- | --- | -------- | ---------------- | ------------ | ----------- | ----- |
|     |     |          | Case Menu        | Option       | will be     |       |
|     |     |          |                  | open to the  | shown to    |       |
|     |     |          |                  | user         | the system  |       |
Successfully
|     |     | Steps 2  | User Select the  | Case         | Case Menu    | Pass  |
| --- | --- | -------- | ---------------- | ------------ | ------------ | ----- |
|     |     |          | case Requests    | Requests     | Requests     |       |
|     |     |          | Option           | Option       | option will  |       |
|     |     |          |                  | open to the  | be shown     |       |
|     |     |          |                  | user         | to the       |       |
system
Successfully
|     |     | Steps 3  | User Select the   | Case         | The case      | Fail  |
| --- | --- | -------- | ----------------- | ------------ | ------------- | ----- |
|     |     |          | case Requests     | Description  | Description   |       |
|     |     |          | Reject Option     | option       | option does   |       |
|     |     |          |                   | open to the  | not open      |       |
|     |     |          |                   | user         | successfully  |       |
|     |     | Step 4   | User Select the   | case         | Contact       | Pass  |
|     |     |          | case Requests to  | Requests     | Added to      |       |
|     |     |          | accept Option     | accept       | Connects      |       |
|     |     |          |                   | Options      | To system     |       |
|     |     |          |                   | selected     | successfully  |       |
and open
to the user
|     |     | Step 5  | User Select     | case      | case        | Fail  |
| --- | --- | ------- | --------------- | --------- | ----------- | ----- |
|     |     |         | Invalid         | Requests  | Requests    |       |
|     |     |         | Option with no  | accept    | accept      |       |
|     |     |         | Internet        | Option    | Option not  |       |
|     |     |         |                 | selected  | selected    |       |
Submit Case:
5.8: Submit Case (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case          | Summary      | Steps       | Description  | Data  | Results  |     |
| ------------- | ------------ | ----------- | ------------ | ----- | -------- | --- |
| OLF8  Submit  | Objective:   | Pre-        | •  The       |       |          |     |
| Case          | To Evaluate  | Condition:  | desired      |       |          |     |
|               | the          |             | contact      |       |          |     |
must be
Functionality
connected

https://www.c-sharpcorner.com/ebooks/  164

|     | of Submit       |     | to the  |     |     |     |
| --- | --------------- | --- | ------- | --- | --- | --- |
|     | Case Activity   |     | user    |     |     |     |
•
The user
must be
signed In
|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        | Option     | will be    |       |
shown to
the system
Successfully
|     |     | Steps 2  | User Select the   | Case send  | Case Menu    | Pass  |
| --- | --- | -------- | ----------------- | ---------- | ------------ | ----- |
|     |     |          | case send case    | Requests   | Requests     |       |
|     |     |          | Requests Option   | Option     | option will  |       |
|     |     |          |                   | open to    | be shown to  |       |
|     |     |          |                   | user       | the system   |       |
Successfully
|     |     | Steps 3  | User Fill the Case  | Case          | Case          | Pass  |
| --- | --- | -------- | ------------------- | ------------- | ------------- | ----- |
|     |     |          | Registration form   | Registration  | Registration  |       |
|     |     |          |                     | option open   | option open   |       |
|     |     |          |                     | to the user   | successfully  |       |
|     |     | Step 4   | User Select the     | case          | case Added    | Pass  |
|     |     |          | case Requests       | Requests      | in history    |       |
|     |     |          | send Option         | send Option   | and send      |       |
|     |     |          |                     | selected      | successfully  |       |
|     |     | Step 5   | User Select the     | case          | case          | Pass  |
|     |     |          | case Requests to    | Requests      | Requests      |       |
|     |     |          | send option and     | send case     | send case     |       |
|     |     |          | Profile Option of   | Option and    | Option and    |       |
|     |     |          | targeted            | Profile       | Profile       |       |
|     |     |          |                     | selected      | selected      |       |
Successfully
Submit Case Failure:
5.9: Submit Case (Failure)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case   | Summary  | Steps  | Description  | Data  | Results  |     |
| ------ | -------- | ------ | ------------ | ----- | -------- | --- |
•  The
| OLF9  Submit  | Objective:   | Pre-        |          |     |     |     |
| ------------- | ------------ | ----------- | -------- | --- | --- | --- |
| Case          | To Evaluate  | Condition:  | desired  |     |     |     |
contact
|     | the            |     |          |     |     |     |
| --- | -------------- | --- | -------- | --- | --- | --- |
|     | Functionality  |     | must be  |     |     |     |
connected
of Submit
to the
Case Activity
user
•  The user
must be
signed In

https://www.c-sharpcorner.com/ebooks/  165

|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        | Option     | will be    |       |
shown to
the system
Successfully
|     |     | Steps 2  | User Select the   | Case send  | Case Menu    | Pass  |
| --- | --- | -------- | ----------------- | ---------- | ------------ | ----- |
|     |     |          | case send case    | Requests   | Requests     |       |
|     |     |          | Requests Option   | Option     | option will  |       |
|     |     |          |                   | open to    | be shown to  |       |
|     |     |          |                   | user       | the system   |       |
Successfully
|     |     | Steps 3  | User Fill the Case  | Case          | Case          | Fail  |
| --- | --- | -------- | ------------------- | ------------- | ------------- | ----- |
|     |     |          | Registration form   | Registration  | Registration  |       |
|     |     |          | And fill invalid    | option open   | option open   |       |
|     |     |          | data                | to the user   | successfully  |       |
|     |     | Step 4   | User Select the     | case          | Case not      | Fail  |
|     |     |          | case Requests       | Requests      | Added in      |       |
|     |     |          | send Option         | send Option   | history       |       |
|     |     |          |                     | selected      | and send      |       |
not
successfully
|     |     | Step 5  | User Select the    | case        | case        | Pass  |
| --- | --- | ------- | ------------------ | ----------- | ----------- | ----- |
|     |     |         | case Requests to   | Requests    | Requests    |       |
|     |     |         | send option and    | send case   | send case   |       |
|     |     |         | Profile Option of  | Option and  | Option and  |       |
|     |     |         | targeted           | Profile     | Profile     |       |
|     |     |         |                    | selected    | selected    |       |
Successfully
Confirm Availability:
5.10: Confirm Availability (Success)
ID  Test Case   Test Case  Test Case  Test case  Test  Expected  Status
|     | Summary  | Steps  | Description  | case  | Results  |     |
| --- | -------- | ------ | ------------ | ----- | -------- | --- |
Data
| OLF10  Confirm  | Objective:  | Pre- | The User must  |     |     |     |
| --------------- | ----------- | ---- | -------------- | --- | --- | --- |
have an account
| Availability  | The        | conditio |              |     |     |     |
| ------------- | ---------- | -------- | ------------ | --- | --- | --- |
|               | objective  | n        | The desired  |     |     |     |
contact must be
of this test
connected to the
case is to
user
evaluate
The user must be
the Confirm
signed In
Availability

Activity
|     |     | Step-1  | User Select the   | User        | User Select   | Pass  |
| --- | --- | ------- | ----------------- | ----------- | ------------- | ----- |
|     |     |         | Confirm           | Select the  | the Confirm   |       |
|     |     |         | Availability      | Confirm     | Availability  |       |
|     |     |         | Option Check the  | Availabili  | Option to     |       |
|     |     |         | option            | ty Option   | send to the   |       |

https://www.c-sharpcorner.com/ebooks/  166

|     |     |     |     | Visible to  | user          |     |
| --- | --- | --- | --- | ----------- | ------------- | --- |
|     |     |     |     | the user    | Successfully  |     |
5.11: Confirm Availability (Failure)
ID  Test Case   Test Case  Test Case  Test case  Test case  Expected  Status
|                 | Summary     | Steps  | Description  | Data  | Results  |     |
| --------------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF11  Confirm  | Objective:  | Pre-   | The User     |       |          |     |
must have
| Availability  | The        | condition:  |             |     |     |     |
| ------------- | ---------- | ----------- | ----------- | --- | --- | --- |
|               | objective  |             | an account  |     |     |     |
The desired
of this test
|     | case is to  |     | contact  |     |     |     |
| --- | ----------- | --- | -------- | --- | --- | --- |
must be
evaluate
connected
the
to the user
Confirm
The user
Availability
must be
Activity
signed In

      Step-1  User Select the  User Select  User Select  Fail
|     |     |     | Confirm       | the           | the Confirm   |     |
| --- | --- | --- | ------------- | ------------- | ------------- | --- |
|     |     |     | Availability  | Confirm       | Availability  |     |
|     |     |     | Option to     | Availability  | Option does   |     |
|     |     |     | uncheck the   | Option        | not send to   |     |
|     |     |     | option        | Visible to    | the user      |     |
|     |     |     |               | the user      | Successfully  |     |

Send Location:
5.12: Send Location (Success)
ID  Test  Test Case  Test Case  Test case  Test  Actual  Status
| Case   | Summary  | Steps  | Description  | case  | Results  |     |
| ------ | -------- | ------ | ------------ | ----- | -------- | --- |
Data
•  The User
| OLF12  Send  | Objective:   | Pre-        |            |     |     |     |
| ------------ | ------------ | ----------- | ---------- | --- | --- | --- |
| Location     | To Evaluate  | Condition:  | must have  |     |     |     |
an
|     | the            |     |          |     |     |     |
| --- | -------------- | --- | -------- | --- | --- | --- |
|     | Functionality  |     | account  |     |     |     |
•  The
of Send
desired
Location
contact
Activity
must be
connected
to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case    | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ------- | ---------- | ----- |
|     |     |          | Case Menu        | Menu    | will be    |       |
|     |     |          |                  | Option  | shown to   |       |
the system
Successfully

https://www.c-sharpcorner.com/ebooks/  167

|     |     | Steps 2  | User Select the  | case  case history    | Pass  |
| --- | --- | -------- | ---------------- | --------------------- | ----- |
|     |     |          | case history     | history  option will  |       |
|     |     |          | Option           | Option  be shown      |       |
open to  to the user
user  Successfully
|     |     | Steps 3  | User Select the  | Send  Current        | Pass  |
| --- | --- | -------- | ---------------- | -------------------- | ----- |
|     |     |          | case history     | location  Longitude  |       |
|     |     |          | Option and send  | option  and          |       |
|     |     |          | the location     | open to  Latitude    |       |
|     |     |          | option           | the  Selected        |       |
user   successfully

|     |     | Step 4  | User Select the  | Send  Current          | Pass  |
| --- | --- | ------- | ---------------- | ---------------------- | ----- |
|     |     |         | case history     | location  Location     |       |
|     |     |         | Option and send  | option  send           |       |
|     |     |         | the location     | open to  successfully  |       |
|     |     |         | option           | the                    |       |
user
|     |     | Step 5  | User Select the  | Send  Current          | Pass  |
| --- | --- | ------- | ---------------- | ---------------------- | ----- |
|     |     |         | case history     | location  Location     |       |
|     |     |         | Option and send  | option  send           |       |
|     |     |         | the location     | open to  successfully  |       |
|     |     |         | option           | the  and added         |       |
user  in Case
History

5.13: Send Location (Failure)
ID  Test  Test Case  Test Case  Test case  Test  Actual  Status
| Case   | Summary  | Steps  | Description  | case  Results  |     |
| ------ | -------- | ------ | ------------ | -------------- | --- |
Data
| OLF13  Send  | Objective:   | Pre-        | •  The User  |     |     |
| ------------ | ------------ | ----------- | ------------ | --- | --- |
| Location     | To Evaluate  | Condition:  | must have    |     |     |
an
|     | the  |     |     |     |     |
| --- | ---- | --- | --- | --- | --- |
Functionality  account
•  The
of Send
Location  desired
contact
Activity
must be
connected
to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case  Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------------- | ----- |
|     |     |          | Case Menu        | Menu  will be    |       |
Option  shown to
the system
Successfully

https://www.c-sharpcorner.com/ebooks/  168

|     |     | Steps 2  | User Select the  | case      | case history  | Pass  |
| --- | --- | -------- | ---------------- | --------- | ------------- | ----- |
|     |     |          | case history     | history   | option will   |       |
|     |     |          | Option           | Option    | be shown      |       |
|     |     |          |                  | open to   | to the user   |       |
|     |     |          |                  | user      | Successfully  |       |
|     |     | Steps 3  | User Select the  | Send      | Current       | Fail  |
|     |     |          | case history     | location  | Longitude     |       |
|     |     |          | Option and send  | option    | and           |       |
|     |     |          | the location     | open to   | Latitude      |       |
|     |     |          | option           | the       | Not           |       |
|     |     |          |                  | user      | Selected      |       |
successfully
|     |     | Step 4  | User Select the  | Send      | Current       | Fail  |
| --- | --- | ------- | ---------------- | --------- | ------------- | ----- |
|     |     |         | case history     | location  | Location      |       |
|     |     |         | Option and send  | option    | Not sent      |       |
|     |     |         | the location     | open to   | successfully  |       |
|     |     |         | option           | the       |               |       |
user
|     |     | Step 5  | User Select the  | Send      | Current       | Fail  |
| --- | --- | ------- | ---------------- | --------- | ------------- | ----- |
|     |     |         | case history     | location  | Location      |       |
|     |     |         | Option and send  | option    | Not sent      |       |
|     |     |         | the location     | open to   | successfully  |       |
|     |     |         | option           | the       | and not       |       |
|     |     |         |                  | user      | added in      |       |
Case
History
Send Legal Document:
5.14: Send Legal Document (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case       | Summary      | Steps    | Description  | Data  | Results  |     |
| ---------- | ------------ | -------- | ------------ | ----- | -------- | --- |
| OLF1 Send  | Objective:   | Pre-     | •  The User  |       |          |     |
| 4  Legal   | To Evaluate  | Conditio | must         |       |          |     |
have an
| Documen | the  | n:  |     |     |     |     |
| ------- | ---- | --- | --- | --- | --- | --- |
account
| t   | Functionalit |     |     |     |     |     |
| --- | ------------ | --- | --- | --- | --- | --- |
•  The
y of Send
desired
Legal
contact
Document
must be
Activity
connecte
d to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case    | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ------- | ---------- | ----- |
|     |     |          | Case Menu        | Menu    | will be    |       |
|     |     |          |                  | Option  | shown to   |       |
the system
Successfully

https://www.c-sharpcorner.com/ebooks/  169

|     |     | Steps 2  | User Select the   | Send       | Send Legal    | Pass  |
| --- | --- | -------- | ----------------- | ---------- | ------------- | ----- |
|     |     |          | Send Legal        | Legal      | Document      |       |
|     |     |          | Document Option   | Documen    | Option will   |       |
|     |     |          |                   | t Option   | be shown to   |       |
|     |     |          |                   | open to    | the user      |       |
|     |     |          |                   | user       | Successfully  |       |
|     |     | Steps 3  | User Select Send  | Send       | Send Legal    | Pass  |
|     |     |          | Legal Document    | Legal      | Document      |       |
|     |     |          | Option and send   | Documen    | Option will   |       |
|     |     |          | the document      | t option   | be shown to   |       |
|     |     |          |                   | open to    | the user and  |       |
|     |     |          |                   | the user   | Document      |       |
Selected
Successfully
|     |     | Step 4  | User Select Send  | Send      | A current     | Pass  |
| --- | --- | ------- | ----------------- | --------- | ------------- | ----- |
|     |     |         | Legal Document    | Legal     | Selected      |       |
|     |     |         | Option and click  | Documen   | document      |       |
|     |     |         | the document      | t option  | was sent      |       |
|     |     |         | sent option       | and       | successfully  |       |
documen
t selected
|     |     | Step 5  | User Select Send  | Send          | A current     | Pass  |
| --- | --- | ------- | ----------------- | ------------- | ------------- | ----- |
|     |     |         | Legal Document    | Legal         | Selected      |       |
|     |     |         | Option and click  | Documen       | document      |       |
|     |     |         | the document      | t option      | was sent      |       |
|     |     |         | sent option       | and           | successfully  |       |
|     |     |         |                   | documen       | And added     |       |
|     |     |         |                   | t selected    | in            |       |
OnlineLawF
irm Folder

5.15: Send Legal Document (Failure)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Stat
| Case       | Summary     | Steps  | Description  | Data  | Results  | us  |
| ---------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF1 Send  | Objective:  | Pre-   | •  The User  |       |          |     |
must
| 5  Legal  | To Evaluate  | Conditio |          |     |     |     |
| --------- | ------------ | -------- | -------- | --- | --- | --- |
| Documen   | the          | n:       | have an  |     |     |     |
account
| t   | Functionalit |     |     |     |     |     |
| --- | ------------ | --- | --- | --- | --- | --- |
•  The
y of Send
desired
Legal
contact
Document
must be
Activity
connecte
d to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case    | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ------- | ---------- | ----- |
|     |     |          | Case Menu        | Menu    | will be    |       |
|     |     |          |                  | Option  | shown to   |       |
the system

https://www.c-sharpcorner.com/ebooks/  170

Successfully
|     |     | Steps 2  | User Select the   | Send       | Send Legal    | Pass  |
| --- | --- | -------- | ----------------- | ---------- | ------------- | ----- |
|     |     |          | Send Legal        | Legal      | Document      |       |
|     |     |          | Document Option   | Documen    | Option will   |       |
|     |     |          |                   | t Option   | be shown to   |       |
|     |     |          |                   | open to    | the user      |       |
|     |     |          |                   | user       | Successfully  |       |
|     |     | Steps 3  | User Select Send  | Send       | Send Legal    | Fail  |
|     |     |          | Legal Document    | Legal      | Document      |       |
|     |     |          | Option and send   | Documen    | Option will   |       |
|     |     |          | the document      | t option   | be shown to   |       |
|     |     |          |                   | open to    | the user and  |       |
|     |     |          |                   | the user   | Document      |       |
Not Selected
Successfully
|     |     | Step 4  | User Select Send  | Send      | Current       | Fail  |
| --- | --- | ------- | ----------------- | --------- | ------------- | ----- |
|     |     |         | Legal Document    | Legal     | Selected      |       |
|     |     |         | Option and click  | Documen   | Document      |       |
|     |     |         | the document      | t option  | Not sent      |       |
|     |     |         | sent option       | and       | successfully  |       |
documen
t selected
|     |     | Step 5  | User Select Send  | Send          | Current       | Fail  |
| --- | --- | ------- | ----------------- | ------------- | ------------- | ----- |
|     |     |         | Legal Document    | Legal         | Selected      |       |
|     |     |         | Option and click  | Documen       | Document      |       |
|     |     |         | the document      | t option      | Not sent      |       |
|     |     |         | sent option       | and           | successfully  |       |
|     |     |         |                   | documen       | And not       |       |
|     |     |         |                   | t selected    | added in      |       |
OnlineLawF
irm Folder
Verify Case:
5.16: Verify Case (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case           | Summary     | Steps  | Description  | Data  | Results  |     |
| -------------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF16  Verify  | Objective:  | Pre-   | •  The User  |       |          |     |
must have
| Case  | To Evaluate  | Condition:  |     |     |     |     |
| ----- | ------------ | ----------- | --- | --- | --- | --- |
|       | the          |             | an  |     |     |     |
account
Functionality
•  The
of Verify
desired
Case Activity
contact
must be
connected
to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        | Option     | will be    |       |

https://www.c-sharpcorner.com/ebooks/  171

shown to
the system
Successfully
|     |     | Steps 2  | User Select the   |     | Case         | Case          | Pass  |
| --- | --- | -------- | ----------------- | --- | ------------ | ------------- | ----- |
|     |     |          | Case Description  |     | Description  | Description   |       |
|     |     |          | Option            |     | Option       | Option will   |       |
|     |     |          |                   |     | open to      | be shown      |       |
|     |     |          |                   |     | user         | to the user   |       |
Successfully
5.17: Verify Case (Failure)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case           | Summary      | Steps       | Description  |            | Data  | Results  |     |
| -------------- | ------------ | ----------- | ------------ | ---------- | ----- | -------- | --- |
| OLF17  Verify  | Objective:   | Pre-        | •            | The User   |       |          |     |
| Case           | To Evaluate  | Condition:  |              | must have  |       |          |     |
an
|     | the  |     |     |     |     |     |     |
| --- | ---- | --- | --- | --- | --- | --- | --- |
account
Functionality
•  The
of Verify
desired
Case Activity
contact
must be
connected
to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  |     | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | --- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        |     | Option     | will be    |       |
shown to
the system
Successfully
|     |     | Steps 2  | User Select the  |     | Case         | Case         | Fail  |
| --- | --- | -------- | ---------------- | --- | ------------ | ------------ | ----- |
|     |     |          | invalid Case     |     | Description  | Description  |       |
|     |     |          | Description      |     | Option       | Option will  |       |
|     |     |          | Option           |     | does not     | not be       |       |
|     |     |          |                  |     | open to the  | shown to     |       |
|     |     |          |                  |     | user         | the user     |       |
Successfully

5.18: Send Notification (Success)
ID  Test Case   Test Case  Test Case  Test case  Test case  Actual  Status
|                | Summary      | Steps    | Description  |              | Data  | Results  |     |
| -------------- | ------------ | -------- | ------------ | ------------ | ----- | -------- | --- |
| OLF1 Send      | Objective:   | Pre-     |              | •  The User  |       |          |     |
| 8  Notificatio | To Evaluate  | Conditio |              | must         |       |          |     |
have an
| n   | the  | n:  |     |     |     |     |     |
| --- | ---- | --- | --- | --- | --- | --- | --- |
account
|     | Functionalit |     |     |         |     |     |     |
| --- | ------------ | --- | --- | ------- | --- | --- | --- |
|     |              |     |     | •  The  |     |     |     |
y of Send
desired
Notification
contact
Activity
must be

https://www.c-sharpcorner.com/ebooks/  172

connecte
d to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case    | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ------- | ---------- | ----- |
|     |     |          | Case Menu        | Menu    | will be    |       |
|     |     |          |                  | Option  | shown to   |       |
the system
Successfully
|     |     | Steps 2  | User Select Send  | Send      | Send         | Pass  |
| --- | --- | -------- | ----------------- | --------- | ------------ | ----- |
|     |     |          | the Location      | Location  | Location     |       |
|     |     |          |                   | Option    | Option will  |       |
|     |     |          |                   | open to   | be shown to  |       |
|     |     |          |                   | user      | the user     |       |
and a
Notification
send
Successfully
|     |     | Steps 3  | User Select Send  | Send       | Send Legal   | Pass  |
| --- | --- | -------- | ----------------- | ---------- | ------------ | ----- |
|     |     |          | the Document      | Legal      | Document     |       |
|     |     |          | option            | Documen    | Option will  |       |
|     |     |          |                   | t option   | be shown to  |       |
|     |     |          |                   | open to    | the user     |       |
|     |     |          |                   | the user   | and          |       |
Document
Selected,
and
Notification
send
Successfully
|     |     | Step 4  | User except for   | Case       | Notification  | Pass  |
| --- | --- | ------- | ----------------- | ---------- | ------------- | ----- |
|     |     |         | the case request  | Accepted   | sent          |       |
|     |     |         | option and click  |            | successfully  |       |
the Except case
5.19: Send Notification (Failure)
ID  Test Case   Test Case  Test Case  Test case  Test case  Actual  Status
|                | Summary      | Steps    | Description  | Data  | Results  |     |
| -------------- | ------------ | -------- | ------------ | ----- | -------- | --- |
| OLF1 Send      | Objective:   | Pre-     | •  The User  |       |          |     |
| 9  Notificatio | To Evaluate  | Conditio | must         |       |          |     |
| n              | the          | n:       | have an      |       |          |     |
account
|     | Functionalit |     |     |     |     |     |
| --- | ------------ | --- | --- | --- | --- | --- |
•  The
y of Send
desired
Notification
contact
Activity
must be
connecte
d to the
user

https://www.c-sharpcorner.com/ebooks/  173

•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case    | Case     | Pass  |
| --- | --- | -------- | ---------------- | ------- | -------- | ----- |
|     |     |          | Case Menu        | Menu    | Menu     |       |
|     |     |          |                  | Option  | will be  |       |
shown to
the
system
Successf
ully
|     |     | Steps 2  | User Select Send  | Send      | Send      | Fail  |
| --- | --- | -------- | ----------------- | --------- | --------- | ----- |
|     |     |          | the Location      | Location  | Location  |       |
|     |     |          |                   | Option    | Option    |       |
|     |     |          |                   | open to   | will not  |       |
|     |     |          |                   | user      | be        |       |
shown to
the user
and a
Notificati
on send
Successf
ully
|     |     | Steps 3  | User Select Send  | Send       | Send     | Fail  |
| --- | --- | -------- | ----------------- | ---------- | -------- | ----- |
|     |     |          | the Document      | Legal      | Legal    |       |
|     |     |          | option            | Documen    | Docume   |       |
|     |     |          |                   | t option   | nt       |       |
|     |     |          |                   | open to    | Option   |       |
|     |     |          |                   | the user   | will be  |       |
shown to
the user
and
Docume
nt Not
Selected,
and
Notificati
on send
Successf
ully
|     |     | Step 4  | User except for   | Case       | Notificati | Fail  |
| --- | --- | ------- | ----------------- | ---------- | ---------- | ----- |
|     |     |         | the case request  | Accepted   | on Not     |       |
|     |     |         | option and click  |            | sent       |       |
|     |     |         | the Except case   |            | successf   |       |
ully

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |

https://www.c-sharpcorner.com/ebooks/  174

Set Rating:
5.20: Set Rating (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case        | Summary     | Steps  | Description  | Data  | Results  |     |
| ----------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF20  Set  | Objective:  | Pre-   | •  The User  |       |          |     |
must have
| Rating  | To Evaluate  | Condition:  |     |     |     |     |
| ------- | ------------ | ----------- | --- | --- | --- | --- |
|         | the          |             | an  |     |     |     |
account
Functionality
|     | of Set Rating  |     | •  The  |     |     |     |
| --- | -------------- | --- | ------- | --- | --- | --- |
desired
Activity
contact
must be
connected
to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        | Option     | will be    |       |
shown to
the system
Successfully
|     |     | Steps 2  | User Select the  | ongoing  | Case Menu     | Pass  |
| --- | --- | -------- | ---------------- | -------- | ------------- | ----- |
|     |     |          | ongoing case     | case     | ongoing       |       |
|     |     |          | Option           | Option   | case will be  |       |
|     |     |          |                  | open to  | shown to      |       |
|     |     |          |                  | user     | the system    |       |
Successfully
|     |     | Steps 3  | The user opens  | Case         | The case      | Pass  |
| --- | --- | -------- | --------------- | ------------ | ------------- | ----- |
|     |     |          | the case        | description  | description   |       |
|     |     |          |                 | option       | option        |       |
|     |     |          |                 | open to the  | opens         |       |
|     |     |          |                 | user         | successfully  |       |
|     |     | Step 4   | Lawyer Mark     | Lawyer       | Lawyer        | Pass  |
|     |     |          | Case Complete   | Mark Case    | Mark Case     |       |
|     |     |          | Option          | Complete     | Complete      |       |
|     |     |          |                 | Option and   | Option and    |       |
|     |     |          |                 | pop up the   | pop up the    |       |
|     |     |          |                 | menu         | menu          |       |
|     |     |          |                 | shown to     | shown to      |       |
|     |     |          |                 | the user     | the user      |       |
Successfully
|     |     | Step 5  | Lawyer Mark       | Lawyer      | Lawyer       | Pass  |
| --- | --- | ------- | ----------------- | ----------- | ------------ | ----- |
|     |     |         | Case Complete     | Mark Case   | Mark Case    |       |
|     |     |         | Option-click the  | Complete    | Complete     |       |
|     |     |         | desired option    | Option and  | Option and   |       |
|     |     |         | Yes/No            | pop up the  | a pop-up     |       |
|     |     |         |                   | menu        | menu will    |       |
|     |     |         |                   | shown to    | be shown     |       |
|     |     |         |                   | the user    | the request  |       |
|     |     |         |                   | desired     | sent to the  |       |

https://www.c-sharpcorner.com/ebooks/  175

|     |     |         |                     | option      | user          |       |
| --- | --- | ------- | ------------------- | ----------- | ------------- | ----- |
|     |     |         |                     | Yes/No      | Successfully  |       |
|     |     | Step 6  | Client Receive the  | Client      | Client Mark   | Pass  |
|     |     |         | Request and         | Mark Case   | Case          |       |
|     |     |         | Mark Case as        | Complete    | Complete      |       |
|     |     |         | Complete Mark       | Option and  | Option and    |       |
|     |     |         | Case Complete       | pop up the  | a pop-up      |       |
|     |     |         | Option-click the    | menu        | menu will     |       |
|     |     |         | desired option      | shown to    | be shown      |       |
|     |     |         | Yes/No              | the user    | the request   |       |
|     |     |         |                     | desired     | sent to the   |       |
|     |     |         |                     | option      | user          |       |
|     |     |         |                     | Yes/No      | Successfully  |       |
|     |     | Step 7  | Client Receive the  | Client      | Client Mark   | Pass  |
|     |     |         | Request and         | Mark Case   | Case          |       |
|     |     |         | Mark Case as        | Complete    | Complete      |       |
|     |     |         | Complete Mark       | Option and  | Option and    |       |
|     |     |         | Case Complete       | pop up the  | a pop-up      |       |
|     |     |         | Option-click the    | menu        | menu will     |       |
|     |     |         | desired option      | shown to    | be shown      |       |
|     |     |         | Yes/No              | the user    | the request   |       |
|     |     |         |                     | desired     | sent to the   |       |
|     |     |         |                     | option      | user          |       |
|     |     |         |                     | Yes/No      | Successfully  |       |
|     |     | Step 8  | Client Receive the  | Client      | Client Mark   | Pass  |
|     |     |         | Request and         | Mark Case   | Case          |       |
|     |     |         | Mark Case as        | Complete    | Complete      |       |
|     |     |         | Complete Mark       | Option and  | Option and    |       |
|     |     |         | Case Complete       | Rating pop  | set rating    |       |
|     |     |         | Option-click the    | up the      | pop-up        |       |
|     |     |         | desired option      | menu        | menu will     |       |
|     |     |         | Yes option          | shown to    | be shown      |       |
|     |     |         |                     | the user    | Rating Sent   |       |
|     |     |         |                     | set the     | Successfully  |       |
rating

5.21: Set Rating (Failure)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case        | Summary      | Steps       | Description  | Data  | Results  |     |
| ----------- | ------------ | ----------- | ------------ | ----- | -------- | --- |
| OLF21  Set  | Objective:   | Pre-        | •  The User  |       |          |     |
| Rating      | To Evaluate  | Condition:  | must have    |       |          |     |
an
|     | the            |     |          |     |     |     |
| --- | -------------- | --- | -------- | --- | --- | --- |
|     | Functionality  |     | account  |     |     |     |
•  The
of Set Rating
desired
Activity
contact
must be
connected
to the
user

https://www.c-sharpcorner.com/ebooks/  176

•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ---------- | ----- |
|     |     |          | Case Menu        | Option     | will be    |       |
shown to the
system
Successfully
|     |     | Steps 2  | User Select the  | ongoing  | Case Menu     | Pass  |
| --- | --- | -------- | ---------------- | -------- | ------------- | ----- |
|     |     |          | ongoing case     | case     | ongoing case  |       |
|     |     |          | Option           | Option   | will be       |       |
|     |     |          |                  | open to  | shown to the  |       |
|     |     |          |                  | user     | system        |       |
Successfully
|     |     | Steps 3  | The user opens  | Case         | The case      | Fail  |
| --- | --- | -------- | --------------- | ------------ | ------------- | ----- |
|     |     |          | the case        | description  | description   |       |
|     |     |          |                 | contains     | option does   |       |
|     |     |          |                 | invalid      | not open      |       |
|     |     |          |                 | data         | successfully  |       |
option
open to the
user
|     |     | Step 4  | Lawyer Mark        | Lawyer      | Lawyer        | Pass  |
| --- | --- | ------- | ------------------ | ----------- | ------------- | ----- |
|     |     |         | Case Complete      | Mark Case   | Mark Case     |       |
|     |     |         | Option             | Complete    | Complete      |       |
|     |     |         |                    | Option and  | Option and    |       |
|     |     |         |                    | pop up the  | pop up the    |       |
|     |     |         |                    | menu        | menu shown    |       |
|     |     |         |                    | shown to    | to the user   |       |
|     |     |         |                    | the user    | Successfully  |       |
|     |     | Step 5  | Lawyer Mark        | Lawyer      | Lawyer        | Fail  |
|     |     |         | Case Complete      | Mark Case   | Mark Case     |       |
|     |     |         | Option-click the   | Not         | Complete      |       |
|     |     |         | desired option No  | Complete    | Option and a  |       |
|     |     |         |                    | Option and  | pop-up        |       |
|     |     |         |                    | pop up the  | menu will be  |       |
|     |     |         |                    | menu        | shown no      |       |
|     |     |         |                    | shown to    | request sent  |       |
|     |     |         |                    | the user    | to the user   |       |
|     |     |         |                    | desired     | Unsuccessful  |       |
option
Yes/No
|     |     | Step 6  | The client will  | Client      | Client Mark   | Pass  |
| --- | --- | ------- | ---------------- | ----------- | ------------- | ----- |
|     |     |         | not receive the  | Mark Case   | Case Not      |       |
|     |     |         | Request          | Not         | Complete      |       |
|     |     |         |                  | Complete    | Option and a  |       |
|     |     |         |                  | Option and  | pop-up        |       |
|     |     |         |                  | pop up the  | menu will be  |       |
|     |     |         |                  | menu        | shown No      |       |
|     |     |         |                  | shown to    | request sent  |       |
|     |     |         |                  | the user    | to the user   |       |
|     |     |         |                  | desired     | Unsuccessful  |       |

https://www.c-sharpcorner.com/ebooks/  177

option
Yes/No
|     |     | Step 7  | The client will  | Client      | Client Mark   | Fail  |
| --- | --- | ------- | ---------------- | ----------- | ------------- | ----- |
|     |     |         | not receive the  | Mark Case   | Case          |       |
|     |     |         | Request          | Complete    | Complete      |       |
|     |     |         |                  | Option and  | Option and a  |       |
|     |     |         |                  | pop up the  | pop-up        |       |
|     |     |         |                  | menu        | menu will be  |       |
|     |     |         |                  | shown to    | shown the     |       |
|     |     |         |                  | the user    | request sent  |       |
|     |     |         |                  | desired     | to the user   |       |
|     |     |         |                  | option      | Unsuccessful  |       |
Yes/No
      Step 8  Client Receive the  No Rating  Rating Not  Fail
|     |     |     | no Request and    | Box will be  | Set           |     |
| --- | --- | --- | ----------------- | ------------ | ------------- | --- |
|     |     |     | Mark Case as Not  | shown        | Successfully  |     |
Complete Option-
click the desired
option No option
Communicate with connects:
5.22: Communicate with Connects (Success)
ID  Test Case   Test Case  Test Case  Test case  Test case  Actual  Statu
|               | Summary      | Steps    | Description  | Data  | Results  | s   |
| ------------- | ------------ | -------- | ------------ | ----- | -------- | --- |
| OLF2 Communic | Objective:   | Pre-     | •  The User  |       |          |     |
| 2  ate with   | To Evaluate  | Conditio | must         |       |          |     |
| Connects      | the          | n:       | have an      |       |          |     |
account
|     | Functionalit |     |     |     |     |     |
| --- | ------------ | --- | --- | --- | --- | --- |
•  The
y of
desired
Communica
contact
te with
must be
Connects
connecte
Activity  d to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | The      | Communi   | Pass  |
| --- | --- | -------- | ---------------- | -------- | --------- | ----- |
|     |     |          | connects Option  | communi  | cation    |       |
|     |     |          |                  | cation   | Manager   |       |
|     |     |          |                  | Manager  | will be   |       |
|     |     |          |                  | will be  | shown     |       |
|     |     |          |                  | shown    | Successfu |       |
lly
|     |     | Steps 2  | User Open the  | Connects  | Communi  | Pass  |
| --- | --- | -------- | -------------- | --------- | -------- | ----- |
|     |     |          | connects       | will be   | cation   |       |
|     |     |          |                | open in   | Manager  |       |
|     |     |          |                | chant     | will be  |       |
shown,
and chat

https://www.c-sharpcorner.com/ebooks/  178

activity
will be
shown
Successfu
lly
|     |     | Steps 3  | User Select the  | Hello   | The      | Pass  |
| --- | --- | -------- | ---------------- | ------- | -------- | ----- |
|     |     |          | Type Message     | world   | message  |       |
|     |     |          | Option and type  |         | will be  |       |
|     |     |          | the message      |         | typed    |       |
Successfu
lly
|     |     | Step 4  | User Use the  | Hello    | Message   | Pass  |
| --- | --- | ------- | ------------- | -------- | --------- | ----- |
|     |     |         | send Message  | word     | content   |       |
|     |     |         | option        | Message  | sent      |       |
|     |     |         |               | content  |           |       |
|     |     |         |               | sent     | Successfu |       |
|     |     |         |               |          | lly and   |       |
shown in
chat
activity

5.23: Communicate with Connects (Failure)
ID  Test Case   Test Case  Test Case  Test case  Test case  Actual  Statu
|     | Summary  | Steps  | Description  | Data  | Results  | s   |
| --- | -------- | ------ | ------------ | ----- | -------- | --- |
•  The User
| OLF2 Communic | Objective:   | Pre-     |       |     |     |     |
| ------------- | ------------ | -------- | ----- | --- | --- | --- |
| 3  ate with   | To Evaluate  | Conditio | must  |     |     |     |
have an
| Connects  | the          | n:  |          |     |     |     |
| --------- | ------------ | --- | -------- | --- | --- | --- |
|           | Functionalit |     | account  |     |     |     |
•  The
y of
desired
Communica
contact
te with
must be
Connects
connecte
Activity
d to the
user
•  The user
must be
signed in
|     |     | Steps 1  | User Select the  | The      | Communi   | Pass  |
| --- | --- | -------- | ---------------- | -------- | --------- | ----- |
|     |     |          | connects Option  | communi  | cation    |       |
|     |     |          |                  | cation   | Manager   |       |
|     |     |          |                  | Manager  | will be   |       |
|     |     |          |                  | will be  | shown     |       |
|     |     |          |                  | shown    | Successfu |       |
lly
|     |     | Steps 2  | User Open the  | Connects  | Communi  | Pass  |
| --- | --- | -------- | -------------- | --------- | -------- | ----- |
|     |     |          | connects       | will be   | cation   |       |
|     |     |          |                | open in   | Manager  |       |
|     |     |          |                | chant     | will be  |       |
shown,
and chat

https://www.c-sharpcorner.com/ebooks/  179

activity
will be
shown
Successfu
lly
|     |     | Steps 3  | User Select the  | No data  | The        | Fail  |
| --- | --- | -------- | ---------------- | -------- | ---------- | ----- |
|     |     |          | Type Empty Data  |          | message    |       |
|     |     |          | Message Option   |          | will be    |       |
|     |     |          | and type the     |          | typed Not  |       |
|     |     |          | message          |          | Successfu  |       |
lly
|     |     | Step 4  | User Use the  | Empty      | Message   | Fail  |
| --- | --- | ------- | ------------- | ---------- | --------- | ----- |
|     |     |         | send Message  | Data will  | content   |       |
|     |     |         | option        | not be     | not sent  |       |
|     |     |         |               | sent       |           |       |
|     |     |         |               |            | Successfu |       |
lly
Save Case History:
5.24: Save Case History (Success)
ID  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case           | Summary      | Steps       | Description  | Data  | Results  |     |
| -------------- | ------------ | ----------- | ------------ | ----- | -------- | --- |
| OLF24  Manage  | Objective:   | Pre-        | •  The       |       |          |     |
| Contact        | To Evaluate  | Condition:  | desired      |       |          |     |
contact
|     | the            |     |          |     |     |     |
| --- | -------------- | --- | -------- | --- | --- | --- |
|     | Functionality  |     | must be  |     |     |     |
connected
of Manage
to the
Contact
user
Activity
•  The user
must be
signed In

|     |     | Steps 1  | User Select the  | Case Menu  | Case Menu      | Pass  |
| --- | --- | -------- | ---------------- | ---------- | -------------- | ----- |
|     |     |          | Case Menu        | Option     | will be shown  |       |
to the system
Successfully
|     |     | Steps 2  | User Select the  | Case      | Case Menu       | Pass  |
| --- | --- | -------- | ---------------- | --------- | --------------- | ----- |
|     |     |          | case Requests    | Requests  | Requests        |       |
|     |     |          | Option           | Option    | option will be  |       |
shown to the
system
Successfully

https://www.c-sharpcorner.com/ebooks/  180

|     |     | Steps 3  | User Select the   | Case          | Case          | Pass  |
| --- | --- | -------- | ----------------- | ------------- | ------------- | ----- |
|     |     |          | case Requests to  | Description   | Description   |       |
|     |     |          | accept Option     | option open   | option open   |       |
|     |     |          |                   | to the user   | successfully  |       |
|     |     | Step 4   | User Select the   | case          | Contact       | Pass  |
|     |     |          | case Requests to  | Requests      | Added to      |       |
|     |     |          | accept Option     | accept        | Connects      |       |
|     |     |          |                   | Option        | To system     |       |
|     |     |          |                   | selected      | successfully  |       |
|     |     | Step 5   | User Use the      | Case          | History       | Pass  |
|     |     |          | Ongoing option    | Description   | Of Case will  |       |
|     |     |          |                   | will be       | be shown to   |       |
|     |     |          |                   | shown to      | the user      |       |
|     |     |          |                   | the user      | successfully  |       |
      Step 6  User Use the Add  Add detail  Add detail  Pass
|     |     |     | Detail Option  | Option will  | Option will  |     |
| --- | --- | --- | -------------- | ------------ | ------------ | --- |
|     |     |     |                | be shown     | be shown to  |     |
|     |     |     |                | to the user  | the user     |     |
successfully
      Step 7  User Add Detail  Information  Information  Pass
|     |     |     | and Location  | added In  | added In Case  |     |
| --- | --- | --- | ------------- | --------- | -------------- | --- |
|     |     |     |               | Case      | History        |     |
|     |     |     |               | History   | Successfully   |     |
5.24: Save Case History (Failure)
D  Test  Test Case  Test Case  Test case  Test case  Actual  Status
| Case       | Summary     | Steps  | Description  | Data  | Results  |     |
| ---------- | ----------- | ------ | ------------ | ----- | -------- | --- |
| OLF2 Manag | Objective:  | Pre-   | •  The       |       |          |     |
desired
| 4  e     | To Evaluate  | Conditio |          |     |     |     |
| -------- | ------------ | -------- | -------- | --- | --- | --- |
| Contact  | the          | n:       | contact  |     |     |     |
must be
|     | Functionality  |     |          |     |     |     |
| --- | -------------- | --- | -------- | --- | --- | --- |
|     | of Manage      |     | connecte |     |     |     |
d to the
Contact
user
Activity
•  The user
must be
signed In

|     |     | Steps 1  | User Select the  | Case Menu  | Case  | Pass  |
| --- | --- | -------- | ---------------- | ---------- | ----- | ----- |
|     |     |          | Case Menu        | Option     | Menu  |       |
will be
shown
to the
system
Successf
ully

https://www.c-sharpcorner.com/ebooks/  181

|     |     | Steps 2  | User Select the  | Case      | Case    | Pass  |
| --- | --- | -------- | ---------------- | --------- | ------- | ----- |
|     |     |          | case Requests    | Requests  | Menu    |       |
|     |     |          | Option           | Option    | Request |       |
s option
will be
shown
to the
system
Successf
ully
|     |     | Steps 3  | User Select the   | Case          | Case     | Pass  |
| --- | --- | -------- | ----------------- | ------------- | -------- | ----- |
|     |     |          | case Requests to  | Description   | Descript |       |
|     |     |          | accept Option     | option open   | ion      |       |
|     |     |          |                   | to the user   | option   |       |
open
successf
ully
|     |     | Step 4  | User Select the   | case      | Contact  | Pass  |
| --- | --- | ------- | ----------------- | --------- | -------- | ----- |
|     |     |         | case Requests to  | Requests  | Added    |       |
|     |     |         | accept Option     | accept    | to       |       |
|     |     |         |                   | Option    | Connect  |       |
|     |     |         |                   | selected  | s        |       |
To
system
successf
ully
|     |     | Step 5  | User Use the    | Case         | History   | Pass  |
| --- | --- | ------- | --------------- | ------------ | --------- | ----- |
|     |     |         | Ongoing option  | Description  | Of Case   |       |
|     |     |         |                 | will be      | will be   |       |
|     |     |         |                 | shown to     | shown     |       |
|     |     |         |                 | the user     | to the    |       |
user
successf
ully
|     |     | Step 6  | User Use the Add  | Add detail   | Add      | Fail  |
| --- | --- | ------- | ----------------- | ------------ | -------- | ----- |
|     |     |         | Detail Option     | Option will  | detail   |       |
|     |     |         |                   | be shown to  | Option   |       |
|     |     |         |                   | the user     | will be  |       |
shown
to the
user
Unsucce
ssful
|     |     | Step 7  | User Add Detail  | Information  | Informa   | Fail  |
| --- | --- | ------- | ---------------- | ------------ | --------- | ----- |
|     |     |         | and Location     | not added    | tion not  |       |
|     |     |         |                  | In Case      | added In  |       |
|     |     |         |                  | History      | Case      |       |
History
Unsucce
ssful

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |

https://www.c-sharpcorner.com/ebooks/  182

Software Quality Assurance Document
Download the document for practicing and writing the Software Quality Assurance document of
the Project.
https://github.com/SardarMudassarAliKhan/Software-Testing-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
https://www.c-sharpcorner.com/ebooks/ 183

21
Results and Discussions of
Software product
Overview
In this chapter, we will see the outcomes and discussions of Online
LawFirm, highlighting its successful functionality and user-friendly
interface. Features like registration, case submission, and
communication are examined, highlighting their effectiveness.
Moreover, future enhancements including the addition of judiciary
and Sharia systems are proposed. This chapter emphasizes the
significance of results in guiding future development cycles.
OnlineLawFirm aims to provide accessible legal assistance,
facilitating seamless interactions between clients, lawyers, and law
experts.
https://www.c-sharpcorner.com/ebooks/ 184

Introduction:
This chapter covers the results and discussions of the OnlineLawFirm and covers the possible
future enhancement related to the system.
Results and Discussions:
The proposed application OnlineLawFirm is working as expected and the functionality of the
system is according to the requirement gathered in the first phase of requirement analysis. In
OnlineLawFirm the usability is high the system will give results to the user according to the user
requirements. The Interface of the system is user-friendly users can easily use the system.
OnlineLawFirm is a Realtime android cloud-based application that changes behavior according
to the status of the user. Users can sign up according to /her status and find assistance
according to /her needs. OnlineLawFirm gives the results to users within one second. The data
of the user is saved in firebase every activity of the user is saved in firebase. OnlineLawFirm
provides a communication system through which users of the system can communicate with
each other. The system provides a Location-Sender in which specific users who have the
authorization to use this feature of the system can send a location to a user of the system. Some
of the features of the system are mentioned below and we will discuss the results of each
feature.
Features Results:
Registration of Client/Lawyer, Experts, Admin:
Registration of the users is by using the registration feature of the system through which users
can register /her account in our system. This feature provides a user-friendly interface to users
and guides how to register in the system. This feature of the system is working fine and gives
results according to the system requirement.
Manage Account:
The manage accounts feature of the system provides the functionality through which the admin
can block and unblock accounts in our system. This feature provides a user-friendly interface to
users and guides how to block and unblock the accounts in the system. This feature of the
system is working fine and gives results according to the system requirement.
Manage Contacts:
The manage contacts feature of the system provides the functionality through which users can
Manage connections in our system. This feature provides a user-friendly interface to users and
guides how to manage the contacts in the system. This feature of the system is working fine and
gives results according to the system requirement.
Submission of Cases from Clients:
Submission of the case modules provides the functionality through which users can submit the
case to lawyers or law experts. This feature provides a user-friendly interface to users and
guides how to register in the system. This feature of the system is working fine and gives results
according to the system requirement.
https://www.c-sharpcorner.com/ebooks/ 185

Verification of Cases:
Law Experts will receive the case according to their area of the field and then verify each case
after verification law expert will proceed and reject the case. This feature provides a user-
friendly interface to users and guides how to verify the case in the system. This feature of the
system is working fine and gives results according to the system requirement.
Assign the case to the lawyer:
Law Experts can assign the cases to lawyers according to their area of the field. This feature
provides the results according to the requirement of the system.
Notification system:
Law experts and lawyers send a notification to the Client law expert will receive the case
according to their area of the field and then verifies each case after verification, the law expert
will send a notification to the client, and the case is processed and rejected. This feature
provides a user-friendly interface to users and guides how to send a notification to clients
through the system. This feature of the system is working fine and gives results according to the
system requirement.
GPS Location:
The system provides the Location-Sender in which specific users who have the authorization to
use this feature of the system can send location to the user of the system. This feature provides
a user-friendly interface to users and guides how to send GPS location to clients the in system.
This feature of the system is working fine and gives results according to the system requirement.
Communication System:
OnlineLawFirm provides a communication system through which users of the system can
communicate with each other. This feature provides a user-friendly interface to users and guides
how to send messages to users in the system. This feature of the system is working fine and
gives results according to the system requirement.
Lawyers’ availability confirmation:
After receiving the notification lawyer can confirm their availability for the Case. This feature
provides a user-friendly interface to users and guides how to send messages to users in the
system. This feature of the system is working fine and gives results according to the system
requirement.
Rating System:
The system provides the Location-Sender in which specific users who have the authorization to
use this feature of the system can send location to the user of the system.
Sharing of Legal Documents:
OnlineLawFirm provides a document sharing system through which users of the system can
share the document. This feature provides a user-friendly interface to users and guides how to
share documents with users in the system. This feature of the system is working fine and gives
results according to the system requirement.
https://www.c-sharpcorner.com/ebooks/ 186

Save Case History:
OnlineLawFirm provides functionality to the user through which lawyers and law experts can
save the case proceeding each and everything is saved in case of history which is related to the
case. This feature provides a user-friendly interface to users and guides how to save the case
history of the case in the system. This feature of the system is working fine and gives results
according to the system requirement.
Future Enhancements:
At this level, OnlineLawFirm has the following Modules
• Accounts Module
• Manage Account Module
• Manage Contact Module
• Case Manager Module
• Set Rating Manager Module
• Send Notification Module
• Communication Manger Module
• Send Location Manager Module
• Confirm Availability Module
• Case History Saver Module
• Share Legal Documents Module
• Lawyer and Law-expert Promotion Module But in the future, we will increase the
functionality of the system some of them are:
o Increase the functionality by adding Judiciary System
o Increase the functionality by adding Sharia System
o Increase the functionality by adding Mobile System
Importance of Results and Discussions:
The result and discussion part are very important in development because the results are based
on the very authentic document that is prepared after the complete and various testing process
after this whole process development team start the discussion on the results and then plan the
next development cycle of the system in which we plan to develop new feature and enhance the
existing functionality of the system.
Conclusion:
This system was developed with the will to provide ease to society. We aim to help people
facing different problems by providing expert advice through our multi-client cloud-based
system. The online law firm will provide ease to access and use of online platforms for people
seeking legal help. The system will facilitate the law firm to handle these clients and allocate
lawyers to their tasks and keep track of the complete legal process (cases). The client, lawyer,
and law experts will be registered in our system. All the Interface which is necessary for the
system is completed. A menu-driven approach is used for the designing of the system. This
system was implemented successfully. The manpower needed for the working of the system is
less and it was seeming to be more secure. Thus, this system was developed successfully
https://www.c-sharpcorner.com/ebooks/ 187

Software Result and Discussion Document
Download the document for practicing and writing the Software result and discussion document
of the Project.
https://github.com/SardarMudassarAliKhan/Software-Requirement-Management-Document
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
Complete Software Specification (SRS) of the Project Document
Download the document for practicing and writing the complete SRS document of the Project.
https://github.com/SardarMudassarAliKhan/SRS-Document.git
Submit your document for feedback from our Requirement engineer at the email address
mudassarali.official@gmail.com
https://www.c-sharpcorner.com/ebooks/ 188

References:
1. https://www.softwareengineerinsider.com/
2. https://www.google.com
3. https://businessanalyst.techcanvass.com/
4. https://www.microsoft.com/en-ww/microsoft-365/visio/flowchart-software
5. https://www.microsoft.com/en-us/microsoft-365/project/project-management-software
https://www.c-sharpcorner.com/ebooks/ 189

OUR MISSION
Free Education is Our Basic Need! Our mission is to empower millions of developers worldwide by
providing the latest unbiased news, advice, and tools for learning, sharing, and career growth. We’re
passionate about nurturing the next young generation and help them not only to become great
programmers, but also exceptional human beings.
ABOUT US
CSharp Inc, headquartered in Philadelphia, PA, is an online global community of software
developers. C# Corner served 29.4 million visitors in year 2022. We publish the latest news and articles
on cutting-edge software development topics. Developers share their knowledge and connect via
content, forums, and chapters. Thousands of members benefit from our monthly events, webinars,
and conferences. All conferences are managed under Global Tech Conferences, a CSharp
Inc sister company. We also provide tools for career growth such as career advice, resume writing,
training, certifications, books and white-papers, and videos. We also connect developers with their poten-
tial employers via our Job board. Visit C# Corner
MORE BOOKS
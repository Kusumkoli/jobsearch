# JobSearch-WIT

Job Search Web Application using Node.js, Express.js, MongoDB and Ejs Templating.

Deployed on https://jobsearch-wit.herokuapp.com/

![Login Page](../master/projectscreenshots/screencapture1.png)


1. Login / Sign page based on two Roles: 
	1. Job Seeker 
	2. Recruiter 

2. Registration page  have the following fields
   ```
            a. user_id
            b. username
            c. password
            d. Email
            e. Role:
            	(i) Job Seeker
            	(ii) Recruiter
  ```         

3. Login is authenticated and the password is hashed before storing in the database

4. Home page have following menu options

              a. Search Jobs (visible to all)
              b. Your Job Postings (visible to Recruiter role)
              c. Profile

5. Search Jobs page contains a list of all job openings. Each job's details can be viewed on a separate page. User can filter jobs as per requirement using the filter form in sidebar.
            
6. Your Job Postings menu option displays the jobs which have been posted by the logged-in recruiter. These are accessed via the recruiter_id linked to each job posted.

              a. Delete Job
              b. View Job Details
              c. Add a new job

8. Logout link to redirect user to login page.

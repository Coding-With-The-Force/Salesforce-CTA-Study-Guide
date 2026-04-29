### SF Session Settings

Session settings primarily revolve around user session timeouts and the security around them. Below you'll find a list of each, what they are and when to use them.

***

### Session Timeout

**Timeout Value:** This sets the amount of time a user can be inactive in an open session before their session ends/is terminated. SF polls user activity to make this determination every 5 minutes.   

**Disable Session Timeout Warning:** Disables the popup that will show to users 30 seconds prior to their session ending.    

**Force logout on session timeout:** This causes the browser to logout of SF and return to the SF login page when your SF session ends, forcing the user to login again.  

***

### Session Settings  

**Lock sessions to the IP address from which they originated:** This is used to lock a session for a user to the original ip address their session originated from. It's helpful in preventing session hijacking, however it can cause problems if the user logs in via a variety of browsers, mobile, or other devices at the same time.  

**Lock sessions to the domain in which they were first used:** This means that if a user logins to Salesforce, their session is only valid for the SF domain they originally logged into and their session would not be valid on another domain (an experience cloud site perhaps). This helps to prevent the unauthorized use of a session id.  

**Allow employees to log in directly to an Experience Cloud site:** This setting allows internal employees to use the same credentials that they use to login to SF to login to experience cloud sites they are a member of instead of needing separate sets of login credentials.  

**Force relogin after Login-As-User:** This setting forces admins that login as a user to be logged out after logging out as that user. Suggested to be enabled to better track user activity (but it's really irritating in practice lol)  

**Require HttpOnly attribute:** Restricts access to session id cookie by making it non-accessible to javascript. This can potentially break managed packages and breaks the SF AJAX toolkit in some places so be careful.  

**Use POST requests for cross-domain sessions:** This ensures that session information is stored in the body of a request which keeps session info more secure. However this can cause images to fail to load in some situations.  

**Enforce login IP ranges on every request:** For all users that have IP restrictions, this ensures that the IP restrictions are upheld on every page request to the server, not just when they login to the org.   

**Enable caching and autocomplete on login page:** If a user selects the "remember me" checkbox with this setting enabled it will remember the users username and pre-fill it out next time they try to login to SF.

 
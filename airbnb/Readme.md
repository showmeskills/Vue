## test account introduction
# a. for host --> email:host@123.com; password:!Ab123
# b. for client --> email: test@123.com; password:!Ab123
# c. for admin --> email: admin@123.com; password:!Ab123
# there are three different role in the same login page, if you'd like to test all different roles please select relative role to login in
# all the page setting up an authorities, if you don't login so that you can't browse these pages

## the project constructure

├── backend                                         connect database api
│   ├── api                                         there are apis in order to request get,post,delete and put
│   ├── db                                          package db functions
├── fontend                                         store  front html and javascript files
│   ├──assets                                       static files e.g css,image and javascript
│   ├──components                                   there are common components for view page
│   ├──views                                        there are all views page
│   ├──Readme.md                                    this is a project handle book
│   ├──unibnb.sql                                   this is sql tables, and it includes some fake data;

# test procedures:
# a.import all sql files into mysql
# b.put all files in the xampp server(7.4.15-0) (url: XAMPP/xamppfiles/htdocs -- it is MAC IOS, if you use windows,follow your real siutations)
# c.open chrome browser(enter:localhost/502webdeveloper/frontend/views/index.html) because the project enter file is in the views index.html, if you are going to use other system to test the project in xampp, please enter going to (./views) it will automatically read index.html


## the project is using mvvm double binded data model -- javascript vue2.x frameowrk, but it can not a responsive layout and it only for PC sider
## the project is using components function in order to clearly separate view page and components page
## the project is used as a CSR (Client Sider Render) and multiple pages application, which means client side and server side is totally seperated
## advantagous
# a.it has a cleared constructor, there is no nesting data from backend
# b.it was easy to update or maintainance 
# c.reducing amount of javascript coding, and reducing to control real DOM,thus the project will improve its performance
# d. packing the same components and it is reusable
## disadvantagous
# a.the project can't render all data in frontend, and thus Web crawlers can't easily access data resources,e.g SEO (Search Engine Optimization)
# b.when frontend has a request function, it will re-repeat to request api link

## summary technologies
# a.ajax(axios) ---> for request and response with server
# b.vue2.x (javascript framework) ---> easily control vitrual Dom, reduce real DOM pressure
# c. css3,html5 ---> front end page and style
# d.php, sql sentenses ---> for request and response with database
# e.xampp assembled server environment ---> private computer server







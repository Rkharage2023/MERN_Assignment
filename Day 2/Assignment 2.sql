
INSERT INTO courses VALUES(1, "IIT-MERN-2025","MERN",4000,"2025-12-20","2026-01-20",30);
INSERT INTO courses VALUES(7, "AI","some course related to AI",10000,"2025-12-24","2026-01-24",5);
INSERT INTO courses VALUES(8, "Andriod","Andriod related course",9999,"2025-12-24","2026-01-24",7);
INSERT INTO courses VALUES(11, "python","py",10000,"2025-12-24","2026-01-24",20);

INSERT INTO students (reg_no, name, email, mobile_no, course_id, profile_pic)
VALUES (1, 'student1', 's1', '123456', 7, NULL);
INSERT INTO students (reg_no, name, email, mobile_no, course_id, profile_pic)
VALUES (3, 'student3', 's3', '123456', 8, 'IIT-MERN-2025');
INSERT INTO students (reg_no, name, email, mobile_no, course_id, profile_pic)
VALUES (6, 'student2', 's2', '123456', 11, 'IIT-MERN-2025-July');

INSERT INTO  users VALUES("s1","sunbeam1","student" );
INSERT INTO  users VALUES("s2", "sunbeam2","student");
INSERT INTO  users VALUES("s3", "sunbeam3","student");
INSERT INTO  users VALUES("a1", "admin1","admin");

INSERT INTO  videos VALUES(1,1,"Mern-vedio 1", "MERN" , "url 1","2025-11-26");
INSERT INTO  videos VALUES(2,8,"Mern-vedio 2", "AI" , "url 2","2025-11-26");
INSERT INTO  videos VALUES(3,11,"Mern-vedio 3", "Andiod" , "url 3","2025-11-26");

-- Q1 -Write a Sql query that will fetch all upcoming courses.
SELECT * 
    FROM courses 
    WHERE start_date>="2025-12-20";

-- Q2 -Write a Sql query that will fetch all the registered students along with course name
SELECT 
    s.reg_no,
    s.name,
    s.email,
    s.mobile_no,
    s.course_id,
    c.course_name 
    FROM students s 
    INNER JOIN courses c on s.course_id=c.course_id;

-- Q3 -Write an SQL query to fetch the complete details of a student (based on their email) along with the details
-- of the course they are enrolled in.
SELECT * 
    FROM students s 
    INNER JOIN courses c on s.course_id=c.course_id WHERE s.email="s1";

-- Q4 - 
SELECT 
    c.course_id,
    c.course_name,
    c.description,
    c.fees,
    c.start_date,
    c.end_date,
    v.video_id,
    v.title AS video_title,
    v.description AS video_description,
    v.youtube_url,
    v.added_at
FROM students s
JOIN courses c ON s.course_id = c.course_id
JOIN videos v ON v.course_id = c.course_id
WHERE video_expire_days>7;

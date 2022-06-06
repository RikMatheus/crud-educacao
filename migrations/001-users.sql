-- Up
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    created_at TEXT
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    tuition REAL,
    created_at TEXT
);

CREATE TABLE users_courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id),
    created_at TEXT
);

INSERT INTO users (name, email, password, created_at) VALUES ('Fulano', 'user@example.com', 'password', datetime('now'));

INSERT INTO courses (title, description, tuition, created_at) VALUES ('Introdução à Javascript', 'Curso de JS', '200', datetime('now'));

-- Down
DROP TABLE users;
DROP TABLE courses;
DROP TABLE users_courses;
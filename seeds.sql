USE musiquery;

INSERT INTO instruments (instrument_name) VALUES ('Guitar');
INSERT INTO instruments (instrument_name) VALUES ('Bass Guitar');
INSERT INTO instruments (instrument_name) VALUES ('Drums');
-- INSERT INTO instruments (instrument_name) VALUES ('Saxophone');
-- INSERT INTO instruments (instrument_name) VALUES ('Piano');
-- INSERT INTO instruments (instrument_name) VALUES ('Violin');
-- INSERT INTO instruments (instrument_name) VALUES ('Trumpet');
-- INSERT INTO instruments (instrument_name) VALUES ('Harmonica');
-- INSERT INTO instruments (instrument_name) VALUES ('Synthesizer');
-- INSERT INTO instruments (instrument_name) VALUES ('Trombone');
-- INSERT INTO instruments (instrument_name) VALUES ('Tamborine');

INSERT INTO genres (genre_name) VALUES ('Soft Rock');
INSERT INTO genres (genre_name) VALUES ('Hard Rock');
INSERT INTO genres (genre_name) VALUES ('Country');
INSERT INTO genres (genre_name) VALUES ('Blues');
INSERT INTO genres (genre_name) VALUES ('Pop');
INSERT INTO genres (genre_name) VALUES ('Heavy Metal');
INSERT INTO genres (genre_name) VALUES ('Grunge');
INSERT INTO genres (genre_name) VALUES ('R & B');
INSERT INTO genres (genre_name) VALUES ('Punk');
INSERT INTO genres (genre_name) VALUES ('Reggae');
INSERT INTO genres (genre_name) VALUES ('Alternative');

INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Gino', 'Zaccardelli', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Collin', 'Lanier', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Adam', 'Grossman', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Ryan', 'Brooks', now(), now());

INSERT INTO users (email, password, createdAt, updatedAt) VALUES ('test@test.com', 'rootroot', now(), now());
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ('example@example.com', 'rootroot', now(), now());
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ('testing@testing.com', 'rootroot', now(), now());
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ('examples@examples.com', 'rootroot', now(), now());

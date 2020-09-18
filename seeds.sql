USE musiquery;

INSERT INTO Instruments (instrument_name) VALUES ('Guitar');
INSERT INTO Instruments (instrument_name) VALUES ('Bass Guitar');
INSERT INTO Instruments (instrument_name) VALUES ('Drums');
INSERT INTO Instruments (instrument_name) VALUES ('Saxophone');
INSERT INTO Instruments (instrument_name) VALUES ('Piano');
INSERT INTO Instruments (instrument_name) VALUES ('Violin');
INSERT INTO Instruments (instrument_name) VALUES ('Trumpet');
INSERT INTO Instruments (instrument_name) VALUES ('Harmonica');
INSERT INTO Instruments (instrument_name) VALUES ('Synthesizer');
INSERT INTO Instruments (instrument_name) VALUES ('Trombone');
INSERT INTO Instruments (instrument_name) VALUES ('Tamborine');

INSERT INTO Genres (genre_name) VALUES ('Soft Rock');
INSERT INTO Genres (genre_name) VALUES ('Hard Rock');
INSERT INTO Genres (genre_name) VALUES ('Country');
INSERT INTO Genres (genre_name) VALUES ('Blues');
INSERT INTO Genres (genre_name) VALUES ('Pop');
INSERT INTO Genres (genre_name) VALUES ('Heavy Metal');
INSERT INTO Genres (genre_name) VALUES ('Grunge');
INSERT INTO Genres (genre_name) VALUES ('R & B');
INSERT INTO Genres (genre_name) VALUES ('Punk');
INSERT INTO Genres (genre_name) VALUES ('Reggae');
INSERT INTO Genres (genre_name) VALUES ('Alternative');

INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Gino', 'Zaccardelli', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Collin', 'Lanier', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Adam', 'Grossman', now(), now());
INSERT INTO artists (first_name, last_name, createdAt, updatedAt) VALUES ('Ryan', 'Brooks', now(), now());

INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('test@test.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('example@example.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('testing@testing.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('examples@examples.com', 'rootroot', now(), now());

INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());

INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());

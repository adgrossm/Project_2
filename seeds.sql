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

INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Gino ', 'Zaccardelli', "I am a bassist and wannabe pianist from Cleveland, OH. 
I've played bass since age 18 and piano for over a year. 
My communication skills are horrible and there's a good chance I won't respond to your text within 24 hours.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Kimberly', 'DeVito', "I am a 45-year-old personal trainer who enjoys spreading fake news on Facebook, theatre and running. 
I am considerate and kind, but can also be very greedy and a bit dull.
A well-known Australian Jedi, I have a degree in sports science, and am obsessed with selfies.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Elizabeth', 'Rabbit', "Elizabeth Felicity Rabbit is a 88-year-old former loser who enjoys knitting, 
travelling and cycling. I am inspiring and giving, but can also be very sadistic and a bit cowardly. Physically, Elizabeth is in pretty good shape. 
I am average-height with walnut skin, grey hair and black eyes. She has a monobrow.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Morwenna', 'Smith', "I am a 22-year-old cleaner at a studio who enjoys watching sport, 
palm reading and binge-watching boxed sets. I am brave and gentle, but can also be very sneaky and a bit evil. Physically, Morwenna is slightly overweight 
but otherwise in good shape. I am addicted to coffee, something which his friend Tatianna Faren Hale pointed out when he was 17. The problem intensified in 2018.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Andy', 'McCallister', "I am a 30-year-old government politician who enjoys bowling, 
chess and jigsaw puzzles. I am energetic and bright, but can also be very greedy and a bit unkind.
He grew up in a working class neighbourhood. His parents separated when he was small, but remained friends and provided a happy, stable home.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Rob', 'Ball', "I am a 23-year-old semi-professional sports 
person who enjoys jigsaw puzzles, playing video games and chess. I am smart and stable, but can also be very disloyal and a bit stingy.", now(), now());
INSERT INTO artists (first_name, last_name, artist_bio, createdAt, updatedAt) VALUES ('Phillip', 'Thomas', "I am a 29-year-old local activist who enjoys photography, 
big lasers and appearing in the background on TV. I am inspiring and stable, but can also be very rude and a bit selfish.", now(), now());

INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('test@test.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('example@example.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('testing@testing.com', 'rootroot', now(), now());
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ('examples@examples.com', 'rootroot', now(), now());

INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (2, 4, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (3, 5, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (4, 6, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (5, 7, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (6, 6, NOW(), NOW());
INSERT INTO artist_genre (artistId, genreId, createdAt, updatedAt) VALUES (7, 5, NOW(), NOW());

INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (1, 1, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (2, 3, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (3, 1, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (4, 6, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (5, 2, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (6, 3, NOW(), NOW());
INSERT INTO artist_instruments (artistId, instrumentId, createdAt, updatedAt) VALUES (7, 7, NOW(), NOW());

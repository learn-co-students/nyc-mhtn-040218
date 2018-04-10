# Intro to SQL

## CRUD
- create
- read
- update
- delete


1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Our relationships
Album belongs_to Artist
Artist has_many Albums

PlaylistTrack belongs_to Playlist
Playlist has_many PlaylistTracks
Playlist has_many Tracks through PlaylistTracks

PlaylistTrack belongs_to Track
Track has_many PlaylistTracks
Track has_many Playlists through PlaylistTracks

PlaylistTrack is basically the same as yesterday's ChannelMember, except in SQL not Ruby

Track belongs_to Album
Album has_many Tracks

Track belongs_to MediaType
MediaType has_many Tracks

Track belongs_to Genre
Genre has_many Tracks

## Challenges

1. Write the SQL to return all of the rows in the artists table?

  ```SQL
    select * from artists;
  ```

2. Write the SQL to select the artist with the name "Black Sabbath"

  ```SQL
    SELECT * FROM artists WHERE artists.name = "Black Sabbath"
  ```
  You can say name, not necessarily artists.name

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name field of type text

  ```sql
    CREATE TABLE IF NOT EXISTS fans (
      id INTEGER PRIMARY KEY,
      name TEXT
    );
  ```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

  ```sql
    ALTER TABLE fans ADD artist_id INTEGER;
  ```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

  ```sql
    INSERT INTO fans ("name", "artist_id") VALUES ("Rishi", 169);
  ```

  OR

  ```sql
    INSERT INTO fans ("name", "artist_id")
      VALUES ("Rishi",
          (SELECT (id)
            FROM artists
            WHERE name = "Black Eyed Peas")
      );
  ```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

  ```sql

  ```

8. Write the SQL to display an artists name next to their album title

  ```sql

  ```

9. Write the SQL to display artist name, album name and number of tracks on that album

  ```sql

  ```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

  ```sql

  ```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

  ```sql

  ```

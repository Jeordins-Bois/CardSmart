INSERT INTO users
    (profile_img, username, auth0_id, email)
VALUES
    ($1, $2, $3, $4);

SELECT *
FROM users
WHERE auth0_id = $1;
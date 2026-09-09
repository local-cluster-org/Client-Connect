import sqlite3

def find_user(username):
    conn = sqlite3.connect("users.db")

    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor = conn.execute(query)

    for row in cursor:
        print(row)

    conn.close()

username = input("Enter username: ")
find_user(username)
